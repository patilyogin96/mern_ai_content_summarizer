
import { useEffect } from 'react'
import './App.css'
import {  fetchUsers } from './libs/api';


import Navbar from './components/core/Navbar';
import LeftSection from './components/core/LeftSection';
import RightSection from './components/core/RightSection';
import Footer from './components/core/Footer';

function App() {

  const checkServer = async () => {
    const data = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/health`)
    console.log("data", data);

  }
  useEffect(() => { }, [])
  checkServer()



  const load = async () => {
    try {
      const res = await fetchUsers();
    } catch (err) {
      console.error(err);
    }
  }


  useEffect(() => { load(); }, []);



  return (
    <>
    <div className='min-h-screen bg-gray-50 p-6'>
        <header>
        <Navbar/>
        </header>
        <main  className="max-w-6xl mx-auto grid grid-cols-12 gap-6 " >
          {/* Left Section */}
          <LeftSection/>

          {/* Right Section */}
          <RightSection/>
        </main>

       <Footer/>
      </div>
    </>
  )
}

export default App
