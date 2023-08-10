
const { UserModal ,UserRegValidate } = require("../Models/userModal");

const bcrypt=require('bcrypt')
//get data
const get = async (req, res) => {
  try {
    const userData = await UserModal.find();
    res.status(200).send(userData);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
//getById
const getaById = async (req, res) => {
    try {
      const {id}=req.params
      const PersonaldData = await UserModal.findById(id);
      res.status(200).send(PersonaldData);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
//post data
const Post = async (req, res) => {
  try {
    //validation
    const { error } = UserRegValidate(req.body);
    if (error) return res.status(405).send(error.message);
    //post data
    const postData = new UserModal(req.body);
    postData.Password=await bcrypt.hash(postData.Password,10)
    //if user is already exit
    const allUsers=await UserModal.find({username:req.body.username})
    if(allUsers.length>0) return res.status(409).send({status:false,message:'this user allready exit'})
    //save post data
    await postData.save();
    res.status(201).send({
        status:true,
        message:'successfuly inserted',
        data:postData
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
//put
const Put = async (req, res) => {
    try {
      const {id}=req.params
    //validation
    const { error } = UserRegValidate(req.body);
      if (error) return res.send(error.message);
       //if user is already exit
       const allUsers=await UserModal.find({username:req.body.username})
    if(!allUsers) return res.status(409).send({status:false,message:'this user is not exit'})
    //put data
    req.body.Password=await bcrypt.hash(req.body.Password,10)
    const putdate =await UserModal.findByIdAndUpdate(id,req.body,{new:true});
      res.status(200).send({
        status:true,
        message:'successfuly Updated',
        data:putdate

    });
     
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  //dalete specific databyId
  const Delete=async(req,res)=>{
    try {
      const {id}=req.params
        //delete specific databyId
        const deletedata=await UserModal.findByIdAndDelete(id)
        res.status(200).send({
            status:true,
            message:'successfuly deleted',
            data:deletedata

     
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
   

  }
module.exports = { get, Post ,Put,getaById,Delete};