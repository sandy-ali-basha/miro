import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button, Col, Container, Row } from "reactstrap";

//* images
import Walmart from "asset/imgs/icons/Walmart_Index_Only.svg.svg";
import cisco from "asset/imgs/icons/cisco.svg.svg";
import Volvo from "asset/imgs/icons/Volvo_Index_Only.svg.svg";
import deloitte from "asset/imgs/icons/deloitte.svg.svg";
import okte from "asset/imgs/icons/okte.svg";
import hybridworl from "asset/imgs/hybridwork.png";
import all_integrationspng from "asset/imgs/all_integrations.png";
import Brainstormwithoutshadow from "asset/imgs/Brainstormwithoutshadow.png";

//* components
import Tabs from "components/Tabs";
import LearnMore from "../components/LearnMore";
import UlTabs from "components/UlTabs";
import Teams from "components/Teams";
import Hero from "components/Hero";

function Home() {
  const Trusted = [Walmart, cisco, Volvo, deloitte, okte];

  const Collaborate = [
    {
      title: "Free forever",
      text: "Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our pricing plans for more features.",
    },
    {
      title: "Easy integrations",
      text: "Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our Marketplace .",
    },
    {
      title: "Security first",
      text: "We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more at our Trust Center .",
    },
  ];

  const brainstorming = [
    {
      title: "Brainstorming",
      content_title: "Brainstorming",
      content_text:
        "Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.",
      content_link: "link",
      img: Brainstormwithoutshadow,
    },
    {
      title: "Marketing",
      content_title: "Marketing",
      content_text:
        "Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.",
      content_link: "link",
      img: Brainstormwithoutshadow,
    },
    {
      title: "Product Management",
      content_title: "Product Management",
      content_text:
        "Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.",
      content_link: "link",
      img: Brainstormwithoutshadow,
    },
    {
      title: "Engineering",
      content_title: "Engineering",
      content_text:
        "Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.",
      content_link: "link",
      img: Brainstormwithoutshadow,
    },
    {
      title: "Consultants",
      content_title: "Consultants",
      content_text:
        "Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.",
      content_link: "link",
      img: Brainstormwithoutshadow,
    },
    {
      title: "Agile Coaches",
      content_title: "Agile Coaches",
      content_text:
        "Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.",
      content_link: "link",
      img: Brainstormwithoutshadow,
    },
    {
      title: "Sales",
      content_title: "Sales",
      content_text:
        "Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.",
      content_link: "link",
      img: Brainstormwithoutshadow,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation("index");

  return (
    <Container>
      <Hero />
      <section>
        <p className="text-muted text-center mb-5">
          {t("Trusted by 45M+ users")}
        </p>
        <div className="d-flex justify-content-evenly flex-wrap">
          {Trusted.map((item, index) => (
            <img src={item} key={index} alt="trusted item" />
          ))}
        </div>
      </section>
      <section className="text-center">
        <h2 className="text-center fs-h fw-bolder w-md-50 mx-auto position-relative">
          {t("Collaborate without constraints")}
          <p className="yourIdea">{t("YOUR IDEA STARTS HERE")}</p>
        </h2>
        <Row>
          {Collaborate.map((item, index) => {
            return (
              <Col md="4" sm="6" key={index} className="pt-4">
                <h4 className="fw-bold text-start">{item.title}</h4>
                <p className="text-muted text-start fs-5 pt-2">{item.text}</p>
              </Col>
            );
          })}
        </Row>
        <Button type="submit" className="px-5 mx-auto  pill py-2 mt-5">
          {t("Sign up free")} →
        </Button>
      </section>
      <section>
        <Row className="flex-column-reverse flex-md-row">
          <Col
            md="6"
            className="d-flex flex-column justify-content-center px-5"
          >
            <h2 className="fw-bold pb-2 fs-h ">
              {t("Work together, wherever you work")}
            </h2>
            <p className="text-muted pb-4">
              {t(
                "In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are."
              )}
            </p>
            <LearnMore />
          </Col>
          <Col md="6">
            <img className="w-100" src={hybridworl} alt="" />
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <img className="px-3 w-100" src={all_integrationspng} alt="" />
          </Col>
          <Col
            md="6"
            className="d-flex flex-column justify-content-center px-5"
          >
            <h2 className="fw-bold pb-2 fs-h">
              {t("Connect your tools, close your tabs")}
            </h2>
            <p className="text-muted pb-4">
              {t(
                "Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love."
              )}
            </p>
            <a href="/Learn_more">
              <span className="pb-1 border-bottom border-secondary">
                {t("Learn more")}
              </span>
              <i className="mx-2">
                <svg
                  width="19"
                  height="25"
                  viewBox="0 0 19 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.2088 19.6719L9.22443 18.7003L13.277 14.6477H2.78125V13.2415H13.277L9.22443 9.2017L10.2088 8.21733L15.9361 13.9446L10.2088 19.6719Z"
                    fill="#4262FF"
                  />
                </svg>
              </i>
            </a>
          </Col>
        </Row>
      </section>
      <section className="wayWeWork">
        <div className="text-center">
          <h2 className="fs-1">{t("The Ways We Work")}</h2>
          <p>{t("How has our relationship with work changed?")}</p>
          <Button type="submit" className="pill py-2">
            {t("View the report →")}
          </Button>
        </div>
      </section>

      <Tabs tabs={brainstorming} title="Built for the way you work" />
      <UlTabs />
      <Teams />
    </Container>
  );
}

export default Home;
