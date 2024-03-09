import { useState } from 'react'

import './App.css'

function App() {

  const[movie,setmovie] = useState("")
  const[data,setdata] = useState([])

  async function fetchData() {

    try {
      // Data fetch karne ke liye asynchrnous function call
      const response = await fetch(`https://www.omdbapi.com/?apikey=6a89c544&t=${movie}`);
   
      const dat = await response.json();
      
      // Parse kiya gaya data ko istemal karna
      setdata([dat])
      console.log(dat);
    } catch (error) {
      // Agar koi error aata hai to use handle karna
      console.log('Error occurred:', error);
      alert("Movie not exist")
    }
  }

  
  

  return (
   <div className='div'>
 <h1 className=' heading'>Film Website</h1>
    <div className=' insidediv'>

    <input type="text" placeholder='search movie name..'  name='search' id='search' 
        onChange={(event) => setmovie(event.target.value)}

    />
    <button className=' searchbtn' onClick={fetchData}>Search</button>

    </div>

    <div className=' i'>

    {
  data.map((item, index) => (
    <div className='moviedata' key={index}>
   
   <div>
    <img src={item.Poster} alt="logo" className=' image' />
   </div>
   <div className=' textcolor'>
    <p>Title: {item.Title}</p>
    <p><span>Actors:</span> {item.Actors}</p>
    <p>Awards: {item.Awards}</p>
    <p>Country: {item.Country}</p>
    <p>Released {item.Released}</p>
    <p>Writer; {item.Writer}</p>
    <p>Director: {item.Director}</p>
    <p>Genre: <span className=' redcolor'>{item.Genre}</span></p>
    <p>Language: <span className=' redcolor'>{item.Language}</span></p>

   </div>

    </div>
  ))
}
    </div>
   </div>
  )
}

export default App
