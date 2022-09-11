import React from 'react';
import styled from 'styled-components'

interface ISectionProps {
  sectionHeader: string;
  children?: React.ReactNode
}

const StyledSection = styled.section`
  margin-top: 25px;
  margin-bottom: 25px;
`;

const StyledTitle = styled.h2`
  margin: 0;
  margin-bottom: 8px;
  padding-left: 32px;
  font-weight: 700;
  font-size: 22px;
`;

export function Section({ children, sectionHeader }: ISectionProps) {
  return (
    <StyledSection>
      <StyledTitle>{sectionHeader}</StyledTitle>
      {children}
    </StyledSection>
  );
}