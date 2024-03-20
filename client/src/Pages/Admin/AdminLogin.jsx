import React from "react"; // eslint-disable-line no-unused-vars
import { React as Service } from "react-caches"; // Document Updater
import { OwnerName } from "../../core/Keys/OwnerDetails.keys"; // Import the Owner Name

// Import Component
import Navbar from "../../components/Navbar/Navbar"; // Navbar
import Footer from "../../components/Footer/Footer"; // Footer
import LoginBox from "../../components/Admin/Login/MainLoginBox"; // LoginBox for Admin
import MainText from "../../components/Header/HeaderText"; // Main Text

// Main Page Component
export default function AdminLogin() {
  // Change the title of the page
  Service.UpdateDocumentTitle(`Admin Login - ${OwnerName}`); // Change the title of the page to "Admin Login"

  return (
    <>
      <Navbar />
      <MainText Text="Login to Admin Panel" />
      <LoginBox />
      <Footer />
    </>
  );
}
