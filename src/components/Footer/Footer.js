import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="copyright">© 2020 Copyright
          <a href="#" target="blank">{" "}Lautaro Ponzo</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
