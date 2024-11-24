import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/features/store";
import { setSearchTerm } from "../redux/features/searchSlice";
import { ChangeEvent } from "react";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.search.term);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value))
  }

  return (
    <div className="navbar nunito font-semibold bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/products'>Shop</Link></li>
            <li><Link to='/about'>About us</Link></li>
            <li>
              <a>Pages</a>
              <ul className="p-2">
                <li><a>Contact</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>

          </ul>
        </div>
        <Link to='/'><img src="https://i.ibb.co/37ktbHW/logo.png" className="w-28" alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/products'>Shop</Link></li>
          <li><Link to='/about'>About us</Link></li>
          <li>
            <details>
              <summary>Pages</summary>
              <ul className="p-2">
                <li><a>Contact</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>

        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex justify-center items-center gap-4">
          <div>
            <Link to='/cart'>
              <FaShoppingCart size={25} />
            </Link>
          </div>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" value={searchTerm} onChange={handleSearchChange} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;