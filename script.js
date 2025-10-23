document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. Lógica do Menu Hamburger (Responsividade)
    // ----------------------------------------------------
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const desktopMenu = document.querySelector('.desktop-menu');
 
    hamburgerBtn.addEventListener('click', () => {
        // Alterna a classe 'active' para mostrar/esconder o menu
        desktopMenu.classList.toggle('active');
    });
 
    // Função para fechar o menu ao clicar em um link (opcional)
    const menuLinks = desktopMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Verifica se está em modo mobile para fechar
            if (window.innerWidth <= 768) {
                 desktopMenu.classList.remove('active');
            }
        });
    });
 
    // ----------------------------------------------------
    // 2. Animação do Botão CTA (Explorar Estilos)
    // ----------------------------------------------------
    const ctaButton = document.getElementById('explore-styles-btn');
 
    ctaButton.addEventListener('mouseover', () => {
        ctaButton.style.backgroundColor = '#1a335a'; // Cor mais escura no hover
        ctaButton.style.transform = 'translateY(-3px)'; // Leve elevação
    });
 
    ctaButton.addEventListener('mouseout', () => {
        ctaButton.style.backgroundColor = '#0A1931'; // Volta para a cor normal
        ctaButton.style.transform = 'translateY(0)';
    });
 
    // (Lógica para as outras páginas, como o Modal de Tamanho e Filtros, seria adicionada nos respectivos HTMLs/JS.)
});
 
// Adiciona CSS para o menu ativo em modo mobile (precisa do CSS extra)
/*
// Adicionar ao styles.css para o menu mobile:
.desktop-menu.active {
    display: flex;
}