import * as React from 'react';
import { css } from 'emotion';
import DefaultImage from '../DefaultImage/DefaultImage';
import { color, font } from '../../__styles__/index';
import placeholder from '../DefaultImage/images/default-image.svg';

const product = css`
  background-color: ${color.pink};
  font-family: ${font.main};
`;

export type ProductProps = {
  id: string;
  name: string;
  caption: string;
  images: Array<string>;
  description: string;
  skus: string;
};

class Product extends React.Component<ProductProps, any> {
  state = {
    currentImage: 0,
    defaultImage: placeholder
  };

  render() {
    const { id, name, caption, images, description } = this.props;
    const { currentImage } = this.state;

    const thumbnails = images.map((image: string, index: number) => {
      console.log(placeholder);
      return image.length === 0 ? (
        <DefaultImage placeholder={this.state.defaultImage} />
      ) : (
        <img
          alt="product"
          key={index}
          className={
            'product-thumbnail ' + (index === currentImage ? 'selected' : '')
          }
          onClick={() => this.setState({ currentImage: index })}
          src={image}
          width="75"
        />
      );
    });

    const itemImage = (images: Array<string>) => {
      return images.length === 0 ? (
        <DefaultImage placeholder={this.state.defaultImage} />
      ) : (
        <img
          alt={name}
          className="product-image img-fluid"
          src={images[currentImage]}
        />
      );
    };
    return (
      <div key={id} className={product}>
        <div className="product-thumbnails">
          {images.length === 0 ? (
            <DefaultImage placeholder={this.state.defaultImage} />
          ) : (
            thumbnails
          )}
        </div>
        {itemImage(images)}
        <h2 className={product}>{name}</h2>
        <h1 className="product-caption">{caption}</h1>
        <p className="product-description">{description}</p>
      </div>
    );
  }
}
export default Product;
