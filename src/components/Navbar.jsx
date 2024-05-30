export default function Navbar() {
  return (
    <nav className="navbar z-50 fixed bg-white w-full p-5">
      <div className="container flex flex-row justify-between w-full">
        <a className="navbar-brand " href="/">
          <img
            className="h-[22px]"
            src="https://servicemarket.com/dist/images/servicemarket-by-smiles-main-logo.svg"
          />
        </a>
        <div className="login">
          <a href="/login" className="border text-blue-400 rounded-lg p-2">
            <i className="fa-solid fa-user mr-1"></i>
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}
