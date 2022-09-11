import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constants';

const StyledLabel = styled.span`
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px 8px;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: ${COLORS.accentText};
  background: ${COLORS.backgroundLabel};
  border-radius: 8px;
`;

export function SeenLabel() {
  return (
    <StyledLabel>
      Просмотрено
    </StyledLabel>
  );
}