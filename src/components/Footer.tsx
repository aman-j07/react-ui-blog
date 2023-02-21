import NordicRoseLogo from "../assets/logos/NORDIC ROSE.png";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

function Footer() {
  const marqueeTags = [
    "Digital product design",
    "Remote work",
    "UX design",
    "Distributed teams",
    "Creativity",
    "Strategy",
    "Suspense",
    "Growth",
  ];
  return (
    <footer className="footer">
      <div className="footer__top">
        <Marquee className="footer__marquee" gradient={false}>
          {marqueeTags.map((ele, i) => (
            <span
              className={`footer__marqueetags ${
                i % 2 === 0
                  ? "footer__marqueetags--light"
                  : "footer__marqueetags--heavy"
              }`}
            >
              {ele}
            </span>
          ))}
        </Marquee>
      </div>
      <div className="footer__middle">
        <Link to='/'>
          <img
            className="footer__logo"
            src={NordicRoseLogo}
            alt="Nordic Rose Logo"
          />
        </Link>
        <p className="footer__details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
          tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce
          a nunc eget ligula suscipit finibus.
        </p>
        <ul className="footer__linkslist">
          <li className="footer__links">
            <a href="#Twitter">Twitter</a>
          </li>
          <li className="footer__links">
            <a href="#LinkedIn">LinkedIn</a>
          </li>
          <li className="footer__links">
            <a href="#RSS">RSS</a>
          </li>
        </ul>
      </div>
      <div className="footer__bottom">
        <span className="footer__copyrights">
          <span>© 2012–2020 Nordic Rose Co.</span>
          <span>All rights reserved.</span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
