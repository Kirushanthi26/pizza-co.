import Pizza from "./Pizza";
import { pizzaData } from "./assets/data";

const Menu = () => {
  return (
    <main className="w-3/4 mx-auto">
      <h2 className="underline uppercase text-center text-xl font-medium p-6">
        Our menu
      </h2>
      <p className="mb-8 text-center text-lg">
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pizzaData.map((item) => (
          <Pizza item={item} key={item.name} />
        ))}
      </div>
    </main>
  );
};

export default Menu;
