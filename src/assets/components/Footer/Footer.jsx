import "./footer.scss"

function Footer (){
    return(
      <footer>
        <div className="container">
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
          <h1>Translator EN-RU</h1>
        </div>
      </footer>
    )
}

export default Footer