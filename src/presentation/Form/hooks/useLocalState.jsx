import { useContext, useState } from "react";
import { ToLearnListContext } from "../../../applicattion/context/ToLearnListContext.jsx";

export function useLocalState() {
  const { isLoading, addItem } = useContext(ToLearnListContext);
  // cделаем отдельное состояние для хранения состояния формы, когда пользователь вводит текст
  const [value, setValue] = useState();

  const handleChange = (e) => {
    // обработчик события (e - React synthatic event)
    setValue(e.target.value); // value - то, что набирает пользователь
  };

  // сделаем обработчик события (клика по кнопке добавить) используется в форме 
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(value);
    setValue(""); // очистим поле после добавления
  };

  return { isLoading, handleChange, handleSubmit, value }; // вернем то, что создали и привяжем к контексту
}
