import "./ColorItem.css";
const ColorItem = ({ id, img, d, onClick }) => {
  return (
    <div>
      <button className="white"></button>
      <button className="orange"></button>
      <button className="green"></button>
      <button className="blue"></button>
      <button className="purple"></button>
    </div>
  );
};

export default ColorItem;
