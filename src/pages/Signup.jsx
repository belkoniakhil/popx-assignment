import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MobileFrame from "../components/MobileFrame";
import InputField from "../components/InputField";
import RadioGroup from "../components/RadioGroup";
import Button from "../components/Button";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSignup = () => {
    const { fullName, phone, email, password } = formData;

    if (!fullName.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!/^[A-Za-z ]+$/.test(fullName)) {
      alert("Full name should contain only letters.");
      return;
    }

    if (!phone.trim()) {
      alert("Please enter your phone number.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!email.trim()) {
      alert("Please enter your email address.");
      return;
    }

    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!password.trim()) {
      alert("Please enter your password.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    const existingUser = JSON.parse(localStorage.getItem("user"));

    if (existingUser && existingUser.email === email) {
      alert("An account with this email already exists.");
      return;
    }

    localStorage.setItem("user", JSON.stringify(formData));
    localStorage.setItem("user", JSON.stringify(formData));
    alert("Account created successfully!");

    navigate("/login");
  };

  return (
    <MobileFrame>
      <div className="signup-page">
        <h1>
          Create your PopX
          <br />
          account
        </h1>

        <InputField
          label="Full Name*"
          placeholder="Enter full name"
          value={formData.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
        />

        <InputField
          label="Phone number*"
          placeholder="Enter phone number"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />

        <InputField
          label="Email address*"
          placeholder="Enter email address"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />

        <InputField
          label="Password*"
          type="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />

        <InputField
          label="Company name"
          placeholder="Enter company name"
          value={formData.company}
          onChange={(e) => handleChange("company", e.target.value)}
        />

        <div className="agency-section">
          <p>
            Are you an Agency?<span>*</span>
          </p>

          <RadioGroup
            value={formData.agency}
            onChange={(e) => handleChange("agency", e.target.value)}
          />
        </div>

        <div className="signup-button">
          <Button
            text="Create Account"
            variant="primary"
            onClick={handleSignup}
          />
        </div>
      </div>
    </MobileFrame>
  );
}

export default Signup;