// --- 30 PREMIUM CSS PATTERNS ---
const PATTERNS =[
    {id: 'stripes-v', name: 'Vertical Stripes'}, {id: 'stripes-h', name: 'Horizontal Stripes'}, {id: 'stripes-d1', name: 'Diagonal Stripes Right'}, {id: 'stripes-d2', name: 'Diagonal Stripes Left'}, {id: 'stripes-thick', name: 'Thick Stripes'}, {id: 'grid-s', name: 'Small Grid'}, {id: 'grid-m', name: 'Medium Grid'}, {id: 'grid-thick', name: 'Thick Grid'}, {id: 'dots-s', name: 'Small Polka Dots'}, {id: 'dots-m', name: 'Medium Polka Dots'}, {id: 'dots-l', name: 'Large Polka Dots'}, {id: 'checker-s', name: 'Small Checkerboard'}, {id: 'checker-m', name: 'Medium Checkerboard'}, {id: 'zigzag', name: 'ZigZag Waves'}, {id: 'bricks', name: 'Classic Bricks'}, {id: 'half-rombes', name: 'Half Rhombus'}, {id: 'cross', name: 'Cross Grid'}, {id: 'stairs', name: 'Stairs Pattern'}, {id: 'weave', name: 'Basket Weave'}, {id: 'tartan', name: 'Tartan Plaid'}, {id: 'blueprint', name: 'Blueprint Grid'}, {id: 'carbon', name: 'Carbon Fiber'}, {id: 'diagonal-checker', name: 'Diagonal Checker'}, {id: 'polka-alt', name: 'Offset Polka Dots'}, {id: 'triangles', name: 'Triangles'}, {id: 'rhombus', name: 'Rhombus Grid'}, {id: 'isometric', name: 'Isometric Cubes'}, {id: 'waves', name: 'Ocean Waves'}, {id: 'lined-paper', name: 'Lined Paper'}, {id: 'honeycomb', name: 'Honeycomb Hexagon'}
];

// --- 30 PREMIUM GOOGLE FONTS ---
const FONTS =[
    "Roboto", "Arial", "'Times New Roman'", "'Montserrat'", "'Oswald'", "'Dancing Script'", "'Pacifico'", 
    "'Abril Fatface'", "'Anton'", "'Bebas Neue'", "'Cinzel'", "'Dosis'", "'Fira Sans'", "'Inconsolata'", 
    "'Josefin Sans'", "'Lato'", "'Lobster'", "'Lora'", "'Merriweather'", "'Noto Serif'", "'Nunito'", 
    "'Open Sans'", "'Playfair Display'", "'Poppins'", "'PT Serif'", "'Quicksand'", "'Raleway'", 
    "'Righteous'", "'Titillium Web'", "'Ubuntu'"
];

// --- 30 REALISTIC TEXTURES CONFIG ---
const TEXTURES = {
    'leather': { bg: '#2c1a12', url: 'https://www.transparenttextures.com/patterns/leather.png', color: '#ffffff' },
    'vintage': { bg: '#f4e8d2', url: 'https://www.transparenttextures.com/patterns/old-wall.png', color: '#2c1a12' },
    'kraft': { bg: '#d0b48f', url: 'https://www.transparenttextures.com/patterns/cardboard-flat.png', color: '#333333' },
    'crumpled': { bg: '#ffffff', url: 'https://www.transparenttextures.com/patterns/crumpled-paper.png', color: '#000000' },
    'wood-grain': { bg: '#8B5A2B', url: 'https://www.transparenttextures.com/patterns/wood-pattern.png', color: '#ffffff' },
    'marble': { bg: '#fcfcfc', url: 'https://www.transparenttextures.com/patterns/white-marble.png', color: '#2d3436' },
    'concrete': { bg: '#95a5a6', url: 'https://www.transparenttextures.com/patterns/concrete-wall.png', color: '#ffffff' },
    'canvas': { bg: '#e8dece', url: 'https://www.transparenttextures.com/patterns/stucco.png', color: '#2c3e50' },
    'silk': { bg: '#ffb8b8', url: 'https://www.transparenttextures.com/patterns/woven.png', color: '#833471' },
    'denim': { bg: '#2980b9', url: 'https://www.transparenttextures.com/patterns/denim.png', color: '#ffffff' },
    'carbon-fiber': { bg: '#2c3e50', url: 'https://www.transparenttextures.com/patterns/carbon-fibre.png', color: '#00ffff' },
    'brushed-metal': { bg: '#bdc3c7', url: 'https://www.transparenttextures.com/patterns/brushed-alum.png', color: '#2c3e50' },
    'brick-wall': { bg: '#c0392b', url: 'https://www.transparenttextures.com/patterns/brick-wall.png', color: '#f1c40f' },
    'sandpaper': { bg: '#e67e22', url: 'https://www.transparenttextures.com/patterns/sandpaper.png', color: '#ffffff' },
    'water-ripples': { bg: '#3498db', url: 'https://www.transparenttextures.com/patterns/pool-table.png', color: '#ffffff' },
    'frost-glass': { bg: '#ecf0f1', url: 'https://www.transparenttextures.com/patterns/dust.png', color: '#2980b9' },
    'cork-board': { bg: '#d2b48c', url: 'https://www.transparenttextures.com/patterns/cork-board.png', color: '#3e2723' },
    'woven-basket': { bg: '#f39c12', url: 'https://www.transparenttextures.com/patterns/woven.png', color: '#ffffff' },
    'chalkboard': { bg: '#2c3e50', url: 'https://www.transparenttextures.com/patterns/dark-matter.png', color: '#ffffff' },
    'linen': { bg: '#ecf0f1', url: 'https://www.transparenttextures.com/patterns/linen.png', color: '#7f8c8d' },
    'rusty-metal': { bg: '#8e44ad', url: 'https://www.transparenttextures.com/patterns/purty-wood.png', color: '#f1c40f' },
    'stucco': { bg: '#f1c40f', url: 'https://www.transparenttextures.com/patterns/stucco.png', color: '#c0392b' },
    'granite': { bg: '#34495e', url: 'https://www.transparenttextures.com/patterns/rocky-wall.png', color: '#ecf0f1' },
    'watercolor': { bg: '#ff9ff3', url: 'https://www.transparenttextures.com/patterns/watercolor.png', color: '#5f27cd' },
    'gold-foil': { bg: '#f1c40f', url: 'https://www.transparenttextures.com/patterns/cubes.png', color: '#2c3e50' },
    'silver-foil': { bg: '#bdc3c7', url: 'https://www.transparenttextures.com/patterns/cubes.png', color: '#2c3e50' },
    'holo-foil': { bg: '#fd79a8', url: 'https://www.transparenttextures.com/patterns/diamonds.png', color: '#ffffff' },
    'velvet': { bg: '#833471', url: 'https://www.transparenttextures.com/patterns/fabric-plaid.png', color: '#f1c40f' },
    'snake-skin': { bg: '#27ae60', url: 'https://www.transparenttextures.com/patterns/snake-skin.png', color: '#ffffff' },
    'dragon-scale': { bg: '#c0392b', url: 'https://www.transparenttextures.com/patterns/squares-in-squares.png', color: '#f1c40f' }
};

const defStyle = () => ({
    font: 'Roboto', fill: 'solid', color: '#ffffff', g1: '#ff0000', g2: '#0000ff',
    strokeW: 0, strokeC: '#000000', shadowB: 0, shadowC: '#000000', borderS: 'none', borderW: 0, borderC: '#000000',
    align: 'center', weight: '700', style: 'normal', spacing: 0, marginTop: 0, marginBottom: 0 
});

