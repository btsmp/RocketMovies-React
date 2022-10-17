import { Route, Routes } from "react-router-dom";
import { MovieNote } from '../pages/MovieNote';
import { NewNote } from "../pages/NewNote";
import { Profile } from "../pages/Profile";
import { Home } from "../pages/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewNote />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:note_id" element={<MovieNote />} />
    </Routes>
  )
}