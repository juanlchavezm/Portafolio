// import images
import Hero_person from "./assets/images/Hero/person.png";

import java from "./assets/images/Skills/java.png";
import mysql from "./assets/images/Skills/mysql.png";
import php from "./assets/images/Skills/php.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import flutter from "./assets/images/Skills/flutter.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import person_project from "./assets/images/projects/person.png";

import Hireme_person from "./assets/images/Hireme/person.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Desarrollador Web",
    firstName: "JUAN",
    LastName: "CHAVEZ",
    btnText: "Contrátame",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Año de experiencia en desarrollo web.",
      },
      {
        count: "2+",
        text: "Proyectos trabajados en mi carrera.",
      },
    ],
  },
  skills: {
    title: "Habilidades",
    subtitle: "MIS PRINCIPALES HABILIDADES",
    skills_content: [
      {
        name: "Java",
        para: "Sólido conocimiento de los fundamentos de JAVA.",
        logo: java,
        description1: "Comprensión profunda de la sintaxis y la semántica del lenguaje Java.",
        description2: "Experiencia en la creación de clases, objetos, métodos e interfaces.",
        description3: "Familiaridad con los tipos de datos, operadores y estructuras de control.",
        description4: "Habilidad para aplicar los principios de la programación orientada a objetos (POO)."
      },
      {
        name: "Node js",
        para: "Sólido conocimiento de los fundamentos de Node.js.",
        logo: nodejs,
        description1: "Familiaridad con el uso de módulos y paquetes de Node.js para diversas funcionalidades.",
        description2: "Experiencia con el uso de herramientas de desarrollo Node.js como IDEs, compiladores y depuradores.",
        description3: "Conocimiento de frameworks populares de Node.js como Express.",
        description4: "Habilidad para trabajar con bases de datos relacionales y NoSQL utilizando Node.js."
      },
      {
        name: "PHP",
        para: "Sólido conocimiento de los fundamentos de PHP.",
        logo: php,
        description1: "Comprensión profunda de la sintaxis y semántica del lenguaje PHP.",
        description2: "Experiencia en la creación de scripts PHP para diversas tareas, incluyendo el manejo de datos, la interacción con bases de datos y el desarrollo web.",
        description3: "Familiaridad con tipos de datos, operadores, estructuras de control y funciones.",
        description4: "Habilidad para aplicar los principios de la programación orientada a objetos (POO) en PHP."
      },
      {
        name: "React js",
        para: "Sólido conocimiento de los fundamentos de React.js.",
        logo: reactjs,
        description1: "Comprensión profunda de la biblioteca React y sus componentes principales.",
        description2: "Experiencia en la creación de interfaces de usuario (UI) declarativas y reutilizables.",
        description3: "Familiaridad con JSX, la sintaxis de extensión de JavaScript para React.",
        description4: "Habilidad para manejar el estado de la aplicación y las actualizaciones del DOM de manera eficiente."
      },
      {
        name: "MySQL",
        para: "Sólido conocimiento de los fundamentos de MySQL.",
        logo: mysql,
        description1: "Comprensión profunda del modelo de datos relacional y la sintaxis del lenguaje de consulta estructurado (SQL).",
        description2: "Experiencia en la creación, modificación y eliminación de bases de datos, tablas, columnas e índices.",
        description3: "Familiaridad con tipos de datos, operadores, cláusulas y funciones SQL.",
        description4: "Habilidad para escribir consultas SQL eficientes para recuperar, insertar, actualizar y eliminar datos."
      },
      {
        name: "Python",
        para: "Sólido conocimiento de los fundamentos de Python.",
        logo: python,
        description1: "Comprensión profunda de la sintaxis y semántica del lenguaje Python.",
        description2: "Experiencia en la creación de scripts y programas Python para diversas tareas, incluyendo el manejo de datos, el análisis de datos y la automatización de tareas.",
        description3: "Familiaridad con tipos de datos, operadores, estructuras de control y funciones en Python.",
        description4: "Habilidad para aplicar los principios de la programación orientada a objetos (POO) en Python."
      },
      {
        name: "Flutter",
        para: "Sólido conocimiento de los fundamentos de Flutter.",
        logo: flutter,
        description1: "Comprensión profunda del framework Flutter y su arquitectura basada en widgets.",
        description2: "Experiencia en la creación de interfaces de usuario (UI) nativas para dispositivos iOS y Android utilizando Dart.",
        description3: "Familiaridad con los conceptos clave de Flutter como Hot Reload, State Management y Routing.",
        description4: "Habilidad para diseñar e implementar aplicaciones móviles escalables y de alto rendimiento."
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Servicios",
    subtitle: "LO QUE OFREZCO",
    service_content: [
      {
        title: "Desarrollo Web",
        para: "Ofrezco servicios profesionales de desarrollo web para crear sitios web y aplicaciones web dinámicas, modernas y de alto rendimiento.",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "Ofrezco servicios profesionales de UI/UX Design para crear interfaces de usuario (UI) atractivas, intuitivas y centradas en el usuario.",
        logo: services_logo2,
      },
      {
        title: "Desarrollo Aplicaciones Móviles",
        para: "Ofrezco servicios profesionales de desarrollo de aplicaciones móviles para crear aplicaciones innovadoras y atractivas para dispositivos iOS y Android.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Proyectos",
    subtitle: "Mi Creación",
    image: person_project,
    project_content: [
      {
        title: "CT Passenger, CT Driver y Panel de Control",
        subtitle: "Desarrollo de Aplicaciones Móviles CT Passenger, CT Driver y Panel de Control para la empresa CT Corporation",
        image: project1,
        btnText: ""
      },
    ],
  },
  Hireme: {
    title: "Contrátame",
    subtitle: "PARA TUS PROYECTOS",
    image1: Hireme_person,
    para: "Soy un desarrollador full-stack con experiencia en la creación de sitios web y aplicaciones web dinámicas, modernas y de alto rendimiento, así como aplicaciones móviles innovadoras y atractivas para dispositivos iOS y Android.",
    btnText: "",
  },
  Contact: {
    title: "Contáctame",
    subtitle: "PONERSE EN CONTACTO",
    social_media: [
      {
        text: "juan_luis_xw@hotmail.com",
        icon: GrMail,
        link: "mailto:juan_luis_xw@hotmail.com",
      },
      {
        text: "+57 3226143246",
        icon: MdCall,
        link: "https://wa.me/+573226143246",
      },
      {
        text: "JuanLChavezM",
        icon: BsTwitter,
        link: "https://twitter.com/JuanLChavezM",
      },
      {
        text: "JuanLChavezM",
        icon: BsGithub,
        link: "https://github.com/juanlchavezm/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
};
