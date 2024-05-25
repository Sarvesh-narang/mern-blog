import {BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import PrivateRoute from "./componenets/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Header from "./componenets/Header";
import Footer from "./componenets/Footer";
import OnlyAdminPrivateRoute from "./componenets/OnlyAdminPrivateRoute";
import CreatePost from "./pages/CreatePost";



function App() {
  return (
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About />}/>
          <Route path="/sign-in" element={<SignIn />}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route element={<PrivateRoute />} >
            <Route path="/dashboard" element={<Dashboard />}/>
          </Route>
          <Route element={<OnlyAdminPrivateRoute />} >
            <Route path="/create-post" element={<CreatePost />}/>
          </Route>
          
          <Route path="/projects" element={<Projects />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}

export default App;