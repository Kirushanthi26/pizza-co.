import Order from "./Order";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer>
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p className="text-center font-medium text-xl mt-8">
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
};

export default Footer;
