const Pizza = ({ item }) => {
  return (
    <li className={`mb-8 flex ${item.soldOut ? "text-stone-400" : ""}`}>
      <img
        src={`/${item.photoName}`}
        alt={item.photoName}
        className={`w-1/4 ${item.soldOut ? "filter grayscale opacity-80" : ""}`}
      />
      <div className="3/4 ml-8 pr-5">
        <h3 className="font-normal text-lg mb-2">{item.name}</h3>
        <p className="font-light italic mb-2">{item.ingredients}</p>
        <span>{item.soldOut ? "SOLD OUT" : item.price}</span>
      </div>
    </li>
  );
};

export default Pizza;
