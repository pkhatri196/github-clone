// Models are made to create table(of RDBMS) ~ collections in our Database

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    default: "",
  },
  profileUrl: {
    type: String,
    required: true,
  },
  avatarUrl: {
    type: String,
  },
  likedProfiles: {
    type: [String],
    default: [],
  },
  likedBy: [
    {
      username: {
        type: String,
        required: true,
      },
      avatarUrl: {
        type: String,
      },
      likedDate:{
        type:Date,
        default:Date.now
      }
    },
  ],
},{timestamps:true}); //this is to include createdAt and updatedAt in our Schema

const User = mongoose.model('User',userSchema);
export default User;