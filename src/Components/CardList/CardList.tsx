import React, { Component } from 'react';
import CardTile from "../CardTile/CardTile";
import "./CardList.scss"
import {
  Search,
  Product
} from "../../common/models"
import { http } from "../../common/api"

class CardList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      products: [],
    }
  }
  async componentDidMount() {
    let result = await http<Search>("https://search.moonpig.com/api/products?size=20&fq=card_shop_id:1");
    let cards = result.Products.filter((prod) => prod.ProductCategory.Name === "greeting cards");
    this.setState({
      products: cards
    })

  }

  render() {
    return (
      <section data-test-id="card-list" className="card-list">
        {this.state.products.map((product, index) => {
          return (
            <CardTile id={product.MoonpigProductNo} key={index} img={product.ProductImage.Link.Href} title={product.Title}/>
          )
        })}
      </section>
    );
  }
}

type Props = {}
type State = {
  products: Product[];
}

export default CardList