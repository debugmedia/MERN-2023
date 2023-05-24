import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const handleImage = (event) => {
    setImage(event.target.files[0]);
    setImagePreview(URL.createObjectURL(event.target.files[0]));
  };

  const uploadImage = async () => {
    const formData = new FormData();

    formData.append("upload_file", image);
    formData.append("firstName", "Debug Media");

    const response = await axios("http://localhost:3006/api/profile/upload", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    });

    console.log(response.data);
  };

  return (
    <>
      <img
        style={{ width: "200px", height: "200px", objectFit: "contain" }}
        src="http://localhost:3006/images/upload_file-1684950048990-876368637.jpg"
        alt=""
      />
      {imagePreview && (
        <img
          src={imagePreview}
          alt=""
          style={{ width: "200px", height: "200px", objectFit: "contain" }}
        />
      )}

      <input type="file" accept="image/*" onChange={handleImage} />
      <button onClick={uploadImage}>Upload</button>
    </>
  );
}

export default App;
