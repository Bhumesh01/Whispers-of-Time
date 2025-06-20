import { useRef, useState, useEffect } from "react";
import { createPost, fetchPosts, updatePost } from "../../api/index.js";
import { postsAtom, currentIdAtom } from "../../state/atoms/atoms.js";
import { useSetRecoilState, useRecoilState } from "recoil";
export default function Form() {
    const [posts, setPosts] = useRecoilState(postsAtom);
    const [currentId, setCurrentId] = useRecoilState(currentIdAtom);
    const creatorRef = useRef(null);
    const titleRef = useRef(null);
    const messageRef = useRef(null);
    const tagRef = useRef(null);
    const [fileBase64, setFileBase64] = useState("");

    useEffect(() => {
        if (currentId) {
            const postToEdit = posts.find(p => p._id === currentId);
            if (postToEdit) {
                creatorRef.current.value = postToEdit.creator;
                titleRef.current.value = postToEdit.title;
                messageRef.current.value = postToEdit.message;
                tagRef.current.value = postToEdit.tags.join(",");
                setFileBase64(postToEdit.selectedFile);
            }
        }
    }, [currentId, posts]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setFileBase64(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setFileBase64("");
        }
    };

    async function SubmitData(e) {
        e.preventDefault();
        if (
            !creatorRef.current.value ||
            !titleRef.current.value ||
            !messageRef.current.value ||
            !tagRef.current.value ||
            !fileBase64
        ) {
            alert("Please fill all the fields");
            return;
        }

        const postData = {
            creator: creatorRef.current.value,
            title: titleRef.current.value,
            message: messageRef.current.value,
            tags: tagRef.current.value.split(","),
            selectedFile: fileBase64,
        };
        // For updating the Posts
        if(currentId){
            const response = await updatePost(currentId, postData);
            if (response) {
                const newPosts = await fetchPosts();
                setPosts(newPosts.messages);
                setCurrentId(null);
                creatorRef.current.value = "";
                titleRef.current.value = "";
                messageRef.current.value = "";
                tagRef.current.value = "";
                setFileBase64("");
            } else {
                alert("Failed to update the memory. Please try again.");
            }
        }
        else{
        // For creating the Posts 
        const response = await createPost(postData);
        if (response) {
            alert("Memory created successfully!");
            const newPosts = await fetchPosts();
            setPosts(newPosts.messages);
            creatorRef.current.value = "";
            titleRef.current.value = "";
            messageRef.current.value = "";
            tagRef.current.value = "";
            setFileBase64("");
        } else {
            alert("Failed to create memory. Please try again.");
        }
        }
    }

    return (
        <div className="max-w-md mx-auto bg-form p-6 rounded-2xl shadow-lg">
            <h1 className="text-2xl font-bold text-center mb-6 text-text">Post a Memory</h1>
            <form className="space-y-4" onSubmit={SubmitData}>
                <input ref={creatorRef} className="w-full rounded-lg p-2 bg-background text-text placeholder-gray-400" type='text' placeholder='Creator' />
                <input ref={titleRef} className="w-full rounded-lg p-2 bg-background text-text placeholder-gray-400" type='text' placeholder='Title' />
                <input ref={messageRef} className="w-full rounded-lg p-2 bg-background text-text placeholder-gray-400" type='text' placeholder='Message' />
                <input ref={tagRef} className="w-full rounded-lg p-2 bg-background text-text placeholder-gray-400" type='text' placeholder='Tags' />
                <input className="w-full rounded-lg p-2 bg-background text-text" type='file' multiple={false} onChange={handleFileChange} />
                <div className="flex gap-4 justify-center mt-4">
                    <button type="submit" className="bg-button text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-button-hover">Submit</button>
                    <button type="clear" className="bg-gray-500 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-gray-600">Clear</button>
                </div>
            </form>
        </div>
    );
}
