import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <div> this is header</div>
      <div>
        <Outlet />
      </div>
      <div>this is footer</div>
    </div>
  );
};

export default MainLayout;
