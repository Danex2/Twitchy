import React from "react";

const Header = () => (
  <div className="nav-container">
    <nav>
      <div className="nav-wrapper deep-purple">
        <a href="#" className="brand-logo">
          Twitchy
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/Danex2">Github</a>
          </li>
          <li>
            <a href="https://twitter.com/hybridearth">Twitter</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;
