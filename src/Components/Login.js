import React from "react";
import { useNavigate } from "react-router-dom";
import db, { auth, googleProvider } from "../firebase";
import "../css/Login.css";

function Login({ setUser }) {
  const navigate = useNavigate();

  const signWithGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        const newUser = {
          fullname: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        };
        navigate("/");
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
        db.collection("users").doc(result.user.email).set(newUser);
      })

      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login-container">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
          alt="whatappIcon"
        />

        <p className="login-name">Whatsapp Web</p>
        <button className="login-btn" onClick={signWithGoogle}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png?20221203181234"
            alt="login with google"
          />
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
