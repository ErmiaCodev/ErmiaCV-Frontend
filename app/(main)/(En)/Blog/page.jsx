import BlogClient from "./client"

export default async function BlogPage() {
    try {
        const baseUrl = process.env.API_URL
        const res = await fetch(`${baseUrl}/api/posts/`)
        const body = await res.json()
        return (
            <>
                <BlogClient data={body} />
            </>
        )
    } catch (error) {
        return (
            <div className="pt-8 px-4 container mx-auto ">
                <h1>
                    ServerSide Error!
                </h1>
            </div>
        )
    }

} 