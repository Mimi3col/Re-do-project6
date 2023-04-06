import { Outlet} from "react-router-dom";
import App from "../App";

const Layout = () => {
    let id = 0;
  return (
    <div>
      <nav className="flex justify-left space-x-4">
        <a
          href="/"
          className="font-large px-3 py-2 text-slate-100 rounded-lg bg-slate-500 hover:bg-blue-300 hover:text-slate-900">
          Home
        </a>
        {'   '}
        <a
          href="/Hourly"
          className="font-large px-3 py-2 text-slate-100 rounded-lg bg-slate-500 hover:bg-blue-300 hover:text-slate-900">
          Hourly
        </a>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;