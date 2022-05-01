import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Main from './Components/Main'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter } from 'react-router-dom';
const App = () => {
    return ( 
        <BrowserRouter>
            <NavBar />
            <Main/>
            <Footer />
            <ToastContainer />
        </BrowserRouter>
    )
}

export default App