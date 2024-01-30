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
        default: "https://imgs.search.brave.com/X8XBdsNuRyB13azwUXZWjhQ2SHkdd4wRxsQJuYl0gOg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvNTMvNTMxMzMu/cG5n"
    },
},{timestamps:true})


const User = mongoose.model("User",userSchema);

export default User;