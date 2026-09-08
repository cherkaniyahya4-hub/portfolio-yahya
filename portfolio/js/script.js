"use strict";

const root = document.documentElement;
const header = document.querySelector(".header");
const navMenu = document.querySelector(".nav-menu");
const menuToggle = document.querySelector(".menu-toggle");
const themeToggles = document.querySelectorAll(".theme-toggle, .theme-switch");
const languageToggle = document.querySelector(".language-switch");
const backToTop = document.querySelector(".back-to-top");
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);
  const isLight = theme === "light";
  themeToggles.forEach((toggle) => {
    toggle.setAttribute("aria-pressed", String(isLight));
    toggle.setAttribute(
      "aria-label",
      isLight ? "Activer le thème sombre" : "Activer le thème clair",
    );
    toggle.classList.toggle("is-light", isLight);
    const icon = toggle.querySelector(".theme-icon");
    if (icon) icon.textContent = isLight ? "☀" : "☾";
  });
}

const savedTheme = localStorage.getItem("portfolio-theme");
const systemTheme = "dark";
setTheme(savedTheme || systemTheme);
themeToggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    const currentTheme = root.dataset.theme || "dark";
    setTheme(currentTheme === "dark" ? "light" : "dark");
  });
});

const translations = {
  Accueil: "Home",
  "À propos": "About",
  Compétences: "Skills",
  Services: "Services",
  Portfolio: "Portfolio",
  Contact: "Contact",
  "Développeur Front-End": "Front-End Developer",
  "Développeur Web": "Web Developer",
  "Designer UI": "UI Designer",
  Freelancer: "Freelancer",
  "Développeur Full-Stack · Étudiant en BTS":
    "Full-Stack Developer · BTS Student",
  "Passionné par le développement web et les nouvelles technologies, je conçois des applications modernes qui combinent performance, simplicité et excellence visuelle.":
    "Passionate about web development and new technologies, I build modern applications that combine performance, simplicity and visual excellence.",
  "J’interviens sur l’ensemble du processus de création, de l’interface utilisateur à la logique applicative, avec une approche fondée sur la rigueur, la maintenabilité du code et l’amélioration continue.":
    "I work across the entire creation process, from the user interface to application logic, with an approach based on rigor, code maintainability and continuous improvement.",
  "Défilez vers le bas": "Scroll down",
  "Qui suis-je ?": "Who am I?",
  "À propos de": "About",
  moi: "me",
  "Un développeur curieux, guidé par l'impact et le goût du travail bien fait.":
    "A curious developer driven by impact and beautifully crafted work.",
  "Je crée des interfaces qui ont": "I create interfaces that",
  "du sens.": "make sense.",
  "Développeur full-Stack en formation, passionné par la création d'applications web modernes et le développement de solutions numériques performantes. Je porte une attention particulière à la conception de projets bien structurés et à l'amélioration continue de mes compétences en génie logiciel.":
    "Full-Stack developer in training, passionate about creating modern web applications and developing high-performance digital solutions. I pay particular attention to designing well-structured projects and continuously improving my software engineering skills.",
  "À Mon Sujet": "About Me",
  "Mon introduction": "My introduction",
  Experience: "Experience",
  "2+ ans": "2+ years",
  Complété: "Completed",
  "9+ Projects": "9+ Projects",
  Support: "Support",
  "En ligne 24/7": "Online 24/7",
  "Technicien logiciel spécialisé dans le développement d'applications cloud et de systèmes de surveillance. Expertise en FastAPI et architecture robuste.":
    "Software technician specializing in cloud application development and monitoring systems. Expertise in FastAPI and robust architecture.",
  "Télécharger CV": "Download résumé",
  "Développeur web front-end basé à Casablanca, j'accompagne les marques et entrepreneurs dans la création de produits numériques clairs, performants et agréables à utiliser.":
    "Based in Casablanca, I help brands and entrepreneurs create clear, high-performance digital products that are a pleasure to use.",
  "Mon approche combine développement, sensibilité UI/UX et compréhension des objectifs métier. J'aime transformer un besoin complexe en une expérience simple.":
    "My approach combines development, UI/UX awareness and business insight. I enjoy turning complex needs into simple experiences.",
  Localisation: "Location",
  Expérience: "Experience",
  Disponibilité: "Availability",
  Disponible: "Available",
  "Télécharger mon CV": "Download my résumé",
  "années à créer": "years creating",
  "pour le web": "for the web",
  "Mon expertise": "My expertise",
  Mes: "My",
  compétences: "skills",
  "Des outils modernes au service d’expériences numériques solides.":
    "Modern tools serving robust digital experiences.",
  "Front-end": "Front-end",
  Outils: "Tools",
  Digital: "Digital",
  Langages: "Languages",
  "Bases de données": "Databases",
  "Travaux sélectionnés": "Selected work",
  "Mes derniers": "My latest",
  projets: "projects",
  "Quelques concepts où stratégie, design et développement se rencontrent.":
    "A selection of concepts where strategy, design and development meet.",
  Tous: "All",
  "Sites web": "Websites",
  Applications: "Applications",
  "UI/UX": "UI/UX",
  "Mes travaux récents": "Most recent works",
  Web: "Web",
  App: "App",
  Desktop: "Desktop",
  "Site web": "Website",
  Application: "Application",
  "Voir le projet ↗": "View project ↗",
  "Code source": "Source code",
  "Une boutique lifestyle immersive, optimisée pour une navigation rapide et une conversion fluide.":
    "An immersive lifestyle store optimized for fast navigation and smooth conversion.",
  "Des prévisions locales lisibles dans une interface atmosphérique et parfaitement responsive.":
    "Clear local forecasts in an atmospheric, fully responsive interface.",
  "Un concept éditorial audacieux conçu pour une directrice artistique indépendante.":
    "A bold editorial concept designed for an independent art director.",
  "Un tableau de bord clair pour suivre projets, tâches et indicateurs sans friction.":
    "A clear dashboard for tracking projects, tasks and metrics effortlessly.",
  "Une expérience raffinée qui met en scène une cuisine méditerranéenne contemporaine.":
    "A refined experience showcasing contemporary Mediterranean cuisine.",
  "Une page de lancement professionnelle pour un outil SaaS tourné vers la productivité.":
    "A professional launch page for a productivity-focused SaaS tool.",
  "Mon évolution": "My journey",
  Mon: "My",
  parcours: "journey",
  "Un apprentissage continu, entre projets concrets et nouvelles compétences.":
    "Continuous learning through real projects and new skills.",
  "Aujourd’hui": "Present",
  Stage: "Internship",
  Formation: "Education",
  Certification: "Certification",
  "Stagiaire en Sécurité et Développement": "Security and Development Intern",
  "Institut Pasteur du Maroc": "Pasteur Institute of Morocco",
  "juin 2026 – juillet 2026": "June 2026 – July 2026",
  "Survolez pour voir les missions": "Hover to view responsibilities",
  "Travail au sein du service informatique sur les principes de sécurité des applications web et de protection des données. Étude des recommandations de l’OWASP, des vulnérabilités liées aux requêtes SQL et des bonnes pratiques de sécurisation des sessions, de l’authentification et du contrôle d’accès. Contribution à l’analyse des risques applicatifs et à l’amélioration des pratiques de développement sécurisé.":
    "Worked within the IT department on web application security and data protection principles. Studied OWASP recommendations, SQL query vulnerabilities and best practices for securing sessions, authentication and access control. Contributed to application risk analysis and improved secure development practices.",
  "Étude des principales vulnérabilités applicatives recensées dans l’OWASP Top 10.":
    "Study of the main application vulnerabilities listed in the OWASP Top 10.",
  "Analyse des risques liés aux injections SQL et application des bonnes pratiques de sécurisation des requêtes.":
    "Analysis of SQL injection risks and application of query security best practices.",
  "Étude de la gestion et de la sécurisation des sessions utilisateur, notamment leur création, leur expiration et leur invalidation.":
    "Study of user session management and security, including creation, expiration and invalidation.",
  "Analyse des mécanismes d’authentification, d’autorisation et de contrôle d’accès.":
    "Analysis of authentication, authorization and access-control mechanisms.",
  "Sensibilisation aux attaques XSS, CSRF, au vol de session et aux erreurs de configuration de sécurité.":
    "Awareness of XSS, CSRF, session theft and security misconfiguration attacks.",
  "Initiation aux tests unitaires avec UTPLSQL afin de vérifier la fiabilité des traitements PL/SQL.":
    "Introduction to unit testing with UTPLSQL to verify PL/SQL processing reliability.",
  "Découverte de Liquibase pour le suivi, la gestion et le déploiement des modifications apportées à la base de données.":
    "Introduction to Liquibase for tracking, managing and deploying database changes.",
  "Application des bonnes pratiques de développement sécurisé, de validation des entrées et de gestion des erreurs.":
    "Application of secure development, input validation and error-management best practices.",
  "Développeur Front-End Freelance": "Freelance Front-End Developer",
  "Indépendant · Casablanca": "Independent · Casablanca",
  "Conception et développement de sites vitrines et interfaces sur mesure pour des clients locaux et internationaux.":
    "Design and development of custom showcase websites and interfaces for local and international clients.",
  "Développeur Web Junior": "Junior Web Developer",
  "Intégration de maquettes responsive, optimisation des performances et collaboration avec l’équipe design.":
    "Responsive design integration, performance optimization and collaboration with the design team.",
  "Technicien Spécialisé — Développement Digital":
    "Specialized Technician — Digital Development",
  "Institut de formation numérique": "Digital Training Institute",
  "Algorithmique, développement web, bases de données et réalisation de projets en équipe.":
    "Algorithms, web development, databases and team project delivery.",
  "Validation des fondamentaux JavaScript, structures de données et résolution de problèmes.":
    "JavaScript fundamentals, data structures and problem-solving validation.",
  "Ce que je propose": "What I offer",
  services: "services",
  "Des solutions pensées pour soutenir durablement votre présence en ligne.":
    "Solutions designed to strengthen your online presence for the long term.",
  "Ce que j'offre": "What I offer",
  "Développement Fullstack": "Fullstack Development",
  "Consulting Technique": "Technical Consulting",
  "Voir plus": "See more",
  "Toutes les certifications": "All certifications",
  "Construction d'applications évolutives avec des technologies modernes.":
    "Building scalable applications with modern technologies.",
  "Conception et implémentation de solutions d'infrastructure cloud.":
    "Design and implementation of cloud infrastructure solutions.",
  "Fourniture d'orientations expertes sur les décisions technologiques.":
    "Expert guidance on technology decisions.",
  "Création de sites web": "Website creation",
  "Sites vitrines modernes, rapides et alignés avec votre image de marque.":
    "Modern, fast showcase websites aligned with your brand.",
  "Développement front-end": "Front-end development",
  "Interfaces fidèles aux maquettes, interactives, accessibles et maintenables.":
    "Pixel-accurate, interactive, accessible and maintainable interfaces.",
  "Responsive design": "Responsive design",
  "Une expérience impeccable sur mobile, tablette et grand écran.":
    "A flawless experience on mobile, tablet and large screens.",
  Maintenance: "Maintenance",
  "Corrections, mises à jour et améliorations pour garder votre site performant.":
    "Fixes, updates and improvements to keep your website performing.",
  "Parlons-en →": "Let's talk →",
  "Un projet en tête ?": "Have a project in mind?",
  "Créons quelque chose de": "Let’s create something",
  "remarquable.": "remarkable.",
  "Une idée, un projet ou simplement une question ? Écrivez-moi. Je réponds généralement sous 24 heures.":
    "An idea, a project or simply a question? Write to me. I usually reply within 24 hours.",
  Téléphone: "Phone",
  "Votre nom": "Your name",
  "Votre email": "Your email",
  Sujet: "Subject",
  "Votre message": "Your message",
  "Envoyer le message": "Send message",
  "Get in touch": "Entrons en contact",
  "Contact Me": "Contactez-moi",
  "Talk to me": "Parlez-moi",
  "Write me": "Écrivez-moi",
  Whatsapp: "WhatsApp",
  "Mon parcours certifié": "My certified journey",
  "Mes qualifications professionnelles": "My professional qualifications",
  Vérifier: "Verify",
  "Voir le certificat": "View certificate",
  "Voir toutes les certifications": "View all certifications",
  "Formation avancée en JavaScript, programmation orientée objet et développement algorithmique.":
    "Advanced JavaScript, object-oriented programming and algorithmic development training.",
  "Maîtrise des concepts Python avancés, de la programmation objet et des applications modulaires.":
    "Advanced Python concepts, object-oriented programming and modular application development.",
  "Certification développeur JavaScript représentant environ 300 heures de formation et de projets.":
    "JavaScript developer certification representing approximately 300 hours of training and projects.",
  "Expertise en IA générative sur OCI : modèles fondamentaux, services d’IA et intégration cloud.":
    "Expertise in generative AI on OCI: foundation models, AI services and cloud integration.",
  "Fondamentaux de Java, programmation orientée objet, structures de contrôle et résolution de problèmes.":
    "Java fundamentals, object-oriented programming, control structures and problem-solving.",
  "Maîtrise d’Oracle Autonomous Database, de l’administration automatisée et des services de données cloud.":
    "Oracle Autonomous Database, automated administration and cloud data services expertise.",
  "Fondamentaux d’Oracle Cloud Infrastructure : services cœur, sécurité et architecture cloud.":
    "Oracle Cloud Infrastructure fundamentals: core services, security and cloud architecture.",
  "Approfondissement de React : composants avancés, hooks, gestion d’état, navigation et tests d’interfaces.":
    "Advanced React: advanced components, hooks, state management, navigation and interface testing.",
  "Des idées claires.": "Clear ideas.",
  "Des expériences fortes.": "Powerful experiences.",
  Navigation: "Navigation",
  "Me suivre": "Follow me",
  "Prêt à démarrer ?": "Ready to start?",
  "Écrivez-moi ↗": "Write to me ↗",
  "Tous droits réservés.": "All rights reserved.",
  "Conçu avec soin à Casablanca.": "Crafted with care in Casablanca.",
};

