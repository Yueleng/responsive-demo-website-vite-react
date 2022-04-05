import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.section`
  display: grid;
  /* 居中对齐 */
  justify-items: center;
  max-width: 1180px;
  padding: 0 80px;
`;

export const Title = styled.title`
  font-size: 34px;
  color: var(--text-color-darker);

  &::after {
  }
`;
