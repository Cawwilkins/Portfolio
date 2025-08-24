import { useState } from "react";
import ant1 from "../assets/Ant1.png"
import ant2 from "../assets/Ant2.png"
import bottom_glass from "../assets/bottom_glass.png"
import bubbles from "../assets/bubbles.png"
import first_arrow from "../assets/Arrow.png"
import github_1 from "../assets/github.png"
import Group_34 from "../assets/Group_34.png"
import Group_42 from "../assets/Group_42.png"
import headshot from "../assets/headshot.png"
import linkedin from "../assets/LinkedIn.png"
import mail from "../assets/mail.png"
import proj1 from "../assets/Proj1.png"


const MainPage = () => {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formE1 = e.currentTarget;

        // inside your submit handler
        const r = await fetch("/api/messageHandler", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, subject, message }),
        });

        let j = null;
        try { j = await r.json(); } catch { /* leave j as null if no JSON */ }

        if (!r.ok) {
            const msg = j?.error || `Server error (${r.status})`;
            alert(msg);      // or show inline UI
            console.error("Contact error:", j || { status: r.status });
            return;
        }

        alert(j?.message || "Sent!");
    }

    return (
        <main className="bg-[#fffafa] scroll-smooth">
            <nav id="nav" className="top-2 z-[99999] bg-blue-500/20 mx-auto flex w-[95%] items-center rounded-[20px] justify-between font-montserrat bg-gradient-to-r items-center pl-[15px] pr-[15px] md:pl-[40px] md:pr-[40px] py-[15px] sticky from-white/5 to-white/30 shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.25)] backdrop-blur-[20px]">
                <a href="#hero" className="text-2xl text-[#000000] transition-colors duration-500 hover:text-[#3479E3] font-bold"><span className="text-[#3479E3]">C</span>hristian <span className="text-[#3479E3]">W</span>ilkins</a>
                <div className="flex gap-[2vw] md:gap-[1.5vw]">
                    <a href="#projects" className="text-1xl text-[#000000] hover:text-[#3479E3] font-semibold transition-colors duration-500">
                        <div className="md:hidden">Work</div>
                        <div className="hidden md:block">My Work</div>
                    </a>
                    <a href="#about" className="text-1xl text-[#000000] hover:text-[#3479E3] font-semibold transition-colors duration-500">
                        <div className="md:hidden">About</div>
                        <div className="hidden md:block">About Me</div>
                    </a>
                    <a href="#contact" className="text-1xl text-[#000000] hover:text-[#3479E3] font-semibold transition-colors duration-500">
                        <div className="md:hidden">Contact</div>
                        <div className="hidden md:block">Contact Me</div>
                    </a>
                </div>
            </nav>
            <section id="hero" className="relative flex pt-[40vw] md:pt-[25vw] lg:pt-[5vw] scroll-mt-[100vw]">
                <div className="relative mx-auto w-[95%] flex items-center md:items-start md:justify-between">
                <div id="hero-text" className="flex flex-col text-center md:text-left md:items-start items-center pt-[10vw] md:pl-[10vw]">
                    <h1 className="text-4xl font-montserrat text-[#000000] font-semibold z-[9999]">
                        <span className="relative inline-block">
                            {/* First letter (or first word) */}
                                <span>Nice</span>
                                {/* Left/first anchor image, sized in em so it scales with text */}
                                <img
                                    src={bubbles}
                                    alt=""
                                    aria-hidden="true"
                                    className="pointer-events-none select-none absolute -z-10 top-1/4 -left-2 -translate-x-[35%] -translate-y-1/2 w-[10vw] opacity-90"
                                />
                        </span> to meet you, I'm<span className="text-[#3479E3]">&nbsp;Christian</span></h1>
                    <div className="text-1xl mt-[1vw] lg:mt-[0vw] font-montserrat text-[#000000] italic md:pl-[1vw] font-lato z-[9999]">
                        <div className="hidden 2xl:block 3xl:hidden"> An aspiring full-stack software engineer blending AI/ML, UX design, and web development to create practical, <br /> human-centered tech.</div>
                        <div className="block lg:hidden"> An aspiring full-stack software engineer building practical, human-centered tech.</div>
                        <div className="hidden lg:block 2xl:hidden">An aspiring full-stack software engineer blending AI/ML, UX design, <br/> and web development to build practical, human-centered tech.</div>
                        <div className="hidden 3xl:block"> An aspiring full-stack software engineer blending AI/ML, UX design, and web development to create practical, human-centered tech.</div>
                    </div>
                    <div className="flex gap-[2vw] pt-[0.5vw] mt-[1vw] lg:mt-[0vw] text-base italic font-lato z-[9999] text-[#000000]">
                        <a
                            href="#projects"
                            className="px-[2vw] md:px-[1vw] py-[1.5vw] md:py-[0.5vw] 
                            bg-blue-500/20 
                            rounded-[59px]
                            bg-gradient-to-r
                            from-white/5 to white/30
                            shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.25)] 
                            backdrop-blur-[20px] 
                            hover:bg-white/20 hover:border-white/40 hover:text-blue-500 hover:shadow-[0px_8px_32px_rgba(0,0,0,0.37)]
                            transition-all duration-500"
                        >
                            View my work
                        </a>
                        <a 
                            href="#about" 
                            className="px-[2vw] md:px-[1vw] py-[1.5vw] md:py-[0.5vw] 
                            bg-blue-500/20 
                            rounded-[59px]
                            bg-gradient-to-r
                            from-white/5 to white/30
                            shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.25)] 
                            backdrop-blur-[20px] 
                            hover:bg-white/20 hover:border-white/40 hover:text-blue-500 hover:shadow-[0px_8px_32px_rgba(0,0,0,0.37)]
                            transition-all duration-500"
                        >
                            Read about me
                        </a>
                        <a 
                            href="#contact"
                            className="px-[2vw] md:px-[1vw] py-[1.5vw] md:py-[0.5vw] 
                            bg-blue-500/20 
                            rounded-[59px]
                            bg-gradient-to-r
                            from-white/5 to white/30
                            shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.25)] 
                            backdrop-blur-[20px] 
                            hover:bg-white/20 hover:border-white/40 hover:text-blue-500 hover:shadow-[0px_8px_32px_rgba(0,0,0,0.37)]
                            transition-all duration-500"
                        >Contact me
                        </a>
                    </div>
                </div>
                <div className="absolute right-[15vw] top-[5vw] hidden xl:block">
                    {/* Anchor box = sized by the headshot */}
                    <div className="relative inline-block">
                        {/* Hero image defines the box size */}
                            <img
                                src={headshot}
                                alt="Hero Image"
                                className="float-right ml-6 max-w-md block relative z-10"
                            />

                        {/* Glass sticks to the bottom-right corner of the headshot */}
                            <img
                                src={bottom_glass}
                                alt="Bottom Glass"
                                className="absolute -bottom-15 -right-15 z-0 translate-x-[12%] translate-y-[12%] pointer-events-none"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-[45vw] md:py-[30vw] lg:py-[15vw]">
                <img src={first_arrow} alt="Down Arrow" className="hidden lg:block mx-auto" />
            </section>

            <section id="projects" className="relative flex flex-col scroll-mt-[20vw] lg:scroll-mt-[5vw]">
                <div className="relative">
                    <h2 className="relative text-4xl font-montserrat text-[#000] z-[1] font-semibold text-center pb-[2vw]">
                        <span className="relative inline-block">
                            {/* First letter (or first word) */}
                                <span>Some</span>
                                {/* Left/first anchor image, sized in em so it scales with text */}
                                <img
                                    src={Group_34}
                                    alt=""
                                    aria-hidden="true"
                                    className="pointer-events-none select-none absolute -z-10 top-1/4 -left-2 -translate-x-[35%] -translate-y-1/2 w-[3em] opacity-90"
                                />
                        </span>
                            &nbsp;of my&nbsp;
                        <span className="relative inline-block text-[#3479E3]">
                        {/* Last word (or last letter wrapped if you prefer) */}
                        Projects
                        {/* Right/last anchor image */}
                        <img
                            src={Group_42}
                            alt=""
                            aria-hidden="true"
                            className="pointer-events-none select-none absolute -z-[99999] top-19/20 -right-2 translate-x-[35%] -translate-y-1/2 w-[2.8em] opacity-90"
                        />
                    </span>
                </h2>
            </div>
                {/* Antrevo - hidden when larger than mobile */}
                <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-6 items-center z-[9999]">
                    <div className="relative group w-50% lg:w-full lg:hidden overflow-hidden ">
                    {/* Base image */}
                    <img
                        src={ant1}
                        alt="Project default"
                        className="w-50% lg:w-full object-cover block"
                    />

                    {/* Hover image (doesn't receive pointer events; fades in on group hover/focus) */}
                    <img
                        src={ant2}
                        alt="Project hover"
                        className="absolute inset-0 w-50% lg:w-full object-cover
                                    opacity-0 transition-opacity duration-500
                                    group-hover:opacity-100 group-focus-within:opacity-100
                                    pointer-events-none"
                    />

                    {/* Whole-card site hotspot (kept on top, fully transparent) */}
                    <a
                        href="https://antrevo.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open antrevo.com"
                        className="absolute inset-0 z-20"
                    />      

                    {/* Smaller hotspots above the full-card link */}
                    <a
                        href="https://github.com/Cawwilkins/AntrEvo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-[20px] left-[26px] w-[95px] h-[70px] z-30"
                        aria-label="Open AntrEvo GitHub"
                    ></a>

                    <a
                        href="https://docs.google.com/presentation/d/1YpTxbSIjmIfVQz-zefqpc-Ujsx8tgdP5/edit?usp=sharing&ouid=115282926745936384532&rtpof=true&sd=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-[30px] right-[25px] w-[180px] h-[55px] z-30"
                        aria-label="Open AntrEvo Case Study"
                    ></a>
                <div className="items-center">
                    <div className="justify-start">
                        <span className="text-blue-500 text-1xl font-bold font-Montserrat">AntrEvo</span><span className="text-black text-1xl font-semibold font-Montserrat"> - UX Designer, Full Stack SWE</span>
                    </div>
                </div>
                <div className="items-center">
                    <div className="justify-start">
                        <div className="text-black text-base font-lato"> <span className="font-semibold">Design:</span> Figma <br /> <span className="font-semibold">Front-End:</span> HTML, Tailwind CSS, JavaScript, and React (+ Vite) <br /> <span className="font-semibold">Back-End:</span> Python (with Flask), PostgreSQL (via Supabase) <br /> <span className="font-semibold">Deployment:</span> Vercel (Front-End), Railway (Back-End), GitHub (Full-Stack)</div>
                    </div>
                </div>

                {/* Proj 1 */}
                </div>
                    <img src={proj1} alt="Project 1" className="w-50% pt-[10vw] lg:pt-[0vw] lg:w-full" />


                    {/* Antrevo for large screen sizes */}
                    <div className="justify-start lg:hidden">
                        <span className="text-blue-500 text-1xl font-bold font-Montserrat">MAA-RAG</span><span className="text-black text-1xl font-semibold font-Montserrat"> - UX Designer, Full Stack SWE</span>
                    </div>
                    <div className="justify-start lg:hidden">
                        <div className="text-black text-base font-lato"> <span className="font-semibold">Design:</span> Figma <br /> <span className="font-semibold">Front-End:</span> HTML, Tailwind CSS, JavaScript, and React (+ Vite) <br /> <span className="font-semibold">Back-End:</span> Python, TBD <br /> <span className="font-semibold">Deployment:</span> TBD (Front-End), TBD (Back-End), GitHub (Full-Stack)</div>
                    </div>
                    <div className="relative group w-50% hidden lg:block lg:w-full overflow-hidden ">
                    {/* Base image */}
                    <img
                        src={ant1}
                        alt="Project default"
                        className="w-full object-cover block"
                    />

                    {/* Hover image (doesn't receive pointer events; fades in on group hover/focus) */}
                    <img
                        src={ant2}
                        alt="Project hover"
                        className="absolute inset-0 w-full h-full object-cover
                                    opacity-0 transition-opacity duration-500
                                    group-hover:opacity-100 group-focus-within:opacity-100
                                    pointer-events-none"
                    />

                    {/* Whole-card site hotspot (kept on top, fully transparent) */}
                    <a
                        href="https://antrevo.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open antrevo.com"
                        className="absolute inset-0 z-20"
                    />      

                    {/* Smaller hotspots above the full-card link */}
                    <a
                        href="https://github.com/Cawwilkins/AntrEvo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-[20px] left-[26px] w-[95px] h-[70px] z-30"
                        aria-label="Open AntrEvo GitHub"
                    ></a>

                    <a
                        href="https://docs.google.com/presentation/d/1YpTxbSIjmIfVQz-zefqpc-Ujsx8tgdP5/edit?usp=sharing&ouid=115282926745936384532&rtpof=true&sd=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-[30px] right-[25px] w-[180px] h-[55px] z-30"
                        aria-label="Open AntrEvo Case Study"
                    ></a>
                </div>

                    {/* Project 3 */}
                    <img src={proj1} alt="Project 3" className="w-50% pt-[10vw] lg:pt-[0vw] lg:w-full" />


                <div className="items-center lg:hidden">
                    <div className="justify-start">
                        <span className="text-blue-500 text-1xl font-bold font-Montserrat">Steps</span><span className="text-black text-1xl font-semibold font-Montserrat"> - UX Designer, Full Stack SWE</span>
                    </div>
                </div>
                <div className="items-center lg:hidden">
                    <div className="justify-start">
                        <div className="text-black text-base font-lato"> <span className="font-semibold">Design:</span> Figma <br /> <span className="font-semibold">Front-End:</span> Javascript, React Native <br /> <span className="font-semibold">Back-End: </span> TBD <br /> <span className="font-semibold">Deployment:</span> TBD (Front-End), TBD (Back-End), GitHub (Full-Stack)</div>
                    </div>
                </div>
                </div>

                <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6 lg:items-center">
                    <div className="justify-start">
                        <span className="text-blue-500 text-1xl font-bold font-Montserrat">MAA-RAG</span><span className="text-black text-1xl font-semibold font-Montserrat"> - UX Designer, Full Stack SWE</span>
                    </div>
                    <div className="justify-start">
                        <span className="text-blue-500 text-1xl font-bold font-Montserrat">AntrEvo</span><span className="text-black text-1xl font-semibold font-Montserrat"> - UX Designer, Full Stack SWE</span>
                    </div>
                    <div className="justify-start">
                        <span className="text-blue-500 text-1xl font-bold font-Montserrat">Steps</span><span className="text-black text-1xl font-semibold font-Montserrat"> - UX Designer, Full Stack SWE</span>
                    </div>
                </div>
                <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6 lg:items-center">
                    <div className="justify-start">
                        <div className="text-black text-base font-lato"> <span className="font-semibold">Design:</span> Figma <br /> <span className="font-semibold">Front-End:</span> HTML, Tailwind CSS, JavaScript, and React (+ Vite) <br /> <span className="font-semibold">Back-End:</span> Python, TBD <br /> <span className="font-semibold">Deployment:</span> TBD (Front-End), TBD (Back-End), GitHub (Full-Stack)</div>
                    </div>
                    <div className="justify-start">
                        <div className="text-black text-base font-lato"> <span className="font-semibold">Design:</span> Figma <br /> <span className="font-semibold">Front-End:</span> HTML, Tailwind CSS, JavaScript, and React (+ Vite) <br /> <span className="font-semibold">Back-End:</span> Python (with Flask), PostgreSQL (via Supabase) <br /> <span className="font-semibold">Deployment:</span> Vercel (Front-End), Railway (Back-End), GitHub (Full-Stack)</div>
                    </div>
                    <div className="justify-start">
                        <div className="text-black text-base font-lato"> <span className="font-semibold">Design:</span> Figma <br /> <span className="font-semibold">Front-End:</span> Javascript, React Native <br /> <span className="font-semibold">Back-End: </span> TBD <br /> <span className="font-semibold">Deployment:</span> TBD (Front-End), TBD (Back-End), GitHub (Full-Stack)</div>
                    </div>
                </div>
            </section>

            <section className="py-[45vw] md:py-[30vw] lg:py-[15vw]">
                <img src={first_arrow} alt="Down Arrow" className="hidden lg:block mx-auto" />
            </section>

            <section id="about" className="scroll-mt-[20vw] lg:scroll-mt-[10vw]">
                <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-6 items-center">
                    <div className="relative text-4xl flex flex-col justify-center items-center">
                        <h2 className="relative text-4xl font-montserrat text-[#000] z-[1] font-semibold text-center pb-[2vw]">
                        <span className="relative inline-block">
                            {/* First letter (or first word) */}
                                <span>Get</span>
                                {/* Left/first anchor image, sized in em so it scales with text */}
                                <img
                                    src={Group_34}
                                    alt=""
                                    aria-hidden="true"
                                    className="pointer-events-none select-none absolute -z-10 top-1/4 -left-2 -translate-x-[35%] -translate-y-1/2 w-[3em] opacity-90"
                                />
                        </span>
                            &nbsp;to know&nbsp;
                        <span className="relative inline-block text-[#3479E3]">
                        {/* Last word (or last letter wrapped if you prefer) */}
                        Me
                        {/* Right/last anchor image */}
                        <img
                            src={Group_42}
                            alt=""
                            aria-hidden="true"
                            className="pointer-events-none select-none absolute -z-[99999] top-19/20 -right-2 translate-x-[35%] -translate-y-1/2 w-[2.8em] opacity-90"
                        />
                    </span>
                </h2>
                    </div>
                    <div className="lg:mr-[4vw] items-center lg:items-start flex flex-col z-[10]">
                        <p className="text-black text-base mx-[4vw] lg:mx-[0] font-normal text-left font-Montserrat">
                            Hi, I’m Christian Wilkins — a computer science student with a strong UX
                            design foundation and aspirations to become a software engineer,
                            bridging the gap between design and development. I’m currently building
                            and launching SaaS products that tackle various pain points to make life
                            a bit easier for users.
                            <br />
                            <br />
                            I’ve been in the work force for the entirety of my education so that I
                            could “pay my way” through school. That being said, working full-time
                            and balancing CS courses has cultivated the most integral trait to my
                            success - work ethic. I truly view roadblocks and challenges as a way to
                            surpass my limits and it’s that kind of thinking that has helped me grow
                            so much over the last several years. At the end of the day, I’m proud to
                            be someone that I can confidently say my younger self would look up to
                            and I want to keep growing and learning, hopefully with your company!
                            <br />
                            <br />
                            When I’m not building or studying or working, I enjoy playing video
                            games, nature walks, watching anime, and playing tennis although I find
                            that I’ve had less and less time for those hobbies recently haha.
                            <br />
                            <br />
                            Please take a look at my resume and reach out! I’d love to connect to
                            hear about what you or your company are working on, see if my skills
                            would be a good fit, and where I could get involved!
                            </p>
                        <a 
                            href="https://drive.google.com/file/d/1Et7nGGma3Lk9wERtdt2YxN8yhiHwuuxs/view?usp=sharing" 
                            className="lg:w-1/6 mt-[3vw] md:mt-[1vw] px-[2vw] lg:px-[1vw] py-[1vw] lg:py-[0.5vw] font-lato italic
                            text-black
                            bg-blue-500/20 
                            rounded-[59px]
                            bg-gradient-to-r
                            from-white/5 to white/30
                            shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.25)] 
                            backdrop-blur-[20px] 
                            hover:bg-white/20 hover:border-white/40 hover:text-blue-500 hover:shadow-[0px_8px_32px_rgba(0,0,0,0.37)]
                            transition-all duration-500"> View Resume 
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-[45vw] md:py-[30vw] lg:py-[15vw]">
                <img src={first_arrow} alt="Down Arrow" className="hidden lg:block mx-auto" />
            </section>

            <section id="contact" className="mx-[5vw] pb-[12vw] relative flex flex-col items-center xl:flex-row">
                <div className="xl:hidden flex relative flex-col items-start justify-center items-center pb-[5vw] xl:ml-[20vw]">
                    <h2 className="relative text-4xl font-montserrat text-[#000] z-[1] font-semibold text-center pb-[1vw]">
                        <span className="relative inline-block">
                            {/* First letter (or first word) */}
                                <span>Let</span>
                                {/* Left/first anchor image, sized in em so it scales with text */}
                                <img
                                    src={Group_34}
                                    alt=""
                                    aria-hidden="true"
                                    className="pointer-events-none select-none absolute -z-10 top-1/4 -left-2 -translate-x-[35%] -translate-y-1/2 w-[3em] opacity-90"
                                />
                        </span>
                            &nbsp;me get to know&nbsp;
                        <span className="relative inline-block text-[#3479E3]">
                        {/* Last word (or last letter wrapped if you prefer) */}
                        You
                        {/* Right/last anchor image */}
                        <img
                            src={Group_42}
                            alt=""
                            aria-hidden="true"
                            className="pointer-events-none select-none absolute -z-[99999] top-19/20 -right-2 translate-x-[35%] -translate-y-1/2 w-[2.8em] opacity-90"
                        />
                    </span>
                </h2>
                </div>
                <div id="socials" className="xl:hidden grid grid-cols-3 mt-[0.5vw] mb-[10vw] gap-6">
                    <a href="http://www.linkedin.com/in/christian-a-wilkins" className="flex items-center gap-x-[10px]">
                        <div className="bg-blue-500/20 rounded-[59px] shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.25)] backdrop-blur-[20px]">
                            <img src={linkedin} alt="LinkedIn Logo" className="w-[10vw] h-[10vw] p-[2vw]" />
                        </div>
                        <p className="text-black text-base font-normal text-center italic font-lato">LinkedIn</p>
                    </a>
                    <a href="https://github.com/Cawwilkins" className="flex items-center gap-x-[10px]">
                        <div className="bg-blue-500/20 rounded-[59px] shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.25)] backdrop-blur-[20px]">
                            <img src={github_1} alt="GitHub Logo" className="w-[10vw] h-[10vw] p-[2vw]" />
                        </div>
                        <p className="text-black text-base font-normal text-center italic font-lato">GitHub</p>
                    </a>
                    <a href="mailto:ChristianWilkinsInfo@gmail.com" className="flex items-center gap-x-[10px]">
                        <div className="bg-blue-500/20 rounded-[59px] shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.25)] backdrop-blur-[20px]">
                            <img src={mail} alt="Mail Logo" className="w-[10vw] h-[10vw] p-[2vw]" />
                        </div>
                        <p className="text-black text-base font-normal text-center italic font-lato">E-Mail</p>
                    </a>
                </div>
                <div id="email-card" className=" xl:items-start flex flex-col mb-[40vw] xl:mb-[0vw] items-center xl:ml-[2vw] z-[9999] py-[2vw] xl:py-[0.5vw] px-[1vw] w-[68vw] xl:w-[22vw] bg-blue-500/20 rounded-[59px] shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.25)] backdrop-blur-[20px]">
                    <label htmlFor="email" className="block w-full text-black items-center text-base pb-[10px] font-normal text-center italic font-lato">Send me a message:</label>
                    <form onSubmit={handleSubmit} className="text-stone-800 font-lato italic flex flex-col gap-y-[10px]">
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="z-[9999] w-[60vw] xl:w-[20vw] px-[2vw] xl:px-[1vw] py-[0.5vw] text-black
                            bg-blue-500/20 
                            rounded-[59px]
                            bg-gradient-to-r
                            from-white/5 to white/30
                            shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.25)] 
                            backdrop-blur-[20px] 
                            hover:bg-white/20 hover:border-white/40 hover:shadow-[0px_8px_32px_rgba(0,0,0,0.37)]
                            transition-all duration-500" placeholder="Email" required/>
                        <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="z-[8000] w-[60vw] xl:w-[20vw] px-[2vw] xl:px-[1vw] py-[0.5vw] text-black
                            bg-blue-500/20 
                            rounded-[59px]
                            bg-gradient-to-r
                            from-white/5 to white/30
                            shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.25)] 
                            backdrop-blur-[20px] 
                            hover:bg-white/20 hover:border-white/40 hover:shadow-[0px_8px_32px_rgba(0,0,0,0.37)]
                            transition-all duration-500" placeholder="Subject" required />
                        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="z-[6000] resize-none w-[60vw] xl:w-[20vw] px-[2vw] xl:px-[1vw] h-[20vw] xl:h-[10vw] py-[1vw]
                            bg-blue-500/20 
                            rounded-[25px]
                            bg-gradient-to-r
                            from-white/5 to white/30
                            shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.25)] 
                            backdrop-blur-[20px] 
                            hover:bg-white/20 hover:border-white/40 hover:shadow-[0px_8px_32px_rgba(0,0,0,0.37)]
                            transition-all duration-500" placeholder="Message" rows="4" required></textarea>
                        <button type="submit" className="z-[9999] w-1/5 xl:w-[4vw] py-[0.5vw] mb-[10px] py-[5px] font-lato italic
                            text-black
                            bg-blue-500/20 
                            rounded-[59px]
                            bg-gradient-to-r
                            from-white/5 to white/30
                            shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.25)] 
                            backdrop-blur-[20px] 
                            hover:bg-white/20 hover:border-white/40 hover:text-blue-500 hover:shadow-[0px_8px_32px_rgba(0,0,0,0.37)]
                            transition-all duration-500"> Send </button>
                    </form>
                </div>
                <div id="socials" className="hidden xl:flex flex-col mt-[1vw] ml-[3vw] gap-y-[1vw]">
                    <a href="http://www.linkedin.com/in/christian-a-wilkins" className="flex items-center gap-x-[15px]">
                        <div className="bg-blue-500/20 flex items-center rounded-[59px] shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.25)] backdrop-blur-[20px]">
                            <img src={linkedin} alt="LinkedIn Logo" className="size-[3vw] p-[10px]" />
                        </div>
                        <p className="text-black text-base font-normal text-center italic max-w-full max-h-full object contain font-lato">LinkedIn</p>
                    </a>
                    <a href="https://github.com/Cawwilkins" className="flex items-center gap-x-[15px]">
                        <div className="bg-blue-500/20 rounded-[59px] shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.25)] backdrop-blur-[20px]">
                            <img src={github_1} alt="GitHub Logo" className="w-[3vw] h-[3vw] p-[10px]" />
                        </div>
                        <p className="text-black text-base font-normal text-center italic font-lato">GitHub</p>
                    </a>
                    <a href="mailto:ChristianWilkinsInfo@gmail.com" className="flex items-center gap-x-[15px]">
                        <div className="bg-blue-500/20 rounded-[59px] shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.25)] backdrop-blur-[20px]">
                            <img src={mail} alt="Mail Logo" className="w-[3vw] h-[3vw] p-[10px]" />
                        </div>
                        <p className="text-black text-base font-normal text-center italic font-lato">E-Mail</p>
                    </a>
                </div>
                <div className="hidden xl:flex xl:relative flex-col justify-center items-center ml-[20vw]">
                    <h2 className="relative text-4xl font-montserrat text-[#000] z-[1] font-semibold text-center pb-[1vw]">
                        <span className="relative inline-block">
                            {/* First letter (or first word) */}
                                <span>Let</span>
                                {/* Left/first anchor image, sized in em so it scales with text */}
                                <img
                                    src={Group_34}
                                    alt=""
                                    aria-hidden="true"
                                    className="pointer-events-none select-none absolute -z-10 top-1/4 -left-2 -translate-x-[35%] -translate-y-1/2 w-[3em] opacity-90"
                                />
                        </span>
                            &nbsp;me get to know&nbsp;
                        <span className="relative inline-block text-[#3479E3]">
                        {/* Last word (or last letter wrapped if you prefer) */}
                        You
                        {/* Right/last anchor image */}
                        <img
                            src={Group_42}
                            alt=""
                            aria-hidden="true"
                            className="pointer-events-none select-none absolute -z-[99999] top-19/20 -right-2 translate-x-[35%] -translate-y-1/2 w-[2.8em] opacity-90"
                        />
                    </span>
                </h2>
                </div>
            </section>
        </main>
    );
};
export default MainPage;