import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { StyledSimpleButtonBody } from './style';

type OwnPropertyType = {
  buttonUrl?: string;
  buttonName: string;
  // buttonStyle: 1 | 2 ;
  resetStorage?: boolean;
  onClick?: () => void;
};

export const SimpleButton: FC<OwnPropertyType> = React.memo((props) => {
  if (props.resetStorage) {
    localStorage.clear();
  }

  return (
    <>
      {props.buttonUrl ? (
        <NavLink to={props.buttonUrl}>
          <StyledSimpleButtonBody onClick={props.onClick}>
            {props.buttonName}
          </StyledSimpleButtonBody>
        </NavLink>
      ) : (
        <StyledSimpleButtonBody onClick={props.onClick}>{props.buttonName}</StyledSimpleButtonBody>
      )}
    </>
  );
});
