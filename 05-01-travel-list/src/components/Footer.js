export default function Footer({ items }) {
  const numItem = items.length;
  const packedNumItemc = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedNumItemc / numItem) * 100);

  return (
    <footer className="stats">
      <em>
        You have {numItem} items on your list, and you already packed{" "}
        {packedNumItemc} ({percentage}%)
      </em>
    </footer>
  );
}
