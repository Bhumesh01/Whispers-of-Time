import { useEffect } from "react";
import Post from "./Post/post.jsx";
import { postsAtom } from "../../state/atoms/atoms.js";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { fetchPosts } from "../../api/index.js";

export default function Posts() {
    const posts = useRecoilValue(postsAtom);
    const setPosts = useSetRecoilState(postsAtom);

    useEffect(() => {
        fetchPosts().then(data => {
            // Adjust according to your API response structure
            setPosts(data.messages || data);
        });
    }, [setPosts]);

    return (
        <div className="flex flex-wrap justify-center items-center gap-8 p-2 min-h-[300px] text-text sm:m-2 font-medium bg-posts rounded-2xl border border-posts-border hover:bg-posts-hover  ">
            {!posts.length ? (
                <div className="text-white text-lg font-semibold">Loading...</div>
            ) : (
                posts.map((post) => (
                    <div key={post._id} className="w-full sm:w-1/2 md:w-1/3 flex justify-center min-w-[300px]">
                        <Post post={post} />
                    </div>
                ))
            )}
        </div>
    );
}