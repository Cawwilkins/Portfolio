import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <main className="bg-[#fffafa]">
            <nav id="nav" className="flex w-full justify-between font-montserrat bg-gradient-to-1 items-center pl-[40px] pr-[40px] py-[25px] sticky from-white/5 to-white/30 shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.25)] backdrop-blur-[20px]">
                <Link to="#nav" className="text-2xl text-[#000000] font-bold">Christian Wilkins</Link>
                <div className="flex gap-[1vw]">
                    <Link to="#nav" className="text-1xl text-[#000000] font-bold">My work</Link>
                    <Link to="#nav" className="text-1xl text-[#000000] font-bold">About Me</Link>
                    <Link to="#nav" className="text-1xl text-[#000000] font-bold">Contact</Link>
                </div>
            </nav>
            <section id="hero" className="relative flex pt-[5vw]">
                <div id="hero-text" className="flex flex-col text-left pt-[10vw] pl-[10vw]">
                    <h1 className="text-4xl font-montserrat text-[#000000] font-semibold z-[9999]">Nice to meet you, I'm<span className="text-[#3479E3]">&nbsp;Christian</span></h1>
                    <p className="text-1xl font-montserrat text-[#000000] italic font-lato z-[9999]">An aspiring full-stack software engineer blending AI/ML, UX design, and web development to create practical, human-centered tech.</p>
                    {/* Position glass effect around N*/}
                    <img src="../src/assets/bubbles.png" alt="Glass Effect" className="absolute z-[0] top-[12vw] left-[6vw]" />
                    <div className="flex gap-[2vw] pt-[0.5vw] pl-[1vw] text-base italic font-lato z-[9999] text-[#000000]">
                        <div className="px-[1vw] py-[0.5vw] bg-blue-500/20 rounded-[59px] shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.25)] backdrop-blur-[20px]">View my work</div>
                        <div className="px-[1vw] py-[0.5vw] bg-blue-500/20 rounded-[59px] shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.25)] backdrop-blur-[20px]">Read about me</div>
                        <div className="px-[1vw] py-[0.5vw] bg-blue-500/20 rounded-[59px] shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.25)] backdrop-blur-[20px]">Contact me</div>
                    </div>
                </div>
                <img src="../src/assets/headshot.png" alt="Hero Image" className="absolute right-[10vw] pt-[5vw] z-[9999]" />
                <img src="../src/assets/bottom_glass.png" alt="Bottom Glass" className="absolute right-[4vw] pt-[12vw] z-[0]" />
            </section>
            <section className="py-[15vw]">
                <img src="../src/assets/First Arrow.png" alt="Down Arrow" className="mx-auto" />
            </section>

            <section id="projects" className="relative flex flex-col">
                <div className="relative">
                    <img src="../src/assets/Group 34.png" className="absolute z-[1] top-[-2vw] left-[37vw]" />
                    <h2 className="relative text-4xl font-montserrat text-[#000000] z-[9999] font-semibold text-center pb-[1vw]">Some of my <span className="text-[#3479E3]">Projects</span></h2>
                    <img src="../src/assets/Group 42.png" className="absolute z-[0] top-[-0.5vw] left-[56vw]" />
                </div>
                <div className="grid grid-cols-3 gap-6 items-center">
                    <img src="../src/assets/Proj1.png" alt="Project 1" className="w-full" />
                    <Link to="https://antrevo.com" className="relative w-full overflow-hidden">
                        {/* Base image */}
                        <img
                            src="../src/assets/Ant1.png"
                            alt="Project default"
                            className="w-full object-cover transition-opacity duration-500"
                        />
                        {/* Hover image */}
                        <img
                            src="../src/assets/Ant2.png"
                            alt="Project hover"
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 hover:opacity-100"
                        />
                        {/* GitHub icon hotspot */}
                        <a
                            href="https://github.com/Cawwilkins/AntrEvo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-[20px] left-[26px] w-[95px] h-[70px] bg-transparent z-[1]"
                        />

                        {/* Case Study hotspot */}
                        <a
                            href="https://docs.google.com/presentation/d/1YpTxbSIjmIfVQz-zefqpc-Ujsx8tgdP5/edit?usp=sharing&ouid=115282926745936384532&rtpof=true&sd=true"
                            className="absolute bottom-[30px] right-[25px] w-[180px] h-[55px] bg-transparent z-[1]"
                        />
                    </Link>
                    <img src="../src/assets/Proj1.png" alt="Project 3" className="w-full" />
                </div>
                <div className="grid grid-cols-3 gap-6 items-center">
                    <div className="justify-start">
                        <span className="text-blue-500 text-1xl font-bold font-Montserrat">MAA-RAG</span><span className="text-black text-1xl front-semibold font-Montserrat"> - UX Designer, Full Stack SWE</span>
                    </div>
                    <div className="justify-start">
                        <span className="text-blue-500 text-1xl font-bold font-Montserrat">AntrEvo</span><span className="text-black text-1xl front-semibold font-Montserrat"> - UX Designer, Full Stack SWE</span>
                    </div>
                    <div className="justify-start">
                        <span className="text-blue-500 text-1xl font-bold font-Montserrat">Steps</span><span className="text-black text-1xl front-semibold font-Montserrat"> - UX Designer, Full Stack SWE</span>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-6 items-center">
                    <div className="justify-start">
                        <div className="text-black text-base font-lato"> <span className="font-semibold">Design:</span> Figma <br /> <span className="font-semibold">Front-End:</span> HTML, Tailwind CSS, JavaScript, and React <br /> <span className="font-semibold">Back-End:</span> Python, TBD <br /> <span className="font-semibold">Deployment:</span> TBD (Front-End), TBD (Back-End), GitHub (Full-Stack)</div>
                    </div>
                    <div className="justify-start">
                        <div className="text-black text-base font-lato"> <span className="font-semibold">Design:</span> Figma <br /> <span className="font-semibold">Front-End:</span> HTML, Tailwind CSS, JavaScript, and React <br /> <span className="font-semibold">Back-End:</span> Python (with Flask), PostgreSQL (via Supabase) <br /> <span className="font-semibold">Deployment:</span> Vercel (Front-End), Railway (Back-End), GitHub (Full-Stack)</div>
                    </div>
                    <div className="justify-start">
                        <div className="text-black text-base font-lato"> <span className="font-semibold">Design:</span> Figma <br /> <span className="font-semibold">Front-End:</span> Javascript, React Native <br /> <span className="font-semibold">Back-End: </span> TBD <br /> <span className="font-semibold">Deployment:</span> TBD (Front-End), TBD (Back-End), GitHub (Full-Stack)</div>
                    </div>
                </div>
            </section>
        </main>
    )
};
export default MainPage;