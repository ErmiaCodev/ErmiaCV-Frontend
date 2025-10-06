export default function BioSection({ _ref }) {
    return (
        <section ref={_ref} id="bio" className="my-4 card bg-base-100 dark:bg-gray-700 shadow-sm shrink-0 border-2 border-primary border-dashed">
            <h2 className="pt-3 lg:pt-5 text-center text-primary font-bold text-2xl lg:text-3xl">
                Biography
            </h2>
            <div className="px-6 pb-6 flex flex-col sm:flex-row gap-6 items-center">
                <div>
                    <img className="pt-3 sm:pt-0 max-w-32 aspect-square h-auto rounded-full object-cover" src="/assets/Ermia-Moghadamy.png" alt="Ermia Moghadamy" />
                </div>
                <div className="grow">
                    <h1 className="py-4 text-xl lg:text-2xl font-bold">Ermia Moghadamy</h1>
                    <p className="lg:text-xl">
                        I'm Ermia Moghadamy (Ermia Codev), Programmer, Fullstack Developer, DevOps, DataScientist, Official TVET Instructor. <br />
                        <strong className="text-rose-500 text-xs">
                            Learning never ends
                        </strong>
                    </p>
                </div>
            </div>
        </section>
    )
}