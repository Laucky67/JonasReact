import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onToggleItem, onDeleteAll }) {
  // 定义排序状态
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  // 计算排序数组
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {/* 用排序后的数组渲染子组件 */}
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem} />
        ))}
      </ul>

      <div
        className="actions"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <select>
          <option value="input">按输入顺序排序</option>
          <option value="description">按描述排序</option>
          <option value="packed">按打包状态排序</option>
        </select>
        <button onClick={onDeleteAll}>删除所有</button>
      </div>
    </div>
  );
}
