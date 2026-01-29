import "./Layout.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import NameList from "../../Form/FormSiswa";
import AlertButton from "../AlertButton/AlertButton";

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <Navbar />
      <div className="main-content">
        <div className="page-body">
          {children}
        </div>
        <div>
          <NameList/>
        </div>
        <div>
          <AlertButton text="Klik Saya" message="Pesan berubah!" />
        </div>
        <Footer />
      </div>
    </div>
  );
}