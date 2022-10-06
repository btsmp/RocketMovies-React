import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NewNote } from "../pages/NewNote";
import { Profile } from "../pages/Profile";
import { MovieNote } from './../pages/MovieNote';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewNote />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details" element={<MovieNote />} />
    </Routes>
  )
}