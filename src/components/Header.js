import React from "react";
import './styles.css'

const Header = ({ title }) => {
  return (
    <div>
      <h1 className='navb'>{title}</h1>
    </div>
  );
};

export default Header;
