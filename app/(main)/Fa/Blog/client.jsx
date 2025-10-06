import PostCard from "./postCard";

export default function BlogClient({ data }) {
    return (
        <div className="px-4 pt-8 container mx-auto max-w-6xl">
            <h1 className="text-center font-bold text-3xl">
                وبلاگ شخصی من
            </h1>
            <section className="mt-12 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols04">
                {
                    data.map((post, i) => (
                        <PostCard key={i} post={post} />
                    ))
                }
            </section>
        </div>
    )
} 