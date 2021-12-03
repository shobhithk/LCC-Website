import React from "react";
import styles from "./Card.module.css";
import { Button } from "react-bootstrap";

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles["card-header"]}>
        <div className={styles["card-title-group"]}>
          <h5 className={styles["card-title"]}>{props.cardData.title}</h5>
          <div className={styles["card-profile"]}>{props.cardData.author}</div>
          <div className={styles["card-date"]}>{props.cardData.date}</div>
        </div>
      </div>
      <img
        className={styles["card-image"]}
        src={props.cardData.imageName}
        alt="Logo"
      />
      <div className={styles["card-text"]}>{props.cardData.description}</div>
      <Button className={styles['card-button']} variant="warning" size="sm">
        Small button
      </Button>{" "}
    </div>
  );
}

export default Card;
