import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="bg-yellow-600 text-white px-6 py-4 flex justify-between">
      <Link to="/home" className="font-bold text-xl">
        Jumma Bazar
      </Link>
      <ol className="flex px-3">
        <li>Doc</li>
        <li className="px-4">Example</li>
        <li>Blogs</li>
      </ol>
      <div className="space-x-4">
        {!loggedIn && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
        {loggedIn && (
          <button onClick={handleLogout} className="bg--500 px-3 py-1 rounded">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
