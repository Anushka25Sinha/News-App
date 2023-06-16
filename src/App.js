import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cards from './components/Cards'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './components/Home'
import AboutUs from './components/About Us';
import ContactUS from './components/ContactUS';
import Login from './components/Login';
import News from './components/News';



export default function App() {
  // 7d69e462e1ad4c77b086b38cbe4a331d
  const [data, setdata] = useState([])
  const [ query, setquery] = useState('')
  // const url = "https://newsapi.org/v2/everything?q=sports&apiKey=7d69e462e1ad4c77b086b38cbe4a331d"

  


  useEffect(() => {
    const url = 'https://newsapi.org/v2/everything?q=politics&apiKey=7d69e462e1ad4c77b086b38cbe4a331d'

    const fetchData = async () => {
      try {
        const data = await fetch(url);
        const json = await data.json();
        console.log(json);
        setdata(json.articles);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const HandleSearch =()=>{
    const url = 'https://newsapi.org/v2/everything?q=${query}&apiKey=7d69e462e1ad4c77b086b38cbe4a331d'

    const fetchData = async () => {
      try {
        const data = await fetch(url);
        const json = await data.json();
        console.log(json);
        setdata(json.articles);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }



  // let arr =
  //   [
  //     {
  //       name: "New York",
  //       subtitle: "The city that never sleeps.",
  //       description: "New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.",
  //       image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"
  //     },
  //     {
  //       name: "Delhi",
  //       image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"
  //     },
  //     {
  //       name: "Mumbai",
  //       image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"
  //     },
  //     {
  //       name: "Mumbai",
  //       image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"
  //     }
  //   ]

  return (
    <Router>

      <div>
        <Navbar />
        
        <input
        onchange={e=> setquery(e.target.value)}
        type="search"
        placeholder="Search Here"
        value={query}>
        </input>
        <button onClick={HandleSearch}>Search</button>

        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/ContactUS' element={<ContactUS/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/News' element={<News />}/>
        </Routes>
        
        
        <Footer />
      </div>
    </Router>

  )
}


