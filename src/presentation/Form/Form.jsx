import "./Form.css";
import { useLocalState } from "./hooks/useLocalState.jsx";

export function Form() {
  const { isLoading, value, handleChange, handleSubmit } = useLocalState(); // пока берем isLoading из контекста, мы его будем использовать для дизэйбла нашей формы
  return (
    <form className="tolearn-form">
      <input
        type="text"
        value={value} // привязываем свойство value к атрибуту value чтобы очистить поле
        placeholder="new word"
        className="tolearn-form__input"
        disabled={isLoading}
        onChange={handleChange} // помещаем обработчик события в атрибут onChange
      />
      <button
        type="button"
        className="tolearn-form__button"
        disabled={isLoading}
        onClick={handleSubmit}
      >
        Add to my list of words
      </button>
    </form>
  );
}
