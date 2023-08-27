import ishop from"./ishop.png"
import { RiSearchLine } from 'react-icons/ri';
function Header() {
  return (
    <header className="flex justify-between border-b-2 border-slate-100 h-20  items-center px-10 ">
      <div>
        <img src={ishop}  alt='ishop'  class="w-12.5 h-10"/>
      </div>

      {/* search input  */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="py-2 pl-4 pr-3 block w-full rounded-xl bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <RiSearchLine  style={{ fontSize: '22px'}}  />
        </div>
      </div>


      <div className="flex ">
        <div className="mr-3">
          <a className="mr-2">Products</a>
          <a className="mr-2">About us </a>
          <a className="mr-2">Contact</a>
        </div>
        <div className="border-l-2 border-indigo-600 pl-3">
          <button>Login</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
