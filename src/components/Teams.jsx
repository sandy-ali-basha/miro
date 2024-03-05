import { useTranslation } from "react-i18next";
import { Button, Col, Row } from "reactstrap";

import person_1 from "asset/imgs/person (1).png";
import person_2 from "asset/imgs/person (2).png";
import person_3 from "asset/imgs/person (3).png";

import icon_1 from "asset/imgs/vmware.svg";
import icon_2 from "asset/imgs/Vector (2).svg";
import icon_3 from "asset/imgs/frog.png";

const Teams = () => {
  const { t } = useTranslation("index");
  return (
    <section className="d-flex flex-column align-items-center">
      <h1 className="fw-bold text-center mb-5">
        {t("Loved by the world's best teams")}
      </h1>
      <Button outline color="secondary" className="mx-auto pill mb-5">
        {t("See all customer stories →")}
      </Button>
      <Row>
        <Col className="Teams_item">
          <div>
            {" "}
            <img src={icon_1} alt="" />
            <p className=" my-3">
              “When the pandemic hit, those of us who thrive on in-person
              collaboration were worried that our creativity and productivity
              would suffer. Miro was the perfect tool to help us with
              collaboration, whiteboarding, and retrospectives while remote.”
            </p>
          </div>
          <div className="profile">
            <img src={person_1} alt="icon" />
            <div className="content">
              <div>{t("Roxanne Mustafa")}</div>
              <div>{t("Design Team Lead at VMware")}</div>
            </div>
          </div>
        </Col>
        <Col className="Teams_item">
          <div>
            <img src={icon_2} alt="" />
            <p className=" my-3">
              “Miro helps solve one of the major gaps in product design: how to
              manage tasks across product designers whose projects are in
              different tools.”
            </p>
          </div>
          <div className="profile">
            <img src={person_2} alt="icon" />
            <div className="content">
              <div>{t("Roxanne Mustafa")}</div>
              <div>{t("Design Team Lead at VMware")}</div>
            </div>
          </div>
        </Col>
        <Col className="Teams_item">
          <div>
            {" "}
            <img src={icon_3} alt="vmware" />
            <p className=" my-3">
              “As we used Miro we moved from skepticism to belief to innovation,
              and now we have a tool that’s at the core of what we do and will
              continue to extend into the future.”
            </p>
          </div>
          <div className="profile">
            <img src={person_3} alt="" />
            <div className="content">
              <div>{t("Roxanne Mustafa")}</div>
              <div>{t("Design Team Lead at VMware")}</div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};
export default Teams;
