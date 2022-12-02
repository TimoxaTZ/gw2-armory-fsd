import React, { FC } from 'react';

// import logo from './../../../../assets/images/logo.jpg';
import { StyledImg } from './style';

export type OwnPropsType = {
  src: string;
};

const Logo: FC<OwnPropsType> = ({ src }) => <StyledImg src={src} />;

export default Logo;
