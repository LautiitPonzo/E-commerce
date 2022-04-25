// 1) Tener la variable react en scope
import React from 'react'
import App from './App'
import './style.scss'

// 2) Tener la variable react-dom en scope
import ReactDom from 'react-dom/client'
const root = ReactDom.createRoot(document.getElementById('root'))


// 3) Tener la variable App(la variable que contiene todo el codigo de la aplicacion) en scope
// const App = () => {
    //     return "Hola mundo"
    // }
    
// 4) Hacer render de la app en el dom
// ReactDom.render(<App />, document.getElementById('root'))
root.render(<App />)