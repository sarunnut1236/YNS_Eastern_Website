import mongoose, { Model } from "mongoose";

let isConnected: boolean = false;

const connectDB = async () => {
    mongoose.set("strictQuery", true);

    if (!process.env.MONGODB_URI) {
        return console.log("MongoDB URI not found in .env file");
    }
    if (isConnected) {
        return console.log("Already connected to MongoDB");
    }

    try {
        const db: any = await mongoose
            .connect(process.env.MONGODB_URI as string)
            .catch((err) => console.error(err));
        isConnected = db.connections[0].readyState;
        return console.log(`MongoDB connected: ${db}`);
    } catch (error) {
        return console.error(error);
    }
};

export default connectDB;
