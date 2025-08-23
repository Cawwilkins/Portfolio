import { useState } from "react";
import {ant1} from "../assets/Ant1.png"
import {ant2} from "../assets/Ant2.png"
import {bottom_glass} from "../assets/bottom_glass.png"
import {bubbles} from "../assets/bubbles.png"
import {first_arrow} from "../assets/Arrow.png"
import {github_1} from "../assets/github.png"
import {Group_34} from "../assets/Group_34.png"
import {Group_42} from "../assets/Group_42.png"
import {headshot} from "../assets/headshot.png"
import {linkedin} from "../assets/LinkedIn.png"
import {mail} from "../assets/mail.png"
import {proj1} from "../assets/Proj1.png"

const handleSubmit = async (e) => {
    e.preventDefault();

    const formE1 = e.currentTarget;

    console.log("Submitting message:", message);

    try {
        const res = await fetch('/api/messageHandler', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, subject, message }),
        });

        // for debugging
        const debugBody = await res.clone().text(); 
        console.log('messageHandler API → status:', res.status, 'body:', debugBody);
        console.log("Response status:", res.status);

        const payload = await res.json().catch(() => ({}));

        if (res.ok) {
            alert("Message has been sent! I will follow-up with you as soon as possible\n Thank you for visiting!");
            setSubject('');
            setEmail('');
            setMessage('');
            formE1.reset();
        } else if (res.status === 400) {
            alert(payload.error || "Invalid email");
        } else {
            console.error('Unexpected: ', res.status, payload);
            alert("Something went wrong, please try again later.");
        }
    } catch (err) {
        console.error("Error during fetch:", err);
        alert("Network error. Check console.");
    }
};


