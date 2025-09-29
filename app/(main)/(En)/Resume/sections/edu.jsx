export default function EduSection({ _ref }) {
    return (
        <section ref={_ref} id="education" className="my-4 card bg-base-100 dark:bg-gray-700 shadow-sm shrink-0 border-2 border-primary border-dashed">
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
                <img className="w-20 h-20 rounded-full !aspect-square object-cover border-2 bg-white" src="/assets/logos/sampad.png" alt="Ermia Moghadamy" />
                <div className="grow">
                    <p className="text-xl lg:text-xl font-bold">Diploma of Mathematics</p>
                    <p className="lg:text-lg">
                        Darolfonoon talented high school
                    </p>
                </div>
            </div>
        </section>
    )
}