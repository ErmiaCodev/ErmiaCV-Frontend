import PageClient from "./client"
import { remark } from 'remark'
import html from 'remark-html'

export async function generateMetadata({
    params,
}) {
    const { slug } = await params

    const baseUrl = process.env.API_URL
    const res = await fetch(`${baseUrl}/api/posts/${slug}/`)
    const data = await res.json()


    return {
        title: `Ermia Codev | ${data.title}`,
    }
}

export default async function Page({ params }) {
    const { slug } = await params

    const baseUrl = process.env.API_URL
    const res = await fetch(`${baseUrl}/api/posts/${slug}/`)

    if (!res.ok) {
        return <h2 className="text-center text-3xl font-bold">500 Error!</h2>
    }

    const data = await res.json()

    const processedContent = await remark()
        .use(html)
        .process(data.caption);

    const contentHtml = processedContent.toString();

    return (
        <>
            <PageClient post={data} contentHtml={contentHtml} />
        </>
    )
}