import Link from "next/link";

export default function ResumeLayout({ children }) {
    return (
        <div className="container mx-auto px-2 lg:px-6 py-6 flex flex-col lg:flex-row gap-4">
            <section className="flex flex-col w-full lg:w-1/3">
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                    <Link className="btn btn-primary btn-outline rounded-xl " href="#bio">
                        Biography
                    </Link>
                    <Link className="btn btn-primary btn-outline rounded-xl " href="#skills">
                        Skills
                    </Link>
                    <Link className="btn btn-primary btn-outline rounded-xl " href="#education">
                        Education
                    </Link>
                    <Link className="btn btn-primary btn-outline rounded-xl " href="#expriences">
                        Expriences
                    </Link>
                </div>
            </section>
            <section className="grow max-h-[68vh] lg:max-h-[80vh] overflow-y-scroll flex-col gap-12 lg:px-4 lg:py-2">
                {children}
            </section>
        </div>
    )
}