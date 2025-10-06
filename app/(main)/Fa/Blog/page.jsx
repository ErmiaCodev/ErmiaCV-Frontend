import BlogClient from "./client"

export const metadata = {
    title: "ارمیا مقدمی | وبلاگ"
}

export default async function BlogPage() {
    const baseUrl = process.env.API_URL
    const res = await fetch(`${baseUrl}/api/posts/`)
    
    if (!res.ok) {
        return (
            <>
                <h1 className="pt-8 font-bold text-center text-3xl">500 Server Error!</h1>
            </>
        )
    }

    const body = await res.json()
    const data = body.filter(e => e.lang == "fa")

    return (
        <>
            <BlogClient data={data} />
        </>
    )


} 