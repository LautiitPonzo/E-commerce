import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import ItemListContainer from './Components/ItemListContainer'

const App = () => {
    return ( 
        <>
            <NavBar />
            <ItemListContainer saludo="uno dos dos, uno dos tres probando" />
            <Footer />
        </>
    )
}

export default App