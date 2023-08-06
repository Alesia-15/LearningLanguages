import "./header.scss";

function Header() {
  return (
    <header>
      <div className="container">
        <h1>Translator EN-RU</h1>
        <nav>
          <ul>
            <li>
              <a href="#list">Список слов</a>
            </li>
            <li>
              <a href="#cards">Карточки слов</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
