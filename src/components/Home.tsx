import { Link, Outlet, useLocation } from "react-router-dom";

export const Home = () => {
  const location = useLocation();
  return (
    <div>
      <h2>Modal Test</h2>
      <div>
        <Link to="/modal1" state={{ background: location }}>
          Open Modal 1
        </Link>
      </div>

      <div>
        <Link to="/modal2" state={{ background: location }}>
          Open Icon Modal
        </Link>
      </div>

      <Outlet />
    </div>
  );
};
