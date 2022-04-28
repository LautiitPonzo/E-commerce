import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import ItemListContainer from './Components/ItemListContainer'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    return ( 
        <>
            <NavBar />
            <ItemListContainer saludo="uno dos dos, uno dos tres probando" />
            <Footer />
            <ToastContainer />
        </>
    )
}

export default App