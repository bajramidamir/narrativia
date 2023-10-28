import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="p-6 flex justify-between bg-indigo-950">
      <div>
        <img
          src="/logo-no-background.png"
          className="inline-block align-middle w-48"
          alt=""
        />
      </div>
      <div>
        <Link to="/register">
          <button className="bg-indigo-800 hover:bg-indigo-500 px-2 py-2.5 text-slate-300">
            Sign In
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
