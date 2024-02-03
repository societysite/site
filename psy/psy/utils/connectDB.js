import mongoose from "mongoose"

async function connectDb() {
 
        if (mongoose.connections[0].readyState) return;
        
        await mongoose.connect(process.env.MONGODB_URI)

        console.log(" Conected DB :)")
  
}

export default connectDb 