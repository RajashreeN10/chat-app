import mongoose from "mongoose";
import {hash,genSalt} from "bcrypt";
//first we need to 
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  },
  firstName: {
    type: String,
    required:false},
  lastName: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  color: {
    type: Number,
    required: false
  },
  profileSetup: {
    type: Boolean,
    required: false
  }
});

//middleware to hash password before saving
userSchema.pre("save", async function (next) {
    const salt = await genSalt();
    this.password = await hash(this.password, salt);
    next();
});

    const User = mongoose.model("Users", userSchema);

    export default User;