import React, { Component } from "react";
// import Fade from "react-reveal";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <footer>
        <div className="row">
            <div className="twelve columns">

              <ul className="copyright">
                <li>&copy; Copyright 2021 Nordic Giant</li>
                <li>
                  Design by{" "}
                  <a title="Styleshout" href="mitgujarati3010@gmail.com">
                    Mit Gujarati
                  </a>
                </li>
              </ul>
            </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
