import React, { useState, useEffect } from "react";
//reactstrap
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
  UncontrolledDropdown,
  Button,
} from "reactstrap";

// translation
import { useTranslation } from "react-i18next";
// logo
import Logo from "../../asset/imgs/logo.svg";
import globe from "../../asset/imgs/icons/globe.svg";
import { settingsStore } from "store/settingsStore";
const dropdwonItems = [
  "Product",
  "Solutions",
  "Resources",
  "Enterprise",
  "Pricing",
];
function NavBar() {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const { t, i18n } = useTranslation("navbar");

  const [direction, setDirection] = settingsStore((state) => [
    state.direction,
    state.setDirection,
  ]);

  const toggleLang = () => {
    setDirection(direction === "ltr" ? "rtl" : "ltr");
    i18n.changeLanguage(direction === "ltr" ? "ar" : "en");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <nav>
      <Navbar expand="lg" className="px-3">
        <NavbarBrand href="/">
          <img src={Logo} alt="" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            {dropdwonItems.map((item, index) => (
              <UncontrolledDropdown nav inNavbar key={index}>
                <DropdownToggle nav caret>
                  {item}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    {" "}
                    <NavLink href="/">option 1</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    {" "}
                    <NavLink href="/">option 2</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Option 3</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            ))}
          </Nav>
          <NavbarText className="mx-2">
            <Button
              className="bg-white border-white text-primary"
              onClick={() => toggleLang()}
            >
              <img src={globe} alt="icon" className="NavbarText_icon px-1" />
              <span>{t("EN")}</span>
            </Button>
          </NavbarText>
          <NavbarText className="mx-2">{t("Contact Sales")}</NavbarText>
          <NavbarText className="mx-2">{t("Login")}</NavbarText>
          <Button className="mx-2 btn-secondary pill">Sign up free →</Button>
        </Collapse>
      </Navbar>
    </nav>
  );
}

export default NavBar;
