import { action, observable } from "mobx";
import { makeAutoObservable } from "mobx";

class WordsStore {
  @observable words = [];
  @observable isLoading = false;
  @observable error = null;
  @observable errorStatus = "";
  @observable errorStatusText = "";

  constructor() {
    makeAutoObservable(this);
  }

  @action getWords = () => {
    this.isLoading = true;
    return fetch("https://itgirlschool.justmakeit.ru/api/words")
      .then((responce) => {
        this.errorStatus = responce.status;
        this.errorStatusText = responce.statusText;

        return responce.json();
      })
      .then((responce) => {
        this.words = responce;
        this.isLoading = false;
      })
      .catch((error) => {
        this.error = error;
        this.isLoading = false;
      });
  };

  @action addWord = (newWord) => {
    this.isLoading = true;
    return fetch(`https://itgirlschool.justmakeit.ru/api/words/add`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(newWord),
    })
      .then((responce) => {
        this.errorStatus = responce.status;
        this.errorStatusText = responce.statusText;
        responce.json();
      })
      .then(() => {
        this.words.push(newWord);
        this.isLoading = false;
      })
      .catch((error) => {
        this.error = error;
        this.isLoading = false;
      });
  };

  @action updateWord = (objWord) => {
    console.log(objWord);
    this.isLoading = true;
    return fetch(
      `https://itgirlschool.justmakeit.ru/api/words/${objWord.id}/update`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(objWord),
      }
    )
      .then((responce) => {
        if (responce.ok) {
          return responce.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((responce) => {
        this.words = responce;
        this.isLoading = false;
      })
      .catch((error) => {
        this.error = error;
        this.isLoading = false;
      });
  };

  @action deleteWord = (removeWord) => {
    this.isLoading = true;
    return fetch(
      `https://itgirlschool.justmakeit.ru/api/words/${removeWord.id}/delete`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((responce) => {
        if (responce.ok) {
          return responce.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((responce) => {
        this.words = responce;
        this.isLoading = false;
      })
      .catch((error) => {
        this.error = error;
        this.isLoading = false;
      });
  };
}

export default WordsStore;
