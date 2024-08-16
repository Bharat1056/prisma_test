import prisma from "../../../../prisma/db"

type paramsType = {
    title: string
}

export default async function PostPage({ params }: { params: paramsType }) {
    const post = await prisma.post.findUnique({
        where: {
            title: params.title,
        },
    })
    return (
        <>
            <main className="h-screen flex flex-col items-center justify-center gap-y-10 text-center bg-gray-900 text-white shadow-lg">
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-green-500 shadow-inner">
                    {post?.title}
                </h1>
                <p className="text-lg leading-relaxed max-w-2xl">
                    {post?.content}
                </p>
            </main>
        </>
    )
}

