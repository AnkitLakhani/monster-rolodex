import React from 'react'
import './searchox.style.css'

export const SearchBox = ({placeHolder, handleChange})=>{
   return <input type="search" placeholder={placeHolder} onChange={handleChange} className="search"></input>
}