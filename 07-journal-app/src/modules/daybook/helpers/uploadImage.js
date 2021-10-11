import axios from "axios";

const uploadImage = async ( file )=> {
    if(! file ) return

    try {
        const formData = new FormData();
        formData.append('upload_preset', 'journal-app');
        formData.append('file', file);
        
        const url = 'https://api.cloudinary.com/v1_1/dqhxnvwk0/image/upload';
        const { data } = await axios.post(url, formData)

        return data.secure_url

    } catch (error) {
        console.log('upload image error')
        return null
    }

}

export default uploadImage;