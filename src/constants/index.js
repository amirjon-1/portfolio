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
      title: 'Appofy - Build Your Online World',
      desc: 'Appofy helps businesses grow online by offering customized iOS and Android apps, websites, and digital solutions to expand their presence and reach more customers.',
      subdesc:
        '',
      href: 'https://apps.apple.com/us/app/appofy/id6593660871',
      texture: '/assets/s.mp4',
      logo: '/assets/logo.png',
      logoStyle: {
        backgroundColor: '#000000',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
         {
          id: 2,
          name: 'Flutter',
          path: '/assets/flut.jpg',
        },
      ],
    },{
      title: 'Consensus Corner',
      desc: 'Consensus Corner is a platform that allows users to share their views and opinions on various topics regarding politics. It provides a space for users to express their thoughts and opinions in a safe and respectful environment.',
      subdesc:
      'The website is designed to provide a secure way of sharing information. It uses basic html, css and js to deliver a responsive design thats both simple and functional. When initially signing up, it uses a third party website for the user to generate a public and private key (created using the same email and passphrase). This public key and encrypted private key can be downloaded from that third party website and can be uploaded when signing up and posting. The public key is used for making an account to make sure the person signing up can be verified. When creating a post the user must enter their encrypted private key and passphrase to decrypt it in order to post a message (it wont work otherwise). It displays this post and also stores it in Firebase. The message, along with the signed version of the message (uses openpgp to sign), and the public key is stored in firebase. When a post is displayed it allows anyone to check the signed message and the authors public key (under details). This can be used to verify if the message was written by the author (this can also be done through a third party website). The public key can be seen on a public directory (under construction) that allows anyone to connect a public key to an identity (uses a form of higher verification). This guarantees that identity fraud or something similar will be extremely rare. People can also upvote and downvote the policy. They can also add comments. ',
      href: 'https://amirjon-1.github.io/ccalproject/',
      texture: '/assets/s.mp4',
      logo: '/assets/consenselogo.gif',
      logoStyle: {
        backgroundColor: '#FFFFFF',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'HTML',
          path: '/assets/html.webp',
        },{
          id: 2,
          name: 'CSS',
          path: '/assets/css.webp',
        },{
          id: 3,
          name: 'JS',
          path: '/assets/js.png',
        },
      ],
    },
    
    
    {
      title: 'Vacatscape - Vacation Rental Homes',
      desc: 'Vacatscape is a platform for booking short-term vacation rentals, featuring a range of unique accommodations. It allows travelers to easily find and reserve properties that suit their preferences and budgets. ',
      subdesc:
        'Developed a cross-platform mobile app using Flutter and Firebase, integrating RESTful APIs for real-time travel data and booking functionality. Implemented Firebase Authentication, Firestore database, Stripe payment processing, and real-time messaging with Firebase Cloud Messaging. Tested and deployed to iOS and Android platforms.',
      href: 'https://apps.apple.com/ge/app/vacatscape/id6593660995?platform=iphone',
      texture: '/assets/s.mp4',
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
      title: 'DWJ Curbside LLC - Cleaning Service',
      desc: 'DWJ Curbside is a professional trash cleaning service designed to keep your surroundings clean and clutter-free. With a focus on efficiency and reliability, DWJ Curbside offers easy scheduling and convenient curbside pickup options, ensuring your trash and waste are managed effectively.',
      subdesc:
        'The website is built using basic HTML, CSS, and JavaScript to deliver a responsive design that’s both simple and functional. It is hosted on Netlify for easy deployment and secure access, and it ensures a seamless user experience across devices.',
      href: 'https://dwjcurbside.netlify.app/',
      texture: '/assets/s.mp4',
      logo: '/assets/dwj.png',
      logoStyle: {
        backgroundColor: '#FFFFFF',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'HTML',
          path: '/assets/html.webp',
        },{
          id: 2,
          name: 'CSS',
          path: '/assets/css.webp',
        },{
          id: 3,
          name: 'JS',
          path: '/assets/js.png',
        },
      ],
    },
    {
      title: 'WSO',
      desc: 'WSO (Williams Students Online) is a mobile and web platform designed for the Williams College student community. It offers students a place for accessing various campus resources, staying informed about events, and connecting with their peers.',
      subdesc:
        'Collaborated with a group of programmers to expand on WSO. The app is built using React Native for a responsive and dynamic user experience across devices. Tailwind CSS powers the styling, offering a modern, customizable design that enhances both usability and performance. Ranging from minor bug fixes to major implementations, the group has been able to provide a good experince for users. (Under Construction)      ',
      href: 'https://wso.williams.edu/',
      texture: '/assets/s.mp4',
      logo: '/assets/wso.png',
      logoStyle: {
        backgroundColor: '#4B0082',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React',
          path: '/assets/react.svg',
        },
      ],
    },
    {
      title: 'BrewBar Coffee',
      desc: 'Order directly from BrewBar Café with the BrewBar Coffee App. Enjoy personalized drinks, real-time tracking, and secure payments for convenient pickup.',
      subdesc:
        'The BrewBar Coffee App was built using React Native and Node.js, allowing it to run smoothly on both iOS and Android. I created this app for my local coffee shop where I worked as a barista and barback for a while. Custom APIs handle orders, user data, and real-time updates, while Firebase powers the backend with cloud storage, authentication, and notifications. The app was thoroughly tested on both iOS and Android before being deployed, ensuring a smooth and reliable experience for BrewBar Café customers.',
      href: 'https://apps.apple.com/us/app/brewbar-coffee/id6535690026',
      texture: '/assets/s.mp4',
      logo: '/assets/brew.jpg',
      logoStyle: {
        backgroundColor: '#313d34',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'react',
          path: '/assets/react.svg',
        },
      ],
    },
    {
      title: 'Techouze - Home Essentials Hub',
      desc: 'Techouze offers smart home products and commercial supplies, specializing in plumbing, HVAC, and electrical tools.',
      subdesc:
        'Techouze (app) was built using React Native and Node.js, allowing it to run smoothly on both iOS and Android. Custom APIs handle orders, user data, and real-time updates, while Firebase powers the backend with cloud storage, authentication, and notifications. The app was thoroughly tested on both iOS and Android before being deployed, ensuring a smooth and reliable experience for customers.',
      href: 'https://apps.apple.com/ge/app/techouze/id6651817149?platform=iphone',
      texture: '/assets/s.mp4',
      logo: '/assets/techouze.png',
      logoStyle: {
        backgroundColor: '#FFFFFF',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'react',
          path: '/assets/react.svg',
        },
      ],
    },
    {
      title: 'ICSI - Islamic Center of Staten Island',
      desc: 'ICSI offers spiritual, educational, and social programs to nurture Islamic knowledge for all ages. This app was a donation to the Islamic center!',
      subdesc:
        'Built used React Native and Node. It allows people to access upcoming events and general information.',
      href: 'https://icsi.appofy.co/',
      texture: '/assets/s.mp4',
      logo: '/assets/icsi.png',
      logoStyle: {
        backgroundColor: '#FFFFFF',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'react',
          path: '/assets/react.svg',
        },
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
      name: 'Schoolbus',
      pos: 'Lead Software Engineer',
      duration: 'May 2025 - Present',
      title: "Direct development of a cross-platform ride-sharing app (React Native, Node.js, PostgreSQL on AWS), managing a team of 4 student engineers. Institute TDD, raising code coverage from 40% to 85% and cutting post-deployment bugs by 70%. Design a scalable backend using the Hono framework, achieving sub-100ms API response times and supporting over 1000 concurrent users with minimal latency. Built to easily scale across multiple schools.",
      icon: 'https://i.ibb.co/jr6qHjc/s.png',
      animation: 'clapping',
    },
    {
      id: 2,
      name: 'SVP Portland',
      pos: 'Software Engineer Intern',
      duration: 'June 2025 - September 2025',
      title: "Rebuilt SVP Portland’s public website to align with new marketing objectives, boosting usability and increasing visitor engagement by 40%. Automated investor partner onboarding workflows with Salesforce + V4S dynamic forms, reducing manual processing time by 50%. Shipped features in 3-week Agile sprints via Azure DevOps, completing 95% of sprint goals on time and improving release velocity by 30%.",
      icon: 'https://i.ibb.co/mC4wW7qw/svps.png',
      animation: 'salute',
    },
    {
      id: 3,
      name: 'Appofy',
      pos: 'Software Engineer',
      duration: 'March 2024 - July 2025',
      title: "Developed over 6 cross-platform mobile apps using React Native, Node.js, and Firebase, enabling small businesses to expand their digital presence, attract over 500 active users, and boost overall profitability. Partnered with clients to analyze user needs and implement tailored features, leading to a 20% improvement in app retention rates.",
      icon: 'https://i.ibb.co/S55Vkbq/logo.png',
      animation: 'arm',
    },
  ];