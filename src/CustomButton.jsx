import { Component } from "react";
import "./styles.css";

export class CustomButton extends Component {
  render() {
    const { text, warnMessage, hint } = this.props;
    return (
      <div className="btnDiv">
        <button
          style={
            hint && warnMessage
              ? {
                  fontStyle: "italic",
                  border: "1px solid red",
                  background: "red"
                }
              : hint
              ? { fontStyle: "italic" }
              : warnMessage
              ? { border: "1px solid red" }
              : null
          }
          type="button"
          onClick={warnMessage ? (e) => alert(warnMessage) : null}
        >
          {text}
        </button>
        <p className={hint && "hint"}>{hint}</p>
      </div>
    );
  }
}