const MainPage = () => {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    return (
        <main className="bg-[#fffafa] scroll-smooth">
            <nav id="nav" className="top-2 z-[99999] bg-blue-500/20 mx-auto flex w-[95%] items-center rounded-[20px] justify-between font-montserrat bg-gradient-to-r items-center pl-[40px] pr-[40px] py-[15px] sticky from-white/5 to-white/30 shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.25)] backdrop-blur-[20px]">
                <a href="#hero" className="text-2xl text-[#000000] transition-colors duration-500 hover:text-[#3479E3] font-bold"><span className="text-[#3479E3]">C</span>hristian <span className="text-[#3479E3]">W</span>ilkins</a>
                <div className="flex gap-[1.5vw]">
                    <a href="#projects" className="text-1xl text-[#000000] hover:text-[#3479E3] font-semibold transition-colors duration-500">My work</a>
                    <a href="#about" className="text-1xl text-[#000000] hover:text-[#3479E3] font-semibold transition-colors duration-500">About Me</a>
                    <a href="#contact" className="text-1xl text-[#000000] hover:text-[#3479E3] font-semibold transition-colors duration-500">Contact</a>
                </div>
            </nav>
            <section id="hero" className="relative flex pt-[5vw] scroll-mt-[100vw]">
                <div id="hero-text" className="flex flex-col text-left pt-[10vw] pl-[10vw]">
                    <h1 className="text-4xl font-montserrat text-[#000000] font-semibold z-[9999]">Nice to meet you, I'm<span className="text-[#3479E3]">&nbsp;Christian</span></h1>
                    <p className="text-1xl font-montserrat text-[#000000] italic font-lato z-[9999]">An aspiring full-stack software engineer blending AI/ML, UX design, and web development to create practical, human-centered tech.</p>
                    {/* Position glass effect around N*/}
                    <img src={bubbles} alt="Glass Effect" className="absolute z-[0] top-[12vw] left-[6vw]" />
                    <div className="flex gap-[2vw] pt-[0.5vw] pl-[1vw] text-base italic font-lato z-[9999] text-[#000000]">
                        <a
                            href="#projects"
                            className="px-[1vw] py-[0.5vw] 
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
                            className="px-[1vw] py-[0.5vw] 
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
                            className="px-[1vw] py-[0.5vw] 
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
                <img src={headshot} alt="Hero Image" className="absolute right-[10vw] pt-[5vw] z-[9999]" />
                <img src={bottom_glass} alt="Bottom Glass" className="absolute right-[4vw] pt-[12vw] z-[0]" />
            </section>
            
            <section className="py-[15vw]">
                <img src={first_arrow} alt="Down Arrow" className="mx-auto" />
            </section>

            <section id="projects" className="relative flex flex-col scroll-mt-[5vw]">
                <div className="relative">
                    <img src={Group_34} className="absolute z-[1] top-[-2vw] left-[37vw]" />
                    <h2 className="relative text-4xl font-montserrat text-[#000000] z-[9999] font-semibold text-center pb-[1vw]">Some of my <span className="text-[#3479E3]">Projects</span></h2>
                    <img src={Group_42} className="absolute z-[0] top-[-0.5vw] left-[56vw]" />
                </div>
                <div className="grid grid-cols-3 gap-6 items-center">
                    <img src={proj1} alt="Project 1" className="w-full" />
                    <div className="relative group w-full overflow-hidden">
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
                    <img src={proj1} alt="Project 3" className="w-full" />
                </div>
                <div className="grid grid-cols-3 gap-6 items-center">
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
                <div className="grid grid-cols-3 gap-6 items-center">
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

            <section className="py-[15vw]">
                <img src={first_arrow} alt="Down Arrow" className="mx-auto" />
            </section>

            <section id="about" className="scroll-mt-[10vw]">
                <div className="grid grid-cols-2 gap-6 items-center">
                    <div className="relative flex flex-col justify-center items-center">
                        <img src={Group_34} className="absolute z-[1] top-[-2vw] left-[14vw]" />
                        <h2 className="relative text-4xl font-montserrat text-[#000000] z-[9999] font-semibold text-center pb-[1vw]">Get to know <span className="text-[#3479E3]">Me</span></h2>
                        <img src={Group_42} className="absolute z-[0] top-[-0.5vw] left-[29vw]" />
                    </div>
                    <div className="mr-[2vw] flex flex-col">
                        <p className="text-black text-base font-normal text-left font-Montserrat">
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
                            className="w-1/6 mt-[1vw] px-[1vw] py-[0.5vw] font-lato italic
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

            <section className="py-[15vw]">
                <img src={first_arrow} alt="Down Arrow" className="mx-auto" />
            </section>

            <section id="contact" className="mx-[5vw] pb-[12vw] relative flex ">
                <div id="email-card" className="flex flex-col ml-[2vw] z-[9999] w-[20vw] py-[0.5vw] px-[1vw] w-[22vw] bg-blue-500/20 rounded-[59px] shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.25)] backdrop-blur-[20px]">
                    <label htmlFor="email" className="text-black text-base pb-[10px] font-normal text-center italic font-lato">Send me a message:</label>
                    <form onSubmit={handleSubmit} className="text-stone-800 font-lato italic flex flex-col gap-y-[10px]">
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="z-[9999] w-[20vw] px-[1vw] py-[0.5vw] text-black
                            bg-blue-500/20 
                            rounded-[59px]
                            bg-gradient-to-r
                            from-white/5 to white/30
                            shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.25)] 
                            backdrop-blur-[20px] 
                            hover:bg-white/20 hover:border-white/40 hover:shadow-[0px_8px_32px_rgba(0,0,0,0.37)]
                            transition-all duration-500" placeholder="Email" required/>
                        <input type="subject" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="z-[8000] w-[20vw] px-[1vw] py-[0.5vw] text-black
                            bg-blue-500/20 
                            rounded-[59px]
                            bg-gradient-to-r
                            from-white/5 to white/30
                            shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.25)] 
                            backdrop-blur-[20px] 
                            hover:bg-white/20 hover:border-white/40 hover:shadow-[0px_8px_32px_rgba(0,0,0,0.37)]
                            transition-all duration-500" placeholder="Subject" required />
                        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="z-[6000] resize-none w-[20vw] px-[1vw] h-[10vw] py-[1vw]
                            bg-blue-500/20 
                            rounded-[25px]
                            bg-gradient-to-r
                            from-white/5 to white/30
                            shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.25)] 
                            backdrop-blur-[20px] 
                            hover:bg-white/20 hover:border-white/40 hover:shadow-[0px_8px_32px_rgba(0,0,0,0.37)]
                            transition-all duration-500" placeholder="Message" rows="4" required></textarea>
                        <button type="submit" className="z-[9999] w-[4vw] py-[0.5vw] mb-[10px] pb-[10px] font-lato italic
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
                <div id="socials" className="flex flex-col mt-[1vw] ml-[3vw] gap-y-[1vw]">
                    <a href="http://www.linkedin.com/in/christian-a-wilkins" className="flex items-center gap-x-[15px]">
                        <div className="bg-blue-500/20 rounded-[59px] shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.25)] backdrop-blur-[20px]">
                            <img src={linkedin} alt="LinkedIn Logo" className="w-[3vw] h-[3vw] p-[10px]" />
                        </div>
                        <p className="text-black text-base font-normal text-center italic font-lato">LinkedIn</p>
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
                <div className="relative flex flex-col justify-center items-center ml-[20vw]">
                    <img src={Group_34} className="absolute z-[1] top-[8vw] left-[-3vw]" />
                    <h2 className="relative text-4xl font-montserrat text-[#000000] z-[9999] font-semibold text-center pb-[1vw]">Let me get to know <span className="text-[#3479E3]">You</span></h2>
                    <img src={Group_42} className="absolute z-[0] top-[9.5vw] left-[19.5vw]" />
                </div>
            </section>
        </main>
    );
};
export default MainPage;