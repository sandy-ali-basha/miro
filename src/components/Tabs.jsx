import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//*reactstrap
import { Col, Nav, NavItem, Row, TabContent, TabPane } from "reactstrap";

//* components
import LearnMore from "./LearnMore";

const Tabs = ({ tabs, title }) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <section>
      <h1 className="fs-h pb-4">{title}</h1>
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
                <h5 className="pb-3 pt-4">{tab.content_title}</h5>
                <p className="pb-3 tab_content">{tab.content_text}</p>
                <LearnMore />
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

export default Tabs;
