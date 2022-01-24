import react  from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Navbar from './components/header/Navbar.js'
import News from './components/main/News.js';

 



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
           <News apiUrl = {`https://newsapi.org/v2/everything?q=india&apiKey=${process.env.REACT_APP_API_KEY}`} location={"India"}/>
         </main>
      </> 
    )
  }
}

export default App;
