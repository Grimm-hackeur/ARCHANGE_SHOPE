// Données des produits - FACILE À MODIFIER !
const toolsData = [
    {
        id: 1,
        name: "Bot Discord Pro",
        price: "29.99€",
        description: "Automatisation complète de votre serveur avec modération avancée",
        image: "https://files.catbox.moe/abc123.jpg", // Remplacez par vos liens Catbox
        features: ["Modération auto", "Commandes custom", "Rôles automatiques", "Logs détaillés"]
    },
    {
        id: 2,
        name: "Suite Instagram",
        price: "19.99€",
        description: "Gestion multi-comptes et automatisation des posts",
        image: "https://files.catbox.moe/def456.jpg",
        features: ["Multi-comptes", "Auto-posting", "Analytics", "Gestion comments"]
    },
    {
        id: 3,
        name: "Bot Twitter Enterprise",
        price: "24.99€",
        description: "Automatisation intelligente et gestion de communauté",
        image: "https://files.catbox.moe/ghi789.jpg",
        features: ["Auto-tweets", "Analytics", "Gestion followers", "Rapports détaillés"]
    },
    {
        id: 4,
        name: "SEO Master Suite",
        price: "39.99€",
        description: "Analyse complète et optimisation automatique SEO",
        image: "https://files.catbox.moe/jkl012.jpg",
        features: ["Analyse mots-clés", "Tracking positions", "Rapports automatiques", "Optimisation"]
    }
];

const panelsData = [
    {
        id: 1,
        name: "Starter Cloud",
        storage: "1GB",
        price: "5€/mois",
        image: "https://files.catbox.moe/panel1.jpg",
        features: ["1GB Stockage SSD", "1 Base de données", "Support 24/7", "Backup quotidien"]
    },
    {
        id: 2,
        name: "Business Cloud",
        storage: "5GB",
        price: "15€/mois",
        image: "https://files.catbox.moe/panel2.jpg",
        features: ["5GB Stockage SSD", "5 Bases de données", "Support prioritaire", "Backup auto"]
    },
    {
        id: 3,
        name: "Enterprise Cloud",
        storage: "10GB",
        price: "25€/mois",
        image: "https://files.catbox.moe/panel3.jpg",
        features: ["10GB Stockage NVMe", "Bases illimitées", "Support dédié", "SSL inclus"]
    },
    {
        id: 4,
        name: "Elite Unlimited",
        storage: "Illimité",
        price: "50€/mois",
        image: "https://files.catbox.moe/panel4.jpg",
        features: ["Stockage illimité", "Ressources dédiées", "Support VIP 24/7", "Toutes features"]
    }
];

// Fonction pour afficher les outils
function displayTools() {
    const toolsGrid = document.getElementById('toolsGrid');
    if (!toolsGrid) return;

    toolsGrid.innerHTML = toolsData.map(tool => `
        <div class="product-card fade-in">
            <div class="product-image">
                <img src="${tool.image}" alt="${tool.name}" onerror="this.style.display='none'; this.parentNode.innerHTML='<i class=\"fab fa-${getToolIcon(tool.name)}\"></i>';">
            </div>
            <div class="product-info">
                <h3>${tool.name}</h3>
                <p>${tool.description}</p>
                <div class="product-price">${tool.price}</div>
                <ul class="features-list">
                    ${tool.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <button class="btn" onclick="buyProduct('${tool.name}', '${tool.price}')" style="width: 100%; justify-content: center;">
                    <i class="fas fa-shopping-cart"></i> Acheter Maintenant
                </button>
            </div>
        </div>
    `).join('');
}

// Fonction pour afficher les panels
function displayPanels() {
    const panelsGrid = document.getElementById('panelsGrid');
    if (!panelsGrid) return;

    panelsGrid.innerHTML = panelsData.map(panel => `
        <div class="product-card fade-in">
            <div class="product-image">
                <img src="${panel.image}" alt="${panel.name}" onerror="this.style.display='none'; this.parentNode.innerHTML='<i class=\"fas fa-server\"></i>';">
            </div>
            <div class="product-info">
                <h3>${panel.name}</h3>
                <div class="product-price">${panel.price}</div>
                <ul class="features-list">
                    ${panel.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <button class="btn" onclick="buyProduct('${panel.name}', '${panel.price}')" style="width: 100%; justify-content: center;">
                    <i class="fas fa-check"></i> Choisir l'Offre
                </button>
            </div>
        </div>
    `).join('');
}

// Helper pour les icônes
function getToolIcon(toolName) {
    const icons = {
        'Discord': 'discord',
        'Instagram': 'instagram',
        'Twitter': 'twitter',
        'SEO': 'chart-line'
    };
    
    for (const [key, value] of Object.entries(icons)) {
        if (toolName.includes(key)) return value;
    }
    return 'robot';
}

// Fonction d'achat
function buyProduct(productName, price) {
    const message = `🛍️ Bonjour TechShop Pro !\n\nJe souhaite acheter :\n**${productName}**\nPrix : ${price}\n\nPouvez-vous me guider pour la suite ?`;
    const whatsappUrl = `https://wa.me/50947118426?text=${encodeURIComponent(message)}`;
    
    if (confirm(`🎯 Confirmer l'achat\n\nProduit: ${productName}\nPrix: ${price}\n\nVous serez redirigé vers WhatsApp.`)) {
        window.open(whatsappUrl, '_blank');
    }
}

// Chargement initial
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('tools.html')) {
        displayTools();
    }
    if (window.location.pathname.includes('panels.html')) {
        displayPanels();
    }
});