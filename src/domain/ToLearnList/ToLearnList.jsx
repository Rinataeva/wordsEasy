import { ToLearnItem } from "./ToLearnItem/ToLearnItem.jsx";

export class ToLearnList {
  // Конструктор принимает данные в виде массива объектов
  // и преобразует их в Map, где ключ — это id объекта, а значение — сам объект
  //Создадим идентификатор и получим его при инициализации объекта
  #lastId = 0;
  #data;
  constructor(data) {
    this.#data = new Map(
      data.map((item) => {
        this.#lastId = Math.max(this.#lastId, item.id);
        return [item.id, new ToLearnItem(item)];
      })
    ); // ключ - id, значение - объект
  }
  map(cb) {
    return Array.from(this.#data).map(([, item]) => cb(item)); // возвращаем массив из пар ключ-значение (ключ - id, значение - объект целиком (toTravelItem))
  }

  get last() {
    return this.#data.get(this.#lastId); //передаем ключ и получаем последний объект из Map
  }
  create(content) {
    this.#lastId = this.#lastId + 1; // гарантируем уникальность идентификаторов (к нулю прибавляем один)
    this.#data.set(this.#lastId, { id: this.#lastId, content }); // здесь была ошибка

    return new ToLearnList(Array.from(this.#data).map(([, item]) => item));
  }
  deleteItem() {}
  updateItem() {}
}
