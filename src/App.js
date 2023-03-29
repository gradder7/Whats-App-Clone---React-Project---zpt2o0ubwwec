import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ChatPage from "./Components/ChatPage";
import { useState } from "react";
import Login from "./Components/Login";
import { auth } from "./firebase";

function App() {
  // getting user details from the localstorage
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  // give user details
  // console.log(user);
  // signout
  const signOut = () => {
    //logout
    auth
      .signOut()
      .then(() => {
        setUser(null);
        localStorage.removeItem("user");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <Router>
      <div className="App">
        {user ? (
          <Routes>
            <Route
              path="/"
              element={<Home currentUser={user} signOut={signOut} />}
            />
            <Route
              path="/:emailID"
              element={<ChatPage currentUser={user} signOut={signOut} />}
            />
          </Routes>
        ) : (
          <Login setUser={setUser} />
        )}
      </div>
      {/* <div className="App">
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/chatpage' element={<ChatPage/>} />
      </Routes> 
      </div> */}
    </Router>
  );
}

export default App;
