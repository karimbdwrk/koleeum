import React,{Component} from "react";
import ReactDOM from "react-dom";

class Arturin extends Component {
  componentDidMount() {
    Element.prototype.appendBefore = function (element) {
      element.parentNode.insertBefore(this, element)
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://app.arturin.com/social_widget.js?id=7612952";
    script.appendBefore(document.getElementsByClassName('home'))
  }

  render() {
    return (
      <div className="Arturin">
        <h1>Hello react</h1>
        <div><div id='monsitemedia_social_wall'></div></div>
      </div>
    );
  }
}

export default Arturin;
