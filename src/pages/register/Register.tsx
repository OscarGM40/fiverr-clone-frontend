import { useNavigate } from "react-router-dom";
import "./Register.scss";
import { ChangeEvent, FormEvent, useState } from "react";
import { makeRequest } from "../../utils/makeRequest";
import axios from "axios";
import { uploadFileToCloudinary } from "../../utils/uploadFile";

const Register = () => {
  const [file, setFile] = useState<File | null>(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let url = "";
    if (file) {
      url = await uploadFileToCloudinary(file);
    }
    // console.log({ url });
    try {
      const resp = await makeRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      if (resp.data.ok) {
        localStorage.setItem("currentUser", JSON.stringify(resp.data.user));
        navigate("/");
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err?.response) {
          console.log(err.response.data.message);
        }
      }
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>

          <label htmlFor="">Username</label>
          <input
            name="username"
            required
            type="text"
            placeholder="Enter username (required)"
            onChange={handleChange}
          />

          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            required
            placeholder="Enter a valid email (required)"
            onChange={handleChange}
          />

          <label htmlFor="">Password</label>
          <input
            name="password"
            type="password"
            required
            placeholder="Enter password (+6ch)"
            onChange={handleChange}
          />

          <label htmlFor="">Profile Picture</label>
          <input type="file" onChange={({ target }) => setFile(target.files && target.files[0])} />

          <label htmlFor="">Country</label>
          <input name="country" type="text" placeholder="Canada" onChange={handleChange} />

          <button type="submit">Register</button>
        </div>

        <div className="right">
          <h1>I want to become a seller</h1>
          <div className="toggle">
            <label htmlFor="">Activate the seller account</label>
            <label className="switch">
              <input type="checkbox" onChange={handleSeller} />
              <span className="slider round"></span>
            </label>
          </div>

          <label htmlFor="">Phone Number</label>
          <input name="phone" type="text" placeholder="+1 234 567 89" onChange={handleChange} />
          <label htmlFor="">Description</label>

          <textarea
            placeholder="A short description of yourself"
            name="desc"
            id=""
            cols={30}
            rows={10}
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Register;
