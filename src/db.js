import mongoose from 'mongoose'
export const connectDB = async () => {
  try {
    mongoose.connect('mongodb://localhost:27017/merndb', {
      autoIndex: true,
      family: 4
    })
    console.log('Mongodb conected in express and node')
  } catch (error) {
    console.log(error)
  }
}
