
import TitleAnim from "./TitleAnim";
function Header() {
  return (
    <header className="row">
      <div className="col-3">
        <TitleAnim />
      </div>
      <div className="col-9 d-flex justify-content-end">
        <ul>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
       
            <button className="btn btn-outline-dark  mb-1 mx-3 border-start border-black "  href="#">
              login
            </button>
         
        </ul>
      </div>
    </header>
  );
}

export default Header;
