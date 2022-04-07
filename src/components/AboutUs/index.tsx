import styled from "styled-components";
import { Section, Title, Intro } from "../ContentRegion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faChartLine,
  faShoppingCart,
  faDesktop,
  faTachometer,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

const AboutUs = styled(Section)`
  padding-bottom: 32px;
`;

// 六个方格 grid 布局
const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 126px 126px;
  column-gap: 5vw;
  align-items: center;
`;

// 方格里面也是 grid 布局
const Feature = styled.div`
  display: grid;
  grid-template-areas:
    "icon title"
    "icon content";
  grid-template-columns: 60px 1fr;
  grid-template-rows: 1fr 3fr;
`;

const FasIcon = styled(FontAwesomeIcon)`
  grid-area: icon;
  font-size: 34px;
  color: var(--primary-color);
`;

const FeatureTitle = styled.h4`
  grid-area: title;
  font-size: 18px;
  color: var(--text-color-darker);
`;

const FeatureContent = styled.p`
  grid-area: content;
  color: var(--text-color-gray);
  margin-top: 8px;
`;

function AboutUsSection() {
  return (
    <AboutUs>
      <Title>关于我们</Title>
      <Intro>
        网络公司不仅仅是提供域名注册、空间租用、网站开发、网站建设与网络营销活动策划相关的企业组织。
      </Intro>
      <Features>
        <Feature>
          <FasIcon icon={faLightbulb} />
          <FeatureTitle>品牌创意</FeatureTitle>
          <FeatureContent>
            为企业设计独特的并能完美呈现企业价值观的视觉
          </FeatureContent>
        </Feature>
        <Feature>
          <FasIcon icon={faChartLine} />
          <FeatureTitle>整合营销</FeatureTitle>
          <FeatureContent>
            通过市场进入分析、制定网络营销战略、网络营销实施
          </FeatureContent>
        </Feature>
        <Feature>
          <FasIcon icon={faShoppingCart} />
          <FeatureTitle>电子商务</FeatureTitle>
          <FeatureContent>
            根据企业需求，开设不同的销售渠道，通过网上直销
          </FeatureContent>
        </Feature>
        <Feature>
          <FasIcon icon={faDesktop} />
          <FeatureTitle>网页设计</FeatureTitle>
          <FeatureContent>
            通过网站建设、智能建站、域名主机、企业邮箱
          </FeatureContent>
        </Feature>
        <Feature>
          <FasIcon icon={faTachometer} />
          <FeatureTitle>网站优化</FeatureTitle>
          <FeatureContent>
            网站推广是指将网站推广到国内各大知名网站和搜索引擎
          </FeatureContent>
        </Feature>
        <Feature>
          <FasIcon icon={faServer} />
          <FeatureTitle>网站架设</FeatureTitle>
          <FeatureContent>
            通过绑定域名和服务器，把网站展现给全世界
          </FeatureContent>
        </Feature>
      </Features>
    </AboutUs>
  );
}

export default AboutUsSection;
