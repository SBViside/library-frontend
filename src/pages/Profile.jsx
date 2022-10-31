import ProfileCard from "../components/ProfileCard";
import { useEffect } from "react";

function Profile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="profile container">
      <ProfileCard />
    </div>
  );
}

export default Profile;
