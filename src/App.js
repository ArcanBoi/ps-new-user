import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import User from "./components/User";
import fetchUser from "./services/rando_user";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => refreshUser(), []);

  async function refreshUser() {
    const newUser = await fetchUser();
    console.log(newUser);
    setCurrentUser(newUser);
  }

  return (
    <div className="App">
      <Header />
      <button onClick={refreshUser}>New</button>
      {currentUser ? (
        <User user={currentUser} />
      ) : (
        <p>No User Data Available</p>
      )}
    </div>
  );
}

export default App;
