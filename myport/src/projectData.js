
const generateID = () => Math.random().toString(36).substring(2, 10);
export const projects = [
  {
    id: generateID(),
    title: "QuickBite Food App",
    subtitle: "Food at Your Fingertips: The QuickBite Experience",
    description:
      "An innovative food ordering application crafted using a technology stack that includes ReactJS, TypeScript, NodeJS, PostgreSQL, ExpressJS, and styled with CSS and Tailwind CSS",
    image: "./quickbiteImage.png",
    link: "https://quick-bite-app.netlify.app/",
  },
  {
    id: generateID(),
    title: "Forum Application",
    subtitle: "Join the Conversation with Our Forum App",
    description:
      "A forum application allowing users to post trends, actively engage in discussions, and interact through comments. Utilizing cutting-edge technologies, this app was developed with React.js, Node.js, Express.js, and elegantly styled with CSS",
    image: "./forumappimage.png",
    link: "https://github.com/Harinze/forumApp",
  },
  {
    id: generateID(),
    title: "Mike and Angelo's Restaurant App",
    subtitle: "Delightful Dining, Mike and Angelo's Restaurant",
    description:
      "Designed for local food enthusiasts, this restaurant app, developed using JavaScript, CSS, and HTML, offers a platform for food lovers while honing JavaScript DOM manipulation skills",
    image: "./localres.png",
    link: "http://www.mikeandangelos.com/home.html",
  },
  {
    id: generateID(),
    title: "Ajo Savings App",
    subtitle: "Empowering Your Financial Future",
    description:
      "Ajo Savings, an innovative fintech app, promotes financial inclusion through collective savings for group members' goals. Built with ReactJS, Express.js, Node.js, JavaScript, TypeScript, and PostgreSQL",
    image: "./ajoimage1.png",
    link: "https://github.com/decadevs/node-sq015-managed-internship-ajo-savings-frontend",
  },
];

export const testimonials =  [
  {
    quote:"Working with Kingsley Ibe has been fantastic. He has a strong work ethic, a passion for learning, and impressive adaptability. His consistent delivery of high-quality work and remarkable growth are truly commendable. I'm confident he'll excel in his career.",
    image:"./nnamdiimage.jpeg",
    company:"Decagon",
    name:"Nnamdi Anyaele"
  },
  {
    quote:"Kingsley Ibe consistently delivers high-quality work in both frontend and backend technologies, contributing effectively to our project's success. I'm confident he'll excel in his career and positively impact future team.",
    image:"/idowuimage.jpeg",
    company:"Distinct.ai",
    name:"Pamilerin Idowu"
  }
]


export const skills = ["JavaScript", "Express.js",
  "React.js", 
  "Node.js","Problem Solving", "TypeScript", "GraphQl", "MongoDB/Mongoose", "Postgressql", "Docker", "GitHub", "Excellent Communication","Customer Support", "HTML", "CSS", "TailwindCss" 

]