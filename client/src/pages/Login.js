import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { HideLoading, ShowLoading } from "../redux/alertsSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const login = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/users/login", user);
      dispatch(HideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.data);
        navigate("/");
      } else {
        toast.error(response.data.message);
        alert(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
      dispatch(HideLoading());
      console.log(error);
    }
  };
  return (
    <div style={{
      backgroundImage: "url(https://res.cloudinary.com/dyrpr7kkh/image/upload/v1687294469/Ba_usu6kn.jpg)" ,

      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '800px',
      color: 'white',
    }} className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-5 w-96 p-5 ">
        <h1 className="text-4xl font-bold poke">Welcome Back</h1>
        <hr />
        <input
            style=
            {{
              height: 40, borderColor: 'pink', borderWidth: 1, color : "black"
            }}
          type="text"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
            style=
            {{
              height: 40, borderColor: 'pink', borderWidth: 1, color : "black"
            }}
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button className="primary bg-primary" onClick={login}>
          Login
        </button>
        <Link to="/register" className="text-secondary underline">
          Not yet Registered ? Click Here To Signup
        </Link>
      </div>
      
    </div>
  );
}

export default Login;
