import React, { Component } from "react";
import Card from "./Card/Card";
import "./Cards.less";

class Cards extends Component {
  render() {
    return (
      <div className="cards_parent">
        {this.props.content &&
          this.props.content.cardsData.map((item, index) => (
            <Card key={index} item={item} />
          ))}
      </div>
    );
  }
}

export default Cards;
