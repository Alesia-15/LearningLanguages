export default class POSTadd {
  static async setAddWord(obj) {
    fetch("https://itgirlschool.justmakeit.ru/api/words", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("Ошибка.", error);
      });
  }
}
