import logo from "../../assets/ewa.svg";
import "./Header.css";

export default function Header() {
  const now = new Date();
  const name = "picture";
  return (
    <header>
      <img src={logo} alt={name} className="logo" />
      <h3>EasyWordsApp</h3>
      <span className="time">Time: {now.toLocaleTimeString()}</span>
    </header>
  );
}
