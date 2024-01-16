// // Login.js
// import React, { useState } from "react";
// import { auth } from "./firebase_setup/firebase";


// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       const response = await auth.signInWithEmailAndPassword(email, password);
//       console.log("User logged in successfully:", response.user);
//     } catch (error) {
//       console.error("Error logging in:", error.message);
//     }
//   };

//   return (
//     <div>
//       <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleLogin}>Log In</button>
//     </div>
//   );
// };

// export default Login;
