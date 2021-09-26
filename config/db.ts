import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI!);
	} catch (error) {
		console.log("Connection Error", error);
	}

	const connection = mongoose.connection;
	if (connection.readyState >= 1) {
		console.log("Connected to Database");
		return;
	}

	connection.on("error", () => console.log("Connection Failed"));

}

export default connectDB;