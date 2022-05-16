import { GitHub } from "@mui/icons-material";
import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer>
      <div className="social">
        <a className="social-github" href="https://github.com/LautiitPonzo" target="blank">
          <GitHub color="secondary" fontSize="large" className="social-icons"/>
        </a>
      </div>

      <div className="copyright">
        © 2020 Copyright
        <a href="#" target="blank">{" "}Lautaro Ponzo</a>
      </div>
    </footer>
    );
  }
}

export default Footer;
