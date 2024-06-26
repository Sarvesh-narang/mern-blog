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
import UpdatePost from "./pages/UpdatePost";
import PostPage from "./pages/PostPage";
import ScrollToTop from "./componenets/ScrollToTop";



function App() {
  return (
      <BrowserRouter>
      <ScrollToTop />
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
            <Route path="/update-post/:postId" element={<UpdatePost />}/>
          </Route>
          
          <Route path="/projects" element={<Projects />}/>
          <Route path="/post/:postSlug" element={<PostPage />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}

export default App;