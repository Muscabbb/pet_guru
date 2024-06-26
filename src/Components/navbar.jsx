import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="container flex mx-auto py-4 justify-between items-center px-2">
      <Link to={""}>
        <div className="logo flex items-center">
          <img
            src={"../../public/logo.svg"}
            alt="log"
            className="w-8 md:w-10"
          />
          <h2 className=" font-bold uppercase text-lg md:text-2xl">pet guru</h2>
        </div>
      </Link>

      <div className="flex items-center gap-6">
        <Link
          to={"desc"}
          className=" py-1 w-16 md:w-28 rounded-full text-center font-semibold capitalize text-base md:text-lg bg-transparent border border-black hover:border-none hover:bg-red-500  hover:text-white transition focus:outline-none"
        >
          log in
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
