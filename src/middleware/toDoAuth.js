const validateToken=async(req,res,next)=>{
    try{
        const token=req.headers.authorization;
        const response=await fetch(`http://localhost:5000/user/token/validate?token=${token}`);
        if(response.status===500){
            throw new Error('Invalid token');
        }
        next();

    }catch(err){
        res.status(500).json({
            message:err.message
        });
    }
};

module.exports={validateToken};