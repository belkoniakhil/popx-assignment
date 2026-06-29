import { useNavigate } from "react-router-dom";

import MobileFrame from "../components/MobileFrame";
import Button from "../components/Button";

function Landing() {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <div className="landing-page">
        <div className="landing-content">
          <h1>Welcome to PopX</h1>

          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </p>

          <Button
            text="Create Account"
            variant="primary"
            onClick={() => navigate("/signup")}
          />

          <Button
            text="Already Registered? Login"
            variant="secondary"
            onClick={() => navigate("/login")}
          />
        </div>
      </div>
    </MobileFrame>
  );
}

export default Landing;