import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Main from './Components/Main'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    return ( 
        <>
            <NavBar />
            <Main/>
            <Footer />
            <ToastContainer />
        </>
    )
}

export default App