import axios from 'axios';
const url = 'http://localhost:5000/posts';
export const fetchPosts = async() =>{
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};
export const createPost = async(postData)=>{
    try {
        const response = await axios.post(url, postData, {
            headers: {
                "Content-Type": "application/json"
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating post:', error);
        throw error;
    }
}
export const updatePost = async(id, postData)=>{
    try {
        const response = await axios.patch(`${url}/${id}`, postData,  {
            headers: {
                "Content-Type": "application/json"
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error updating post:', error);
        throw error;
    }
}
export const deletePost = async(id)=>{
    try {
        const response = await axios.delete(`${url}/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error deleting post:', error);
        throw error;
    }
}
export const likePost = async(id)=>{
    try {
        const response = await axios.patch(`${url}/${id}/likePost`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error liking post:', error);
        throw error;
    }
}