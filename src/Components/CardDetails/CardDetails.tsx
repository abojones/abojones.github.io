import React, { Component } from "react";
import SizePicker from "./SizePicker/SizePicker"
import {ProductDetail, Size} from "../../common/models";
import "./CardDetails.scss";
import {http} from "../../common/api";

export default class CardDetails extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      availableSizes: [],
      thumbnailUrl: "",
      title: ""
    }
  }

  async componentDidMount() {
    let {id} = this.state;
    let result = await http<ProductDetail>(`https://www.moonpig.com/uk/api/product/product/?mpn=${id}`);
    this.setState({
      availableSizes: result.AvailableSizes,
      thumbnailUrl: result.ThumbnailUrl,
      title: result.Title
    })
  }

  render() {
    let {
      title,
      thumbnailUrl,
      availableSizes
    } = this.state;
    return (
      <section>
        <h1>{title}</h1>
        <div className="card-details">
          <div className="card-details__img-container">
            <img alt={title} src={thumbnailUrl}/>
          </div>
          <SizePicker availableSizes={availableSizes}/>
        </div>
      </section>
    )
  }
}

interface Props {
  match: {
    params: {
      id: string;
    }
  }
};
type State = {
  id: string,
  availableSizes: Size[],
  thumbnailUrl: string;
  title: string;
}