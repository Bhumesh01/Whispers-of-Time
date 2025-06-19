import { useState } from 'react'
import './App.css'
import Posts from './components/Posts/posts.jsx'
import Form from './components/Form/from.jsx'
function App() {

  return (
    <div className='bg-background h-screen'>
      <div className='text-text text-3xl text-center font-medium m-5 rounded-2xl shadow-md shadow-[#BFC9D9] relative w-[90%] h-20'>
        <img className='w-full h-20 object-cover' src='../src/assets/bgImg.jpg'/>
        <h1 className='absolute inset-0 top-'>WHISPERS OF TIME</h1>
      </div>
      <div className='grid grid-cols-3 gap-2'>
        <div className='sm:col-span-2 col-span-3 text-text m-1 p-2 font-medium bg-posts rounded-2xl border border-posts-border hover:bg-posts-hover'>
          <Posts></Posts>
        </div>
        <div className='sm:col-span-1 col-span-3 text-text m-1 p-2 font-medium bg-form rounded-2xl  border border-posts-border hover:bg-form-hover sm:mt-auto sm:mb-auto'>
          <Form></Form>
        </div>
      </div>
    </div>
  )
}

export default App
