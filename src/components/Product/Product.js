import React, {Component} from "react";
import { css } from 'emotion';
import DefaultImage from '../content/DefaultImage/DefaultImage';
// import PayButton from "../PayButton";

const product = css`
  background-color: hotpink;
`

class Product extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentImage: 0,
    //   currentSku: props.skus[0]
    };
  }

  render() {
    const {id, name, caption, images, description} = this.props;
    const {currentImage} = this.state;

    const thumbnails = images.map((image, index) => {
      console.log(image);
      return image.length === 0 ? <DefaultImage/> : <img alt = 'product' key={index}
                  className={"product-thumbnail " + (index === currentImage
                      ? 'selected' : '')}
                  onClick={() => this.setState({currentImage: index})}
                  src={image} width="75"/>
    });

    const itemImage = (images) => {
      return images.length === 0 ? <DefaultImage/> : <img alt={name} className="product-image img-fluid"
      src={images[currentImage]}/>      
    }

    // const skuList = skus.map((sku, index) => {

    //   const {attributes} = sku;

    //   return (
    //       <div key={sku.id}
    //            className={"col-xs-2 product-sku " + (currentSku.id === sku.id
    //                ? 'selected' : '')}
    //            onClick={() => this.setState({currentSku: sku})}>
    //         {attributes.size}
    //       </div>
    //   );
    // });

    // const euros = price.substring(0, price.length - 2);
    // const cents = price.slice(-2);

    return (
        <div key={id} className={product}>
          <div className="product-images col-xs-12 col-sm-6 col-lg-8">
            <div className="product-image-wrapper row">
              <div className="col-xs-12 col-lg-2 d-none d-lg-block d-xl-block">
                <div className="product-thumbnails">{images.length === 0 ? <DefaultImage/> : thumbnails}</div>
              </div>
              <div className="col-xs-12 col-lg-10">
              {itemImage(images)}
              </div>
            </div>
          </div>
          <div className="product-details col-xs-12 col-sm-6 col-lg-4">
            <h2 className="product-name">{name}</h2>
            <h1 className="product-caption">{caption}</h1>
            <div
                className="product-price">
              <div className="product-taxes">Inclusief BTW</div>
            </div>
            <p className="product-description">{description}</p>
            <hr/>
            <hr/>
          </div>
        </div>
    );
  }
}
;

export default Product;