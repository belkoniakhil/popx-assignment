import { useNavigate } from "react-router-dom";
import MobileFrame from "../components/MobileFrame";

function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/", { replace: true });
  };

  return (
    <MobileFrame>
      <div className="profile-page">

        <div className="profile-header">
          <h2>Account Settings</h2>
        </div>

        <div className="profile-card">

          <div className="profile-image">
            <img
              src="https://i.pravatar.cc/150?img=47"
              alt="profile"
            />
          </div>

          <div className="profile-details">
            <h3>{user?.fullName}</h3>

            <p>{user?.email}</p>
          </div>

        </div>

        <div className="profile-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
          Magna Aliquyam Erat.
        </div>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>

      </div>
    </MobileFrame>
  );
}

export default Profile;