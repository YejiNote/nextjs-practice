import Link from "next/link";
import navStyles from "../src/styles/Nav.module.css"
const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/photos" legacyBehavior>
            <a>Photos</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
