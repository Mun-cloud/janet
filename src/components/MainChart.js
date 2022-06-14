import styled from "styled-components";

const MainChartBox = styled.div`
  width: 260px;
  height: 100%;
  background: #fff;
  padding: 40px 30px 35px;
  position: relative;

  > h1 {
    font-family: "noto sans kr";
    font-size: 1.41em;
    font-weight: 500;
    line-height: 1;
    margin-left: 15px;
  }

  ul {
    padding: 25px 0;

    li {
      font-size: 1.05em;
      line-height: 25px;

      .chartNumber {
        font-weight: bold;
        width: 20px;
        color: #bababa;
        display: inline-block;
        text-align: center;
      }
    }
  }

  .swiper_btn {
    position: absolute;
    width: 19px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #dfdfdf;
    color: #8e8cfd;
    font-size: 0.9em;
    left: auto;
    top: 40px;
    cursor: pointer;
  }

  .swiper_left {
    right: calc(19px + 30px);
  }
  .swiper_right {
    right: calc(0px + 30px);
  }
`;

const MainChart = () => {
  return (
    <MainChartBox>
      <h1>핫클릭 Top 10</h1>
      <ul>
        <li>
          <span className="chartNumber">1</span>
          <span className="chartText">자넷 커뮤니티 사용자 ...</span>
        </li>
        <li>
          <span className="chartNumber">2</span>
          <span className="chartText">ai 테스트 후기입니다…</span>
        </li>
        <li>
          <span className="chartNumber">3</span>
          <span className="chartText">아몬드 브리즈 아시나요…</span>
        </li>
        <li>
          <span className="chartNumber">4</span>
          <span className="chartText">다들 오늘 집가시자마자…</span>
        </li>
        <li>
          <span className="chartNumber">5</span>
          <span className="chartText">왜 여기에는 최신글보기…</span>
        </li>
        <li>
          <span className="chartNumber">6</span>
          <span className="chartText">이제 슬슬 가을이 오나…</span>
        </li>
        <li>
          <span className="chartNumber">7</span>
          <span className="chartText">점심 메뉴 머가 좋을까…</span>
        </li>
        <li>
          <span className="chartNumber">8</span>
          <span className="chartText">20대 카톡방에 숨은 …</span>
        </li>
        <li>
          <span className="chartNumber">9</span>
          <span className="chartText">다들 반려동물 키우니?…</span>
        </li>
        <li>
          <span className="chartNumber">10</span>
          <span className="chartText">있잖아.........…</span>
        </li>
      </ul>
      <div className="swiper_btn swiper_left">
        <i class="fa fa-chevron-left"></i>
      </div>
      <div className="swiper_btn swiper_right">
        <i class="fa fa-chevron-right"></i>
      </div>
    </MainChartBox>
  );
};

export default MainChart;
