import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../store/userSlice";

export default function SignupOwner() {  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [orgName, setOrgName] = useState("");
  
  // Format phone number as user types
  const formatPhoneNumber = (value) => {
    if (!value) return value;
    
    // Remove all non-digits
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    
    // Format based on the length
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };
  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    orgName: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      orgName: "",
    };
    if (name === "") {
      newErrors.name = "Name is required";
    }

    if (email === "") {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (password === "") {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }    if (phone === "") {
      newErrors.phone = "Phone number is required";
    } else {
      // Check if the phone number is valid after removing formatting
      const phoneDigits = phone.replace(/\D/g, '');
      if (phoneDigits.length < 10 || phoneDigits.length > 11) {
        newErrors.phone = "Please enter a valid 10-digit phone number";
      }
    }

    if (orgName === "") {
      newErrors.orgName = "Organization name is required";
    }
    setError(newErrors);
    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (!hasErrors) {
      const newUser = {
        name,
        email,
        company,
        password,
        phone,
        orgName,
        role: "owner",
        createdAt: new Date().toISOString(),
      };
      dispatch(signup(newUser));
      navigate("/");
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f9fafb] px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 md:p-10 flex flex-col items-center mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Sign Up as an Owner
        </h2>
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className={`w-full px-4 py-3 rounded border ${
              error.name ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:border-[#a5b4fc] text-base`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error.name && (
            <p className="text-red-500 text-xs mt-1">{error.name}</p>
          )}
          <input
            type="email"
            placeholder="Email Address"
            className={`w-full px-4 py-3 rounded border ${
              error.email ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:border-[#a5b4fc] text-base`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error.email && (
            <p className="text-red-500 text-xs mt-1">{error.email}</p>
          )}
          <input
            type="password"
            placeholder="Password"
            className={`w-full px-4 py-3 rounded border ${
              error.password ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:border-[#a5b4fc] text-base`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />          {error.password && (
            <p className="text-red-500 text-xs mt-1">{error.password}</p>
          )}
          <input
            type="tel"
            placeholder="Phone Number (123) 456-7890"
            className={`w-full px-4 py-3 rounded border ${
              error.phone ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:border-[#a5b4fc] text-base`}
            value={phone}
            onChange={(e) => {
              const formattedNumber = formatPhoneNumber(e.target.value);
              setPhone(formattedNumber);
            }}
            maxLength={14} // (123) 456-7890 is 14 characters
          />          {error.phone && (
            <p className="text-red-500 text-xs mt-1">{error.phone}</p>
          )}
          <input
            type="text"
            placeholder="Company"
            className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-[#a5b4fc] text-base"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className={`w-full px-4 py-3 rounded border ${
              error.confirmPassword ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:border-[#a5b4fc] text-base`}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />          {error.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">{error.confirmPassword}</p>
          )}
          <input
            type="text"
            placeholder="Organization Name"
            className={`w-full px-4 py-3 rounded border ${
              error.orgName ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:border-[#a5b4fc] text-base`}
            value={orgName}
            onChange={(e) => setOrgName(e.target.value)}
          />
          {error.orgName && (
            <p className="text-red-500 text-xs mt-1">{error.orgName}</p>
          )}
          <button
            type="submit"
            className="w-full py-3 rounded bg-[#a5b4fc] text-white font-semibold hover:bg-[#6366f1] transition-colors text-base mt-2"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-[#6366f1] underline">
            Log in
          </Link>
        </p>
        <p className="mt-4 text-sm text-center text-gray-600">
          Want to sign up as a customer?{" "}
          <Link to="/signup/customer" className="text-[#6366f1] underline">
            Sign up as a customer
          </Link>
        </p>
      </div>
    </div>
  );
}
