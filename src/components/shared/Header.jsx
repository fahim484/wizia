import React from "react";
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
          <img src="/public/Img/Logo.png" alt="" />
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
          <Link color="foreground" href="#">
            About Us
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#" aria-current="page">
            Pricing
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#">
            Customers
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#">
            Solutions
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden md:flex">
        <NavbarItem>
          <Button
            as={Link}
            color="white"
            href="#"
            variant="bordered"
            radius="full"
            className="text-[#FFFFFF] shadow-nav-btn hover:bg-[#0FF1F6] hover:text-[#002228] hover:border-none font-medium hover:transition-none"
          >
            Book a Demo
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button
            as={Link}
            color="white"
            href="#"
            variant="bordered"
            radius="full"
            className="text-[#FFFFFF] shadow-nav-btn hover:bg-[#0FF1F6] hover:text-[#002228] hover:border-none font-medium hover:transition-none"
          >
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Navbar Menu for Small Screens */}
      <NavbarMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        className="bg-transparent w-full bg-accent pl-[25px] navbar-hr-line"
      >
        <div className="flex flex-col items-center justify-center gap-3">
          <NavbarMenuItem className="Navbar-menu-item">
            <Link
              color="foreground"
              href="#"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem  className="Navbar-menu-item">
            <Link
              color="foreground"
              href="#"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem  className="Navbar-menu-item">
            <Link
              color="foreground"
              href="#"
              onClick={() => setIsMenuOpen(false)}
            >
              Customers
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem  className="Navbar-menu-item">
            <Link
              color="foreground"
              href="#"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
          </NavbarMenuItem>
          <div className="flex gap-4 mt-1">
            <NavbarMenuItem>
              <Button
                as={Link}
                color="white"
                href="#"
                variant="bordered"
                radius="full"
                className="text-[#FFFFFF] shadow-nav-btn hover:bg-[#0FF1F6] hover:text-[#002228] hover:border-none font-medium hover:transition-none"
              >
                Book a Demo
              </Button>
            </NavbarMenuItem>

            <NavbarMenuItem>
              <Button
                as={Link}
                color="white"
                href="#"
                variant="bordered"
                radius="full"
                className="text-[#FFFFFF] shadow-nav-btn hover:bg-[#0FF1F6] hover:text-[#002228] hover:border-none font-medium hover:transition-none"
              >
                Contact Us
              </Button>
            </NavbarMenuItem>
          </div>
        </div>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
