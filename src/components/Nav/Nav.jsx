import { Navbar } from "flowbite-react";
import React from "react";

function Nav({ count }) {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link
          href="/navbars"
          className="flex items-center justify-center"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2696/2696198.png"
            className="w-[30px] h-[25px]"
          />{" "}
          <span className="absolute -mt-[15px] -mr-[25px] w-[20px] rounded-full bg-blue-700 text-white text-center">
            {count}
          </span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;
