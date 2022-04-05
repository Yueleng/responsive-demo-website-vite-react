import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
    font-size: 14px;
  }
  
  /* 图片默认宽度100% */
  img {
    width: 100%;
  }
  
  /* 定义变量 */
  :root {
    --primary-color: #ff434f; /* 红色 */
    --secondary-color: #e3e3e3;
    --text-color-darker: #2e2e2e;
    --text-color-dark: #494949;
    --text-color-dark-gray: #727272;
    --text-color-gray: #8b8b8b;
    --text-color-light-gray: #c6c6c6;
    --text-color-lightest: #e7e9ec;
    --backdrop-color: rgba(42, 42, 42, 0.69);
  }
`;

export default GlobalStyles;
