import React, { Component } from "react";
import "./Card.less";
class Card extends Component {
  render() {
    const item = this.props.item;
    return (
      <div className="card">
        <img src={item.image} alt="logo" className="logo"></img>
        <div className="card_title">{item.title}</div>
        <div className="card_description">{item.description}</div>
      </div>
    );
  }
}

export default Card;
