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
} from "../assets";
import bookdepo from '../assets/bookdepo.png';
import cguideapp from '../assets/cguideapp.png';
import poet from '../assets/poet.png';
import diu from '../assets/company/diu.png';
import ammc from '../assets/company/ammc.png';
import mnhs from '../assets/company/mnhs.png';
import cpp from '../assets/tech/cpp.png';
import bootstrap from '../assets/tech/bootstrap.png';

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
        title: "Front-End Web Developer",
        icon: web,
    },
    {
        title: "Back-end Web Developer",
        icon: backend,
    },
    {
        title: "Full-Stack Web Developer",
        icon: web,
    }
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
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
    {
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "C++",
        icon: cpp,
    },
    // {
    //     name: "Three JS",
    //     icon: threejs,
    // },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    // {
    //     name: "docker",
    //     icon: docker,
    // },
];

const educations = [
    {
        title: "Bsc in Software Engineering",
        Institution_name: "Daffodil International University",
        icon: diu,
        iconBg: "#383E56",
        date: "2020 - Present",
    },
    {
        title: "HSC",
        Institution_name: "Alamgir Monsur Mintu Memorial College",
        icon: ammc,
        iconBg: "#383E56",
        date: "2019",
    },
    {
        title: "SSC",
        Institution_name: "Mukul Niketon High School",
        icon: mnhs,
        iconBg: "#383E56",
        date: "2017"
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Book Depo",
        description:
            "Web-based book resale application where people can buy books at a low price. Providing a convenient and efficient solution for those people who can't buy books from stores who sells them at a high price.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "node js",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            }
        ],
        image: bookdepo,
        client_side_source_code_link: "https://github.com/Fahmidur-arnob/Book_Depo",
        server_side_source_code_link: "https://github.com/Fahmidur-arnob/Book_Depo_Server",
        live_site_link: "https://book-depo-9d0e9.web.app/",
    },
    {
        name: "The Picture and The Poet",
        description:
            "Web application that inspires and promotes photography. Also through this application people can buy photographs from photographers and also take the services they provide.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "node js",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "git",
                color: "pink-text-gradient",
            }
        ],
        image: poet,
        source_code_link: "https://github.com/",
    },
    {
        name: "Country Guide App",
        description:
            "A comprehensive platform that allows users to know about their country as well as other countries. This application will help a lot of people specially those who are interested in know about different countries and also those who are currently studying.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "node js",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "git",
                color: "pink-text-gradient",
            }
        ],
        image: cguideapp,
        source_code_link: "https://github.com/Fahmidur-arnob/country_guide_app_api",
        live_site_link: "https://fahmidur-arnob.github.io/country_guide_app_api/",
    },
];

export { services, technologies, educations, testimonials, projects };