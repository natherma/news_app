import react  from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Navbar from './components/header/Navbar.js'
import News from './components/main/News.js';
import Aboutus from './components/main/Aboutus.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


let news1 = <News apiUrl = {`https://newsapi.org/v2/everything?q=india&apiKey=${process.env.REACT_APP_API_KEY}`} location={"India"} />

let news2 = <News apiUrl = {`https://newsapi.org/v2/everything?q=international&apiKey=${process.env.REACT_APP_API_KEY}`} location={"international"} />

let news3 = <News apiUrl = {`https://newsapi.org/v2/everything?q=crypto&apiKey=${process.env.REACT_APP_API_KEY}`} location={"crypto"} />

let aboutus = <Aboutus />

class App extends react.Component 
{
  render()
  {
    return(
      <Router>
         <header>
           <Navbar />
         </header>   
         <main>
           <Routes>
             <Route path = '/' element={news1}/>
           </Routes>
           <Routes>
             <Route exact path = '/international' element={news2}/>
           </Routes>
           <Routes>
             <Route exact path = '/crypto' element={news3}/>
           </Routes>
           <Routes>
             <Route exact path = '/aboutus' element={aboutus}/>
           </Routes>
         </main>
       </Router> 
    )
  }
}

export default App;
