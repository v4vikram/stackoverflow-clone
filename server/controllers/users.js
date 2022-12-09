import mongoose from 'mongoose';
import users from '../models/auth.js';

const getAllUsers = async (req, res)=>{
    try {

        const allUsers = await users.find();
        const allUserDetails = [];

       allUsers.forEach((users)=>{
            allUserDetails.push({_id: users.id, user: users.name})
       });
       res.status(200).json(allUserDetails)

    } catch (error) {
        console.log(error)
        res.status(404).json({error:error})
    }
}
const updateProfile = async (req, res) =>{
    console.log(req.body)
    const {id: _id} = req.params;
    const {name, about, tags} = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('question unavailable...');
    }

    try {
        const updatedProfile = await users.findByIdAndUpdate(_id, {$set: {'name':name}}, {new: true});
        res.status(200).json(updatedProfile) 
    } catch (error) {
        res.status(405).json({message: error.message})
    }
}
export  {getAllUsers, updateProfile}