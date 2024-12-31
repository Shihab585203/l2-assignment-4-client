// DashboardLayout.tsx
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="lg:grid lg:grid-cols-[320px_1fr]">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:block bg-base-200 min-h-screen fixed w-80">
        <div className="px-4 py-20">
          <ul className="menu text-base-content">
            <li>
              <Link to="/dashboard">Dashboard Home</Link>
            </li>
            <li>
              <Link to="/dashboard/create-product">Create Product</Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* Mobile Drawer */}
      <div className="drawer lg:hidden">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button m-4 w-fit"
          >
            Open Menu
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 px-4 py-20">
            <li>
              <Link to="/dashboard">Dashboard Home</Link>
            </li>
            <li>
              <Link to="/dashboard/create-product">Create Product</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <main className="min-h-screen p-8 lg:col-start-2">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;