export default function BlogClient({ data }) {
    return (
        <div className="px-4 pt-8 container mx-auto">
            {JSON.stringify(data)}
        </div>
    )
} 