const app = {
    state: { books:[], currentBookId: null, currentPageIndex: -1, viewerPageIndex: 0 },

    init() {
        this.initTheme();
        this.populateSelects();
        this.loadData();
    },

    populateSelects() {
        const patternHTML = PATTERNS.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
        document.getElementById('cover-bg-pattern').innerHTML = patternHTML;
        document.getElementById('page-bg-pattern').innerHTML = patternHTML;

        const fontHTML = FONTS.map(f => `<option value="${f}" style="font-family: ${f}">${f.replace(/'/g, '')}</option>`).join('');
        document.querySelectorAll('.s-font-master').forEach(select => {
            select.innerHTML = fontHTML;
        });
    },

    vibrate() { if (navigator.vibrate) navigator.vibrate(40); },

    initTheme() {
        const isDark = localStorage.getItem('memoryflip_darkmode') === 'true';
        const toggle = document.getElementById('theme-toggle');
        if (isDark) { document.body.classList.add('dark-theme'); if(toggle) toggle.checked = true; }
    },

    toggleTheme() {
        const isDark = document.body.classList.toggle('dark-theme');
        localStorage.setItem('memoryflip_darkmode', isDark);
        this.showToast(isDark ? "Dark Mode Enabled" : "Light Mode Enabled", isDark ? "fa-moon" : "fa-sun");
    },

    showToast(message, icon = "fa-info-circle") {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<i class="fas ${icon} text-primary"></i> <span>${message}</span>`;
        container.appendChild(toast);
        setTimeout(() => { if(container.contains(toast)) toast.remove(); }, 3000);
    },

    navigateTo(viewId) {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById(`view-${viewId}`).classList.add('active');
        if(viewId === 'editor' || viewId === 'viewer') document.body.classList.add('hide-bottom-nav');
        else document.body.classList.remove('hide-bottom-nav');
        document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
        const activeNav = document.querySelector(`.nav-item[onclick*="${viewId}"]`);
        if(activeNav) activeNav.classList.add('active');
        if (viewId === 'dashboard') {
            document.getElementById('dashboard-skeleton').classList.remove('hidden');
            document.getElementById('books-grid').classList.add('hidden');
            setTimeout(() => {
                document.getElementById('dashboard-skeleton').classList.add('hidden');
                document.getElementById('books-grid').classList.remove('hidden');
                this.renderDashboard();
            }, 600);
        }
    },

    loadData() {
        const saved = localStorage.getItem('memoryflip_data');
        if (saved) {
            let data = JSON.parse(saved);
            data.forEach(book => {
                if(!book.cover.bgType) book.cover.bgType = 'image';
                if(!book.cover.bgColor) book.cover.bgColor = '#000000';
                if(!book.cover.bgGradient) book.cover.bgGradient = { c1: '#ff0000', c2: '#0000ff' };
                if(!book.cover.bgPattern) book.cover.bgPattern = 'stripes-v';
                if(!book.cover.bgGradType) book.cover.bgGradType = 'linear-135';
                if(!book.cover.bgTexture) book.cover.bgTexture = 'vintage';
                if(book.cover.overlayOpacity === undefined) book.cover.overlayOpacity = 4;
                if(!book.cover.styles) book.cover.styles = { title: defStyle(), subtitle: defStyle(), author: defStyle() };
                
                if(book.cover.password === undefined) book.cover.password = '';
                if(book.cover.watermark === undefined) book.cover.watermark = 'true';
                if(book.cover.guestbook === undefined) book.cover.guestbook = 'false';
                if(!book.cover.guestbookDesign) book.cover.guestbookDesign = 'cork-yellow';
                if(!book.cover.customWatermark) book.cover.customWatermark = { text: 'My Memories', font: 'Roboto', pos: 'bottom-right', fill: 'solid', c1: '#ffffff', c2: '#aaaaaa' };['title', 'subtitle', 'author'].forEach(k => {
                    if(book.cover.styles[k].marginTop === undefined) {
                        book.cover.styles[k].marginTop = 0; book.cover.styles[k].marginBottom = 0;
                        book.cover.styles[k].align = 'center'; book.cover.styles[k].weight = '700'; book.cover.styles[k].style = 'normal'; book.cover.styles[k].spacing = 0;
                    }
                });

                book.pages.forEach(p => {
                    if(!p.imageFit) p.imageFit = 'cover';
                    if(!p.filters) p.filters = { bright: 100, contrast: 100, gray: 0, sepia: 0 };
                    if(p.imageRadius === undefined) p.imageRadius = 0;
                    if(p.imageShadow === undefined) p.imageShadow = 0;
                    
                    if(!p.frame) p.frame = 'none';
                    if(!p.particles) p.particles = 'none';
                    if(!p.layout) p.layout = 'top-img'; 
                    if(!p.scrapbook) p.scrapbook = 'none';
                    if(!p.unlockDate) p.unlockDate = '';
                    
                    if(!p.bgType) p.bgType = 'solid';
                    if(!p.bgColor) p.bgColor = '#ffffff';
                    if(!p.bgTexture) p.bgTexture = 'vintage';
                    if(!p.bgGradient) p.bgGradient = { c1: '#ffffff', c2: '#f0f0f0' };
                    if(!p.bgPattern) p.bgPattern = 'stripes-v';
                    if(!p.bgGradType) p.bgGradType = 'linear-135';

                    if(!p.styles) p.styles = { title: defStyle(), desc: defStyle(), meta: defStyle() };['title', 'desc', 'meta'].forEach(k => {
                        if(p.styles[k].marginTop === undefined) {
                            p.styles[k].marginTop = 0; p.styles[k].marginBottom = 0;
                            p.styles[k].align = 'center'; p.styles[k].weight = '700'; p.styles[k].style = 'normal'; p.styles[k].spacing = 0;
                        }
                    });
                });
            });
            this.state.books = data;
        }
    },

    saveData() {
        localStorage.setItem('memoryflip_data', JSON.stringify(this.state.books));
        const status = document.getElementById('save-status');
        if(status) { status.innerText = "Saving..."; setTimeout(() => { status.innerText = "Saved ✓"; }, 800); }
    },
    forceSave() { this.saveData(); this.showToast("Changes Saved & Applied!", "fa-check-circle"); },

    // ==========================================
    // 📦 IMPORT AND EXPORT PROJECT (.mfb)
    // ==========================================
    exportProject() {
        if (auth.userData && auth.userData.subscriptionStatus !== 'pro') {
            app.showToast("Project Backup is a PRO feature. Upgrade to unlock!", "fa-crown");
            app.navigateTo('subscription');
            this.closeModal('share-modal');
            return;
        }

        const book = this.getCurrentBook();
        if (!book) return;

        const dataStr = JSON.stringify(book);
        const blob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = (book.cover.title || "MemoryBook").replace(/[^a-z0-9]/gi, '_').toLowerCase() + ".mfb";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        this.showToast("Backup Saved! (.mfb format)", "fa-download");
        this.closeModal('share-modal');
    },

    importBook(event) {
        const file = event.target.files[0];
        if (!file) return;

        // Free Plan Check Limit
        if (auth.userData && auth.userData.subscriptionStatus !== 'pro') {
            if (this.state.books.length >= 1) {
                app.showToast("Free Plan Limit: Max 1 Book allowed. Upgrade to Pro to import more!", "fa-crown");
                app.navigateTo('subscription');
                event.target.value = ''; // Reset input
                return;
            }
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedBook = JSON.parse(e.target.result);
                
                // Validate if it is a correct book object
                if (!importedBook.cover || !importedBook.pages) {
                    throw new Error("Invalid format");
                }
                
                // Give it a fresh unique ID to prevent overwriting existing books
                importedBook.id = 'book_' + Date.now();
                
                this.state.books.push(importedBook);
                this.saveData();
                this.renderDashboard();
                this.showToast("Book Imported Successfully!", "fa-check-circle");
                
            } catch (error) {
                this.showToast("Invalid or corrupted .mfb file.", "fa-exclamation-triangle");
            }
            event.target.value = ''; // Reset input
        };
        reader.readAsText(file);
    },

    // --- 30 1-CLICK SMART THEMES ENGINE ---
    applySmartTheme(theme) {
        const book = this.getCurrentBook();
        const THEMES = {
            'romantic': { cType:'gradient', cg1:'#ff9a9e', cg2:'#fad0c4', pType:'solid', pBg:'#fff0f5', pPart:'hearts', pFrame:'polaroid', font:"'Dancing Script'", color:'#d63031' },
            'vintage': { cType:'texture', cTex:'leather', pType:'texture', pTex:'vintage', pPart:'none', pFrame:'film', font:"'Playfair Display'", color:'#2c1a12' },
            'dark-academia': { cType:'texture', cTex:'leather', pType:'texture', pTex:'chalkboard', pPart:'none', pFrame:'torn', font:"'Cinzel'", color:'#d4af37' },
            'cyberpunk': { cType:'gradient', cg1:'#000000', cg2:'#111111', pType:'texture', pTex:'carbon-fiber', pPart:'stars', pFrame:'neon', font:"'Righteous'", color:'#00ffff' },
            'minimalist': { cType:'solid', cBg:'#ffffff', pType:'solid', pBg:'#f8f9fa', pPart:'none', pFrame:'none', font:"'Montserrat'", color:'#2d3436' },
            'neon-party': { cType:'gradient', cg1:'#ff00ff', cg2:'#00ffff', pType:'solid', pBg:'#111111', pPart:'confetti', pFrame:'neon', font:"'Anton'", color:'#ff00ff' },
            'wedding-elegance': { cType:'texture', cTex:'silk', pType:'texture', pTex:'marble', pPart:'snow', pFrame:'museum', font:"'Lora'", color:'#833471' },
            'classic-noir': { cType:'solid', cBg:'#000000', pType:'solid', pBg:'#eeeeee', pPart:'none', pFrame:'film', font:"'Abril Fatface'", color:'#000000' },
            'retro-80s': { cType:'pattern', cPat:'checker-m', pType:'pattern', pPat:'zigzag', pPart:'none', pFrame:'polaroid', font:"'Bebas Neue'", color:'#e74c3c' },
            'sci-fi': { cType:'texture', cTex:'brushed-metal', pType:'texture', pTex:'carbon-fiber', pPart:'stars', pFrame:'none', font:"'Inconsolata'", color:'#00ff00' },
            'nature-bliss': { cType:'gradient', cg1:'#badc58', cg2:'#6ab04c', pType:'solid', pBg:'#f6e58d', pPart:'none', pFrame:'floral', font:"'Quicksand'", color:'#22a6b3' },
            'ocean-breeze': { cType:'texture', cTex:'water-ripples', pType:'gradient', pg1:'#82ccdd', pg2:'#60a3bc', pPart:'snow', pFrame:'watercolor', font:"'Ubuntu'", color:'#0a3d62' },
            'sunset-glow': { cType:'gradient', cg1:'#ff7e5f', cg2:'#feb47b', pType:'solid', pBg:'#fff3e0', pPart:'none', pFrame:'polaroid', font:"'Lobster'", color:'#d35400' },
            'pastel-dream': { cType:'gradient', cg1:'#a1c4fd', cg2:'#c2e9fb', pType:'solid', pBg:'#fdfbfb', pPart:'hearts', pFrame:'brush', font:"'Nunito'", color:'#b71540' },
            'gold-luxury': { cType:'texture', cTex:'gold-foil', pType:'texture', pTex:'silk', pPart:'stars', pFrame:'gold', font:"'PT Serif'", color:'#2c3e50' },
            'gothic': { cType:'texture', cTex:'velvet', pType:'texture', pTex:'granite', pPart:'none', pFrame:'burnt', font:"'Cinzel'", color:'#c0392b' },
            'space-galaxy': { cType:'gradient', cg1:'#0f2027', cg2:'#203a43', pType:'texture', pTex:'carbon-fiber', pPart:'stars', pFrame:'none', font:"'Titillium Web'", color:'#f1c40f' },
            'autumn-leaves': { cType:'texture', cTex:'wood-grain', pType:'solid', pBg:'#ffebd2', pPart:'none', pFrame:'wood', font:"'Merriweather'", color:'#d35400' },
            'winter-chill': { cType:'texture', cTex:'frost-glass', pType:'gradient', pg1:'#e0c3fc', pg2:'#8ec5fc', pPart:'snow', pFrame:'frosted', font:"'Raleway'", color:'#2980b9' },
            'spring-blossom': { cType:'solid', cBg:'#ff9a9e', pType:'solid', pBg:'#fdfbfb', pPart:'confetti', pFrame:'floral', font:"'Pacifico'", color:'#e84393' },
            'royal-purple': { cType:'gradient', cg1:'#5f27cd', cg2:'#341f97', pType:'texture', pTex:'velvet', pPart:'stars', pFrame:'gold', font:"'Josefin Sans'", color:'#f1c40f' },
            'steampunk': { cType:'texture', cTex:'rusty-metal', pType:'texture', pTex:'kraft', pPart:'none', pFrame:'stitched', font:"'Oswald'", color:'#d35400' },
            'boho-chic': { cType:'texture', cTex:'woven-basket', pType:'solid', pBg:'#f8efd4', pPart:'none', pFrame:'stamp', font:"'Lora'", color:'#cc8e35' },
            'comic-book': { cType:'pattern', cPat:'dots-m', pType:'pattern', pPat:'dots-s', pPart:'none', pFrame:'none', font:"'Bebas Neue'", color:'#e74c3c' },
            'polaroid-memories': { cType:'solid', cBg:'#bdc3c7', pType:'texture', pTex:'cork-board', pPart:'none', pFrame:'polaroid', font:"'Caveat'", color:'#2c3e50' },
            'corporate-clean': { cType:'solid', cBg:'#34495e', pType:'solid', pBg:'#ffffff', pPart:'none', pFrame:'museum', font:"'Roboto'", color:'#2980b9' },
            'art-deco': { cType:'pattern', cPat:'rhombus', pType:'texture', pTex:'marble', pPart:'stars', pFrame:'gold', font:"'Playfair Display'", color:'#f1c40f' },
            'holographic': { cType:'texture', cTex:'holo-foil', pType:'gradient', pg1:'#fbc2eb', pg2:'#a6c1ee', pPart:'stars', pFrame:'frosted', font:"'Poppins'", color:'#8e44ad' },
            'grunge': { cType:'texture', cTex:'concrete', pType:'texture', pTex:'crumpled', pPart:'none', pFrame:'burnt', font:"'Anton'", color:'#c0392b' },
            'tropical': { cType:'gradient', cg1:'#0ba360', cg2:'#3cba92', pType:'texture', pTex:'water-ripples', pPart:'none', pFrame:'wood', font:"'Ubuntu'", color:'#0a3d62' }
        };

        let conf = THEMES[theme] || THEMES['minimalist'];

        book.cover.bgType = conf.cType;
        if(conf.cTex) book.cover.bgTexture = conf.cTex;
        if(conf.cBg) book.cover.bgColor = conf.cBg;
        if(conf.cg1) { book.cover.bgGradient.c1 = conf.cg1; book.cover.bgGradient.c2 = conf.cg2; }
        if(conf.cPat) book.cover.bgPattern = conf.cPat;['title', 'subtitle', 'author'].forEach(k => {
            book.cover.styles[k].font = conf.font;
            book.cover.styles[k].fill = 'solid';
            book.cover.styles[k].color = (conf.cType === 'solid' && conf.cBg === '#ffffff') ? '#2d3436' : '#ffffff';
        });

        book.pages.forEach(p => {
            p.bgType = conf.pType;
            if(conf.pBg) p.bgColor = conf.pBg;
            if(conf.pTex) p.bgTexture = conf.pTex;
            if(conf.pg1) { p.bgGradient.c1 = conf.pg1; p.bgGradient.c2 = conf.pg2; }
            if(conf.pPat) p.bgPattern = conf.pPat;
            p.particles = conf.pPart;
            p.frame = conf.pFrame;['title', 'desc', 'meta'].forEach(k => {
                p.styles[k].font = conf.font;
                p.styles[k].fill = 'solid';
                p.styles[k].color = conf.color;
            });
        });

        this.saveData();
        this.switchEditorTab('cover');
        this.showToast(`Applied ${theme.replace('-', ' ').toUpperCase()} Theme!`, "fa-magic");
    },

    getBgCSS(type, color, g1, g2, pattern, gradType, texture) {
        if(type === 'solid') return `background-color: ${color};`;
        if(type === 'gradient') {
            const gt = gradType || 'linear-135';
            if(gt === 'linear-135') return `background: linear-gradient(135deg, ${g1}, ${g2});`;
            if(gt === 'linear-to-bottom') return `background: linear-gradient(to bottom, ${g1}, ${g2});`;
            if(gt === 'linear-to-top') return `background: linear-gradient(to top, ${g1}, ${g2});`;
            if(gt === 'linear-to-right') return `background: linear-gradient(to right, ${g1}, ${g2});`;
            if(gt === 'linear-to-left') return `background: linear-gradient(to left, ${g1}, ${g2});`;
            if(gt === 'linear-45') return `background: linear-gradient(45deg, ${g1}, ${g2});`;
            if(gt === 'radial-center') return `background: radial-gradient(circle at center, ${g1}, ${g2});`;
            if(gt === 'radial-tl') return `background: radial-gradient(circle at top left, ${g1}, ${g2});`;
            if(gt === 'radial-tr') return `background: radial-gradient(circle at top right, ${g1}, ${g2});`;
            if(gt === 'radial-bl') return `background: radial-gradient(circle at bottom left, ${g1}, ${g2});`;
            if(gt === 'radial-br') return `background: radial-gradient(circle at bottom right, ${g1}, ${g2});`;
            if(gt === 'conic-center') return `background: conic-gradient(from 0deg at center, ${g1}, ${g2}, ${g1});`;
            return `background: linear-gradient(135deg, ${g1}, ${g2});`;
        }
        if(type === 'texture') {
            const tex = TEXTURES[texture] || TEXTURES['vintage'];
            return `background-color: ${tex.bg}; background-image: url('${tex.url}'); color: ${tex.color};`;
        }
        if(type === 'pattern') {
            const c1 = g1, bg = g2; 
            switch(pattern) {
                case 'stripes-v': return `background-color: ${bg}; background-image: repeating-linear-gradient(90deg, transparent, transparent 10px, ${c1} 10px, ${c1} 20px);`;
                case 'dots-m': return `background-color: ${bg}; background-image: radial-gradient(${c1} 20%, transparent 21%), radial-gradient(${c1} 20%, transparent 21%); background-size: 30px 30px; background-position: 0 0, 15px 15px;`;
                case 'checker-m': return `background-color: ${bg}; background-image: conic-gradient(${c1} 90deg, transparent 90deg 180deg, ${c1} 180deg 270deg, transparent 270deg); background-size: 40px 40px;`;
                default: return `background-color: ${bg}; background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, ${c1} 10px, ${c1} 20px);`;
            }
        }
        return '';
    },

    renderDashboard() {
        const grid = document.getElementById('books-grid');
        grid.innerHTML = '';
        if(this.state.books.length === 0) {
            grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 40px; color:var(--text-light);"><h3>No Books Yet!</h3><p>Click 'Create Book' to start your journey.</p></div>`;
            return;
        }
        this.state.books.forEach(book => {
            let bgStyle = "";
            if(book.cover.bgType === 'image' && book.cover.image) bgStyle = `background-image: url(${book.cover.image});`;
            else bgStyle = this.getBgCSS(book.cover.bgType, book.cover.bgColor, book.cover.bgGradient.c1, book.cover.bgGradient.c2, book.cover.bgPattern, book.cover.bgGradType, book.cover.bgTexture);

            const card = document.createElement('div');
            card.className = 'book-card';
            card.innerHTML = `
                <div class="book-thumbnail" style="${bgStyle}" onclick="app.vibrate(); app.previewFromDashboard('${book.id}')">
                    ${book.cover.bgType === 'image' ? `<div style="position:absolute;inset:0;background:rgba(0,0,0,${book.cover.overlayOpacity/10});"></div>` : ''}
                    <div class="book-thumbnail-title" style="font-family: ${book.cover.styles.title.font}; font-weight: ${book.cover.styles.title.weight};">${book.cover.title || 'Untitled'}</div>
                </div>
                <h3>${book.cover.title || 'Untitled Book'}</h3>
                <p class="text-light mb-1">${book.pages.length} Pages ${book.cover.password ? '<i class="fas fa-lock text-primary" style="margin-left:5px;" title="Password Protected"></i>' : ''}</p>
                <div class="book-card-actions">
                    <button class="btn-primary ripple" onclick="app.vibrate(); app.openEditor('${book.id}')" title="Edit"><i class="fas fa-pen"></i></button>
                    <button class="btn-success ripple" onclick="app.vibrate(); app.previewFromDashboard('${book.id}')" title="Preview"><i class="fas fa-eye"></i></button>
                    <button class="btn-danger ripple" onclick="app.vibrate(); app.deleteBook('${book.id}')" title="Delete"><i class="fas fa-trash"></i></button>
                </div>
            `;
            grid.appendChild(card);
        });
    },

    previewFromDashboard(id) { this.state.currentBookId = id; this.openViewer(); },

    createNewBook() {
        if (auth.userData && auth.userData.subscriptionStatus !== 'pro') {
            if (this.state.books.length >= 1) {
                app.showToast("Free Plan Limit: Maximum 1 Book allowed. Upgrade to Pro!", "fa-crown");
                app.navigateTo('subscription');
                return;
            }
        }

        const newBook = {
            id: 'book_' + Date.now(),
            cover: { 
                title: 'My Memories', subtitle: 'A digital flipbook', author: 'Your Name', 
                image: '', bgType: 'gradient', bgColor: '#8a2be2', bgTexture: 'vintage', bgGradient: {c1: '#6c5ce7', c2: '#a29bfe'}, bgPattern: 'stripes-v', bgGradType: 'linear-135', overlayOpacity: 4,
                styles: { title: defStyle(), subtitle: defStyle(), author: defStyle() },
                password: '', watermark: 'true', guestbook: 'false', guestbookDesign: 'cork-yellow',
                customWatermark: { text: 'My Memories', font: 'Roboto', pos: 'bottom-right', fill: 'solid', c1: '#ffffff', c2: '#aaaaaa' }
            },
            pages:[]
        };
        newBook.cover.styles.title.color = '#ffffff';
        newBook.cover.styles.subtitle.color = '#ffffff';
        newBook.cover.styles.author.color = '#ffffff';
        this.state.books.push(newBook);
        this.saveData();
        this.showToast("New Memory Book Created", "fa-book");
        this.openEditor(newBook.id);
    },

    deleteBook(id) {
        if(confirm('Delete this memory book forever?')) {
            this.state.books = this.state.books.filter(b => b.id !== id);
            localStorage.removeItem('gb_'+id); 
            this.saveData();
            this.renderDashboard();
            this.showToast("Book Deleted", "fa-trash");
        }
    },

    openEditor(id) {
        this.state.currentBookId = id;
        this.navigateTo('editor');
        this.switchEditorTab('cover');
    },
    getCurrentBook() { return this.state.books.find(b => b.id === this.state.currentBookId); },

    switchEditorTab(tab) {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
        document.querySelector(`.tab[onclick*="${tab}"]`).classList.add('active');
        document.getElementById(`tab-${tab}`).classList.add('active');

        if(tab === 'cover') {
            this.state.currentPageIndex = -1;
            document.getElementById('page-editor-fields').classList.add('hidden');
            const book = this.getCurrentBook();
            document.getElementById('cover-title').value = book.cover.title;
            document.getElementById('cover-subtitle').value = book.cover.subtitle;
            document.getElementById('cover-author').value = book.cover.author;
            document.getElementById('cover-bg-type').value = book.cover.bgType;
            document.getElementById('cover-bg-texture').value = book.cover.bgTexture;
            document.getElementById('cover-bg-pattern').value = book.cover.bgPattern;
            document.getElementById('cover-bg-grad-type').value = book.cover.bgGradType;
            document.getElementById('cover-bg-color').value = book.cover.bgColor;
            document.getElementById('cover-bg-grad1').value = book.cover.bgGradient.c1;
            document.getElementById('cover-bg-grad2').value = book.cover.bgGradient.c2;
            document.getElementById('cover-overlay-op').value = book.cover.overlayOpacity;
            
            document.getElementById('cover-password').value = book.cover.password || '';
            document.getElementById('cover-watermark').value = book.cover.watermark || 'true';
            document.getElementById('cover-guestbook').value = book.cover.guestbook || 'false';
            document.getElementById('cover-guestbook-design').value = book.cover.guestbookDesign || 'cork-yellow';
            
            document.getElementById('cw-text').value = book.cover.customWatermark.text;
            document.getElementById('cw-font').value = book.cover.customWatermark.font;
            document.getElementById('cw-position').value = book.cover.customWatermark.pos;
            document.getElementById('cw-fill').value = book.cover.customWatermark.fill;
            document.getElementById('cw-color1').value = book.cover.customWatermark.c1;
            document.getElementById('cw-color2').value = book.cover.customWatermark.c2;
            
            this.toggleBgInputs('cover');
            this.loadStyleInputs('cover');
        } else {
            this.renderPagesList();
        }
        this.renderPreview();
    },

    toggleBgInputs(context) {
        const type = document.getElementById(`${context}-bg-type`).value;
        if(context === 'cover') document.getElementById('cover-bg-image-box').classList.toggle('hidden', type !== 'image');
        document.getElementById(`${context}-bg-pattern-box`).classList.toggle('hidden', type !== 'pattern');
        document.getElementById(`${context}-bg-texture-box`).classList.toggle('hidden', type !== 'texture');
        document.getElementById(`${context}-bg-grad-type-box`).classList.toggle('hidden', type !== 'gradient');
        document.getElementById(`${context}-bg-color-box`).classList.toggle('hidden', type !== 'solid');
        document.getElementById(`${context}-bg-gradient-box`).classList.toggle('hidden', type !== 'gradient' && type !== 'pattern');

        if(context === 'cover') {
            document.getElementById('custom-watermark-box').classList.toggle('hidden', document.getElementById('cover-watermark').value !== 'custom');
            document.getElementById('guestbook-design-box').classList.toggle('hidden', document.getElementById('cover-guestbook').value !== 'true');
            document.getElementById('cw-grad-box').classList.toggle('hidden', document.getElementById('cw-fill').value !== 'gradient');
        }
    },

    updateBookData() {
        const book = this.getCurrentBook();
        book.cover.title = document.getElementById('cover-title').value;
        book.cover.subtitle = document.getElementById('cover-subtitle').value;
        book.cover.author = document.getElementById('cover-author').value;
        book.cover.bgType = document.getElementById('cover-bg-type').value;
        book.cover.bgTexture = document.getElementById('cover-bg-texture').value;
        book.cover.bgPattern = document.getElementById('cover-bg-pattern').value;
        book.cover.bgGradType = document.getElementById('cover-bg-grad-type').value;
        book.cover.bgColor = document.getElementById('cover-bg-color').value;
        book.cover.bgGradient.c1 = document.getElementById('cover-bg-grad1').value;
        book.cover.bgGradient.c2 = document.getElementById('cover-bg-grad2').value;
        book.cover.overlayOpacity = document.getElementById('cover-overlay-op').value;
        book.cover.password = document.getElementById('cover-password').value;
        book.cover.watermark = document.getElementById('cover-watermark').value;
        book.cover.guestbook = document.getElementById('cover-guestbook').value;
        book.cover.guestbookDesign = document.getElementById('cover-guestbook-design').value;
        
        book.cover.customWatermark.text = document.getElementById('cw-text').value;
        book.cover.customWatermark.font = document.getElementById('cw-font').value;
        book.cover.customWatermark.pos = document.getElementById('cw-position').value;
        book.cover.customWatermark.fill = document.getElementById('cw-fill').value;
        book.cover.customWatermark.c1 = document.getElementById('cw-color1').value;
        book.cover.customWatermark.c2 = document.getElementById('cw-color2').value;

        this.toggleBgInputs('cover');
        this.saveData(); 
        this.renderPreview();
    },

    updatePageBackground() {
        if(this.state.currentPageIndex === -1) return;
        const page = this.getCurrentBook().pages[this.state.currentPageIndex];
        page.bgType = document.getElementById('page-bg-type').value;
        page.bgTexture = document.getElementById('page-bg-texture').value;
        page.bgPattern = document.getElementById('page-bg-pattern').value;
        page.bgGradType = document.getElementById('page-bg-grad-type').value;
        page.bgColor = document.getElementById('page-bg-color').value;
        page.bgGradient.c1 = document.getElementById('page-bg-grad1').value;
        page.bgGradient.c2 = document.getElementById('page-bg-grad2').value;
        this.toggleBgInputs('page');
        this.saveData();
        this.renderPreview();
    },

    updatePageFilters() {
        if(this.state.currentPageIndex === -1) return;
        const page = this.getCurrentBook().pages[this.state.currentPageIndex];
        page.filters.bright = document.getElementById('f-bright').value;
        page.filters.contrast = document.getElementById('f-contrast').value;
        page.filters.gray = document.getElementById('f-gray').value;
        page.filters.sepia = document.getElementById('f-sepia').value;
        page.imageRadius = document.getElementById('f-radius').value;
        page.imageShadow = document.getElementById('f-shadow').value;
        this.saveData();
        this.renderPreview();
    },

    updatePageData() {
        if(this.state.currentPageIndex === -1) return;
        const page = this.getCurrentBook().pages[this.state.currentPageIndex];
        page.title = document.getElementById('page-title').value;
        page.date = document.getElementById('page-date').value;
        page.place = document.getElementById('page-place').value;
        page.desc = document.getElementById('page-desc').value;
        page.mood = document.getElementById('page-mood').value;
        page.imageFit = document.getElementById('page-img-fit').value;
        page.frame = document.getElementById('page-img-frame').value;
        page.particles = document.getElementById('page-particles').value;
        page.layout = document.getElementById('page-layout').value;
        page.scrapbook = document.getElementById('page-scrapbook').value;
        page.unlockDate = document.getElementById('page-unlock-date').value;
        
        this.saveData();
        this.renderPagesList();
        this.renderPreview();
    },

    loadStyleInputs(context) { 
        const book = this.getCurrentBook();
        const tabEl = context === 'cover' ? document.getElementById('tab-cover') : document.getElementById('page-editor-fields');
        const targetKey = document.getElementById(`style-target-${context}`).value;
        const repKey = targetKey === 'all' ? 'title' : targetKey;
        let stylesObj = context === 'cover' ? book.cover.styles[repKey] : (this.state.currentPageIndex >= 0 ? book.pages[this.state.currentPageIndex].styles[repKey] : null);
        if(!stylesObj) return;

        tabEl.querySelector('.s-font').value = stylesObj.font;
        tabEl.querySelector('.s-align').value = stylesObj.align;
        tabEl.querySelector('.s-weight').value = stylesObj.weight;
        tabEl.querySelector('.s-style').value = stylesObj.style;
        tabEl.querySelector('.s-spacing').value = stylesObj.spacing;
        tabEl.querySelector('.s-margin-top').value = stylesObj.marginTop;
        tabEl.querySelector('.s-margin-bottom').value = stylesObj.marginBottom;

        tabEl.querySelector('.s-fill').value = stylesObj.fill;
        tabEl.querySelector('.s-color').value = stylesObj.color;
        tabEl.querySelector('.s-g1').value = stylesObj.g1;
        tabEl.querySelector('.s-g2').value = stylesObj.g2;
        tabEl.querySelector('.s-stroke-w').value = stylesObj.strokeW;
        tabEl.querySelector('.s-stroke-c').value = stylesObj.strokeC;
        tabEl.querySelector('.s-shadow-blur').value = stylesObj.shadowB;
        tabEl.querySelector('.s-shadow-c').value = stylesObj.shadowC;
        tabEl.querySelector('.s-border-s').value = stylesObj.borderS;
        tabEl.querySelector('.s-border-w').value = stylesObj.borderW;
        tabEl.querySelector('.s-border-c').value = stylesObj.borderC;

        tabEl.querySelector('.s-color-box').classList.toggle('hidden', stylesObj.fill === 'gradient');
        tabEl.querySelector('.s-gradient-box').classList.toggle('hidden', stylesObj.fill === 'solid');
    },

    updateStyleData(context) {
        const book = this.getCurrentBook();
        const tabEl = context === 'cover' ? document.getElementById('tab-cover') : document.getElementById('page-editor-fields');
        const targetKey = document.getElementById(`style-target-${context}`).value;
        const keys = targetKey === 'all' ? (context === 'cover' ?['title', 'subtitle', 'author'] :['title', 'desc', 'meta']) :[targetKey];

        keys.forEach(key => {
            let stylesObj = context === 'cover' ? book.cover.styles[key] : book.pages[this.state.currentPageIndex].styles[key];
            stylesObj.font = tabEl.querySelector('.s-font').value;
            stylesObj.align = tabEl.querySelector('.s-align').value;
            stylesObj.weight = tabEl.querySelector('.s-weight').value;
            stylesObj.style = tabEl.querySelector('.s-style').value;
            stylesObj.spacing = tabEl.querySelector('.s-spacing').value;
            stylesObj.marginTop = tabEl.querySelector('.s-margin-top').value;
            stylesObj.marginBottom = tabEl.querySelector('.s-margin-bottom').value;

            stylesObj.fill = tabEl.querySelector('.s-fill').value;
            stylesObj.color = tabEl.querySelector('.s-color').value;
            stylesObj.g1 = tabEl.querySelector('.s-g1').value;
            stylesObj.g2 = tabEl.querySelector('.s-g2').value;
            stylesObj.strokeW = tabEl.querySelector('.s-stroke-w').value;
            stylesObj.strokeC = tabEl.querySelector('.s-stroke-c').value;
            stylesObj.shadowB = tabEl.querySelector('.s-shadow-blur').value;
            stylesObj.shadowC = tabEl.querySelector('.s-shadow-c').value;
            stylesObj.borderS = tabEl.querySelector('.s-border-s').value;
            stylesObj.borderW = tabEl.querySelector('.s-border-w').value;
            stylesObj.borderC = tabEl.querySelector('.s-border-c').value;
        });

        tabEl.querySelector('.s-color-box').classList.toggle('hidden', tabEl.querySelector('.s-fill').value === 'gradient');
        tabEl.querySelector('.s-gradient-box').classList.toggle('hidden', tabEl.querySelector('.s-fill').value === 'solid');

        this.saveData();
        this.renderPreview();
    },

    applyStyles(context) {
        this.updateStyleData(context);
        const detailsBox = document.getElementById(`${context}-style-details`);
        if(detailsBox) detailsBox.removeAttribute("open");
        this.forceSave();
    },

    buildCSS(styleObj) {
        if(!styleObj) return "";
        let css = `font-family: ${styleObj.font}; text-align: ${styleObj.align}; font-weight: ${styleObj.weight}; font-style: ${styleObj.style}; letter-spacing: ${styleObj.spacing}px; margin-top: ${styleObj.marginTop}px; margin-bottom: ${styleObj.marginBottom}px; paint-order: stroke fill; `; 
        
        if(styleObj.fill === 'gradient') {
            css += `background: linear-gradient(45deg, ${styleObj.g1}, ${styleObj.g2}); -webkit-background-clip: text; -webkit-text-fill-color: transparent; `;
        } else {
            css += `color: ${styleObj.color}; `;
        }
        if(styleObj.strokeW > 0) css += `-webkit-text-stroke: ${styleObj.strokeW}px ${styleObj.strokeC}; `;
        if(styleObj.shadowB > 0) css += `filter: drop-shadow(2px 2px ${styleObj.shadowB}px ${styleObj.shadowC}); `;
        if(styleObj.borderS !== 'none' && styleObj.borderW > 0) {
            css += `border: ${styleObj.borderW}px ${styleObj.borderS} ${styleObj.borderC}; padding: 10px; border-radius: 8px; background: rgba(128,128,128,0.1); backdrop-filter: blur(2px); `;
        }
        return css;
    },

    renderPagesList() {
        const book = this.getCurrentBook();
        const list = document.getElementById('pages-list');
        document.getElementById('page-count').innerText = book.pages.length;
        list.innerHTML = '';
        book.pages.forEach((page, index) => {
            const item = document.createElement('div');
            item.className = `page-item ${this.state.currentPageIndex === index ? 'active' : ''}`;
            item.innerHTML = `
                <span class="page-item-title" onclick="app.vibrate(); app.selectPage(${index})">
                    ${index + 1}. ${page.title || 'Untitled Memory'}
                </span>
                <div class="page-actions">
                    <button class="btn-move" onclick="app.vibrate(); app.movePage(${index}, -1)" title="Move Up"><i class="fas fa-chevron-up"></i></button>
                    <button class="btn-move" onclick="app.vibrate(); app.movePage(${index}, 1)" title="Move Down"><i class="fas fa-chevron-down"></i></button>
                    <button class="btn-edit" onclick="app.vibrate(); app.selectPage(${index})" title="Edit Page"><i class="fas fa-pen"></i></button>
                    <button class="btn-reset" onclick="app.vibrate(); app.resetPage(${index})" title="Reset Page Design"><i class="fas fa-undo"></i></button>
                    <button class="btn-delete" onclick="app.vibrate(); app.deletePage(${index})" title="Delete Page"><i class="fas fa-trash"></i></button>
                </div>
            `;
            list.appendChild(item);
        });
    },

    movePage(index, direction) {
        const book = this.getCurrentBook();
        if (index + direction < 0 || index + direction >= book.pages.length) return;
        const temp = book.pages[index];
        book.pages[index] = book.pages[index + direction];
        book.pages[index + direction] = temp;
        if(this.state.currentPageIndex === index) this.state.currentPageIndex += direction;
        else if(this.state.currentPageIndex === index + direction) this.state.currentPageIndex -= direction;
        this.saveData();
        this.renderPagesList();
        this.renderPreview();
    },

    addMemoryPage() {
        const book = this.getCurrentBook();

        if (auth.userData && auth.userData.subscriptionStatus !== 'pro') {
            if (book.pages.length >= 3) {
                app.showToast("Free Plan Limit: Max 3 Pages allowed. Upgrade to Pro!", "fa-crown");
                app.navigateTo('subscription');
                return;
            }
        }

        let pStyleTitle = defStyle(), pStyleDesc = defStyle(), pStyleMeta = defStyle();
        book.pages.push({
            title: '', date: '', place: '', desc: '', mood: 'Happy 😊', image: '', imageFit: 'cover',
            frame: 'none', particles: 'none', layout: 'top-img', scrapbook: 'none', unlockDate: '',
            bgType: 'solid', bgColor: '#ffffff', bgTexture: 'vintage', bgGradient: {c1: '#ffffff', c2: '#f0f0f0'}, bgPattern: 'stripes-v', bgGradType: 'linear-135',
            filters: { bright: 100, contrast: 100, gray: 0, sepia: 0 }, imageRadius: 0, imageShadow: 0,
            styles: { title: pStyleTitle, desc: pStyleDesc, meta: pStyleMeta }
        });
        this.saveData();
        this.selectPage(book.pages.length - 1);
        this.showToast("New Memory Page Added", "fa-file-medical");
    },

    selectPage(index) {
        this.state.currentPageIndex = index;
        const page = this.getCurrentBook().pages[index];

        document.getElementById('page-editor-fields').classList.remove('hidden');
        document.getElementById('current-page-num').innerText = index + 1;
        document.getElementById('page-title').value = page.title;
        document.getElementById('page-date').value = page.date;
        document.getElementById('page-place').value = page.place;
        document.getElementById('page-desc').value = page.desc;
        document.getElementById('page-mood').value = page.mood;
        document.getElementById('page-img-fit').value = page.imageFit;
        
        document.getElementById('page-img-frame').value = page.frame || 'none';
        document.getElementById('page-particles').value = page.particles || 'none';
        document.getElementById('page-layout').value = page.layout || 'top-img';
        document.getElementById('page-scrapbook').value = page.scrapbook || 'none';
        document.getElementById('page-unlock-date').value = page.unlockDate || '';
        
        document.getElementById('page-bg-type').value = page.bgType;
        document.getElementById('page-bg-texture').value = page.bgTexture;
        document.getElementById('page-bg-pattern').value = page.bgPattern;
        document.getElementById('page-bg-grad-type').value = page.bgGradType;
        document.getElementById('page-bg-color').value = page.bgColor;
        document.getElementById('page-bg-grad1').value = page.bgGradient.c1;
        document.getElementById('page-bg-grad2').value = page.bgGradient.c2;

        document.getElementById('f-bright').value = page.filters.bright;
        document.getElementById('f-contrast').value = page.filters.contrast;
        document.getElementById('f-gray').value = page.filters.gray;
        document.getElementById('f-sepia').value = page.filters.sepia;
        document.getElementById('f-radius').value = page.imageRadius;
        document.getElementById('f-shadow').value = page.imageShadow;

        this.toggleBgInputs('page');
        this.loadStyleInputs('page');
        this.renderPagesList();
        this.renderPreview();
    },

    resetPage(index) {
        if(confirm("Reset this page to default design? (Your text and photo will be safe).")) {
            const book = this.getCurrentBook();
            const p = book.pages[index];
            
            p.bgType = 'solid'; p.bgColor = '#ffffff'; p.bgTexture = 'vintage'; p.bgGradient = {c1: '#ffffff', c2: '#f0f0f0'}; p.bgPattern = 'stripes-v'; p.bgGradType = 'linear-135';
            p.filters = { bright: 100, contrast: 100, gray: 0, sepia: 0 }; p.imageRadius = 0; p.imageShadow = 0;
            p.frame = 'none'; p.particles = 'none'; p.layout = 'top-img'; p.scrapbook = 'none';
            p.styles = { title: defStyle(), desc: defStyle(), meta: defStyle() };
            
            this.saveData();
            if (this.state.currentPageIndex === index) {
                this.selectPage(index); 
            } else {
                this.renderPreview();
            }
            this.showToast("Page Reset to Default", "fa-undo");
        }
    },

    deletePage(index) {
        if(index < 0 || index >= this.getCurrentBook().pages.length) return;
        if(confirm("Are you sure you want to completely delete this memory page?")) {
            const book = this.getCurrentBook();
            book.pages.splice(index, 1);
            
            if (this.state.currentPageIndex === index) {
                this.state.currentPageIndex = -1;
                this.switchEditorTab('pages');
            } else if (this.state.currentPageIndex > index) {
                this.state.currentPageIndex--;
            }
            
            this.saveData();
            this.renderPagesList();
            this.renderPreview();
            this.showToast("Page Deleted Completely", "fa-trash");
        }
    },

    getCustomWatermarkHTML(book) {
        if (book.cover.watermark !== 'custom') return '';
        const cw = book.cover.customWatermark;
        if(!cw.text) return '';
        
        let style = `font-family: ${cw.font}; `;
        if(cw.fill === 'gradient') {
            style += `background: linear-gradient(45deg, ${cw.c1}, ${cw.c2}); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight:bold;`;
        } else {
            style += `color: ${cw.c1}; font-weight:bold;`;
        }
        
        return `<div class="custom-watermark wm-pos-${cw.pos}" style="${style}">${cw.text}</div>`;
    },

    getCoverHTML(book) {
        let bgStyle = "";
        if(book.cover.bgType === 'image') bgStyle = `background-image: url(${book.cover.image || ''});`;
        else bgStyle = this.getBgCSS(book.cover.bgType, book.cover.bgColor, book.cover.bgGradient.c1, book.cover.bgGradient.c2, book.cover.bgPattern, book.cover.bgGradType, book.cover.bgTexture);

        const wm = this.getCustomWatermarkHTML(book);

        return `
            <div class="cover-layout" style="${bgStyle}">
                ${wm}
                ${book.cover.bgType === 'image' ? `<div class="cover-overlay" style="background: rgba(0,0,0,${book.cover.overlayOpacity/10});"></div>` : ''}
                <div class="cover-content flex-col">
                    <h1 class="text-style" style="${this.buildCSS(book.cover.styles.title)}">${book.cover.title || 'Title'}</h1>
                    <h3 class="text-style" style="${this.buildCSS(book.cover.styles.subtitle)}">${book.cover.subtitle || ''}</h3>
                    <p class="text-style" style="${this.buildCSS(book.cover.styles.author)}">${book.cover.author || ''}</p>
                </div>
            </div>
        `;
    },

    getPageHTML(page) {
        const book = this.getCurrentBook();
        const wm = this.getCustomWatermarkHTML(book);

        let isLocked = false;
        if(page.unlockDate) {
            const unlock = new Date(page.unlockDate);
            const today = new Date();
            if(unlock > today) isLocked = true;
        }

        let bgStyle = this.getBgCSS(page.bgType, page.bgColor, page.bgGradient.c1, page.bgGradient.c2, page.bgPattern, page.bgGradType, page.bgTexture);
        let filterStyle = `filter: brightness(${page.filters.bright}%) contrast(${page.filters.contrast}%) grayscale(${page.filters.gray}%) sepia(${page.filters.sepia}%); border-radius: ${page.imageRadius}px; box-shadow: 0px 4px ${page.imageShadow}px rgba(0,0,0,0.5);`;

        const imgTag = page.image ? `<img src="${page.image}" style="object-fit: ${page.imageFit}; ${filterStyle}">` : `<span style="color:#888; font-weight:bold; display:flex; flex-direction:column; align-items:center;"><i class="fas fa-image" style="font-size:2rem; margin-bottom:10px;"></i>No Photo</span>`;
        
        let frameHTML = imgTag;
        if(page.frame && page.frame !== 'none') {
            frameHTML = `<div class="frame-${page.frame}">${imgTag}</div>`;
        }

        let finalMediaHTML = frameHTML;
        if(page.scrapbook === 'envelope') {
            finalMediaHTML = `
                <div class="scrapbook-envelope" onclick="this.classList.toggle('active')">
                    <div class="envelope-flap"></div>
                    <div class="envelope-photo">${frameHTML}</div>
                    <div class="envelope-front"></div>
                </div>
            `;
        } else if (page.scrapbook === 'scratch') {
            finalMediaHTML = `
                <div class="scratch-container">
                    <div class="scratch-content">${frameHTML}</div>
                    <div class="scratch-overlay-fallback">Rub to Reveal</div>
                    <canvas class="scratch-canvas"></canvas>
                </div>
            `;
        } else if (page.scrapbook && page.scrapbook !== 'none') {
            finalMediaHTML = `<div class="sb-element sb-${page.scrapbook}">${frameHTML}</div>`;
        }

        const memoryHTML = `
            <div class="memory-header">
                <h3 class="text-style" style="${this.buildCSS(page.styles.title)}">${page.title || 'Memory Title'}</h3>
                <div class="page-meta text-style" style="${this.buildCSS(page.styles.meta)}">${page.date} ${page.place ? '| '+page.place : ''} ${page.mood ? '| '+page.mood : ''}</div>
            </div>
            <div class="memory-body">
                <div class="page-desc text-style" style="${this.buildCSS(page.styles.desc)}">${page.desc || 'Write your memories here...'}</div>
            </div>
        `;

        let layoutClass = page.layout || 'top-img';
        let memBgStyle = bgStyle; 
        let wrapperBgStyle = "";
        
        if (['diagonal-split', 'overlap-card', 'polaroid-scatter', 'circle-center', 'diamond-center', 'magazine'].includes(layoutClass)) {
            wrapperBgStyle = bgStyle;
            memBgStyle = "background: transparent;";
        } else if (layoutClass === 'overlay-img') {
            wrapperBgStyle = "";
            memBgStyle = ""; 
        } else if (layoutClass === 'letterbox') {
            wrapperBgStyle = bgStyle;
            memBgStyle = "background: transparent;"; 
        } else {
            wrapperBgStyle = "";
            memBgStyle = bgStyle;
        }
        
        let layoutHTML = `
            <div class="layout-wrapper layout-${layoutClass}" style="${wrapperBgStyle}">
                ${wm}
                <div class="page-photo-area">${finalMediaHTML}</div>
                <div class="page-memory-area ${layoutClass === 'overlay-img' ? 'glass-panel' : ''}" style="${memBgStyle}">${memoryHTML}</div>
            </div>
        `;

        if(isLocked) {
            return `<div class="time-capsule-lock" style="height:100%; pointer-events:none;">${layoutHTML}</div>
                    <div class="capsule-overlay"><i class="fas fa-lock"></i><h2>Time Capsule</h2><p>Unlocks on<br>${page.unlockDate}</p></div>`;
        }
        return layoutHTML;
    },

    renderPreview() {
        const book = this.getCurrentBook();
        const container = document.getElementById('live-preview-container');
        let htmlContent = this.state.currentPageIndex === -1 ? this.getCoverHTML(book) : this.getPageHTML(book.pages[this.state.currentPageIndex]);
        container.innerHTML = `<div class="preview-page">${htmlContent}</div>`;
        this.initScratchCards();
    },

    handleImageUpload(event, type) {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const MAX_DIM = 800; 
                let w = img.width, h = img.height;
                if (w > h && w > MAX_DIM) { h *= MAX_DIM / w; w = MAX_DIM; } 
                else if (h > MAX_DIM) { w *= MAX_DIM / h; h = MAX_DIM; }

                canvas.width = w; canvas.height = h;
                canvas.getContext('2d').drawImage(img, 0, 0, w, h);
                
                const book = this.getCurrentBook();
                if (type === 'cover') {
                    book.cover.image = canvas.toDataURL('image/jpeg', 0.6);
                    document.getElementById('cover-bg-type').value = 'image';
                    this.updateBookData();
                } else {
                    book.pages[this.state.currentPageIndex].image = canvas.toDataURL('image/jpeg', 0.6);
                    this.updatePageData();
                }
                this.showToast("Image Uploaded", "fa-image");
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    },

    startParticles(type) {
        let container = document.getElementById('particle-container');
        if(!container) {
            container = document.createElement('div');
            container.id = 'particle-container';
            container.className = 'particle-container';
            document.getElementById('view-viewer').appendChild(container);
        }
        container.innerHTML = '';
        if(!type || type === 'none') return;
        
        const emojis = { hearts:['❤️','💖','💕'], snow:['❄️','🌨️','🤍'], confetti:['🎉','🎊','🎈'], stars:['✨','⭐','🌟'] };
        const arr = emojis[type];
        
        for(let i=0; i<35; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            p.innerText = arr[Math.floor(Math.random() * arr.length)];
            p.style.left = Math.random() * 100 + '%';
            p.style.fontSize = (Math.random() * 1.5 + 0.8) + 'rem';
            p.style.animationDuration = (Math.random() * 3 + 2.5) + 's';
            p.style.animationDelay = (Math.random() * 2) + 's';
            container.appendChild(p);
        }
    },

    initScratchCards() {
        setTimeout(() => {
            document.querySelectorAll('.scratch-canvas').forEach(canvas => {
                if(canvas.dataset.initialized) return;
                canvas.dataset.initialized = "true";
                
                const ctx = canvas.getContext('2d');
                const parent = canvas.parentElement;
                canvas.width = parent.offsetWidth;
                canvas.height = parent.offsetHeight;
                
                let gradient = ctx.createLinearGradient(0,0, canvas.width, canvas.height);
                gradient.addColorStop(0, "#bdc3c7");
                gradient.addColorStop(1, "#95a5a6");
                ctx.fillStyle = gradient;
                ctx.fillRect(0,0, canvas.width, canvas.height);
                
                ctx.font = "bold 20px sans-serif";
                ctx.fillStyle = "#ffffff";
                ctx.textAlign = "center";
                ctx.fillText("Rub to Reveal ✨", canvas.width/2, canvas.height/2);

                let isDrawing = false;
                const getCoords = (e) => {
                    const rect = canvas.getBoundingClientRect();
                    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
                    const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;
                    return {x, y};
                };

                const scratch = (e) => {
                    if(!isDrawing) return;
                    e.preventDefault();
                    const {x, y} = getCoords(e);
                    ctx.globalCompositeOperation = 'destination-out';
                    ctx.beginPath();
                    ctx.arc(x, y, 25, 0, Math.PI * 2);
                    ctx.fill();
                };

                canvas.addEventListener('mousedown', () => isDrawing = true);
                canvas.addEventListener('touchstart', (e) => { isDrawing = true; scratch(e); });
                window.addEventListener('mouseup', () => isDrawing = false);
                window.addEventListener('touchend', () => isDrawing = false);
                canvas.addEventListener('mousemove', scratch);
                canvas.addEventListener('touchmove', scratch);
            });
        }, 100);
    },

    openViewer() {
        const book = this.getCurrentBook();
        
        if(book.cover.password && book.cover.password.trim() !== "") {
            const pwd = prompt("🔒 This memory book is protected. Enter password:");
            if(pwd !== book.cover.password) { alert("Incorrect Password!"); return; }
        }

        this.navigateTo('viewer');
        
        this.state.viewerPageIndex = 0;
        const container = document.getElementById('flipbook-container');
        container.innerHTML = '';
        let zIndexCounter = book.pages.length + 15;
        
        container.appendChild(this.createFlipSheet(this.getCoverHTML(book), 0, zIndexCounter--, book));
        
        book.pages.forEach((page, i) => { 
            container.appendChild(this.createFlipSheet(this.getPageHTML(page), i + 1, zIndexCounter--, book)); 
        });

        if(book.cover.guestbook === 'true') {
            const themeClass = `gb-theme-${book.cover.guestbookDesign || 'cork-yellow'}`;
            const wm = this.getCustomWatermarkHTML(book);
            const guestbookHTML = `
                <div class="guestbook-container ${themeClass}">
                    ${wm}
                    <h2 class="guestbook-title">Guestbook</h2>
                    <div id="gb-notes-area" style="position:absolute; inset:0; z-index:5; pointer-events:none;"></div>
                    <div class="guestbook-input-area">
                        <input type="text" id="gb-input" placeholder="Leave a memory note..." maxlength="60">
                        <button class="btn-primary" onclick="app.addGuestbookNote('${book.id}')"><i class="fas fa-paper-plane"></i></button>
                    </div>
                </div>
            `;
            container.appendChild(this.createFlipSheet(guestbookHTML, book.pages.length + 1, zIndexCounter--, book));
            setTimeout(() => this.renderGuestbookNotes(book.id), 200);
        }
        
        this.updateViewerUI();
        this.initScratchCards();
    },

    addGuestbookNote(bookId) {
        const input = document.getElementById('gb-input');
        const text = input.value.trim();
        if(!text) return;
        let notes = JSON.parse(localStorage.getItem('gb_'+bookId) || '[]');
        notes.push(text);
        localStorage.setItem('gb_'+bookId, JSON.stringify(notes));
        input.value = '';
        this.renderGuestbookNotes(bookId);
    },

    renderGuestbookNotes(bookId) {
        const area = document.getElementById('gb-notes-area');
        if(!area) return;
        area.innerHTML = '';
        let notes = JSON.parse(localStorage.getItem('gb_'+bookId) || '[]');
        notes.forEach((note, i) => {
            const div = document.createElement('div');
            div.className = 'sticky-note';
            const top = 15 + Math.random() * 50;
            const left = 5 + Math.random() * 60;
            const rot = -10 + Math.random() * 20;
            div.style.top = `${top}%`;
            div.style.left = `${left}%`;
            div.style.transform = `rotate(${rot}deg)`;
            div.style.animationDelay = `${i * 0.1}s`;
            div.innerHTML = `<span style="font-size:1.1rem;">${note}</span><span style="font-size:0.7rem; opacity:0.7; text-align:right;">- Guest</span>`;
            area.appendChild(div);
        });
    },

    closeViewer() {
        this.startParticles('none');
        this.navigateTo('editor');
    },

    createFlipSheet(frontHTML, index, zIndex, book) {
        const sheet = document.createElement('div');
        sheet.className = 'flip-page';
        sheet.dataset.index = index;
        sheet.style.zIndex = zIndex;
        
        let backHTML = '';
        if (book.cover.watermark === 'true') {
            backHTML = `<div style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; color:var(--text-light); opacity:0.6;">
                          <i class="fas fa-book-open" style="font-size:2rem; margin-bottom:10px;"></i>
                          <div style="font-weight:bold; font-size:1.4rem;">MemoryFlip<span style="font-size:0.7rem; vertical-align:top;">Ultra</span></div>
                       </div>`;
        } else if (book.cover.watermark === 'custom') {
            backHTML = `<div style="width:100%; height:100%; background:var(--bg-color); position:relative;">${this.getCustomWatermarkHTML(book)}</div>`;
        } else {
            backHTML = `<div style="width:100%; height:100%; background:var(--bg-color);"></div>`;
        }

        sheet.innerHTML = `<div class="flip-front">${frontHTML}</div><div class="flip-back">${backHTML}</div>`;
        return sheet;
    },

    flipPage(dir) {
        const book = this.getCurrentBook();
        const totalSheets = book.pages.length + (book.cover.guestbook === 'true' ? 2 : 1);
        const sheets = document.querySelectorAll('.flip-page');
        
        if (dir === 'next' && this.state.viewerPageIndex < totalSheets) {
            const sheet = Array.from(sheets).find(s => parseInt(s.dataset.index) === this.state.viewerPageIndex);
            if(sheet) { sheet.classList.add('flipped'); setTimeout(() => sheet.style.zIndex = this.state.viewerPageIndex, 450); }
            this.state.viewerPageIndex++;
        } 
        else if (dir === 'prev' && this.state.viewerPageIndex > 0) {
            this.state.viewerPageIndex--;
            const sheet = Array.from(sheets).find(s => parseInt(s.dataset.index) === this.state.viewerPageIndex);
            if(sheet) { sheet.classList.remove('flipped'); sheet.style.zIndex = totalSheets + 15 - this.state.viewerPageIndex; }
        }
        this.updateViewerUI();
    },

    updateViewerUI() {
        const book = this.getCurrentBook();
        const total = book.pages.length + (book.cover.guestbook === 'true' ? 1 : 0);
        document.getElementById('viewer-page-counter').innerText = this.state.viewerPageIndex === 0 ? "Cover" : `${this.state.viewerPageIndex} / ${total}`;
        
        if(this.state.viewerPageIndex === 0 || this.state.viewerPageIndex > book.pages.length) {
            this.startParticles('none');
        } else {
            const currentPage = book.pages[this.state.viewerPageIndex - 1];
            if(currentPage) this.startParticles(currentPage.particles);
        }
    },

    openExportModal() {
        document.getElementById('share-modal').classList.add('active');
        const link = `https://memoryflip.studio/book/${this.state.currentBookId}`;
        document.getElementById('share-link').value = link;
        document.getElementById('qr-code-img').src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(link)}&color=6c5ce7&bgcolor=ffffff`;
        document.getElementById('qr-code-box').classList.remove('hidden');
    },
    
    openShareModal() { this.openExportModal(); },
    closeModal(id) { document.getElementById(id).classList.remove('active'); },
    copyShareLink() { navigator.clipboard.writeText(document.getElementById('share-link').value); this.showToast("Link Copied!", "fa-copy"); },

    shareWhatsApp() {
        const link = document.getElementById('share-link').value;
        const book = this.getCurrentBook();
        const text = `Check out my Memory Book: *${book.cover.title}* 📖✨\n\nOpen it here: ${link}`;
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
    },

    // ==========================================
    // 🖨️ DEDICATED EXPORT ENGINE (PDF & MFB)
    // ==========================================
    exportAsPDF() {
        this.closeModal('share-modal');
        this.showToast("Preparing PDF Print Engine...", "fa-cog fa-spin");
        
        const book = this.getCurrentBook();
        const printContainer = document.getElementById('print-container');
        printContainer.innerHTML = '';
        
        // Render 2D Straight Pages for PDF Print
        const coverDiv = document.createElement('div');
        coverDiv.className = 'print-page';
        coverDiv.innerHTML = this.getCoverHTML(book);
        printContainer.appendChild(coverDiv);
        
        book.pages.forEach(page => {
            const pageDiv = document.createElement('div');
            pageDiv.className = 'print-page';
            pageDiv.innerHTML = this.getPageHTML(page);
            printContainer.appendChild(pageDiv);
        });
        
        if(book.cover.guestbook === 'true') {
            const gbDiv = document.createElement('div');
            gbDiv.className = 'print-page guestbook-container gb-theme-' + (book.cover.guestbookDesign || 'cork-yellow');
            const wm = this.getCustomWatermarkHTML(book);
            gbDiv.innerHTML = `${wm}<h2 class="guestbook-title">Guestbook</h2><div id="print-gb-notes" style="position:relative; width:100%; height:100%;"></div>`;
            printContainer.appendChild(gbDiv);
            
            setTimeout(() => {
                const notesArea = document.getElementById('print-gb-notes');
                if(notesArea) {
                    let notes = JSON.parse(localStorage.getItem('gb_' + book.id) || '[]');
                    notes.forEach((note, i) => {
                        const div = document.createElement('div');
                        div.className = 'sticky-note';
                        const top = 15 + (i * 12) % 50;
                        const left = 5 + (i * 17) % 60;
                        const rot = -8 + (i * 5) % 16;
                        div.style.top = `${top}%`;
                        div.style.left = `${left}%`;
                        div.style.transform = `rotate(${rot}deg)`;
                        div.innerHTML = `<span style="font-size:1rem;">${note}</span><span style="font-size:0.65rem; opacity:0.7; display:block; text-align:right; margin-top:4px;">- Guest</span>`;
                        notesArea.appendChild(div);
                    });
                }
            }, 100);
        }

        // Wait for all content to render, then trigger print
        setTimeout(() => {
            printContainer.classList.add('print-mode');
            window.print();
            setTimeout(() => {
                printContainer.classList.remove('print-mode');
                printContainer.innerHTML = '';
                this.showToast("PDF Export Complete!", "fa-check-circle");
            }, 1000);
        }, 600);
    },

    // ==========================================
    // 📤 DUPLICATE-FREE SHARE & EXPORT HELPERS
    // ==========================================
    duplicateBook() {
        const book = this.getCurrentBook();
        if (!book) return;

        if (auth.userData && auth.userData.subscriptionStatus !== 'pro') {
            if (this.state.books.length >= 1) {
                app.showToast("Free Plan Limit: Max 1 Book. Upgrade to Pro!", "fa-crown");
                app.navigateTo('subscription');
                return;
            }
        }

        const clone = JSON.parse(JSON.stringify(book));
        clone.id = 'book_' + Date.now();
        clone.cover.title = (clone.cover.title || 'Untitled') + ' (Copy)';
        this.state.books.push(clone);
        this.saveData();
        this.renderDashboard();
        this.showToast("Book Duplicated!", "fa-copy");
        this.closeModal('share-modal');
    },

    // ==========================================
    // 🎨 AI CAPTION GENERATOR (PRO)
    // ==========================================
    generateAICaption() {
        if (auth.userData && auth.userData.subscriptionStatus !== 'pro') {
            app.showToast("AI Captions is a PRO feature. Upgrade to unlock!", "fa-crown");
            app.navigateTo('subscription');
            return;
        }
        if(this.state.currentPageIndex === -1) {
            this.showToast("Please select a page first!", "fa-exclamation-circle");
            return;
        }
        const page = this.getCurrentBook().pages[this.state.currentPageIndex];
        const mood = page.mood || 'Happy';
        const place = page.place || 'somewhere special';
        const date = page.date || 'a memorable day';
        
        const captions = [
            `A ${mood.toLowerCase()} moment captured at ${place} on ${date} — forever etched in memory. 💖`,
            `Every detail of ${place} on ${date} tells a story worth remembering. ✨`,
            `${mood} vibes at ${place}. These are the moments we live for. 🌟`,
            `Time stood still at ${place} on ${date}. Pure ${mood.toLowerCase()} magic. 🎉`,
            `Memories made at ${place} — the kind that never fade. 💫`
        ];
        
        const randomCaption = captions[Math.floor(Math.random() * captions.length)];
        document.getElementById('page-desc').value = randomCaption;
        page.desc = randomCaption;
        this.saveData();
        this.renderPreview();
        this.showToast("AI Caption Generated!", "fa-magic");
    },

    // ==========================================
    // 🔢 PAGE JUMP / NAVIGATION
    // ==========================================
    jumpToPage(pageNum) {
        const book = this.getCurrentBook();
        const total = book.pages.length + (book.cover.guestbook === 'true' ? 1 : 0);
        const target = parseInt(pageNum);
        if(isNaN(target) || target < 0 || target > total) return;

        const sheets = document.querySelectorAll('.flip-page');
        sheets.forEach(sheet => {
            const idx = parseInt(sheet.dataset.index);
            if(idx < target) {
                sheet.classList.add('flipped');
                sheet.style.zIndex = idx;
            } else {
                sheet.classList.remove('flipped');
                sheet.style.zIndex = (book.pages.length + 15) - idx;
            }
        });

        this.state.viewerPageIndex = target;
        this.updateViewerUI();
    },

    // ==========================================
    // 🔒 FULLSCREEN TOGGLE
    // ==========================================
    toggleFullscreen() {
        const viewerEl = document.getElementById('view-viewer');
        if (!document.fullscreenElement) {
            viewerEl.requestFullscreen().catch(err => {
                this.showToast("Fullscreen not supported.", "fa-exclamation-triangle");
            });
        } else {
            document.exitFullscreen();
        }
    },

    // ==========================================
    // 🎲 RANDOM THEME PICKER
    // ==========================================
    applyRandomTheme() {
        const themeKeys = [
            'romantic','vintage','dark-academia','cyberpunk','minimalist','neon-party',
            'wedding-elegance','classic-noir','retro-80s','sci-fi','nature-bliss',
            'ocean-breeze','sunset-glow','pastel-dream','gold-luxury','gothic',
            'space-galaxy','autumn-leaves','winter-chill','spring-blossom','royal-purple',
            'steampunk','boho-chic','comic-book','polaroid-memories','corporate-clean',
            'art-deco','holographic','grunge','tropical'
        ];
        const randomTheme = themeKeys[Math.floor(Math.random() * themeKeys.length)];
        this.applySmartTheme(randomTheme);
    },

    // ==========================================
    // 📊 BOOK STATS
    // ==========================================
    getBookStats() {
        const book = this.getCurrentBook();
        if(!book) return;
        const pageCount = book.pages.length;
        const photoCount = book.pages.filter(p => p.image && p.image !== '').length;
        const wordCount = book.pages.reduce((total, p) => {
            return total + ((p.desc || '').split(/\s+/).filter(w => w.length > 0).length);
        }, 0);
        const hasPassword = book.cover.password ? 'Yes 🔒' : 'No';
        const hasGuestbook = book.cover.guestbook === 'true' ? 'Yes 📝' : 'No';
        
        return { pageCount, photoCount, wordCount, hasPassword, hasGuestbook };
    },

    showBookStats() {
        const stats = this.getBookStats();
        if(!stats) return;
        const msg = `📊 Book Stats:\n\n📄 Pages: ${stats.pageCount}\n📸 Photos: ${stats.photoCount}\n📝 Words: ${stats.wordCount}\n🔒 Password: ${stats.hasPassword}\n📋 Guestbook: ${stats.hasGuestbook}`;
        alert(msg);
    }

};

// ==========================================
// 🚀 APP INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
