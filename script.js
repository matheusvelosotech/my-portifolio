const translations = {
    pt: {
        nav_home: "Início", nav_about: "Sobre", nav_exp: "Experiência", nav_edu: "Formação",
        hero_greeting: "Olá, eu sou",
        hero_bio: "Combinando análise de dados, arquitetura de software e estratégia de negócios.",
        btn_contact: "Contato",
        about_title: "Perfil Profissional",
        about_text_1: "Sou graduando em Engenharia de Software com um perfil que combina tecnologia e estratégia. Com MBA em Tech for Business focado em Ciência de Dados e Big Data, trago uma visão analítica distinta para o desenvolvimento.",
        about_text_2: "Meu objetivo vai além de escrever código: busco entender como cada solução impacta os resultados do negócio. Se meu histórico anterior foi a fundação, a Engenharia de Software é onde estou construindo os arranha-céus!",
        music_quote: "\"A música me ensinou sobre lógica, padrões e a importância da prática constante muito antes de eu escrever minha primeira linha de código.\"",
        edu_title: "Jornada Acadêmica",
        edu_desc_uninter: "Mergulhando fundo em arquitetura de software, design patterns e sistemas escaláveis.",
        edu_desc_mba: "Foco na aplicação estratégica de Data Science e modelagem de dados para negócios.",
        edu_desc_ai: "Explorando a fronteira da tecnologia, algoritmos de ML e soluções inteligentes.",
        edu_desc_cyber: "Defesa cibernética, investigação forense e BI.",
        edu_desc_cloud: "Infraestrutura, Cloud Computing e NoSQL para processamento massivo.",
        edu_desc_imepac: "Fundamentação em análise de sistemas e tecnologia aplicada.",
        edu_desc_music: "Teoria musical e harmonia. Onde aprendi a lógica por trás da arte."
    },
    en: {
        nav_home: "Home", nav_about: "About", nav_exp: "Experience", nav_edu: "Education",
        hero_greeting: "Hello, I am",
        hero_bio: "Combining data analysis, software architecture, and business strategy. ",
        btn_contact: "Contact",
        about_title: "Professional Profile",
        about_text_1: "I am a Software Engineering undergraduate combining technology and strategy. With an MBA in Tech for Business focused on Data Science, I bring a distinct analytical vision to development.",
        about_text_2: "My goal goes beyond writing code: I seek to understand how each solution impacts business results. If my previous background was the foundation, Software Engineering is where I'm building the skyscrapers!",
        music_quote: "\"Music taught me about logic, patterns, and the importance of constant practice long before I wrote my first line of code.\"",
        edu_title: "Academic Journey",
        edu_desc_uninter: "Diving deep into software architecture, design patterns, and scalable systems.",
        edu_desc_mba: "Focused on the strategic application of Data Science for corporate decision-making.",
        edu_desc_ai: "Exploring the frontier of technology, ML algorithms, and intelligent solutions.",
        edu_desc_cyber: "Cyber defense protocols, forensic investigation, and BI dashboards.",
        edu_desc_cloud: "Cloud Computing architectures and NoSQL databases for massive processing.",
        edu_desc_imepac: "Solidified knowledge in systems analysis and technology applied to business.",
        edu_desc_music: "Music theory and harmony. Where I learned the logic behind the art."
    },
    es: {
        nav_home: "Inicio", nav_about: "Sobre Mí", nav_exp: "Experiencia", nav_edu: "Educación",
        hero_greeting: "Hola, soy",
        hero_bio: "Combinando análisis de datos, arquitectura de software y estrategia de negocios. ",
        btn_contact: "Contacto",
        about_title: "Perfil Profesional",
        about_text_1: "Soy estudiante de Ingeniería de Software combinando tecnología y estrategia. Con un MBA en Tech for Business enfocado en Ciencia de Datos, aporto una visión analítica distinta al desarrollo.",
        about_text_2: "Mi objetivo va más allá de escribir código: busco entender cómo cada solución impacta los resultados del negocio. ¡La Ingeniería de Software es donde estoy construyendo los rascacielos!",
        music_quote: "\"La música me enseñó sobre lógica, patrones y la importancia de la práctica constante mucho antes de escribir mi primera línea de código.\"",
        edu_title: "Trayectoria Académica",
        edu_desc_uninter: "Profundizando en arquitectura de software, patrones de diseño y sistemas escalables.",
        edu_desc_mba: "Enfocado en la aplicación estratégica de Data Science para la toma de decisiones.",
        edu_desc_ai: "Explorando la frontera de la tecnología, algoritmos de ML y soluciones inteligentes.",
        edu_desc_cyber: "Protocolos de defensa cibernética, investigación forense y BI.",
        edu_desc_cloud: "Arquitecturas de Cloud Computing y bases de datos NoSQL.",
        edu_desc_imepac: "Fundamentos en análisis de sistemas y tecnología aplicada a negocios.",
        edu_desc_music: "Teoría musical y armonía. Donde aprendí la lógica detrás del arte."
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

function toggleTheme() {
    const html = document.documentElement;
    const icon = document.getElementById('theme-icon');

    if (html.getAttribute('data-bs-theme') === 'dark') {
        html.setAttribute('data-bs-theme', 'light');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        initParticles('#d90429', '#e0e0e0'); 
    } else {
        html.setAttribute('data-bs-theme', 'dark');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        initParticles('#ff0f39', '#050505'); 
    }
}

function initParticles(colorDot, colorBg) {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": colorDot },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": false },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": colorDot, "opacity": 0.4, "width": 1 },
            "move": { "enable": true, "speed": 4, "direction": "none", "random": false, "out_mode": "out" }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" } },
            "modes": { "repulse": { "distance": 100, "duration": 0.4 } }
        },
        "retina_detect": true
    });
}

document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

document.querySelectorAll('a, button, .hover-trigger, input, textarea').forEach(el => {
    el.addEventListener('mouseenter', () => {
        document.querySelector('.custom-cursor').classList.add('hovered');
    });
    el.addEventListener('mouseleave', () => {
        document.querySelector('.custom-cursor').classList.remove('hovered');
    });
});

window.onload = function() {
    initParticles('#ff0f39', '#050505');
};