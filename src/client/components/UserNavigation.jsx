import { Link, useNavigate } from "react-router-dom";

const UserNavigation = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/logout", {
        method: "GET",
      });

      if (response.ok) {
        console.log('lol')
        navigate('/')
      }
    } catch (error) {
      throw new Error(error);
    }
  };

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
        <Link to="/createPost">
          <button className="bg-indigo-800 hover:bg-indigo-500 px-2 py-2.5 mx-4  text-slate-300">
            Create post
          </button>
        </Link>
        <button onClick={handleLogout} className="bg-indigo-800 hover:bg-indigo-500 px-2 py-2.5 mx-4  text-slate-300">
            Log out
          </button>
      </div>
    </nav>
  );
};

export default UserNavigation;
