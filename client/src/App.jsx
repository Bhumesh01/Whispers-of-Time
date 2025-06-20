import { useState } from 'react'
import './App.css'
import Posts from './components/Posts/posts.jsx'
import Form from './components/Form/from.jsx'
function App() {

  return (
    <div className='bg-background h-screen p-4 m-2'>
      <div className='text-text text-3xl text-center font-medium m-5 rounded-2xl shadow-md shadow-[#BFC9D9] relative w-[90%] h-20'>
        <img loading='lazy' className='w-full h-20 object-cover rounded-2xl' src='../src/assets/bgImg.svg'/>
        <h1 className='absolute inset-0 top-5'>WHISPERS OF TIME</h1>
      </div>
      <div className='flex md1:flex-row flex-col-reverse gap-5 justify-around'>
        <div className='md:flex-2/3 m-5'>
          <Posts></Posts> 
        </div>
        <div className='md:flex-1/3 p-2'>
          <div className=' text-text font-medium bg-form rounded-2xl  border border-posts-border hover:bg-form-hover p-3 ml-auto mr-auto'>
            <Form></Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
