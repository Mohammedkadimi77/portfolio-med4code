import  { useState } from 'react'
import './Header.css'
export default function Header() {
  const [showM, setShowM] = useState(false)
  return (
    <header className='flex'>
    <button  
    onClick={()=>{setShowM(true)}} 
    className='menu icon-menu flex'/>
    <div>
      <h1 className='logo'>MED<span>4</span>CODE</h1>
    </div>
      <nav>
        <ul className='flex'>
         
          <li><a href='#home'><span className='icon-home'/>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#project'>Projects</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </nav>
      <div></div>
{showM && (
  <div className='fixed'>
    <ul className='modal'>
    <li>
      <button className='icon-close' onClick={()=>{
        setShowM(false)
      }}/>
    </li>
      <li><a href='#home'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#project'>Project</a></li>
      <li><a href='#contact'>Contact</a></li>
    </ul>
  </div>
)}
      
    </header>
  )
}
