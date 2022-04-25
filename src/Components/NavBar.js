import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <header className="nav">
        <a href="#">Orso</a>
            <nav className="nav__menu">
                <a href="#" className="header__nav__menu">Home</a>
                <a href="#" className="header__nav__menu">About</a>
                <a href="#" className="header__nav__menu">Contact</a>
            </nav>
            <CartWidget />
    </header>
  )
}

export default NavBar