const placeholderTranslations = {
  "Prénom et nom": "First and last name",
  "vous@exemple.com": "you@example.com",
  "Parlez-moi brièvement de votre projet": "Tell me briefly about your project",
  "Bonjour Yahya, j'aimerais...": "Hello Yahya, I would like...",
};
const translatableNodes = [];
function collectTranslations() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    const key = node.nodeValue.trim();
    if (key && translations[key])
      translatableNodes.push({ node, fr: key, en: translations[key] });
  }
}
function setLanguage(language) {
  root.lang = language;
  translatableNodes.forEach((item) => {
    item.node.nodeValue = item.node.nodeValue.replace(
      item.node.nodeValue.trim(),
      language === "en" ? item.en : item.fr,
    );
  });
  document
    .querySelectorAll("input[placeholder], textarea[placeholder]")
    .forEach((field) => {
      const french = field.dataset.frPlaceholder || field.placeholder;
      field.dataset.frPlaceholder = french;
      field.placeholder =
        language === "en" ? placeholderTranslations[french] || french : french;
    });
  const english = language === "en";
  languageToggle.classList.toggle("is-english", english);
  languageToggle.setAttribute("aria-pressed", String(english));
  languageToggle.setAttribute(
    "aria-label",
    english ? "Current language: English" : "Langue actuelle : français",
  );
  languageToggle.querySelector(".language-code").textContent = english
    ? "En"
    : "Fr";
  localStorage.setItem("portfolio-language", language);
}
collectTranslations();
setLanguage(localStorage.getItem("portfolio-language") || "fr");
languageToggle.addEventListener("click", () =>
  setLanguage(root.lang === "fr" ? "en" : "fr"),
);

