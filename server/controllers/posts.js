import PostMessage from "../models/postMessage.js";

export const getPost =  (req,res)=>{
    res.status(200).send("This works");
}
export const createPost = (req, res)=>{
    res.status(200).send("Post creation");
}