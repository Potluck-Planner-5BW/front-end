import { useHistory } from "react-router-dom";



function Home(props) {

    const history = useHistory();
      const loginRoute = () => {
      history.push("/login")
  }

    return(
      <div>
        <header className="App-header">
          <img src="https://uploads-ssl.webflow.com/6010580d08831070b0339b25/60aa9a598f7c9865a91a9da1_Artboard%2031.png" 
          className="App-logo" 
          alt="logo" />
  
            <button onClick={loginRoute} className="btn-color w-1/12 px flex items-center justify-center rounded-full" >
              Get Started</button>
        </header>
      </div>

          
    );  
  }
  

export default Home;

