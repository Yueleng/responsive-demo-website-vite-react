import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Header = styled.header`
  width: 100vw;
  height: 80px;
  /* 栅格布局 */
  display: grid;
  padding: 0 40px;

  /* 两列，一列占三分之一，一列占三分之二 */
  grid-template-columns: 1fr 2fr;
  /* 垂直居中 */
  align-items: center;
  /* 用于定位导航菜单 */
  position: relative;
  z-index: 200;
`;

const Nav = styled.nav`
  justify-self: end;
`;

const A = styled.a`
  color: var(--text-color-lightest);
  text-decoration: none; /* remove underline */
  margin: 0 24px;
`;

const LogoDiv = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: var(--text-color-lightest);
`;

const BurgerDiv = styled.div`
  display: none;
`;

const SearchEle = styled(FontAwesomeIcon)`
  color: var(--text-color-lightest);
`;

const BurgerLine1 = styled.div``;
const BurgerLine2 = styled.div``;
const BurgerLine3 = styled.div``;

function HeaderComponent() {
  return (
    <Header>
      <LogoDiv>微软中国</LogoDiv>
      <Nav>
        <A href="#home">首页</A>
        <A href="#about-us">关于我们</A>
        <A href="#showcases">成功案例</A>
        <A href="#service">服务流程</A>
        <A href="#team-intro">团队介绍</A>
        <A href="#company-activities">公司动态</A>
        <SearchEle icon={faSearch} />
      </Nav>
      <BurgerDiv>
        <BurgerLine1 />
        <BurgerLine2 />
        <BurgerLine3 />
      </BurgerDiv>
    </Header>
  );
}

export default HeaderComponent;
