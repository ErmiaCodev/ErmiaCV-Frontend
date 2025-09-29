export default function RewardsSection({ _ref }) {
    return (
        <section ref={_ref} id="education" className="my-4 card bg-base-100 dark:bg-gray-700 shadow-sm shrink-0 border-2 border-primary border-dashed">
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
                        Kharazmi festival Mathematics major submajor of hardware controllers using Arduino & Adafruit. (MathBox)
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
    )
}