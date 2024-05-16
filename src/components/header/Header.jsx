import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="spacing-header">
        <img src="/logo-kasa.png" alt="logo de la marque Kasa" />
        <nav>
          <ul className="link-nav">
            <li>
              <NavLink exact="true" to="/" activeclassname="active">
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink exact="true" to="/Apropos" activeclassname="active">
                À-propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
