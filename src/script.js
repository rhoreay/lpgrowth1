// ============================================
// SMOOTH SCROLL PARA ÂNCORAS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// ACCORDION FAQ
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        // Inicialmente esconde todas as respostas
        answer.style.maxHeight = '0';
        answer.style.overflow = 'hidden';
        answer.style.transition = 'max-height 0.3s ease';
        
        question.addEventListener('click', () => {
            const isOpen = answer.style.maxHeight !== '0px';
            
            // Fecha todas as outras
            faqItems.forEach(otherItem => {
                const otherAnswer = otherItem.querySelector('.faq-answer');
                otherAnswer.style.maxHeight = '0';
                otherItem.classList.remove('active');
            });
            
            // Abre/fecha a clicada
            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                item.classList.add('active');
            }
        });
    });
});

// ============================================
// ANIMAÇÃO DE ENTRADA (FADE IN)
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Seleciona elementos para animar
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.card, .timeline-item, .eletivo-card, .diferencial-card, .transformacao-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ============================================
// CONTADOR DE VAGAS (EXEMPLO)
// ============================================

// Você pode integrar com seu backend para pegar o número real de vagas
function atualizarVagas() {
    const vagasRestantes = 15; // Substitua por valor dinâmico do backend
    const elementosVagas = document.querySelectorAll('.vagas-restantes strong');
    
    elementosVagas.forEach(el => {
        el.textContent = vagasRestantes;
    });
}

// ============================================
// BOTÃO CTA - TRACKING (INTEGRAR COM GA4/PIXEL)
// ============================================

document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        // Exemplo de tracking com Google Analytics 4
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
                'event_category': 'CTA',
                'event_label': this.textContent,
                'value': 1
            });
        }
        
        // Exemplo de tracking com Facebook Pixel
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Lead');
        }
        
        console.log('CTA Clicado:', this.textContent);
    });
});

// ============================================
// STICKY HEADER (OPCIONAL)
// ============================================

/*
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;
    
    if (scrollPosition > 100) {
        hero.classList.add('scrolled');
    } else {
        hero.classList.remove('scrolled');
    }
});
*/

// ============================================
// VALIDAÇÃO BÁSICA DE FORMULÁRIO (SE ADICIONAR)
// ============================================

/*
const form = document.querySelector('#contact-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#phone').value;
        
        if (!name || !email || !phone) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        
        if (!validateEmail(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }
        
        // Enviar dados para backend/integração
        console.log('Formulário válido:', { name, email, phone });
        
        // Redirecionar para página de agendamento ou exibir mensagem de sucesso
        window.location.href = 'https://calendly.com/seu-link';
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
*/

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Landing Page Growth & Co. carregada com sucesso!');
    atualizarVagas();
    
    // Adicione aqui outras inicializações necessárias
});