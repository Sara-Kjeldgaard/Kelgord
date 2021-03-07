import React from "react";
import "./footer.css";

const KeldgorFooter = () => {
  return (
    <footer>
      <div id="footerText">
        <a className="contact-footer" href="mailto:kontakt@keldgor.dk">
          <img src="/images/Mail.svg" alt="mail" />
          <span>kontakt@keldgor.dk</span>
        </a>
        <a className="contact-footer" href="tel:004524594429">
          <img src="/images/Phone.svg" alt="phone" />
          <span>+45 24594429</span>
        </a>
        <span>Savonlinnavej 20, 8600 Silkeborg, DK</span>
      </div>
      <a
        id="soMeFooter"
        rel="noreferrer"
        href="https://www.linkedin.com/in/nkjeldgaard/?locale=da_DK"
        target="_blank"
      >
        <img src="/images/Linkedin.svg" alt="linkedin" />
      </a>
    </footer>
  );
};

export default KeldgorFooter;
