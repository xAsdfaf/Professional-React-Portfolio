import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

const navColor = {
  backgroundColor: 'white',
};
const navTabSpacing = {
  marginLeft: "310px",
  color: "black"
}

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul style={navColor} className="nav nav-tabs">

      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          style={navTabSpacing}
        >
          About
        </a>
      </li>
      <li 
      className="nav-item"
      >
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          style={navTabSpacing}
        >
          Portfolio
        </a>
      </li>
      <li 
      className="nav-item"
      >
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          style={navTabSpacing}
        >
          Contact
        </a>
      </li>
      <li 
      className="nav-item"
      
      >
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Portfolio"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          style={navTabSpacing}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
