import { useTranslation } from "react-i18next";
const LearnMore = () => {
  const { t } = useTranslation("index");

  return (
    <a href="/Learn_more">
      <span className="pb-1 border-bottom border-secondary">
        {t("Learn more")}{" "}
      </span>{" "}
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
  );
};
export default LearnMore;
