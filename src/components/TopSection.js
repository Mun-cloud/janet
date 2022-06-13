import styled from "styled-components";
import MainChart from "./MainChart";
import MainInfo from "./MainInfo";
import TopSwiper from "./Swiper";

const SectionContainer = styled.section`
  width: 100%;
  height: calc(370px + 55px * 2);
  padding: 55px 0px;
  background: linear-gradient(
    to right,
    rgba(173, 207, 255, 0.25) 0%,
    rgba(173, 206, 255, 0.25) 1%,
    rgba(181, 176, 248, 0.25) 50%,
    rgba(187, 143, 240, 0.25) 100%
  );
  overflow: hidden;

  > div {
    width: 1250px;
    margin: auto;
    height: 100%;
    display: flex;

    > div {
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

const TopSection = () => {
  return (
    <SectionContainer>
      <div>
        <TopSwiper />
        <MainInfo />
        <MainChart />
      </div>
    </SectionContainer>
  );
};

export default TopSection;
