import "./Layout.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import NameList from "../../Form/FormSiswa";

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
        <Footer />
      </div>
    </div>
  );
}