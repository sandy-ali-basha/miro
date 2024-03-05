import { Button, Col, Input, Row } from "reactstrap";

// images
import stars from "asset/imgs/icons/stars.svg";
import Vector from "asset/imgs/icons/Vector.svg";
import GetAre from "asset/imgs/icons/GetAre.svg";
import Captera from "asset/imgs/icons/Captera.svg";
import headerimage from "asset/imgs/headerimage-without-text.png";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation("index");

  return (
    <Row className="py-5 flex-column-reverse flex-md-row">
      <Col className="d-flex flex-column justify-content-evenly v-100" md="5">
        <h2 className="fw-bold fs-h">{t("Take ideas from better to best")}</h2>
        <p>
          {t(
            " Miro is your team's visual platform to connect, collaborate, and create — together."
          )}
        </p>
        <form>
          <Input
            name="email"
            type="text"
            className="w-100 pill mb-2 py-2"
            placeholder="Enter your work email"
          />
          <Button type="submit" className="w-100 pill py-2">
            {t("Sign up free")} →
          </Button>
          <span className="text-muted fs-14">
            {t("Collaborate with your team within minutes")}
          </span>
        </form>
        <div
          className="d-flex justify-content-between rounded gap-2 py-2 px-3 me-4  "
          style={{ background: "#F5F5F7" }}
        >
          <div>
            <img src={stars} alt="" />
            <div className="fs-11">{t("Based on 5149+ reviews")}:</div>
          </div>
          <img src={Vector} alt="" />
          <img src={GetAre} alt="" />
          <img src={Captera} alt="" />
        </div>
      </Col>
      <Col md="7" className="mb-4 mb-md-0">
        <img src={headerimage} alt="" className="headerimage w-100" />
      </Col>
    </Row>
  );
};
export default Hero;
