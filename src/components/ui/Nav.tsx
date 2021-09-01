import { useAuth } from "../../auth/AuthProvider";

const Nav = () => {
  const { logged, logout, user } = useAuth();
  return (
    <div className="flex justify-between items-center p-5">
      <span className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
        <div className="inline-flex items-center">
          <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600"></div>
          <h2 className="block p-2 text-xl font-medium tracking-tighter lg:mr-8">
            react-ts
          </h2>
        </div>
      </span>
      {logged && (
        <div>
          <span className="mr-3">{user.email}</span>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Nav;
