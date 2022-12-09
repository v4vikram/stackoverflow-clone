import users from '../models/auth.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body);
    // res.send("done");

    try {
        const exitsUser = await users.findOne({ email: email });

        if (exitsUser) {
            return res.json({ message: "Email already exist" });
            // console.log(r);
        }
        else {
            // Hash Password
            const hashPassword = await bcrypt.hash(password, 12);

            // Create New User
            const newUser = await users.create({ name, email, password: hashPassword });

            //  Create Token
            const token = jwt.sign({ email: newUser.email, id: newUser.id }, "test", { expiresIn: '1h' });
            res.json({ result: newUser, token });
        }
    } catch (error) {
        return res.json({ message: "While create user something went wrong..." })
    }
}
export const login = async (req, res) => {
    const { email, password } = req.body;
    // console.log(req.body);

    try {

        const exitsUser = await users.findOne({ email });

        if (!exitsUser) {
            return res.json({ message: "Email not already Exist." });
        }

        const isPasswordCrt = await bcrypt.compare(password, exitsUser.password);

        if (!isPasswordCrt) {
            return res.json({ message: "Invalid Password" });
        }

        const newUser = await users.find({ email });    
        // connt [value] = newUser
        console.log(newUser)
        //  Create Token
        const token = jwt.sign({ email: newUser.email, id: newUser.id }, "test", { expiresIn: '1h' });
        // const token = jwt.sign(newUser, "test", { expiresIn: '1h' });
        return res.status(201).json({message: "Login Sucessfully", data: newUser,token});



    } catch (error) {
        res.status(404).json({ message: "While login something went wrong..." })
    }
}
