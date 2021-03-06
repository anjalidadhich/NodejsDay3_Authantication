var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
router.use(function(req,res,next){
    var token=req.headers['x-access-token'];
    console.log(token);
if(token)
{
jwt.verify(token,global.config.secretKey,{algorithm:global.config.algorithm},function(err,decode){
    if(err)
    {
        let errordata={
            message:err.message,
            expireAt:err.expiredAt
        }
        console.log(errordata);
        return res.status(401).json({message:"UnAuthorised  Access"});
    }
    req.decode=decode;
    console.log(decode);
    next();
})
}
else
{
    return res.status(403).json({message:"Forbidden Access"});
}

})
module.exports=router;
