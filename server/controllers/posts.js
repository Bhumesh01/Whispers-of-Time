import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";
export const getPost =  async (req,res)=>{
    try{
        const postMessages = await PostMessage.find();
        res.status(200).json({messages: postMessages});
    }
    catch(error){
        res.status(404).json({error: error.message});
    }
}
export const createPost = async (req, res)=>{
    const post = req.body;
    const newPost = new PostMessage(post);
    try{
        await newPost.save();
        res.status(201).json({messages: newPost});
    }
    catch(error){
        res.status(409).json({error: error.message});
    }
}
export const updatePost = async (req, res) =>{
    console.log(req.params);
    const { id: _id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("No post with that id");
    }
    try{
        const post = req.body;
        console.log(req.body);
        const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new: true});
        console.log(updatedPost);
        res.json(updatedPost);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}
export const deletePost = async (req, res) =>{
    console.log(req.params);
    const { id: _id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("No post with that id");
    }
    try{
        await PostMessage.findByIdAndDelete(_id);
        res.json({message: "Post deleted successfully"});
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}
export const likePost = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No post with that id");
    }
    try {
        const post = await PostMessage.findById(_id);
        const updatedPost = await PostMessage.findByIdAndUpdate(
            _id,
            { LikeCount: post.LikeCount + 1 },
            { new: true }
        );
        res.json(updatedPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}