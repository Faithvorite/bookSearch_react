import React from 'react'
import { BookList, Footer, Hero, Navbar, SearchForm } from '../components'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <main className='bg-slate-100 h-full '>
      <Navbar />
      <Hero />
      {/* <SearchForm /> */}
      <BookList />
      <Outlet />
      <Footer />
    </main>
  )
}

export default Home