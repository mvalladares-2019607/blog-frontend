import { Card } from "./CardPosts";

export const PostList = ({ posts }) => {
    console.log("Datos de posts:", posts);

    return (
        <div className="max-w-screen-2xl mx-auto p-5 sm:p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                {posts.map(post => (
                    <Card key={post._id} data={post} />
                ))}
            </div>
        </div>
    );
};