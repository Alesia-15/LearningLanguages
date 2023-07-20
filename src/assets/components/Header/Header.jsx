import "./header.scss"

function Header (){
    return(
      <header>
        <div className="container">
          <div className="head">
            <h1>Translator EN-RU</h1>
            <img
            src="https://mp-device.com/wp-content/uploads/2014/12/Govorite-legko-Russkij-Anglo-slovar--256x256.png"
            alt="logo"
            ></img>
          </div>
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
    )
}

export default Header