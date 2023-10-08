
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
      "A forum application allowing users to post trends, actively engage in discussions, and interact through comments. Utilizing cutting-edge technologies, this app was developed with React.js, Node.js, Express.js, and elegantly styled with CSS.",
    image: "./forumappimage.png",
    link: "https://github.com/Harinze/forumApp",
  },
  {
    id: generateID(),
    title: "Mike and Angelo's Restaurant App",
    subtitle: "React and Firebase",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "./localres.png",
    link: "http://www.mikeandangelos.com/home.html",
  },
  {
    id: generateID(),
    title: "Ajo Savings App",
    subtitle: "React Hooks",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "./ajoimage1.png",
    link: "https://github.com/decadevs/node-sq015-managed-internship-ajo-savings-frontend",
  },
];

export const testimonials =  [
  {
    quote:"I have known him for quite some time now and he's is well behaved",
    image:"./nnamdiimage.jpeg",
    company:"Decagon",
    name:"Nnamdi Anyaele"
  },
  {
    quote:"I have known him for quite some time now and he's is well behaved",
    image:"/idowuimage.jpeg",
    company:"Distinct.ai",
    name:"Pamilerin Idowu"
  }
]


export const skills = ["JavaScript", "Express.js",
  "React.js", 
  "Node.js","Problem Solving", "TypeScript", "GraphQl", "MongoDB/Mongoose", "Postgressql", "Docker", "GitHub", "Excellent Communication","Customer Support", "HTML", "CSS", "TailwindCss" 

]