export default function deleteCard (card_index, cardList_id, columns, setColumns) {

  const column = columns[cardList_id];
  const copiedItems = [...column.items];
  copiedItems.splice(card_index, 1);
  const list = columns[`list`];
  const listItems = [...list.items]
  setColumns({
    ...columns,
    [cardList_id]: {
      ...column,
      items: copiedItems
    },
    'list': {
      ...list,
      items: listItems
    }
  });
}
