import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    aimy,
    creditworks,
    mvpstudio,
    jsLogo,
    dotnetLogo,
    tiktokLogo,
    fullstackLogo
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Front-End Developer",
      icon: jsLogo,
    },
    {
      title: "Back-End Developer",
      icon: dotnetLogo,
    },
    {
      title: "Full-Stack Developer",
      icon: fullstackLogo,
    },
    {
      title: "Content Creator",
      icon: tiktokLogo,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer Intern",
      company_name: "MVP Studio",
      icon: mvpstudio,
      iconBg: "#383E56",
      date: "September 2018 - April 2019",
      points: [
        "Implementing the ReactJS framework to develop the single-page applications",
        "Maintain and test REST APIs",
        "Utilizing version control for code check-ins",
        "Integrating Agile methodologies for varying requirements and continuous delivery of the working software",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Aimy Plus",
      icon: aimy,
      iconBg: "#383E56",
      date: "June 2019 - November 2019",
      points: [
        "Building modern applications with ReactJS, .NET Core, and MS SQL",
        "Involving in the development of RESTful APIs",
        "Scoping project requirements using Agile & Scrum principles that helped prioritize developing activities",
        "Reduced by 50% of the time-consuming in monitoring emails and SMS by delivering an automated tracking system",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "CreditWorks",
      icon: creditworks,
      iconBg: "#383E56",
      date: "November 2020 - Now",
      points: [
        "Communicate with stakeholders and third-party organizations to design and develop products",
        "Design UX/UI and re-build company legacy system from back-end to front-end using Blazor and .NET Core based on the requirements of stakeholders",
        "Design new database schema and develop back-end services that improve the employees' performance and reduce the manual work by 50%",
        "Design and collaborate with team leader in restructuring SQL database schema",
        "Implement Agile methodology with JIRA and Slack for managing progress and quality of the projects"
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "Jerry is a fantastic developer who enjoys discussing ideal ways to overcome blockers and is always considerate of everyone's suggestions.",
      name: "Balraj",
      designation: "Software Engineer",
      company: "Jarden",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Jerry does.",
      name: "Ronnie",
      designation: "Director",
      company: "CreditWorks",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Jerry reworked our legacy CRM system, our traffic increased by 50%. We can't thank him enough!",
      name: "Evgenia",
      designation: "CTO",
      company: "CreditWorks",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Groceries E-commerce",
      description:
        "Our goal with this project is to bridge this gap by creating an intuitive and user-friendly e-commerce platform that offers a wide range of healthy foods and groceries, empowering users to make informed choices for their well-being.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "sanity",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: "https://camo.githubusercontent.com/7408de62019dcb646953ee54f69c76fa0080c12700f83ab056555ffd87f31c44/68747470733a2f2f692e6962622e636f2f64446e6b5862632f322e706e67",
      source_code_link: "https://github.com/ongthai123/ecommerce_sanity_stripe",
    },
    {
      name: "OpenAI Image Generation",
      description:
        "A web application that enables users to create images based on your description with the assistance of OpenAI.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: ".NET",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: "https://user-images.githubusercontent.com/28833020/227191455-c3619939-ba66-47da-ab0c-f7dd3acb907c.PNG",
      source_code_link: "https://github.com/ongthai123/ai-mern-image-generation",
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };