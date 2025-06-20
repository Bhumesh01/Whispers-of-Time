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
    const post = req.body;
    console.log(req.body);
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new: true});
    console.log(updatedPost);
    res.json(updatedPost);
}
export const deletePost = async (req, res) =>{
    console.log(req.params);
    const { id: _id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("No post with that id");
    }
    await PostMessage.findByIdAndRemove(_id, post);
    res.json({message: "Post deleted successfully"});
}