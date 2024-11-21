import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Bryan',
    lastName:  'Vergara',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'UI/UX Designer & Web Developer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Manila',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Filipino']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Reach me out!</>,
    description: <>Whether you're looking to collaborate or need a versatile UI/UX Designer and Web Developer to transform your ideas into intuitive designs and functional solutions, feel free to reach out—let's create something extraordinary together!</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/JB-VERGARA',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/vergarajohnbryan/',
    },
    {
        name: 'Youtube',
        icon: 'yt',
        link: 'https://www.youtube.com/@CodeWithBry',
    },
    {
        name: 'Message me!',
        icon: 'email',
        link: 'http://eepurl.com/i4sa7M',
    },
]

const home = {
    label: 'Home',
    title: `John Bryan B. Vergara`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>UI/UX Designer & Web Developer</>,
    subline: <>
Hi there! I'm Bryan, a UI/UX Designer and Web Developer — transforming ideas into engaging user experiences and innovative digital solutions, one line of code at a time. 🚀 </>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: false,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>John Bryan Vergara is a Philippines-based UI/UX Designer and Web Developer driven by a passion for transforming complex challenges into innovative, user-focused solutions. His expertise includes designing intuitive interfaces, developing dynamic web applications, and combining creativity with technology to deliver exceptional digital experiences.</>
    },
    work: {
        display: false, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'FLY',
                timeframe: '2022 - Present',
                role: 'Senior Design Engineer',
                achievements: [
                    <>Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.</>,
                    <>Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: '🎓 Cavite State University - Imus Campus ',
                description: <>Bachelor Of Science in Information Technology - Magna Cum Laude</>,
            },
            {
                name: '🎓 International Electronics and Technical Institute Inc.',
                description: <>TVL - Information and Communications Technology</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: '🖊️ Prototyping (Figma)',
                description: <>Proficient in prototyping and designing user-friendly interfaces with Figma, focusing on usability and aesthetics.</>,
                images: [
                    {
                        src: '/images/projects/Technical/Figma.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/Technical/Figma(2).png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: '💻 Web Development',
                description: <>Experienced in building responsive, interactive, and visually appealing websites using HTML, CSS, JavaScript, and leveraging Next.js for modern features like server-side rendering and static site generation.</>,
                images: [
                    {
                        src: '/images/projects/Technical/WD.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/Technical/WD2.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: '🎨 Content Creation & Graphic Designing',
                description: <>Proficient in creating professional-grade graphics and visuals using Canva, Adobe Photoshop for advanced image editing and visual assets, and PowerDirector for high-quality video content including editing, transitions, and effects.</>,
                images: [
                    {
                        src: '/images/projects/Technical/Canva.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/Technical/Canva2.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: '🚀 Backend Development & Deployment',
                description: <>Experienced in Object-Oriented Programming (OOP) concepts with Java, proficient in building scalable applications, creating robust APIs using Spring Boot for backend integration, and skilled in deployment processes, managing build pipelines, and resolving deployment challenges for smooth delivery.</>,
                images: [
                    {
                        src: '/images/projects/Technical/Backend.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/Technical/Backend2.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: '🗂️ Collaboration & Version Control',
                description: <>Experienced in using Git for version control, focusing on collaboration through branching, merging, and resolving conflicts, and managing forks for efficient teamwork and code contributions.</>,
                images: [
                    {
                        src: '/images/projects/Technical/git.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/Technical/git2.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Certifications',
    title: 'Certificates',
    description: `Read about what ${person.name} has been up to recently in the world of technology.`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'My Projects',
    title: 'Projects & Collaborations',
    description: `Designs, collaboration, and development projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Designs',
    title: 'My latest designs',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };