import styled from "styled-components";
import { Section, Title, Intro } from "../ContentRegion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faGavel,
  faFileSignature,
  faUser,
  faChalkboardTeacher,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";

const ServiceFlows = styled(Section)`
  padding-top: 131px;
`;

const Services = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  column-gap: 38px;
  row-gap: 34px;
`;

const ServiceItem = styled.div`
  display: grid;
  grid-template-areas:
    "icon title"
    "icon content";
  grid-template-columns: 70px 1fr;
  grid-template-rows: 1fr 3fr;

  /* 内边距 */
  padding: 24px;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.06);
`;

const FasIcon = styled(FontAwesomeIcon)`
  grid-area: icon;
  font-size: 42px;
  color: var(--primary-color);
  padding-top: 6px;
`;

const ServiceTitle = styled.h2`
  grid-area: title;
  color: var(--text-color-darker);
  font-size: 24px;
`;

const ServiceContent = styled.p`
  grid-area: content;
  color: var(--text-color-gray);
  line-height: 30px;
  font-size: 16px;
  /* align-self: st; */
  margin-top: 8px;
`;

function ServiceFlowsSection() {
  return (
    <ServiceFlows>
      <Title>服务流程</Title>
      <Intro>
        网络综合公司，提供包括网络基础服务（如域名、主机、邮箱）和网络增值服务（如网站建设和推广，网站优化）等业务
      </Intro>
      <Services>
        <ServiceItem>
          <FasIcon icon={faComment} />
          <ServiceTitle>需求沟通</ServiceTitle>
          <ServiceContent>
            客户提出网站建设的基本需求，包括设计要求及功能要求
          </ServiceContent>
        </ServiceItem>
        <ServiceItem>
          <FasIcon icon={faGavel} />
          <ServiceTitle>项目评估</ServiceTitle>
          <ServiceContent>
            根据客户提出的需求进行评估，估算出相应的时间与费用
          </ServiceContent>
        </ServiceItem>
        <ServiceItem>
          <FasIcon icon={faFileSignature} />
          <ServiceTitle>签订合同</ServiceTitle>
          <ServiceContent>
            合作双方确认费用、工期、合作要求的基础上，双方共同签订合同
          </ServiceContent>
        </ServiceItem>
        <ServiceItem>
          <FasIcon icon={faUser} />
          <ServiceTitle>提案阶段</ServiceTitle>
          <ServiceContent>
            完成网站初稿DEMO设计，包括首页风格，内页风格页面
          </ServiceContent>
        </ServiceItem>
        <ServiceItem>
          <FasIcon icon={faChalkboardTeacher} />
          <ServiceTitle>制作阶段</ServiceTitle>
          <ServiceContent>
            完成所有页面的设计，进行程序开发以及前后后台的页面整合
          </ServiceContent>
        </ServiceItem>
        <ServiceItem>
          <FasIcon icon={faUserCheck} />
          <ServiceTitle>网站验收</ServiceTitle>
          <ServiceContent>
            根据合同条款进行网站验收，并签署网站验收确认单
          </ServiceContent>
        </ServiceItem>
      </Services>
    </ServiceFlows>
  );
}

export default ServiceFlowsSection;
