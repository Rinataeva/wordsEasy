import { ToLearnList } from "../domain/ToLearnList/ToLearnList"; // импортируем класс из домена (апи и домен связаны) !не актуально, сделали сервер

class ToLearnListApiService {
  // создаем класс для работы с сервером
  async fetchToLearnList() {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // имитируем задержку

    return new ToLearnList([
      { id: 1, content: "apple" },
      { id: 2, content: "banana" },
      { id: 3, content: "orange" },
    ]);
  }
}
export const toLearnListApiService = new ToLearnListApiService(); // создали сразу экземпляр чтобы использовать в хуке
