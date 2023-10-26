import React from "react";

const UserNavigation = () => {
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
          <p>LOL</p>
        </Link>
      </div>
    </nav>
  );
};

export default UserNavigation;
