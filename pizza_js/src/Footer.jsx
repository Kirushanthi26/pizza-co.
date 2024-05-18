const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer>
      <p className="text-center font-medium text-xl mt-8">
        {new Date().toLocaleTimeString()} We&apos;re currently open!
      </p>
    </footer>
  );
};

export default Footer;
