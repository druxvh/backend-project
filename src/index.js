import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server Started on PORT ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Mongo db connection failed`, err);
  });

// ;(async()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

//     } catch (error) {
//         console.error("Error", error)
//         throw error
//     }
// })()
