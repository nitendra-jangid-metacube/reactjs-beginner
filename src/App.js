import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timer from "./components/Timer";
import Blog from "./components/Blog";
import Comment from "./components/Comment";
import Home from "./components/Home";
import UserForm from "./components/UserForm";
import ShowData from "./components/UserForm/ShowData";
import List from "./components/ToDo/List";
import Add from "./components/ToDo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/comment" element={<Comment />} />
        <Route path="/user-form" element={<UserForm />} />
        <Route path="/show-data" element={<ShowData />} />
        <Route path="/todo/list" element={<List />} />
        <Route path="/todo/add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;