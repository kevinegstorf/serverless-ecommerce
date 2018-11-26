import * as React from 'react';

interface DefaultImageProps {
    placeholder?: string,
    name?: string
}

const DefaultImage: React.SFC<DefaultImageProps> = (props) => {
    console.log(props)
  return <img alt='default' src={props.placeholder} className={name}height="42" width="42"/>;
};

export default DefaultImage;
