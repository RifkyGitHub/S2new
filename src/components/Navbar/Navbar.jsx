import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="sidebar">
      <div className="logo">NewTask</div>
      <ul>
        <li className="active">Home</li>
        <li>Todo</li>
        <li>Absen</li>
      </ul>
    </nav>
  );
}