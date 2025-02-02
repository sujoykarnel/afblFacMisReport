const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <li>
                <a>Daily Report</a>
              </li>
              <li>
                <a>Periodic Report </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl"> AFBL MIS Report</a>
      </div>
      <div className="flex-none"></div>
    </div>
  );
};

export default Header;
