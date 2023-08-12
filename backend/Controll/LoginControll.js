
const { UserModal,LoginValidate } = require("../Models/userModal");
const bcrypt=require('bcrypt')
let jwt = require('jsonwebtoken');
require('dotenv').config();

//login function
const loginRouter = async (req, res) => {
    try {
        // validation
        const { error } = LoginValidate(req.body);
        if (error) return res.status(449).send(error.message);
    
        // find user data
        const usergetdata = await UserModal.findOne({
            username: req.body.username,
        });
        if (!usergetdata)
          return res.status(401).send({
            status: false,
            message: 'username or password is incorrect',
          });
    
        // check password
        const checkpass = await bcrypt.compare(
          req.body.Password,
          usergetdata.Password
        );
        if (!checkpass)
          return res.status(401).send({
            status:false,
            message: 'username or password is incorrect',
          });
        // token using jwt
        const token = jwt.sign(
          {
            id: usergetdata._id,
            username: usergetdata.username,
            Role:usergetdata.Role
          },
         "acbfa14fb74b48e273b6a4e911ed9fd7a9f5a3355ceda4ac0b68fa42b2527097niofh89nnspjfhusf"
        );
        res.status(200).header('token', token).json({
          status: true,
          message: 'successfully logged in',
          token: token,
        });
      } catch (error) {
        res.status(400).send(error.message);
      }
};

module.exports = {loginRouter};