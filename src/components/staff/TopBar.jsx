import { useAuth } from "../../context/AuthContext";
import { LogOut } from "lucide-react";

import "../TopBar.css";

const TopBar = () => {
  const { logout } = useAuth();

  const tabs = [
    {
      name: "Pedidos",
    },
    {
      name: "Clientes",
    },
  ];

  return (
    <div className="TopBar">
      <div className="title">
        <h2>Staff</h2>
        <LogOut onClick={logout} className="icon" />
      </div>

      <div className="tab-bar">
        {tabs.map((tab) => (
          <div key={tab.name} className="tab">
            {tab.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
