import moment from 'moment';
import { currentIdAtom } from '../../../state/atoms/atoms.js';
import { useSetRecoilState } from 'recoil';
export default function Post({ post }) {
    const setCurrentId = useSetRecoilState(currentIdAtom);
    function update(){
        setCurrentId(post._id);
    }
    return (
        <div className="bg-[#11224A] rounded-xl shadow-lg p-6 flex flex-col gap-4 w-100 h-[500px] mx-auto">
            <div className="flex items-center justify-between mb-2">
                <h1 className="text-lg font-bold text-white">{post.creator}</h1>
                <h5 className="text-xs text-gray-400">{moment(post.createdAt).fromNow()}</h5>
                <button onClick={update} className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-full font-bold text-lg shadow transition-colors duration-150 p-2">...</button>
            </div>
            {post.selectedFile && (
                <div className="mb-2">
                    <img loading='lazy' src={post.selectedFile} width="400" alt={post.title} className="w-full h-40 object-contain rounded-lg bg-[#080f1e]" />
                </div>
            )}
            <div className="flex flex-wrap gap-2 mb-2">
                {post.tags.map((tag, idx) => (
                    <span key={idx} className="bg-cyan-700 text-white text-xs px-2 py-1 rounded-full">#{tag}</span>
                ))}
            </div>
            <h2 className="text-xl font-semibold text-white mb-1">{post.title}</h2>
            <p className="text-gray-200 mb-2 overflow-ellipsis">{post.message}</p>
            <div className="flex justify-between items-center mt-auto">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded-lg font-semibold shadow">Like {post.LikeCount ?? 0}</button>
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-lg font-semibold shadow">Delete</button>
            </div>
        </div>
    );
}