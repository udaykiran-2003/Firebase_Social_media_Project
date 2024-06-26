// **PART-1**


// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import { Main } from "./pages/main";
// import { Login } from "./pages/login";
// import { Navbar } from "./components/navbar";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Main />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;


// PART-2

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import { Main } from "./pages/main/main";
// import { Login } from "./pages/login";
// import { Navbar } from "./components/navbar";
// import { CreatePost } from "./pages/create-post/create-post";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Main />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/createpost" element={<CreatePost />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./pages/main/main";
import { Login } from "./pages/login";
import { Navbar } from "./components/navbar";
import { CreatePost } from "./pages/create-post/create-post";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;