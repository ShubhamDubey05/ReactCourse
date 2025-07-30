const App = () => {
  return (
    <>
      <nav className="flex items-center justify-between bg-bodyColor text-white text-xl px-6 py-4
    ">
        <div className="text-2xl font-bold ">PortFolio</div>
        <ul className="flex gap-6 text-lg mr-6">
          <li className="hover:text-gray-400 cursor-pointer">Home</li>
          <li className="hover:text-gray-400 cursor-pointer">About</li>
          <li className="hover:text-gray-400 cursor-pointer">Features</li>
          <li className="hover:text-gray-400 cursor-pointer">Experience</li>
          <li className="hover:text-gray-400 cursor-pointer">Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default App;
