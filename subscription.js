// ==========================================
// 1. SUBSCRIPTION & PAYMENT MODULE
// ==========================================
const sub = {
    
    // Show QR Code Modal
    showPaymentScreen() {
        if (auth.userData && auth.userData.subscriptionStatus === 'pro') {
            app.showToast("You are already a PRO member!", "fa-check-circle");
            return;
        }
        document.getElementById('payment-modal').classList.add('active');
    },

    // ------------------------------------------
    // DIRECT PHONEPE INTENT (UPI DEEP LINKING)
    // ------------------------------------------
    payWithPhonePe() {
        // Developer Note: Yahan 'your_upi_id@ybl' ko apne asli UPI ID se replace karein!
        const upiId = "your_upi_id@ybl"; 
        const payeeName = "DEBABRAT SWAIN";
        const amount = "499.00";
        const transactionNote = "MemoryFlip Studio Pro Upgrade";
        
        // Universal UPI link jo automatically PhonePe ya GPay khol dega
        const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(transactionNote)}`;
        
        // User ko payment app par redirect karein
        window.location.href = upiLink;
    },

    // ------------------------------------------
    // HANDLE "I HAVE PAID" BUTTON
    // ------------------------------------------
    async processPayment() {
        if (!auth.currentUser || !auth.userData) return;

        const btn = document.getElementById('btn-i-have-paid');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verifying...';
        btn.disabled = true;

        try {
            // Record payment request in Firebase
            await database.ref('payment_requests/' + auth.currentUser.uid).set({
                email: auth.userData.email,
                name: auth.userData.name,
                timestamp: new Date().toISOString(),
                status: 'paid_by_user',
                amount: '499'
            });

            // Close QR modal and Open Success Modal
            document.getElementById('payment-modal').classList.remove('active');
            document.getElementById('payment-success-modal').classList.add('active');

        } catch (error) {
            console.error("Payment Error:", error);
            app.showToast("Something went wrong. Try again.", "fa-times-circle");
        } finally {
            btn.innerHTML = '<i class="fas fa-check-circle"></i> I Have Paid';
            btn.disabled = false;
        }
    },

    // ------------------------------------------
    // BACK TO APPLICATION (BECOME PRO)
    // ------------------------------------------
    async completeUpgradeAndReturn() {
        try {
            const btn = document.querySelector('#payment-success-modal .btn-primary');
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Upgrading Account...';
            
            // 1. Update Database Status to PRO
            await database.ref('users/' + auth.currentUser.uid).update({
                subscriptionStatus: 'pro',
                subscriptionDate: new Date().toISOString()
            });
            
            // 2. Update Local User Data
            auth.userData.subscriptionStatus = 'pro';
            
            // 3. Instantly Unlock All Features globally
            sub.applyFeatureLocks();
            
            // 4. Close the Success Modal
            document.getElementById('payment-success-modal').classList.remove('active');
            
            // 5. Navigate back to Subscription Page to see "PRO Activated" status
            app.navigateTo('subscription');
            app.showToast("Congratulations! You are now a PRO member.", "fa-crown");
            
            btn.innerHTML = '<i class="fas fa-arrow-left"></i> Back to Application';

        } catch(e) {
            console.error(e);
            app.showToast("Error activating account. Refresh the page.", "fa-times");
        }
    },

    // ==========================================
    // 2. FEATURE ACCESS CONTROL (FREE vs PRO)
    // ==========================================
    applyFeatureLocks() {
        if (!auth.userData) return;

        const isPro = auth.userData.subscriptionStatus === 'pro';

        // 1. Update Profile Badges
        const badgeDisplay = document.getElementById('profile-badge-display');
        if (badgeDisplay) {
            if (isPro) {
                badgeDisplay.innerHTML = '<i class="fas fa-crown"></i> PRO MEMBER';
                badgeDisplay.style.background = 'linear-gradient(135deg, #FFD700, #FFA500)';
                badgeDisplay.style.color = '#000';
            } else {
                badgeDisplay.innerHTML = 'FREE MEMBER';
                badgeDisplay.style.background = 'linear-gradient(135deg, #bdc3c7, #95a5a6)';
                badgeDisplay.style.color = '#fff';
            }
        }

        // 2. Update Subscription Pricing Card Button
        const proCardBtn = document.querySelector('.pro-card button');
        if (proCardBtn) {
            if (isPro) {
                proCardBtn.innerHTML = '<i class="fas fa-check-circle"></i> PRO Activated';
                proCardBtn.classList.remove('btn-primary', 'pulse-animation');
                proCardBtn.classList.add('btn-success');
                proCardBtn.onclick = null; // Disable clicking again
                proCardBtn.disabled = true;
            } else {
                proCardBtn.innerHTML = '<i class="fas fa-crown"></i> Upgrade Now';
                proCardBtn.classList.remove('btn-success');
                proCardBtn.classList.add('btn-primary', 'pulse-animation');
                proCardBtn.onclick = () => sub.showPaymentScreen();
                proCardBtn.disabled = false;
            }
        }

        // 3. Lock/Unlock Premium Dropdown Options
        const selectsToLock =[
            { id: 'cover-watermark', proValues: ['false', 'custom'], default: 'true' },
            { id: 'cover-guestbook', proValues: ['true'], default: 'false' },
            { id: 'cover-bg-type', proValues: ['texture'], default: 'solid' },
            { id: 'page-bg-type', proValues: ['texture'], default: 'solid' },
            { id: 'page-scrapbook', proValues:['scratch', 'envelope', 'washi-tape', 'push-pin', 'paper-clip', 'photo-corners', 'wax-seal', 'folded-corner', 'hanging-string'], default: 'none' },
            { id: 'page-layout', proValues:['overlay-img', 'split-left', 'split-right', 'diagonal-split', 'circle-center', 'overlap-card', 'polaroid-scatter', 'letterbox', 'diamond-center', 'magazine'], default: 'top-img' }
        ];

        selectsToLock.forEach(item => {
            const el = document.getElementById(item.id);
            if (el) {
                Array.from(el.options).forEach(opt => {
                    if (item.proValues.includes(opt.value)) {
                        opt.disabled = !isPro;
                        opt.text = isPro ? opt.text.replace(' 🔒', '') : (opt.text.includes('🔒') ? opt.text : opt.text + ' 🔒');
                    }
                });

                // Reset to default if a free user somehow selected a pro feature
                if (!isPro && item.proValues.includes(el.value)) {
                    el.value = item.default;
                    if(typeof app !== 'undefined') app.updateBookData(); // Sync reset
                }
            }
        });
    }
};

// ==========================================
// 3. INTERCEPT SMART THEMES BUTTON
// ==========================================
window.addEventListener('load', () => {
    setTimeout(() => {
        if (window.app && app.applySmartTheme) {
            const originalApplyTheme = app.applySmartTheme;
            
            app.applySmartTheme = function(theme) {
                if (auth.userData?.subscriptionStatus !== 'pro' && theme !== 'minimalist') {
                    app.showToast("Premium Themes are a PRO feature. Upgrade to unlock!", "fa-crown");
                    app.navigateTo('subscription');
                    return;
                }
                originalApplyTheme.call(app, theme);
            };
        }
        if (auth.userData) sub.applyFeatureLocks();
    }, 1000);
});