import "./Footer.scss";

function Footer() {
  return (
    <>
      <p className="footer__text">
      © {new Date().getFullYear()} Alexandria Balkaran. All rights reserved.
      </p>
    </>
  );
}

export default Footer;
