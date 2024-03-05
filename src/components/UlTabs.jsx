import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//*reactstrap
import { Col, Nav, NavItem, Row, TabContent, TabPane } from "reactstrap";

//* components
import LearnMore from "./LearnMore";

//* images
import uxdesign from "asset/imgs/ux_design.png";
import { useTranslation } from "react-i18next";
import diamnd from "asset/imgs/icons/diamond.png";
import figma from "asset/imgs/icons/figma.png";
import xd from "asset/imgs/icons/xd.svg";
import notion from "asset/imgs/icons/notion.png";

const UlTabs = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const UxTabContent = () => (
    <div>
      <ul className="UxTabContent_li py-5 ">
        <li className="mt-3">Build low-fi wireframes</li>
        <li className="mt-3">Involve stakeholders in the design process</li>
        <li className="mt-3">Run engaging design workshops</li>
      </ul>
      <LearnMore />
      <div className="mt-4 pt-5">
        <p className="text-muted"> Integrate your favorite tools</p>
        <div className="d-flex ">
          <img className="me-3" src={xd} alt="adobe xd icon" />
          <img className="me-3" src={diamnd} alt="diamnd icon" />
          <img className="me-3" src={figma} alt="figma icon" />
          <img className="me-3" src={notion} alt="notion icon" />
        </div>
      </div>
    </div>
  );

  const tabs = [
    {
      title: "UX & Design",
      content: UxTabContent,
      img: uxdesign,
    },
    {
      title: "Marketing",
      content: UxTabContent,
      img: uxdesign,
    },
    {
      title: "Product Management",
      content: UxTabContent,
      img: uxdesign,
    },
    {
      title: "Engineering",
      content: UxTabContent,
      img: uxdesign,
    },
    {
      title: "Consultants",
      content: UxTabContent,
      img: uxdesign,
    },
    {
      title: "Agile Coaches",
      content: UxTabContent,
      img: uxdesign,
    },
    {
      title: "Sales",
      content: UxTabContent,
      img: uxdesign,
    },
  ];

  const { t } = useTranslation("index");

  return (
    <section>
      <h1 className="fs-h pb-4">{t("Built for all kinds of teams")}</h1>
      <div className="nav-tabs-container">
        <Nav tabs className="border-0 mb-md-5 mb-1">
          {tabs.map((tab, index) => (
            <NavItem key={index}>
              <NavLink
                className={`mx-1 tab ${
                  activeTab === `${index + 1}` ? "active activeTab " : ""
                }`}
                onClick={() => {
                  toggle(`${index + 1}`);
                }}
              >
                {tab.title}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </div>

      <TabContent activeTab={activeTab}>
        {tabs.map((tab, index) => (
          <TabPane key={index} tabId={`${index + 1}`}>
            <Row>
              <Col md="4">
                <tab.content />
              </Col>
              <Col md="8">
                <img className="w-100" src={tab.img} alt="" />
              </Col>
            </Row>
          </TabPane>
        ))}
      </TabContent>
    </section>
  );
};

export default UlTabs;
