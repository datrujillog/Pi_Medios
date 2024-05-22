
import userRepository from "../repository/userRepository.js";


const auth = async (req, res, next) => {
    const userId = req.header('Auth'); 
    if (!userId) {
        return res.status(401).send('Unauthorized');
    }
    const user = await userRepository.findUserById(userId);
    if (!user) {
        return res.status(403).send('Forbidden');
    }
    req.user = user;
    next();
};


async function adminValidation(req,res,next){
    if(req.user.roles.name ==="admin"){
        return next()
    }else{
        return res.status(400).json({
            error:true,
            message:"Insufficient permissions"
        })
    }
}


function employeeValidation(req,res,next){
    if(req.user.roles.name==="employee"){
        return next()
    }else{
        return res.status(400).json({
            error:true,
            message:"Insufficient permissions"
        })
    }
}



function authMiddleware(type){
    let middlewares
    if(type==="employee"){
        middlewares=[auth,employeeValidation]
    }else if(type==="admin"){
        middlewares=[auth,adminValidation]
    }else{
        middlewares=[]
    }

    return middlewares
}


export default authMiddleware