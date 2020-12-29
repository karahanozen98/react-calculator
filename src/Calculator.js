import React from "react";
import Calculate from "./Calculate";
import Button from "@material-ui/core/Button";
import "./Calculator.css";

var str = "";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
    // this.calculate = this.calculate.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let id = event.target.offsetParent.id;
    if (
      (parseInt(id) < 10 && parseInt(id) >= 0) ||
      id === "+" ||
      id === "-" ||
      id === "*" ||
      id === "/" ||
      id === "(" ||
      id === ")" ||
      id === "."
    ) {
      str += id;
    } else if (id === "back") {
      str = str.substring(0, str.length - 1);
    } else if (id === "c") {
      str = "";
    } else if (id === "equals") {
      str = Calculate(str).toString();
    }
    this.setState((prevState) => {
      return {
        text: str,
      };
    });
  }

  render() {
    var size = this.state.text.length;
    var temp = size >= 0 ? this.state.text : "";
    temp = size > 24 ? temp.substring(size - 24, size) : temp;
    return (
      <div style={{minHeight:"100vh"}}>
        <div className="Screen">{temp}</div>
        <div className="Calc">
          <Button variant="outlined" id="c" onClick={this.handleClick}>
            C
          </Button>
          <Button variant="outlined" id="back" onClick={this.handleClick}>
            ←
          </Button>
          <Button variant="outlined" id="equals" onClick={this.handleClick}>
            =
          </Button>
          <Button variant="outlined" id="/" onClick={this.handleClick}>
            ÷
          </Button>
          <br></br>
          <Button variant="outlined" id="7" onClick={this.handleClick}>
            7
          </Button>
          <Button variant="outlined" id="8" onClick={this.handleClick}>
            8
          </Button>
          <Button variant="outlined" id="9" onClick={this.handleClick}>
            9
          </Button>
          <Button variant="outlined" id="*" onClick={this.handleClick}>
            x
          </Button>
          <br></br>
          <Button variant="outlined" id="4" onClick={this.handleClick}>
            4
          </Button>
          <Button variant="outlined" id="5" onClick={this.handleClick}>
            5
          </Button>
          <Button variant="outlined" id="6" onClick={this.handleClick}>
            6
          </Button>
          <Button variant="outlined" id="-" onClick={this.handleClick}>
            -
          </Button>
          <br></br>
          <Button variant="outlined" id="1" onClick={this.handleClick}>
            1
          </Button>
          <Button variant="outlined" id="2" onClick={this.handleClick}>
            2
          </Button>
          <Button variant="outlined" id="3" onClick={this.handleClick}>
            3
          </Button>
          <Button variant="outlined" id="+" onClick={this.handleClick}>
            +
          </Button>
          <br></br>
          <Button variant="outlined" id="0" onClick={this.handleClick}>
            0
          </Button>
          <Button variant="outlined" id="." onClick={this.handleClick}>
            .
          </Button>
          <Button variant="outlined" id="(" onClick={this.handleClick}>
            (
          </Button>
          <Button variant="outlined" id=")" onClick={this.handleClick}>
            )
          </Button>
        </div>
      </div>
    );
  }
}
export default Calculator;
