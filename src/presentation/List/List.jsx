import { useContext } from "react";
import "./List.css";
import { Item } from "./Item/Item.jsx";
import { ToLearnListContext } from "../../applicattion/context/ToLearnListContext.jsx";
export function List() {
  const { isLoading, toLearnList } = useContext(ToLearnListContext); // получаем состояние -  запрос который мы отправили  и получили состояние (hook) пойдет дальше на доменный слой (где классы)

  if (isLoading) {
    // условный рендеринг (если isLoading = true)  мы возвращаем Loading...
    return <div>Loading...</div>;
  }



  return (
    <ul className="list">
      {toLearnList.map(
        (
          { id, content, translate } // выводим его сюда
        ) => (
          <Item key={id}>
            {content}
            {translate}
          </Item> // вставили внутрь компонент children - это все что внутри компонента между тегами
        )
      )}
    </ul>
  );
}
