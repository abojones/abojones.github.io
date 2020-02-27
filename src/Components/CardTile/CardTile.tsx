import React from 'react';
import "./CardTile.scss"
import {NavLink} from "react-router-dom"

const CardTile = (props: Props) => {
  let {
    id,
    img,
    title
  } = props;
  return (
    <div data-test-id="card-tile" className="card-tile">
      <NavLink to={`/cards/${id}`}>
        <img className="card-tile_img" alt={title} src={img}/>
      </NavLink>
    </div>
  );
};

type Props = {
  img: string,
  title: string,
  id: string
};

export default CardTile;