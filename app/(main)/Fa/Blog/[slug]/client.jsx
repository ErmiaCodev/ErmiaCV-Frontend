import Head from "next/head";

export default function PageClient({ post, contentHtml }) {
    return (
        <>
            <Head>
                <title>My page title</title>
            </Head>
            <div className="px-4 py-4 lg:py-8 mt-8 container mx-auto max-w-6xl bg-white dark:bg-gray-700 rounded-2xl shadow-md">
                <img className="mx-auto max-w-180 w-full aspect-video object-cover rounded-2xl shadow-lg" src={post.thumbnail ?? ""} alt="" />
                <h1 className="mt-5 text-center text-3xl font-bold">
                    {post.title}
                </h1>

                <article dir="rtl" className="rtl prose lg:prose-xl lg:px-2" dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </div>
        </>)
} 