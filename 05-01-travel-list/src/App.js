import { useState } from "react";
import Footer from "./components/Footer";
import PackingList from "./components/PackingList";
import Form from "./components/Form";
import Logo from "./components/Logo";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "dresses", quantity: 3, packed: true },
];

function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleDeleteALL() {
    const confirm = window.confirm("确定需要清空清单吗？");
    if (confirm) setItems([]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onDeleteAll={handleDeleteALL}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
