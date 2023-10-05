const columns = document.querySelectorAll('.column');
const addItemButtons = document.querySelectorAll('.add-item');

addItemButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const columnItems = columns[index].querySelector('.column-items');
    const newItem = createItem();
    columnItems.appendChild(newItem);
  });
});

function createItem() {
  const item = document.createElement('div');
  item.classList.add('kanban-item');
  item.draggable = true;
  item.textContent = 'New Item';

  item.addEventListener('dragstart', () => {
    item.classList.add('dragging');
  });

  item.addEventListener('dragend', () => {
    item.classList.remove('dragging');
  });

  return item;
}

columns.forEach(column => {
  column.addEventListener('dragover', e => {
    e.preventDefault();
    const draggingItem = document.querySelector('.dragging');
    column.querySelector('.column-items').appendChild(draggingItem);
  });
});