function closeMenu() {
  navMenu.classList.remove("open");
  menuToggle.classList.remove("active");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Ouvrir le menu");
  document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
  const open = navMenu.classList.toggle("open");
  menuToggle.classList.toggle("active", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute(
    "aria-label",
    open ? "Fermer le menu" : "Ouvrir le menu",
  );
  document.body.classList.toggle("menu-open", open);
});
document
  .querySelectorAll(".nav-link")
  .forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav-link")];
function handleScroll() {
  header.classList.toggle("scrolled", window.scrollY > 24);
  backToTop.classList.toggle("visible", window.scrollY > 600);
  const marker = window.scrollY + window.innerHeight * 0.35;
  let current = sections[0].id;
  sections.forEach((section) => {
    if (marker >= section.offsetTop) current = section.id;
  });
  navLinks.forEach((link) =>
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`,
    ),
  );
}
window.addEventListener("scroll", handleScroll, { passive: true });
handleScroll();
backToTop.addEventListener("click", () =>
  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion ? "auto" : "smooth",
  }),
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
  revealObserver.observe(element);
});

const skillsSection = document.querySelector("#competences");
const skillObserver = new IntersectionObserver(
  (entries) => {
    if (!entries[0].isIntersecting) return;
    document.querySelectorAll(".skill").forEach((skill, index) => {
      setTimeout(() => {
        skill.querySelector("i").style.width = `${skill.dataset.level}%`;
      }, index * 80);
    });
    skillObserver.disconnect();
  },
  { threshold: 0.25 },
);
skillObserver.observe(skillsSection);

document.querySelectorAll(".tech-panel").forEach((panel) => {
  panel.addEventListener("pointermove", (event) => {
    const rect = panel.getBoundingClientRect();
    panel.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    panel.style.setProperty("--my", `${event.clientY - rect.top}px`);
  });
});

const rolesByLanguage = {
  fr: ["Développeur Full-Stack · Étudiant en BTS"],
  en: ["Full-Stack Developer · BTS Student"],
};
const typedText = document.querySelector(".typed-text");
let roleIndex = 0;
let charIndex = rolesByLanguage.fr[0].length;
let deleting = true;
function typeRole() {
  const roles = rolesByLanguage[root.lang] || rolesByLanguage.fr;
  const role = roles[roleIndex];
  charIndex += deleting ? -1 : 1;
  typedText.textContent = role.slice(0, charIndex);
  let delay = deleting ? 45 : 85;
  if (!deleting && charIndex === role.length) {
    deleting = true;
    delay = 1600;
  }
  if (deleting && charIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 300;
  }
  setTimeout(typeRole, delay);
}

const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
filterButtons.forEach((button) =>
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    projectCards.forEach((card) => {
      const visible = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden", !visible);
      card.setAttribute("aria-hidden", String(!visible));
    });
  }),
);

document.querySelector("#year").textContent = new Date().getFullYear();

const serviceDialog = document.querySelector("#service-dialog");
const serviceDetails = {
  fr: {
    fullstack: {
      title: "Développement Fullstack",
      intro:
        "Construction d'applications évolutives avec des technologies modernes.",
      items: [
        "Développement d'endpoints FastAPI pour les systèmes de surveillance cloud.",
        "Création d'interfaces utilisateur réactives avec React, Preact et Oracle JET.",
        "Construction d'architecture microservices pour des applications évolutives.",
        "Implémentation d'APIs RESTful et de services GraphQL.",
        "Développement d'applications cloud-native avec OCI.",
        "Création de tableaux de bord interactifs et d'outils de surveillance.",
        "Intégration d'Oracle Visual Builder Cloud Service (VBCS).",
        "Construction d'applications de visualisation de données en temps réel.",
        "Implémentation d'authentification et d'autorisation sécurisées.",
        "Optimisation des performances et de l'évolutivité des applications.",
        "Contrôle de version et intégration/déploiement continu.",
        "Revue de code et documentation technique.",
      ],
    },
    cloud: {
      title: "Cloud & DevOps",
      intro:
        "Conception et implémentation de solutions d'infrastructure cloud.",
      items: [
        "Déploiement et gestion d'Oracle Cloud Infrastructure (OCI).",
        "Conteneurisation avec Docker et orchestration Kubernetes.",
        "Implémentation et automatisation de pipelines CI/CD.",
        "Conception de systèmes et architecture pour applications cloud.",
        "Implémentation de solutions de surveillance et d'observabilité.",
        "Pratiques d'Infrastructure as Code (IaC).",
        "Implémentation de sécurité cloud et conformité.",
        "Optimisation des performances et gestion des coûts.",
      ],
    },
    consulting: {
      title: "Consulting Technique",
      intro:
        "Fourniture d'orientations expertes sur les décisions technologiques.",
      items: [
        "Conception et optimisation d'architecture de systèmes.",
        "Recommandations de stack technologique et stratégies de migration.",
        "Analyse de performance et consulting d'optimisation.",
        "Implémentation des meilleures pratiques de sécurité.",
        "Revue de code et assurance qualité.",
        "Documentation technique et transfert de connaissances.",
        "Formation d'équipe et développement de compétences.",
        "Planification de projet et création de roadmap technique.",
      ],
    },
  },
  en: {
    fullstack: {
      title: "Fullstack Development",
      intro: "Building scalable applications with modern technologies.",
      items: [
        "FastAPI endpoint development for cloud monitoring systems.",
        "Building reactive user interfaces with React, Preact and Oracle JET.",
        "Microservices architecture for scalable applications.",
        "RESTful API and GraphQL service implementation.",
        "Cloud-native application development with OCI.",
        "Interactive dashboard and monitoring tool creation.",
        "Oracle Visual Builder Cloud Service (VBCS) integration.",
        "Real-time data visualization applications.",
        "Secure authentication and authorization implementation.",
        "Application performance and scalability optimization.",
        "Version control and continuous integration/deployment.",
        "Code review and technical documentation.",
      ],
    },
    cloud: {
      title: "Cloud & DevOps",
      intro: "Design and implementation of cloud infrastructure solutions.",
      items: [
        "Oracle Cloud Infrastructure (OCI) deployment and management.",
        "Containerization with Docker and Kubernetes orchestration.",
        "CI/CD pipeline implementation and automation.",
        "Cloud application systems design and architecture.",
        "Monitoring and observability solution implementation.",
        "Infrastructure as Code (IaC) practices.",
        "Cloud security and compliance implementation.",
        "Performance optimization and cost management.",
      ],
    },
    consulting: {
      title: "Technical Consulting",
      intro: "Expert guidance on technology decisions.",
      items: [
        "Systems architecture design and optimization.",
        "Technology stack recommendations and migration strategies.",
        "Performance analysis and optimization consulting.",
        "Security best-practice implementation.",
        "Code review and quality assurance.",
        "Technical documentation and knowledge transfer.",
        "Team training and skills development.",
        "Project planning and technical roadmap creation.",
      ],
    },
  },
};
function openServiceDialog(key) {
  const language = root.lang === "en" ? "en" : "fr";
  const detail = serviceDetails[language][key];
  serviceDialog.querySelector("h3").textContent = detail.title;
  serviceDialog.querySelector(".service-dialog-intro").textContent =
    detail.intro;
  serviceDialog.querySelector(".service-dialog-list").innerHTML = detail.items
    .map((item) => `<li>${item}</li>`)
    .join("");
  serviceDialog.showModal();
}
document
  .querySelectorAll(".service-more")
  .forEach((button) =>
    button.addEventListener("click", () =>
      openServiceDialog(button.dataset.service),
    ),
  );
serviceDialog
  .querySelector(".service-dialog-close")
  .addEventListener("click", () => serviceDialog.close());
serviceDialog.addEventListener("click", (event) => {
  if (event.target === serviceDialog) serviceDialog.close();
});

const certificatesTrack = document.querySelector(".certificates-track");
const certificateCards = [...document.querySelectorAll(".certificate-card")];
const certificateDotsContainer = document.querySelector(".certificate-dots");
certificateDotsContainer.replaceChildren(
  ...certificateCards.map((_, index) => {
    const dot = document.createElement("span");
    dot.setAttribute("role", "button");
    dot.setAttribute("tabindex", "0");
    dot.setAttribute("aria-label", `Certificat ${index + 1}`);
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => showCertificate(index));
    dot.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        showCertificate(index);
      }
    });
    return dot;
  }),
);
const certificateDots = [
  ...document.querySelectorAll(".certificate-dots span"),
];
let certificateIndex = 0;
function showCertificate(index) {
  certificateIndex =
    (index + certificateCards.length) % certificateCards.length;
  const targetCard = certificateCards[certificateIndex];
  const scrollLeft = targetCard.offsetLeft - certificatesTrack.offsetLeft;
  certificatesTrack.scrollTo({
    left: Math.max(0, scrollLeft),
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
  certificateDots.forEach((dot, dotIndex) =>
    dot.classList.toggle("active", dotIndex === certificateIndex),
  );
}
document
  .querySelector(".certificate-prev")
  .addEventListener("click", () => showCertificate(certificateIndex - 1));
document
  .querySelector(".certificate-next")
  .addEventListener("click", () => showCertificate(certificateIndex + 1));

let certScrollTimeout;
certificatesTrack.addEventListener(
  "scroll",
  () => {
    clearTimeout(certScrollTimeout);
    certScrollTimeout = setTimeout(() => {
      const trackLeft = certificatesTrack.scrollLeft;
      let closestIndex = 0;
      let closestDiff = Infinity;
      certificateCards.forEach((card, i) => {
        const diff = Math.abs(
          card.offsetLeft - certificatesTrack.offsetLeft - trackLeft,
        );
        if (diff < closestDiff) {
          closestDiff = diff;
          closestIndex = i;
        }
      });
      certificateIndex = closestIndex;
      certificateDots.forEach((dot, dotIndex) =>
        dot.classList.toggle("active", dotIndex === closestIndex),
      );
    }, 80);
  },
  { passive: true },
);

const certificatesDialog = document.querySelector("#certificates-dialog");
const certificatesAllButton = document.querySelector(".certificates-all");
const certificatesAllGrid = certificatesDialog.querySelector(
  ".certificates-all-grid",
);
function populateCertificatesDialog() {
  const currentCards = [
    ...certificatesTrack.querySelectorAll(".certificate-card"),
  ];
  certificatesAllGrid.replaceChildren(
    ...currentCards.map((card) => card.cloneNode(true)),
  );
}
certificatesAllButton.addEventListener("click", () => {
  populateCertificatesDialog();
  certificatesDialog.showModal();
});
certificatesDialog
  .querySelector(".certificates-library-close")
  .addEventListener("click", () => certificatesDialog.close());
certificatesDialog.addEventListener("click", (event) => {
  if (event.target === certificatesDialog) certificatesDialog.close();
});
new MutationObserver(() => {
  if (certificatesDialog.open) populateCertificatesDialog();
}).observe(certificatesTrack, { childList: true });

const glow = document.querySelector(".cursor-glow");
if (!prefersReducedMotion && window.matchMedia("(pointer:fine)").matches) {
  window.addEventListener(
    "pointermove",
    (event) => {
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
    },
    { passive: true },
  );
}
