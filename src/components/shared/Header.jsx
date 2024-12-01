import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import "./Header.css";
import { HeaderButton } from "../common/HeaderButton";

const Header = () => {
  // Added useState to manage the menu toggle for smaller devices.
  const [isMenuOpen, setIsMenuOpen] = React.useState(false); // State to manage menu toggle

  return (
    <Navbar
      shouldHideOnScroll
      isBlurred={false}
      className="bg-transparent w-full bg-accent py-[7px] navbar-hr-line"
      maxWidth="xl"
    >
      <NavbarBrand>
        <div className="w-16">
          <NavLink to="/">
            <img src="/Img/Logo.png" alt="Brand Logo" />
          </NavLink>
        </div>
      </NavbarBrand>

      {/* Navbar Menu Toggle for Small Screens */}
      <NavbarContent className="md:hidden" justify="end">
        <NavbarMenuToggle
          aria-label="Toggle Navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white" // Tailwind class for white color
          style={{ color: "#FFFFFF" }} // Inline style for fallback
        />
      </NavbarContent>

      {/* Standard Navbar Content for Larger Screens */}
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarItem>
          <NavLink to="/about-us" className="text-white">
            About Us
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/pricing" className="text-white">
            Pricing
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/customers" className="text-white">
            Customers
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/solutions" className="text-white">
            Solutions
          </NavLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden md:flex">
        <NavbarItem>
          <NavLink to="/book-a-demo">
            <HeaderButton>Book a Demo</HeaderButton>
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <NavLink
            to="/contact-us"
          >
            <HeaderButton>Contact Us</HeaderButton>
            Contact Us
          </NavLink>
        </NavbarItem>
      </NavbarContent>

      {/* Navbar Menu for Small Screens */}
      <NavbarMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        className="bg-transparent w-full bg-accent pl-[25px] navbar-hr-line"
      >

        {/* Menu Items */}
        <div className="flex flex-col items-center justify-center gap-3">
          <NavbarMenuItem>
            <NavLink
              to="/about-us"
              onClick={() => setIsMenuOpen(false)}
              className="text-white"
            >
              About Us
            </NavLink>
          </NavbarMenuItem>

          <NavbarMenuItem>
            <NavLink
              to="/pricing"
              onClick={() => setIsMenuOpen(false)}
              className="text-white"
            >
              Pricing
            </NavLink>
          </NavbarMenuItem>

          <NavbarMenuItem>
            <NavLink
              to="/customers"
              onClick={() => setIsMenuOpen(false)}
              className="text-white"
            >
              Customers
            </NavLink>
          </NavbarMenuItem>

          <NavbarMenuItem>
            <NavLink
              to="/solutions"
              onClick={() => setIsMenuOpen(false)}
              className="text-white"
            >
              Solutions
            </NavLink>
          </NavbarMenuItem>

          <div className="flex gap-4 mt-1">

            <NavbarItem>
          <NavLink to="/book-a-demo">
            <HeaderButton>Book a Demo</HeaderButton>
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <NavLink to="/book-a-demo">
            <HeaderButton>Contact Us</HeaderButton>
          </NavLink>
        </NavbarItem>
          </div>
        </div>
      </NavbarMenu>

      {/* Render child routes using Outlet */}
      <Outlet />
    </Navbar>
  );
};

export default Header;
