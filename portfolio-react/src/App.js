import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import "bootstrap/dist/css/bootstrap.css";
import Footer from './components/pages/footer/Footer';
import './components/index.css';
// const App = () => <PortfolioContainer />;

function App () {
    return (
         <>
        <div>
            <PortfolioContainer />
            
        </div>
       
                <Footer></Footer>
                </>
    )
}

export default App;
