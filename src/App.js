import react  from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Navbar from './components/header/Navbar.js'
import News from './components/main/News.js';


// let api = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.REACT_APP_API_KEY}`
  

class App extends react.Component 
{
  render()
  {
    return(
      <>
         <header>
           <Navbar />
         </header>
         <main>
           <News/>
         </main>
      </> 
    )
  }
}

export default App;
