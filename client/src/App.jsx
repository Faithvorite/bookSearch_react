import React from 'react'
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { Home, About } from "./pages"
import {BookList, BookDetails} from "./components";

const App = () => {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="book" element={<BookList />} />
      <Route path="book/:id" element={<BookDetails />} />
    </Routes>

    </BrowserRouter>
  )
}

export default App