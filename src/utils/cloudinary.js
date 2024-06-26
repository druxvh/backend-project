import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localPath) => {
  try {
    if (!localPath) return null;

    // upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localPath, {
      resource_type: "auto",
    });
    //file has been uploaded successfully
    console.log("file has been uploaded ", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localPath); //removes the locally saved temp file as the upload got failed
    return null;
  }
};

export { uploadOnCloudinary };
