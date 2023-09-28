import { action, observable } from "mobx";

class WordsStore {
  @observable words = [];
  isLoading = false;

  @action getWords = () => {
    this.isLoading = true;
    return fetch("https://itgirlschool.justmakeit.ru/api/words")
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

  @action addWord = (newWord) => {
    this.isLoading = true;
    return fetch("https://itgirlschool.justmakeit.ru/api/words/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(newWord),
    })
      .then((responce) => {
        if (responce.ok) {
          return responce.json();
        } else {
          throw new Error("Something went wrong");
        }
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
}

export default WordsStore;
