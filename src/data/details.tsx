import { Code2, Palette, Frame, Wrench, Github } from 'lucide-react';
const LeahDetails = {
    name: "Leah Sheptycki",
    title: "UX and Front-End Developer",
    location: "Edmonton, Alberta, Canada",
    email: "leahterra@gmail.com",
    phone: "+1 (780) 999-2991",
    linkedin: "https://www.linkedin.com/in/leahshep/",
    github: "https://github.com/LeahTerra",
    portfolio: "https://leahterra.ca",
    about: ``,
    skills: [
        {
            icon: Code2,
            category: "Languages",
            skills : ["TypeScript","JavaScript","HTML5 & CSS3","SQL","Python","C#","Java",],
        },
        {
            icon: Frame,
            category: "Frameworks & Libraries",
            skills: ["React","Vue","Next.js","Tailwind CSS","Vite","Primevue","Tailwind","Styled Components"],
        },
        {
            icon: Wrench,
            category: "Tools",
            skills: ["Git & GitHub","VS Code","Figma","Jira","Jest","Blender","Substance Painter","Unity","Photoshop"],
        },
        {
            icon: Palette,
            category: "Design",
            skills: ["User Research","Wireframing & Prototyping","Usability Testing","Accessibility Standards","Responsive Design"],
        },
    ],
    school : [
        {
            school: "University of Alberta",
            degree: "Bachelor of Science in Computer Science",
            period: "2017 - 2023",
            description: "Specialized in software development with a focus on human-computer interaction and user experience design.",
        },
    ],
    experience: [
        {
            title: "Software Developer",
            company: "Freelance Developer",
            period: "Jan. 2024 - Present",
            description: `I worked directly with clients to design and develop custom web applications focusing on user experience and usability.
            I utilized modern front-end technologies such as React, Nextjs, and Tailwind CSS to create responsive and visually appealing interfaces.`,
            achievements: [
                'Successfully delivered many projects for individuals and content creators, enhancing their online presence and user engagement',
                'Used external APIs to integrate features such as notifications on streams',
            ],
        },
        {
            title: "3D Artist",
            company: "Self-Employed",
            period: "May. 2024 - Present",
            description: `As a 3D Artist, I designed and created 3D models and textures for personal projects, clients, and for my store. 
            I utilized software such as Blender and Substance Painter to produce high-quality assets, then assembled them into scenes using Unity.`,
            achievements: [
                'Sold over 400 3D models that are used in virtual reality games',
                'Brought to life clients visions with custom 3D assets and a 100% satisfaction rate',
                'Wrote scripts with C# for custom features'
            ],
        },
        {
            title: "Software Developer Intern",
            company: "Intuit Quickbooks",
            period: "Jan. 2022 - Dec. 2022",
            description: `I served as a Front-End Developer for QuickBooks Online, working on the left hand navigation system for both
            Business and Accountant Views. I collaborated with UX designers to design new user friendly features and implement them with React and TypeScript.`,
            achievements: [
                'Received a patent for designing a novel drag-and-drop bookmark menu, showcasing innovation in user interface design',
                'Improved load time and responsiveness of core navigation systems by over 20% through performance refactoring',
                'Created robust CSS systems and reusable UI components, enhancing accessibility and developer velocity across the team',
                'Led front-end initiatives to standardize CSS systems, create reusable UI components, and enhance accessibility',
                'Led an large-scale overhaul of the left-hand navigation system of Accountant View',
            ],
        },
    ],
    projects: [
        {
            name: "Talent Gift",
            description: `A remotely hosted website built for a client that gives business insight on talent distribution.`,
            technologies: ["React", "JavaScript", "Vite", "Tailwind CSS", "Express"],
            github: 'https://github.com/UAlberta-CMPUT401/f23project-talent-gift'
        },
        {
            name: "NPC Roleplay AI",
            description: `AI Chatbot for Roleplaying in Content Creation, with speech to text and voice capabilities.`,
            technologies: ["Python", "Whisper", "InWorldAI", "Elevenlabs", "OpenAI API"],
            github: ''
        },
        {
            name: "Voice Translator",
            description: `AI assisted translator that converts spoken english to spoken japanese.`,
            technologies: ["Python", "Whisper", "DeepL", "VoiceVox"],
            github: '',
        },
        {
            name: "Sisyphus",
            description: `A mobile app for tracking habits with social media integration`,
            technologies: ["Java", "Android Studio", "Firebase"],
            github: 'https://github.com/CMPUT301F21T17/Sisyphus'
        },
        {
            name: "Sudoku Solver",
            description: `A python script using multiple solving algorithms to solve sudoku puzzles from an input.`,
            technologies: ["Python"],
            github: '',
        },
        {
            name: "GoMokuSolver",
            description: `A machine learning algorithm that plays the game of GoMoku using an Alpha-beta search algorithm.`,
            technologies: ["Python"],
            github: '',
        },

    ],
        
};

export default LeahDetails;