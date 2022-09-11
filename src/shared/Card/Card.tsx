import React from 'react';
import styled from 'styled-components'
import { IAdvData } from '../../hooks/useAdvsData';
import { TextContent } from './TextContent';
import { Controls } from './Controls';
import { Preview } from './Preview';
import { COLORS } from '../../constants';
import { SeenLabel } from './SeenLabel';

interface ICardProps {
  advData: IAdvData;
}

interface LiProps {
  seen: boolean;
}

const StyledCardWrapper = styled.li<LiProps>`
  position: relative;
  padding: 12px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background-color: ${props => props.seen ? COLORS.backgroundSeen : COLORS.accentText};

  &:hover h3 a, 
  &:focus-within h2 a {
    color: ${COLORS.accent};
  }
`;

export function Card({ advData }: ICardProps) {
  return (
    <StyledCardWrapper seen={advData.seen}>
      <Preview previewImg='https://api.lorem.space/image/house' title={advData.title} />
      <TextContent advData={advData} />
      <Controls id={advData.id} />
      
      {advData.seen && (
        <SeenLabel />
      )}
    </StyledCardWrapper>
  );
};
