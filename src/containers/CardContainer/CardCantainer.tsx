import React from "react";
import { Card } from "antd";

const styles = require("./CardContainer.module.scss");

const CardContainer: React.FC = ({ children }) => {
  return <Card className={styles.cardContainer}>{children}</Card>;
};

export default CardContainer;
