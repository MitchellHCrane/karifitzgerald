import "../css/footer.css";
import "../css/App.css";

function Footer() {
  return (
    <footer>
      <div className="footer-div">
        <div className="footerGridItem">
          <h3 className="footerH3">Contact</h3>
          <p className="footerP">
            Phone: <a href="tel:801-450-5171">(801)-450-5171</a>
          </p>
          <p className="footerP">Fax: (801)-303-7083</p>
          <p className="footerP">
            Email: <a href="mailto:kari@utahlender.com">kari@utahlender.com</a>
          </p>
        </div>
        <div className="footerGridItem">
          <h3 className="footerH3">License Info</h3>
          <p className="footerP">Kari Fitzgerald (NMLS #247303)</p>
          <p className="footerP">
            Regulated by the Colorado Divison of Real Estate NMLS #1843
          </p>
        </div>
        <div className="footerGridItem">
          <h3 className="footerH3">Address</h3>
          <p className="footerP">First Class Home Mortgage</p>
          <p className="footerP">
            <a
              href="https://goo.gl/maps/o97dcDxGxFcAcRheA"
              target="_blank"
              rel="noreferrer"
            >
              10808 River Front Parkway, Suite #3035, South Jordan, UT 84095
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
