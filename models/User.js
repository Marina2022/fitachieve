import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  themes: [
    {
      themeName: String,
      planPerDay: Number,
      timeChunk: Number,
      workouts: [
        {
          date: Date,
          workedMinutes: Number
        }
      ]    
    }
  ]  
})

const User = mongoose.models.User || mongoose.model('User', UserSchema)

export default User
