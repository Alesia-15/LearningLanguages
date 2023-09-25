export default class GET {
  static async getWords() {
    try {
      const response = await fetch(
        "https://itgirlschool.justmakeit.ru/api/words"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
