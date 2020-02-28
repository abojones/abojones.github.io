import React, { Component } from "react";
import {Size} from "../../../common/models";

export default class SizePicker extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      size: ""
    }
  }

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      size: event.currentTarget.value
    })
  };

  handleSubmit = () => {
    alert(`Thanks for buying!`)
  }

  render() {
    return (
      <div className="size-picker">
        <p>Select Size:</p>
        <form onSubmit={this.handleSubmit}>
          {this.props.availableSizes.map((size, index) => {
            let checked = this.state.size === size.Description;
            let checkedClass = checked ? "size-picker_option--checked" : "";
            return (
              <label key={index}>
                <input
                  type="radio"
                  value={size.Description}
                  checked={checked}
                  onChange={this.handleChange}

                />
                <div className={`size-picker_option ${checkedClass}`}>
                  <p>{size.Name}</p>
                  <p>{size.Currency}{size.Price.toFixed(2)}</p>
                </div>
              </label>
            );
          })}
          <button
            type="submit"
            className="size-picker_buy-button"
            disabled={this.state.size === ""}
          >Buy</button>
        </form>
      </div>
    )
  }
}

type Props = {
  availableSizes: Size[];
}
type State = {
  size: string;
}