import { v2 as cloudinary } from 'cloudinary';
import { log } from 'console';
import fs from 'fs'



cloudinary.config({ 
    cloud_name: process.env.CLOUDNAME, 
    api_key:process.env.CLOUDAPI,
    api_secret:process.env.APISECRET
    
});
const uploadOnCLoudnary = async (localFilePath)=>{

    try{
        if(!localFilePath) return null
        // log("localFilePath",localFilePath)
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto",
            folder:"BlogApp",
        })
        // log("response",response)
        // console.log("file is uploaded on cloudinary",response.url);
        fs.unlinkSync(localFilePath)
        // console.log(response);
        return response;
       

    }
    catch(error){
        fs.unlinkSync(localFilePath)
        console.log("error.message",error.message);
        return null
        
    }
}

export default uploadOnCLoudnary
