import React from "react";

const Foot = ({ props }) => {
  return (
    <footer>
      <div className="center">
        <p className="footer__text">
          © {`2019 - ${new Date().getFullYear()}`} - Eight d.o.o. | Website
          developed by{" "}
          <a
            href="https://github.com/spacefox123"
            target="_blank"
            rel="noopener noreferrer"
          >
            Žan Rode
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Foot;
