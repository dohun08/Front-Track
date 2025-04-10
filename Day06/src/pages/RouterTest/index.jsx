import { Outlet, Link } from "react-router-dom";
export default function RouterTest() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
           <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/useEffect1">useEffect1</Link>
          </li>
          <li>
            <Link to="/useEffect2">useEffect2</Link>
          </li>
          <li>
            <Link to="/blogs">blogs</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
