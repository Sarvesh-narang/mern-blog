import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../componenets/DashSidebar"
import DashProfile from "../componenets/DashProfile";
import DashPost from "../componenets/DashPost";
import DashUsers from "../componenets/Dashusers";

function Dashboard() {
  const location = useLocation();
  const [ tab, setTab ] = useState ('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return <div className="min-h-screen flex flex-col md:flex-row">
    <div className="md:w-56">
      {/* sidebar */}
      <DashSidebar />
    </div>
    {/* profile ... */}
    {tab  === 'profile' && <DashProfile />}
    {/* posts ... */}
    {tab  === 'posts' && <DashPost />}
    {/* users ... */}
    {tab  === 'users' && <DashUsers />}
  </div>
}
  
  export default Dashboard;