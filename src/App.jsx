import { useState } from "react";
import React from 'react';

function App() {
  const [colour,setColour]=useState("#0f172a");
  return (
    <div className="h-screen w-screen" style={{
      backgroundColor: colour
    }}>  
        <div className="colour-container grid grid-cols-4 sm:flex sm:justify-between items-stretch gap-3 sm:gap-1.5 bottom-6 absolute w-70 sm:w-fit bg-white rounded-xl sm:rounded-full h-fit auto-rows-[30px] sm:h-10 left-1/2 -translate-x-1/2 p-2 shadow-2xl border-blue-500 border">
          <button onClick={()=>setColour("red")} className="outline-none colour w-15 bg-[red] rounded-full active:outline hover:opacity-55" />
          <button onClick={()=>setColour('blue')} className="outline-none colour w-15 bg-[blue] rounded-full active:outline hover:opacity-55" />
          <button onClick={()=>setColour('green')} className="outline-none colour w-15 bg-[green] rounded-full active:outline hover:opacity-55" />
          <button onClick={()=>setColour('lime')} className="outline-none colour w-15 bg-[lime] rounded-full active:outline hover:opacity-55" />
          <button onClick={()=>setColour('yellow')} className="outline-none colour w-15 bg-[yellow] rounded-full active:outline hover:opacity-55" />
          <button onClick={()=>setColour('orange')} className="outline-none colour w-15 bg-[orange] rounded-full active:outline hover:opacity-55" /> 
          <button onClick={()=>setColour('pink')} className="outline-none colour w-15 bg-[pink] rounded-full active:outline hover:opacity-55" /> 
          <button onClick={()=>setColour('purple')} className="outline-none colour w-15 bg-[purple] rounded-full active:outline hover:opacity-55" /> 

        </div>

        
      
      
    </div>
  )
}

export default App
