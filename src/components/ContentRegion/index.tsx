import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.section`
  display: grid;
  /* 水平居中对齐 */
  justify-items: center;
  max-width: 1180px;
  padding: 0 80px;
`;

export const Title = styled.h2`
  font-size: 34px;
  color: var(--text-color-darker);

  &::after {
    content: "";
    display: block;
    width: 80%;
    height: 4px;
    transform: translateX(10%);
    margin-top: 14px;
    background-color: var(--primary-color);
  }
`;

export const Intro = styled.p`
  margin: 28px 0 60px 0;
  font-size: 18px;
  color: var(--text-color-dark-gray);
`;

export const SectionBg = styled(Section)`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    background-color: #f9fbfb;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }
`;
