import { useEffect, useState } from "react";
import { toLearnListApiService } from "../../infrastructure/ToLearnListApiService.jsx";

export function useToLearnList() {
  // показываем пользователю, что что-то загружается
  //деструктуризация - нам нужно две переменные (isLoading и toTravelList)
  const [isLoading, setLoading] = useState(true); // состояние useState возвращает массив и функцию установки состояния (setLoading)
  const [toLearnList, setToLearnList] = useState(null); // состояние получаем через хук useState (здесь у нас промис и поэтому null)

  const addItem = (content) => {
    setToLearnList(toLearnList.create(content)); // обновляем состояние списка путем вызова метода create
  };

  useEffect(() => {
    // хук жизненного цикла useEffect - запускает функцию при каждом рендере,
    toLearnListApiService.fetchToLearnList().then((toLearnList) => {
      setToLearnList(toLearnList);
      setLoading(false);
    });
  }, []); // вторым аругументом передаем пустой массив, чтобы запустить только один раз (пустой массив - зависимости)

  return { isLoading, toLearnList, addItem }; // возвращаем сложный объект с состоянием  и функциями
}
