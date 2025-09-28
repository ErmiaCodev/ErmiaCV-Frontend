import Image from "next/image";

export default function HeroBanner({ title, caption, linkTxt, badge }) {
    return (
        <div className="bg-white dark:bg-slate-700 p-2 rounded-xl shadow-sm hover:shadow-md flex flex-col lg:flex-row gap-2 sm:gap-6">
            <Image className="w-full sm:w-2/3 lg:2/5 aspect-video object-cover rounded-xl self-center-safe" src="/assets/GeekyChunk.jpg" alt="GeekyChunk Logo" height={600} width={600} />
            <div className="py-4 lg:py-8">
                <a href="" className="inline-flex text-purple-800 bg-purple-200 font-medium text-sm py-1 px-3 rounded-full mb-4 "> {badge} </a>
                <h1 className="text-2xl lg:text-3xl font-bold">{title}</h1>
                <p className="lg:py-6 lg:text-xl text-slate-700 dark:text-slate-300">{caption}</p>
                <p className="text-primary lg:text-lg hover:underline cursor-pointer">
                    {linkTxt}
                </p>
            </div>
        </div>
    )
}