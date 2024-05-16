import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <div className="info-notfound">
        <div className="img-404">
          <img src="/img-404.png" alt="erreur, la page n'existe pas" />
        </div>
        <h3 className="txt-error">
          Oups! La page que vous demandez nexiste pas.
        </h3>
        <Link to="/">
          <p>Retourner sur la page d&apos;accueil</p>
        </Link>
      </div>
    </div>
  );
}
