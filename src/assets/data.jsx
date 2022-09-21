import React from 'react';
import myLogo from '/logo1.png';
import presentation from './videos/test.mp4'

import {
    FaBehance,
    FaFacebook,
    FaLinkedin,
    FaTwitter,
    FaSketch,
    FaHome,
    FaUserFriends,
    FaFolderOpen,
    FaCalendarAlt,
    FaWpforms,
  } from 'react-icons/fa';

export const logo  = myLogo;
export const video  = presentation;

export const leftLinks = [
  {
    id: 1,
    url: '/about',
    text: 'APROPOS',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/project',
    text: 'PROJET',
    icon: <FaUserFriends />,
  },

];

export const hero = {
      devise: "ICI NOUS ALLONS ECRIRE LA DEVISE DE L'ENTREPRISE",
      about_info: "lorem ipsum dolor sit amet, consectetur adipiscing elit   non proident, sed diam nonumy eirmod tempor invid"
      image:'./images/background.png',
      client: 30,
      projet:200,
      button_label: "BUILD YOUR PROJET",

    };

export const rightLinks = [
  {
    id: 1,
    url: '/features',
    text: 'PROJECTION',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/resources',
    text: 'RESSOURCES',
    icon: <FaUserFriends />,
  },

];
  

export const dimension = [
  {
    id: 1,
    title: 'Premiere dimension',
    imgae: "./src/assets/images/dimension/",
  },
  {
    id: 2,
    title: 'Second Dimension',
    imgae: "./src/assets/images/dimension/",
  },
  {
    id: 3,
    title: 'last dime',
    image: "./src/assets/images/dimension/",
  },
];
  
export const projects = [
  {
    id: 1,
    title: "Titre ",
    description: "desciption du projet",
    title: 'Premiere dimension',
    image1: "./src/assets/images/projets/",
    image2: "./src/assets/images/projets/",
    image3: "./src/assets/images/projets/",
  },
  {
    id: 1,
    title: 'Premiere dimension',
    image1: "./src/assets/images/project/",
    image2: "./src/assets/images/project/",
    image3: "./src/assets/images/project/",
  }, 
];

const social = [
    {
      id: 1,
      url: 'https://www.twitter.com',
      icon: <FaFacebook />,
    },
    {
      id: 2,
      url: 'https://www.twitter.com',
      icon: <FaTwitter />,
    },
    {
      id: 3,
      url: 'https://www.twitter.com',
      icon: <FaLinkedin />,
    },
  
  ];
  

export  const chooseUs = [
    {
      id: "01",
      title: 'Titre 1',
      detail:
        ' lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
    },
    {
      id: "02",
      title: 'Titre 2',
      detail:
        ' lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
    },
    {
      id: "03",
      title: 'Titre 3',
      detail:
        ' lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
    },
    {
      id: "04",
      title: 'Titre 4',
      detail:
        ' lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
    },
  ];
  


  export  const testimonials = [
    {
      id: 1,
      organisation: 'entreprise 1',
      person: "Axel Murhula",
      function: "PGB",
      profile: './images/testimonials/'
      testimonials:
        ' lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
    },
    {
      id: 2,
      organisation: 'entreprise 1',
      person: "Axel Murhula",
      function: "PGB",
      profile: './images/testimonials/'
      testimonials:
        ' lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
    },
    {
      id: 3,
      organisation: 'entreprise 1',
      person: "Axel Murhula",
      function: "PGB",
      profile: './images/testimonials/'
      testimonials:
        ' lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
    },
    {
      id: 4,
      organisation: 'entreprise 1',
      person: "Axel Murhula",
      function: "PGB",
      profile: './images/testimonials/'
      testimonials:
        ' lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
    },
  ];
  
  

  export const FAQ = [
    {
      id: 1,
      question: 'Quel est le prix de votre service',
      answer: "tout depends de ce qu'on vas utiliser",
    },
    {
      id: 2,
      question: 'Quel est le prix de votre service',
      answer: "tout depends de ce qu'on vas utiliser",
    },
    {
      id: 3,
      question: 'Quel est le prix de votre service',
      answer: "tout depends de ce qu'on vas utiliser",
    },
    {
      id: 4,
      question: 'Quel est le prix de votre service',
      answer: "tout depends de ce qu'on vas utiliser",
    },
  
  ];

  export const contact ={
    title: "Qu'est  ce que tu attends? Parles nous de ton projet!"
    button_label: "Constactez-nous",
  }

  export const footer =
    {
      ecr:{
        logo:myLogo;
        adresse: "Av Nyamugo, Q. Nyamugo, ....",
        adresse: "matabaro@gmail.com",
        socials: social,
      },
      features: [
        "GRH",
        "Plans Groupes",
        "Et autres"
      ],
      solutions: [
        "financiere",
        "invention",
        "etc"
      ],
      ressources: [
        "statequi",
        "guides",
        "conception"
      ],
    }
   