export default function ResumePage() {
    return (
        <>
            <section id="bio" className="my-4 card bg-base-100 shadow-sm shrink-0 border-2 border-primary border-dashed">
                <h2 className="pt-3 lg:pt-5 text-center text-primary font-bold text-2xl lg:text-3xl">
                    Biography
                </h2>
                <div className="px-6 pb-6 flex flex-row gap-6">
                    <img className="h-auto w-1/4 rounded-full lg:max-w-40 !aspect-square object-cover border-2" src="/assets/Ermia-Moghadamy.png" alt="Ermia Moghadamy" />
                    <div className="grow">
                        <h1 className="py-4 text-xl lg:text-2xl font-bold">Ermia Moghadami</h1>
                        <p className="lg:text-xl">
                            I'm Ermia Moghadami (Ermia Codev), Programmer, Fullstack Developre, DevOps, DataScientist, Official TVET Educator.
                        </p>
                    </div>
                </div>
            </section>

            <section id="skills" className="my-4 card bg-base-100 shadow-sm shrink-0 border-2 border-primary border-dashed">
                <h2 className="pt-3 lg:pt-5 text-center text-primary font-bold text-2xl lg:text-3xl">
                    Skills
                </h2>
                <div className="px-6 pb-6 grid grid-cols-2 lg:grid-cols-4 pt-4 gap-4 font-bold">
                    <div>Python</div>
                    <div>Numpy, Pandas</div>
                    <div>SciKitLearn</div>
                    <div>Data Analysis</div>

                    <div className="text-cyan-600">Go & Gin</div>
                    <div>Rust</div>
                    <div>React Native</div>
                    <div>Dart, Flutter</div>

                    <div>Html, Css, Js</div>
                    <div>Tailwind, Alpine, BS5</div>
                    <div>React, NextJs, Redux</div>
                    <div>VueJs, NuxtJs, ComAPI</div>

                    <div>Flask +SqlAlchemy</div>
                    <div className="text-green-700">Django, DRF</div>
                    <div>Php, Laravel</div>
                    <div>NestJs,GraphQL</div>

                    <div>Postgres, Mongo, Redis</div>
                    <div>Docker, Git, CI/CD</div>
                    <div>Linux (LPIC-1&2)</div>
                    <div>Automation with ShellScript</div>

                </div>
            </section>

            <section id="education" className="my-4 card bg-base-100 shadow-sm shrink-0 border-2 border-primary border-dashed">
                <h3 className="pt-3 lg:pt-5 text-center text-primary font-bold text-2xl lg:text-3xl">
                    Education
                </h3>
                <div className="px-6 pb-6 flex flex-row gap-6 items-center">
                    <img className="w-20 h-20 rounded-full !aspect-square object-cover border-2" src="/assets/logos/sharif.png" alt="Ermia Moghadamy" />
                    <div className="grow">
                        <p className="text-xl lg:text-xl font-bold">BS of Applied Mathematics</p>
                        <p className="lg:text-lg">
                            Sharif University of Technology
                        </p>
                    </div>
                </div>
                <div className="px-6 pb-6 flex flex-row gap-6 items-center">
                    <img className="w-20 h-20 rounded-full !aspect-square object-cover border-2" src="/assets/logos/sampad.png" alt="Ermia Moghadamy" />
                    <div className="grow">
                        <p className="text-xl lg:text-xl font-bold">Diploma of Mathematics</p>
                        <p className="lg:text-lg">
                            Darolfonoon talented high school
                        </p>
                    </div>
                </div>
            </section>

            <section id="education" className="my-4 card bg-base-100 shadow-sm shrink-0 border-2 border-primary border-dashed">
                <h3 className="pt-3 lg:pt-5 text-center text-primary font-bold text-2xl lg:text-3xl">
                    Rewards
                </h3>
                <div className="px-6 pb-6 flex flex-row gap-6 items-center">
                    <div className="grow">
                        <p className="text-xl lg:text-xl font-bold">WorldSkills (Web Technologies)</p>
                        <p className="lg:text-lg">
                            1st State rank plus choosen as Top 5 Country web developer for asia camp.
                        </p>
                    </div>
                </div>
                <div className="px-6 pb-6 flex flex-row gap-6 items-center">
                    <div className="grow">
                        <p className="text-xl lg:text-xl font-bold">1st Country Rank</p>
                        <p className="lg:text-lg">
                            Kharazmi festival Mathematics major submajor of hardware controllers using Arduino&Adafruit. (MathBox)
                        </p>
                    </div>
                </div>
                <div className="px-6 pb-6 flex flex-row gap-6 items-center">
                    <div className="grow">
                        <p className="text-xl lg:text-xl font-bold">2nd Country Rank</p>
                        <p className="lg:text-lg">
                            2nd Country Rank at Pazhoheshsara Coding Festival submodule of Intractive web design.
                        </p>
                    </div>
                </div>
            </section>

            <section id="expriences">
                
            </section>
        </>
    )
}