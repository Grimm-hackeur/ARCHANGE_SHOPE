// Données de contact
const contactData = {
    platforms: [
        {
            name: "WhatsApp Business",
            handle: "+33 6 12 34 56 78",
            icon: "fab fa-whatsapp",
            url: "https://wa.me/33612345678",
            description: "Réponse instantanée",
            color: "#25D366"
        },
        {
            name: "Telegram",
            handle: "@techshoppro",
            icon: "fab fa-telegram",
            url: "https://t.me/techshoppro",
            description: "Support technique",
            color: "#0088CC"
        },
        {
            name: "Email Professionnel",
            handle: "contact@techshoppro.com",
            icon: "fas fa-envelope",
            url: "mailto:contact@techshoppro.com",
            description: "Réponse sous 2h",
            color: "#EA4335"
        },
        {
            name: "Discord Community",
            handle: "techshop.pro",
            icon: "fab fa-discord",
            url: "https://discord.gg/techshop",
            description: "Communauté active",
            color: "#5865F2"
        }
    ],
    about: [
        {
            icon: "fas fa-star",
            title: "Expertise technique",
            description: "Une équipe de développeurs passionnés",
            color: "#f59e0b"
        },
        {
            icon: "fas fa-shield-alt",
            title: "Sécurité maximale",
            description: "Vos données sont protégées",
            color: "#6366f1"
        },
        {
            icon: "fas fa-bolt",
            title: "Performance optimale",
            description: "Solutions haut débit",
            color: "#06b6d4"
        },
        {
            icon: "fas fa-users",
            title: "Support humain",
            description: "Jamais de réponses automatiques",
            color: "#f59e0b"
        }
    ]
};

// Fonction pour afficher les plateformes de contact
function displayContactPlatforms() {
    const platformsContainer = document.getElementById('platformsContainer');
    if (!platformsContainer) return;

    platformsContainer.innerHTML = contactData.platforms.map(platform => `
        <div class="platform-card fade-in" onclick="contactPlatform('${platform.name}', '${platform.url}')" 
             style="border-left: 4px solid ${platform.color}; cursor: pointer;">
            <div class="platform-icon" style="color: ${platform.color}">
                <i class="${platform.icon}"></i>
            </div>
            <h3>${platform.name}</h3>
            <p>${platform.handle}</p>
            <small style="color: ${platform.color}; font-weight: 500;">${platform.description}</small>
        </div>
    `).join('');
}

// Fonction pour afficher la section about
function displayAboutSection() {
    const aboutContainer = document.getElementById('aboutContainer');
    if (!aboutContainer) return;

    aboutContainer.innerHTML = `
        <div class="about-section fade-in">
            ${contactData.about.map(item => `
                <p style="line-height: 1.8; margin-bottom: 1.5rem; font-size: 1.1rem;">
                    <i class="${item.icon}" style="color: ${item.color};"></i>
                    <strong>${item.title}</strong> - ${item.description}
                </p>
            `).join('')}
            <div style="text-align: center; margin-top: 2rem;">
                <a href="index.html" class="btn" style="justify-content: center;">
                    <i class="fas fa-home"></i> Retour à l'Accueil
                </a>
            </div>
        </div>
    `;
}

// Fonction de contact par plateforme
function contactPlatform(platformName, platformUrl) {
    let message = "";
    
    switch(platformName) {
        case "WhatsApp Business":
            message = "👋 Bonjour TechShop Pro !\n\nJe suis intéressé(e) par vos services et j'aimerais en savoir plus.";
            window.open(`${platformUrl}?text=${encodeURIComponent(message)}`, '_blank');
            break;
            
        case "Telegram":
            message = "Bonjour ! Je viens de votre site TechShop Pro et je souhaite des informations.";
            window.open(platformUrl, '_blank');
            break;
            
        case "Email Professionnel":
            const subject = "Demande d'information - TechShop Pro";
            const body = "Bonjour TechShop Pro,\n\nJe suis intéressé(e) par vos services et j'aimerais en savoir plus.\n\nCordialement,";
            window.open(`${platformUrl}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
            break;
            
        case "Discord Community":
            if (confirm("🎮 Rejoignez notre serveur Discord : https://discord.gg/techshop\n\nCliquez sur OK pour copier le lien.")) {
                navigator.clipboard.writeText("https://discord.gg/techshop").then(() => {
                    alert("✅ Lien Discord copié ! Collez-le dans votre navigateur.");
                });
            }
            break;
            
        default:
            window.open(platformUrl, '_blank');
    }
}

// Fonction pour envoyer un message direct (optionnel)
function sendQuickMessage() {
    const message = prompt("💬 Votre message rapide pour TechShop Pro :");
    if (message && message.trim() !== "") {
        const whatsappUrl = `https://wa.me/33612345678?text=${encodeURIComponent("👋 Message depuis le site : " + message)}`;
        window.open(whatsappUrl, '_blank');
    }
}

// Initialisation de la page contact
function initContactPage() {
    displayContactPlatforms();
    displayAboutSection();
    
    // Ajouter le bouton de message rapide si on est sur contact.html
    if (window.location.pathname.includes('contact.html')) {
        const quickMessageBtn = document.createElement('div');
        quickMessageBtn.innerHTML = `
            <div style="position: fixed; bottom: 20px; right: 20px; z-index: 1000;">
                <button onclick="sendQuickMessage()" 
                        style="background: linear-gradient(45deg, #25D366, #128C7E); 
                               color: white; 
                               border: none; 
                               border-radius: 50px; 
                               padding: 1rem 1.5rem; 
                               cursor: pointer; 
                               box-shadow: 0 10px 30px rgba(37, 211, 102, 0.3);
                               display: flex; 
                               align-items: center; 
                               gap: 0.5rem;
                               font-weight: 600;">
                    <i class="fab fa-whatsapp"></i>
                    Message Rapide
                </button>
            </div>
        `;
        document.body.appendChild(quickMessageBtn);
    }
}

// Chargement initial
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('contact.html')) {
        initContactPage();
    }
});