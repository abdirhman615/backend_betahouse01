const { aboutModel } = require('../Models/aboutModal');
const { Aboutvalidation } = require('../Models/aboutModal');

const get = async (req, res) => {
  try {
    const data = await aboutModel.find().sort({ _id: -1 }).limit(1)
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
const getaById = async (req, res) => {
  try {
    const { id } = req.params;
    //is it null
    const getdataby = await aboutModel.findById(id);
    if (!getdataby) return res.status(404).send({ message: 'about not found' });
    res.status(200).send(getdataby);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
// post data to server
const Post = async (req, res) => {
  try {
    const { error } = Aboutvalidation(req.body);
    if (error) 
    return res.jeon(error.message);

    const getabout = await aboutModel.find().sort({ '_id': -1 }).limit(1)

    if(getabout.length>0){
      const Updated = await aboutModel.findByIdAndUpdate(getabout[0]._id, 
        {
          FaahFaahin:req.body.FaahFaahin,
          FaahFaaahinYar:req.body.FaahFaaahinYar
        },{new:true});
      // await postabout.save();
      res.status(200).send({message:"updated seceesfully"});
      
  
    }
    else{
      const postabout = await aboutModel(req.body);
      await postabout.save();
      res.status(201).send({ status: true, postabout, message: 'successfully saved' });
  

    }
   } catch (error) {
    res.status(404).send(error.message);
  }
};
module.exports = {  get, Post ,getaById,};