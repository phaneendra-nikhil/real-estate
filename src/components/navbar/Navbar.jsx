import "./navbar.scss";

function Navbar() {
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>Logo</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Blog</a>
        <a href="/">Agents</a>
        <a href="/">Help</a>
      </div>
      <div className="right">
        <a href="/">Sign in</a>
        <a href="/" className="register">Sign up</a>
      </div>
    </nav>
  );
}
export default Navbar;
