import React from 'react'
import { BookList, Hero, Navbar, SearchForm } from '../components'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <main className='bg-[rgb(136,152,185)]/10 h-screen '>
      <Navbar />
      <Hero />
      <SearchForm />
      <BookList />
      <Outlet />
    </main>
  )
}

export default Home