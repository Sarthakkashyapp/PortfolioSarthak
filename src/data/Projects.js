// src/data/projects.js
import Voyagerai from '../assets/homepage.png';
import chatApp from '../assets/chatApp.png';
import Homesphere from '../assets/Homesphere.png';
import Carboncrunch from '../assets/Carboncrunch.png';

export const projectData = [
  {
    id: 1,
    title: 'Voyager-AI - An AI Travel Planner',
    desc: `VOYAGER AI aims to simplify the travel planning process by leveraging artificial intelligence to generate customized travel 
    itineraries and suggest hotels that align with the user's preferences.`,
    image: Voyagerai,
    github:`https://github.com/Sarthakkashyapp/Voyage-AI`,
    livelink: `https://voyager-ai-trip-planner.vercel.app/`
  },
  {
    id:2,
    title: 'Social-Sync - A Realtime Chat App',
    desc: `A real-time chat application featuring secure authentication, authorization, and efficient global state 
    management. Users can seamlessly sign up, log in, and engage in instant messaging with others in a responsive and 
    intuitive interface.`,
    image: chatApp,
    github:`https://github.com/Sarthakkashyapp/SocialSync`,
    livelink:`https://socialsync-ct5t.onrender.com/`
  },
  {
    id:3,
    title: 'HomeSphere - A Real Estate website',
    desc: `HomeSphere! This project demonstrates a feature-rich, fully responsive real estate website built 
    with the latest version of Next.js, TailwindCSS and Clerk for user authentication, and MongoDB for robust backend data management.`,
    image: Homesphere,
    github:`https://github.com/Sarthakkashyapp/HomeSphere`,
    livelink:`https://home-sphere-snowy.vercel.app/`
  },
  {
    id:4,
    title: 'Carbon-Crunch - A Freelance Project',
    desc: `Carbon Crunch is a platform designed to provide real-time carbon tracking and insights using AI-powered data analysis. (Frontend only).`,
    image: Carboncrunch,
    github:`https://github.com/Sarthakkashyapp/carbon-crunch`,
    livelink:`https://carbon-crunch-seven.vercel.app/`
  }
];
