import React from 'react';
import styled from 'styled-components'

interface IPreviewProps {
  previewImg: string;
  title: string;
}

const StyledImgWrapper = styled.div`
  max-height: 260px;
  min-height: 150px;
  margin: -12px -13px 0;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  max-height: inherit;
  object-fit: cover;
`;

export function Preview({ previewImg, title }: IPreviewProps) {
  return (
    <StyledImgWrapper>
      <StyledImg
          src={previewImg}
          alt={title}
        />
    </StyledImgWrapper>
  );
}