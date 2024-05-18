import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

const App = () => {
  return (
    <div className=" font-mono text-gray-900 font-normal bg-orange-100 border-b-8 border-b-orange-300 min-h-[100vh] p-[3.2rem] pb-[6rem]">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

export default App;
