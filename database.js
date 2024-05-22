import mongoose from 'mongoose'

let connected = false
const connectDB = async () => {

  if (connected) {
    // console.log('Database is already connected')
    return
  }
  mongoose.set('strictQuery', true)

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // Other options can be added here if needed
  };
  
  try {
    await mongoose.connect(process.env.MONGODB_URI, options)
    console.log('database successfully connected')
    connected = true
  } catch (err) {
    console.log(err)
  }
}

export  default connectDB

