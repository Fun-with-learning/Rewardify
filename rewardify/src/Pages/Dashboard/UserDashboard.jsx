import  { useState } from "react";
import MainContent from "./DashboardContent";
import Sidebar from "../../Componenets/SideView"
import Navbar from '../../Componenets/Header'


const MasterDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex bg-gray-200 shadow-lg">
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <div className="flex-1 flex flex-col">
        <Navbar toggleSidebar={toggleSidebar} />
        <div >
          <MainContent/>
          </div>
      </div>
    </div>
  );
};

export default MasterDashboard;