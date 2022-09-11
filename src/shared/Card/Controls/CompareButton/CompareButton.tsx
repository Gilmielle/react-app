import React, { useState } from 'react';
import styled from 'styled-components'
import { COLORS } from '../../../../constants';
import { CompareIcon } from '../../../Icons';

interface ICompareBtnProps {
  id: string;
  clicked?: boolean;
}

interface IIconWrapperProps {
  clicked: boolean;
}

const StyledCompareIconWrapper = styled.button<IIconWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  padding: 2px;
  z-index: 1;
  cursor: pointer;

  & > svg {
    
    & path {
      transition: fill 0.3s ease-in-out;
      fill: ${props => props.clicked ? COLORS.accent : COLORS.accentText};
    }
  } 

  &:hover > svg path {
    fill: ${props => props.clicked ? COLORS.accentDarker : COLORS.iconDefault};
  }
  
  @media all and (max-width: 500px) {
    height: 40px;
    width: 40px;

    & > svg {
      max-height: 30px;
    }
  }
`;


export function CompareButton({ id, clicked = false }: ICompareBtnProps) {
  const [isClicked, setIsClicked] = useState(clicked);

  function handleClick(id: string) {
    console.log(id);
    setIsClicked(!isClicked);
  }

  return (
    <StyledCompareIconWrapper clicked={isClicked} onClick={(e) => handleClick(id)}>
      <span className='visually-hidden'>Сравнить</span>
      <CompareIcon />
    </StyledCompareIconWrapper>
  );
}