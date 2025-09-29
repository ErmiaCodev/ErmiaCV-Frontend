export default function SkillsSection({ _ref }) {
    return (
        <section ref={_ref} id="skills" className="my-4 card bg-base-100 dark:bg-gray-700 shadow-sm shrink-0 border-2 border-primary border-dashed">
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
    )
}