import Pizza from "./Pizza";
import { pizzaData } from "./assets/data";

const Menu = () => {
  const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="w-3/4 mx-auto">
      {numPizzas > 0 ? (
        <>
          <h2 className="underline uppercase text-center text-xl font-medium p-6">
            Our menu
          </h2>
          <p className="mb-8 text-center text-lg">
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pizzaData.map((item) => (
              <Pizza item={item} key={item.name} />
            ))}
          </ul>
        </>
      ) : (
        <p className="text-center font-medium text-xl my-8">
          We're still working on our menu. Please come back later :)
        </p>
      )}
    </main>
  );
};

export default Menu;
