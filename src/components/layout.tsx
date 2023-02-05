import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ children }: any) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{"Title_Here"}</h1>
        {children}
      </main>
    </div>
  );
};
export default Layout;
