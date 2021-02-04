import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoSVG } from '../../assets/logo.svg';

export const LogoWrapper = styled.div`
  & svg {
    width: 70vw;
    max-width: 35rem;
  }
`;

const Logo = (): JSX.Element => {
  return (
    <LogoWrapper>
      <LogoSVG />
    </LogoWrapper>
  );
};

export default Logo;
