import React from 'react';
import styled from 'styled-components'

interface ILayoutProps {
  children?: React.ReactNode
}

const StyledLayout = styled.div`
  max-width: 1008px;
  margin: 0 auto;
  padding: 0 20px;
`;

export function Layout({ children }: ILayoutProps) {
  return (
    <StyledLayout>
      {children}
    </StyledLayout>
  );
}