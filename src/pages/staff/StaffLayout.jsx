import { Outlet } from 'react-router'
import TopBar from "../../components/staff/StaffLayout.css";
import OrderContainer from "../../components/staff/OrderContainer";

import "../components/staff/StaffLayout.css";

const StaffLayout = () => {
  return (
    <div className="StaffLayout">
      <TopBar />
      <Outlet />
    </div>
  );
};

export default StaffLayout;
