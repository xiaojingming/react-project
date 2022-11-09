/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
interface Item {
  id: number,
  name: string,
  price: number,
  info: string,
}
interface ItemProps {
  list: Item
  delHandler(id: number): void
}

function BasicListItem(props: ItemProps) {
  const {
    list: {
      name, price, info, id,
    },
    delHandler,
  } = props;
  return (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{info}</p>
      <button onClick={() => delHandler(id)}>删除</button>
    </div>
  );
}

export default BasicListItem;
