import jwt from 'jsonwebtoken';

const auth =  (req, res, next) =>{
   
    try {
        const bearerHeader =  req.headers['authorization'];
        console.log("authorization",bearerHeader)
        if( bearerHeader !== undefined){
            const token= bearerHeader.split(" ")[1];
            console.log("token",token)
     
                const verifyToken = jwt.verify(token, 'test');
                 next();
        } 
       else{
        res.status(404).json({message: 'Invalid Token'})
       }

       
    } catch (error) {
        console.log(error)
    }
}
 export default auth;