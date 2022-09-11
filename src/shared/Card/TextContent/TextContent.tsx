import React from 'react';
import styled from 'styled-components'
import { COLORS } from '../../../constants';
import { IAdvData } from '../../../hooks/useAdvsData';
import { DeliveryIcon, ProtectionIcon } from '../../Icons';

interface ITextContentProps {
  advData: IAdvData;
}

const StyledTextContentWrapper = styled.div`
  display: grid;
  grid-template-areas: 
    'oldPrice icons'
    'price icons'
    'title title'
    'locality date';
`;

const StyledTitle = styled.h3`
  grid-area: title;
  margin: 0;
  margin-bottom: 14px;
  margin-top: 8px;
  font-weight: 500;
`;

const StyledLink = styled.a`
  transition: color 0.3s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const StyledOldPrice = styled.span`
  grid-area: oldPrice;
  color: ${COLORS.semiLightText};
  text-decoration: line-through;
`;

const StyledPrice = styled.span`
  grid-area: price;
  font-weight: 700;
  font-size: 22px;
  color: ${COLORS.semiLightText};
`;

const StyledLocality = styled.span`
  grid-area: locality;
  font-size: 12px;
  color: ${COLORS.lightText};
`;

const StyledDate = styled.span`
  grid-area: date;
  justify-self: end;
  font-size: 12px;
  color: ${COLORS.lightText};
`;

const StyledIcons = styled.span`
  grid-area: icons;
  justify-self: end;
  display: flex;
  flex-direction: row;
  column-gap: 8px;
  z-index: 1;
`;

interface IconWrapperProps {
  seen: boolean;
}

const StyledIconWrapper = styled.span<IconWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  padding: 5px 2px;
  cursor: pointer;

  & > svg {
    max-height: 19px;
    
    & path {
      transition: fill 0.3s ease-in-out;
      fill: ${props => props.seen ? COLORS.accent : COLORS.iconDefault};
    }
  } 

  &:hover > svg path {
    fill: ${props => props.seen ? COLORS.iconDefault : COLORS.accent};
  }

  @media all and (max-width: 500px) {
    height: 40px;
    width: 40px;

    & > svg {
      max-height: 30px;
    }
  }
`;

export function TextContent({ advData }: ITextContentProps) {
  return (
    <StyledTextContentWrapper>
      <StyledTitle>
        <StyledLink href={`#post-url/${advData.id}`}>
          {advData.title}
        </StyledLink>
      </StyledTitle>
      <StyledOldPrice>{advData.oldPrice} ₽</StyledOldPrice>
      <StyledPrice>{advData.price} ₽</StyledPrice>
      <StyledLocality>{advData.locality}</StyledLocality>
      <StyledDate>{advData.date}</StyledDate>
      <StyledIcons>
        <StyledIconWrapper seen={advData.seen}>
          <span className='visually-hidden'>Иконка доставки</span>
          <DeliveryIcon />
        </StyledIconWrapper>
        <StyledIconWrapper seen={advData.seen}>
          <span className='visually-hidden'>Иконка надёжной сделки</span>
          <ProtectionIcon />
        </StyledIconWrapper>
      </StyledIcons>
    </StyledTextContentWrapper>
  );
}
