import axios from 'axios';
const url = 'http://localhost:5000/posts';
export const fetchPosts = async() =>{
    const response = await axios.get(url);
    return response.data;
};
export const createPost = async(postData)=>{
    const response = await axios.post(url, postData, {
        headers: {
    "Content-Type": "application/json"
    },
      });
      console.log(response.data);
    return response.data;
}
export const updatePost = async(id, postData)=>{
    const response = await axios.patch(`${url}/${id}`, postData,  {
        headers: {
    "Content-Type": "application/json"
    },
      });
      console.log(response.data);
    return response.data;
}