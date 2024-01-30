import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        
    },
    avatar: {
        type: String,
        default: "https://imgs.search.brave.com/iqHOypPh9BtyIsXmh2YIy3YRN7247eJtoDhOwuiTKFQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yMC83Ni9t/YW4tYXZhdGFyLXBy/b2ZpbGUtdmVjdG9y/LTIxMzcyMDc2Lmpw/Zw",
    },
},{timestamps:true})


const User = mongoose.model("User",userSchema);

export default User;