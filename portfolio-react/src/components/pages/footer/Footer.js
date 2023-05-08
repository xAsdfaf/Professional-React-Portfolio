import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content-footer has-text-centered">
        <p>
          <strong 
          style={{color: "white"}}>My Full Stack Development Portfolio</strong >{" "}
          <a
            href="https://github.com/xAsdfaf"
            target="_blank"
            rel="noreferrer" 
            style={{
                textDecoration: 'none',
                color: 'white',
            }}
          >
            George Jordan
          </a>
          <hr />
        </p>
      </div>
    </footer>
  );
}

export default Footer;