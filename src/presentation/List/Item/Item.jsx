import "./Item.css";
export function Item(props) {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  // когда нам нужно выводить что-то разное (передаем набор свойств)
  // деструктуризация объекта набор свойств (все что внутри компонента )
  return <li className="item">{children}</li>; // все те элементы которые внутри компонента передаются в children
}
