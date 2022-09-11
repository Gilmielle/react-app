import React from 'react';
import styled from 'styled-components'
import { CompareButton } from './CompareButton';
import { LikeeButton } from './LikeButton';

interface IControlsProps {
  id: string;
}

const StyledControlsWrapper = styled.div`
  position: absolute;
  bottom: 46%;
  right: 12px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`

export function Controls({ id }: IControlsProps) {
  return (
    <StyledControlsWrapper>
      <CompareButton id={id} />
      <LikeeButton id={id} />
    </StyledControlsWrapper>
  );
}