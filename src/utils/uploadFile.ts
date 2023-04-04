import axios from "axios";

export const uploadFileToCloudinary = async (file: File) => {
  const data = new FormData();
  // me deja subir un File como segundo argumento,ojo
  data.append("file", file);
  // dado que he creado un preset se lo tengo que pasar
  data.append("upload_preset", "fiverr-clone");
  // porque puedo subir imagenes sin la key??
  try {
    const res = await axios.post("https://api.cloudinary.com/v1_1/oscargm40/image/upload", data);
    return res.data.url;
  } catch (error) {
    console.log({ error });
  }
};
