/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: false, // set to false to use static SVG
};

const greeting = {
  username: 'Rémy Laot',
  title: "Hello, moi c'est Rémy",
  subTitle: emoji(
    "Un développeur Full Stack 🚀 et Client Lourd 🪨 passionné, ayant une expérience dans la création d'applications Web avec Symfony / Reactjs / ApiPlatform et également d'autres langages sympas."
  ),
  resumeLink:
    '',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/remylt',
  linkedin: 'https://fr.linkedin.com/in/rémy-laot',
  gmail: 'remy.laot@gmail.com',
  // gitlab: 'https://gitlab.com/',
  // facebook: 'https://www.facebook.com/',
  // medium: 'https://medium.com/',
  // stackoverflow: 'https://stackoverflow.com/users/10422806/',
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'Ce que je fais',
  subTitle: 'LE GENRE DE PERSONNE QUI LUI EN FAUT TOUJOURS PLUS',
  skills: [
    emoji(
      "⚡ Développement d'application Web sur-mesure de type ecommerce, CRM, vitrine."
    ),
    emoji("⚡ Conception d'API riche, moderne, sécurisé et respectant les normes et tous les niveaux de maturité."),
    emoji(
      "⚡ Conseil en environnement digital."
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'HTML 5',
      fontAwesomeClassname: 'fab fa-html5',
      img: ''
    },
    {
      skillName: 'CSS 3',
      fontAwesomeClassname: 'fab fa-css3-alt',
      img: ''
    },
    {
      skillName: 'Sass',
      fontAwesomeClassname: 'fab fa-sass',
      img: ''
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
      img: ''
    },
    {
      skillName: 'ReactJs',
      fontAwesomeClassname: 'fab fa-react',
      img: ''
    },
    {
      skillName: 'C#',
      fontAwesomeClassname: 'fab fa-windows',
      img: ''
    },
    {
      skillName: 'PHP',
      fontAwesomeClassname: 'fab fa-php',
      img: ''
    },
    {
      skillName: 'GIT',
      fontAwesomeClassname: 'fab fa-git',
      img: ''
    },
    {
      skillName: 'Sql Database / ORM',
      fontAwesomeClassname: 'fas fa-database',
      img: ''
    },
    {
      skillName: 'Symfony',
      fontAwesomeClassname: 'fab fa-symfony',
      img: ''
    },
    {
      skillName: 'Wordpress',
      fontAwesomeClassname: 'fab fa-wordpress',
      img: ''
    },
    {
      skillName: 'Linux',
      fontAwesomeClassname: 'fab fa-linux',
      img: ''
    },
    {
      skillName: 'API Platform',
      fontAwesomeClassname: '',
      img: require('./assets/images/api.png'),
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Autodidaxie',
      logo: require('./assets/images/autodic.png'),
      subHeader: 'Auto-formation dans les langages du Web, Natif et DotNet (managé).',
      duration: 'Depuis ~10ans',
      desc: "Attrait pour la cyber-sécurité & malware enthousiast.",
      descBullets: [
        "WEB: Symfony 4 et 5, React <16.x, CRM, eCommerce, vitrine, Wordpress, Web-Design",
        "NATIF: C, C++, WinAPI",
        "DOTNET: C#, VB.NET, VBA",
      ],
    },
    {
      schoolName: 'Lycée Supérieur Bonaparte',
      logo: require('./assets/images/bts_logo.png'),
      subHeader: 'BTS Service Informatique aux Organisations',
      duration: 'Septembre 2016 - April 2018',
      desc: 'Parmis les meilleurs étudiants en manière spécialisé informatique.',
      descBullets: [
      ],
    },
    {
      schoolName: 'Institut Universitaire de Technologie - Pôle Aix-en-Provences',
      logo: require('./assets/images/iut_logo.png'),
      subHeader: 'DUT Informatique',
      duration: 'September 2014 - April 2016',
      desc:
        '',
      descBullets: [],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Back-end', 
      progressPercentage: '75%', 
    },
    {
      Stack: ' Front-end', 
      progressPercentage: '65%', 
    },
    {
      Stack: 'Web Design', 
      progressPercentage: '70%', 
    },
    {
      Stack: 'Client lourd',
      progressPercentage: '60%',
    },
    {
      Stack: 'Sécurité',
      progressPercentage: '65%',
    },
    {
      Stack: "Système d'exploitation",
      progressPercentage: '75%',
    },
    {
      Stack: 'Versionning',
      progressPercentage: '80%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Développeur polyvalent',
      company: 'Getup Agency',
      companylogo: require('./assets/images/getup.png'),
      date: 'Janvier 2020 – Juin 2020',
      desc:
        "Agence experte en solution digitale et accompagnement marketing web.",
      descBullets: [
        'Développement sur le site YOKIS, du groupe URMET.',
        "Développement d'application smart TV",
        "Aide au développement d'un site marchant sous Symfony",
        "Système de chat LIVE sur le site de l'agence",
      ],
    },
    {
      role: 'Développeur indépendant',
      company: 'Blue Forest',
      companylogo: require('./assets/images/blueforest.jpeg'),
      date: "Courant de l'année 2019",
      desc:
        'Développement Full-stack',
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: '', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Projets',
  subtitle: "QUELQUES STARTUPS ET ENTREPRISES QUE J'AI AIDÉ À CRÉER LEUR TECH",
  projects: [
    {
      image: require('./assets/images/lacave.png'),
      link: 'https://www.la-cave-du-vigneron-toulon.fr/',
    },
    {
      image: require('./assets/images/getup.png'),
      link: 'https://www.getup.agency/',
    },
    {
      image: require('./assets/images/blueforest.jpeg'),
      link: 'https://www.blueforest.cc/',
    },
    {
      image: require('./assets/images/yokis-logo.png'),
      link: 'https://www.yokis.fr/',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    "Réalisations, certifications et quelques trucs sympas que j'ai faits !",

  achievementsCards: [
    {
      title: 'Google Code-In Finalist',
      subtitle:
        'First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.',
      image: require('./assets/images/codeInLogo.webp'),
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing',
        },
        {
          name: 'Award Letter',
          url:
            'https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing',
        },
        {
          name: 'Google Code-in Blog',
          url:
            'https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html',
        },
      ],
    },
    {
      title: 'Google Assistant Action',
      subtitle:
        'Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.',
      image: require('./assets/images/googleAssistantLogo.webp'),
      footerLink: [
        {
          name: 'View Google Assistant Action',
          url:
            'https://assistant.google.com/',
        },
      ],
    },

    {
      title: 'PWA Web App Developer',
      subtitle: 'Completed Certifcation from SMIT for PWA Web App Development',
      image: require('./assets/images/pwaLogo.webp'),
      footerLink: [
        { name: 'Certification', url: '' },
        {
          name: 'Final Project',
          url: 'https://pakistan-olx-1.firebaseapp.com/',
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
      title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
      description:
        'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?',
    },
    {
      url: 'https://medium.com/',
      title: 'Why REACT is The Best?',
      description:
        'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: 'https://bit.ly/',
      event_url: 'https://www.facebook.com/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/',
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Me Contacter ☎️'),
  subtitle:
    "Discutez d'un projet ou voulez simplement dire bonjour? Ma boîte de réception est ouverte à toute proposition.",
  number: 'remy.laot@gmail.com',
  emailAddress: 'remy.laot@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'twitter', //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
