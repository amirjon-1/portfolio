export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  

  
  export const myProjects = [
    {
      title: 'Appofy- Build Your Online World',
      desc: 'Appofy helps businesses grow online by offering customized iOS and Android apps, websites, and digital solutions to expand their presence and reach more customers.      ',
      subdesc:
        'Appofy was created using Goodbarber, a no-code platform. As a co-founder of Appofy, my partner being my boss at BrewBar when I was a barista, I have been utilizing multiple frameworks and platforms ranging from React-native to Flutter in order to bring dreams to life..',
      href: 'https://www.appofy.co/',
      texture: '/public/assets/s.mp4',
      logo: '/assets/logo.png',
      logoStyle: {
        backgroundColor: '#000000',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        
      ],
    },{
      title: 'Vacatscape - Book Your Deserved Vacation',
      desc: 'Vacatscape is a user-friendly platform for booking short-term vacation rentals, featuring a range of unique accommodations. It allows travelers to easily find and reserve properties that suit their preferences and budgets.      ',
      subdesc:
        'Vacatscape.com was created using Flutter and Flutterflow, along with API integration and Firebase, to offer real-time travel data and booking options. The site was tested and deployed on both iOS and Android, ensuring a smooth experience for users looking to plan their perfect vacation.        ',
      href: 'https://vacatscape.com/home',
      texture: '/public/assets/s.mp4',
      logo: '/assets/Vacatscape.png',
      logoStyle: {
        backgroundColor: '#000000',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'Flutter',
          path: '/assets/flut.jpg',
        },
      ],
    },
    {
      title: 'BrewBar Coffee',
      desc: 'Order directly from BrewBar Café with the BrewBar Coffee App. Enjoy personalized drinks, real-time tracking, and secure payments for convenient pickup or delivery.      ',
      subdesc:
        'The BrewBar Coffee App was built using Goodbarber, allowing it to run smoothly on both iOS and Android. Custom APIs handle orders, user data, and real-time updates, while Firebase powers the backend with cloud storage, authentication, and notifications. Google Analytics was added to track app performance and user activity. The app was thoroughly tested on both iOS and Android before being deployed, ensuring a smooth and reliable experience for BrewBar Café customers.',
      href: 'https://app.brewbarcoffeeco.com/',
      texture: '/public/assets/s.mp4',
      logo: '/assets/brew.jpg',
      logoStyle: {
        backgroundColor: '#313d34',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        
      ],
    },
    {
      title: 'Techouze - Home Essentials Hub',
      desc: 'Techouze offers smart home products and commercial supplies, specializing in plumbing, HVAC, and electrical tools.',
      subdesc:
        'Techouze was built using Goodbarber, allowing it to run smoothly on both iOS and Android. Custom APIs handle orders, user data, and real-time updates, while Firebase powers the backend with cloud storage, authentication, and notifications. Google Analytics was added to track app performance and user activity. The app was thoroughly tested on both iOS and Android before being deployed, ensuring a smooth and reliable experience customers.',
      href: 'https://app.techouze.com/',
      texture: '/public/assets/s.mp4',
      logo: '/assets/techouze.png',
      logoStyle: {
        backgroundColor: '#FFFFFF',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
      
      ],
    },
    {
      title: 'ICSI - Islamic Center of Staten Island',
      desc: 'ICSI offers spiritual, educational, and social programs to nurture Islamic knowledge for all ages.',
      subdesc:
        'ICSI was built using Goodbarber. It is a simple content app. It was meant as a free app/website for my Islamic center since they were paying too much for an outside service.',
      href: 'https://icsi.appofy.co/',
      texture: '/public/assets/s.mp4',
      logo: '/assets/icsi.png',
      logoStyle: {
        backgroundColor: '#FFFFFF',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
    
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 15.0 : isMobile ? 15.8 : 16.2,
      deskPosition: isMobile ? [1.8, -6.6, 4.5] : [1.4, -7.6, 4.5],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Self-employed',
      pos: 'Freelance Software Developer',
      duration: 'Jan 2024 - Present',
      title: "Created over five iOS and Android apps using Flutter for business employers looking to expand their online presence, with each app having over a thousand active users. Shown on portfolio (includes BrewBar, Techouze, Appofy, etc.).",
      icon: 'https://i.ibb.co/v1FVkfQ/guy.jpg',
      animation: 'arm',
    },
    {
      id: 2,
      name: 'Computer Care And Learning',
      pos: 'Technology Intern',
      duration: 'Jun 2023 - Aug 2023 and Jun 2024 - Aug 2024',
      title: "Explored a multitude of security and backup solutions provided to customers including Macrium, Backblaze, etc to help keep their data secure.",
      icon: 'https://i.ibb.co/jr6qHjc/s.png',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Evolve with Dr. Deby Torbett ',
      pos: 'Web Developer & Research Assistant',
      duration: 'March. 2023–May. 2023',
      title: "Developed on running a business through the usage of The Champagne Room. Helped design a fully functional website using the no-code platform.",
      icon: 'https://i.ibb.co/KXFYwb8/img.png',
      animation: 'salute',
    },
  ];