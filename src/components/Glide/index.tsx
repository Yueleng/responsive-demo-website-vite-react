import { useEffect } from "react";
import styled from "styled-components";
import GlideControl from "./GlideComtrol";
import peopleInCouchImg from "/images/people-in-couch-1024248.jpg";
import personTypingVideo from "/videos/working-man.mp4";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import anime from "animejs";

const GlideSection = styled.div`
  /* 定位标题和图片 */
  position: relative;

  /* 抵消导航高度 */
  top: -80px;

  /* 放置在最下层 */
  z-index: 50;
`;

const GlideSlide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GlideSlideImg = styled.img`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
`;

const GlideSlideVideo = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
`;

const SlideCaption = styled.div`
  position: absolute;
  /* 放置在遮罩上层 */
  z-index: 70;
  color: var(--text-color-lightest);
  text-align: center; /* align text in the center*/
  max-width: 60vw;

  // 轮播标题默认不显示， 在JS中用动画移入
  //   & > * {
  //       opacity: 0
  //   }
`;

const SlideCaptionH1 = styled.h1`
  font-size: 54px;
  font-weight: 600;
`;

const SlideCaptionH3 = styled.h3`
  font-size: 24px;
  margin: 48px 0;
`;

const BackDrop = styled.div`
  background: var(--backdrop-color);
  opacity: 0.5;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  /* 放在幻灯片上层 */
  z-index: 60;
`;

const ExploreButton = styled.button`
  padding: 14px 32px;
  background-color: var(--primary-color);
  border: 0;
  border-radius: 4px;
  color: var(--text-color-lightest);
  font-size: 18px;
  cursor: pointer;
  outline: none;
`;

const SlideCaptionLeft = styled(SlideCaption)`
  max-width: 80vw;
  text-align: left;
`;

function GlideComponent() {
  useEffect(() => {
    const glide = new Glide(".glide", { startAt: 0 });
    const mountedGlide = glide.mount();
    glide.on(["mount.after", "run.after"], () => {
      // 获取轮播标题实例
      const captionsEl = document.querySelectorAll(".slide-caption");
      // 获取当前展示的轮播index
      const currentIndex = mountedGlide.index;
      const caption = captionsEl[currentIndex];
      anime({
        // 对每个子元素进行动画
        targets: caption.children,
        // 透明度
        opacity: [0, 1],
        // 持续时间
        duration: 400,
        easing: "linear",
        // 每个子元素相继延迟400毫秒，第一个延迟300毫秒
        delay: anime.stagger(400, { start: 300 }),
        // 从下向上移动，每行从40到10递减，最后移动到0
        translateY: [anime.stagger([40, 10]), 0],
      });
    });

    // 轮播进行前，把标题透明度设置为0，还原
    glide.on("run.before", () => {
      (
        document.querySelectorAll(
          ".slide-caption > *"
        ) as NodeListOf<HTMLElement>
      ).forEach((el) => {
        el.style.opacity = "0";
      });
    });
  }, []);

  return (
    <GlideSection className="glide" id="home">
      <div className="glide__track" data-glide-el="track">
        <div className="glide__slides">
          <GlideSlide className="glide__slide">
            <SlideCaption className="slide-caption">
              <SlideCaptionH1>用创意点缀生活，让科技融入理想。</SlideCaptionH1>
              <SlideCaptionH3>
                科技创新大平台，智慧生活芯引擎。依靠科技进步推进经济跨越式发展。用创新点缀人生，让科技融入理想。
              </SlideCaptionH3>
              <ExploreButton>探索更多</ExploreButton>
            </SlideCaption>
            <BackDrop />
            <GlideSlideImg src={peopleInCouchImg} />
          </GlideSlide>
          <GlideSlide className="glide__slide">
            <SlideCaptionLeft className="slide-caption">
              <SlideCaptionH1>科技改变世界</SlideCaptionH1>
              <SlideCaptionH3>
                立足科学发展，着力自主创新。加速科技进步，为全市场经济社会发展提供有力支撑。凝聚科技创意，成就创新梦想。
              </SlideCaptionH3>
              <ExploreButton>探索更多</ExploreButton>
            </SlideCaptionLeft>
            <BackDrop />
            <GlideSlideVideo src={personTypingVideo} autoPlay muted loop />
          </GlideSlide>
        </div>
      </div>
      <GlideControl />
    </GlideSection>
  );
}

export default GlideComponent;
