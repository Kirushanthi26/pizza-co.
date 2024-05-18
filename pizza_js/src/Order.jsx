const Order = ({ openHour, closeHour }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full mx-auto">
      <p className="text-center font-medium text-xl mt-8">
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="bg-orange-300 py-3 px-6 font-semibold mt-5">
        Order
      </button>
    </div>
  );
};

export default Order;
