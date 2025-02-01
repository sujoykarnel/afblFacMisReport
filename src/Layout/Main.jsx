import { Outlet } from "react-router";

const Main = () => {
  return (
    <div>
      <h2>This is Main</h2>
      <Outlet />
    </div>
  );
};

export default Main;
