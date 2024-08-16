import Link from "next/link"
import prisma from "../../prisma/db"

async function Post() {
    const posts = await prisma.post.findMany()
    return (
        <>
            <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 p-8">
                <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 mb-8">
                    All Posts ({posts.length})
                </h1>
                <ul className="w-full max-w-xl bg-gray-800 bg-opacity-60 backdrop-blur-lg shadow-2xl rounded-xl border border-gray-700 divide-y divide-gray-700">
                    {posts.map((post) => (
                        <li
                            key={post.id}
                            className="flex items-center justify-between px-6 py-4 hover:bg-gray-700/50 transition cursor-pointer"
                        >
                            <Link
                                href={`/posts/${post.title}`}
                                className="text-lg text-gray-300 font-medium hover:text-green-400 transition-all duration-300"
                            >
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Post