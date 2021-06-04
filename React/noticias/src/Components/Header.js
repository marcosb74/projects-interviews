import React from "react";
import PropTypes from "prop-types";
const Header = ({ titulo }) => {
  return (
    <nav className="nav-wrapper  purple lighten-1">
      <a href="#!" className="brand-logo center">
        {titulo}
      </a>
    </nav>
  );
};
Header.propTypes = {
  titulo: PropTypes.string.isRequired,
};
export default Header;
