import ProfileCard from "../components/ProfileCard";
import { useEffect } from "react";
import OrdersCard from "../components/OrdersCard";

function Profile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="profile container">
      <ProfileCard />
      <OrdersCard />
    </div>
  );
}

export default Profile;
