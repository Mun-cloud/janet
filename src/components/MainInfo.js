import styled from "styled-components";

const MainInfoBox = styled.div`
  width: 550px;
  height: 100%;
  background-color: #fff;
  padding: 40px 30px 35px;
  position: relative;
  box-shadow: 3px 3px 15px rgba(221, 185, 189, 0.3);
  > h1 {
    font-family: "noto sans kr";
    font-size: 1.41em;
    font-weight: 500;
    line-height: 1;
    margin-left: 15px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 20px 10px;

    li {
      padding: 10px 20px;
      width: 230px;
      display: table;
      margin-bottom: 5px;

      span {
        width: 90px;
        display: table-cell;

        img {
          vertical-align: middle;
        }
      }
    }
  }

  .text_box {
    width: 95px;
    display: table-cell;
    vertical-align: middle;
    padding-left: 10px;

    h3 {
      margin-bottom: 5px;
    }
  }

  .infobox_img {
    width: 430px;
    position: absolute;
    left: 53px;
    bottom: 15px;
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

const MainInfo = () => {
  return (
    <MainInfoBox>
      <h1>우리동네 학원은?</h1>
      <ul>
        <li>
          <a href="https://janet.co.kr/jnTown/index.php">
            <span>
              <img
                src="https://janet.co.kr/html_demo/img/main/jnTown1.png"
                alt="맞춤학원검색"
              />
            </span>
            <div className="text_box">
              <h3>맞춤학원검색</h3>
              <p>
                나에게 맞는 <br />
                맞춤 학원은?
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="https://janet.co.kr/jnTown/townInfo.php">
            <span>
              <img
                src="https://janet.co.kr/html_demo/img/main/jnTown2.png"
                alt="우리동네학원 info"
              />
            </span>
            <div className="text_box">
              <h3>
                우리동네학원 <br />
                info
              </h3>
              <p>
                우리동네 학원 <br />
                소식 살펴보기!
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:alert('준비중입니다');">
            <span>
              <img
                src="https://janet.co.kr/html_demo/img/main/jnTown3.png"
                alt="학원찾아드림"
              />
            </span>
            <div className="text_box">
              <h3>학원찾아드림</h3>
              <p>
                학원을 비교해서
                <br />
                선택해보세요!
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="https://janet.co.kr/jnTown/academySearch.php">
            <span>
              <img
                src="https://janet.co.kr/html_demo/img/main/jnTown4.png"
                alt="지도보기"
              />
            </span>
            <div className="text_box">
              <h3>지도보기</h3>
              <p>
                내주변 자격증
                <br />
                학원 찾아보기
              </p>
            </div>
          </a>
        </li>
      </ul>
      <a className="infobox_img" href="javascript:" tabindex="0">
        <img src="https://janet.co.kr/data/ebslider/eb4_basic/img/d0942d969f0a37cb73a46db345ea874b.png" />
      </a>

      <div className="swiper_btn swiper_left">
        <i class="fa fa-chevron-left"></i>
      </div>
      <div className="swiper_btn swiper_right">
        <i class="fa fa-chevron-right"></i>
      </div>
    </MainInfoBox>
  );
};

export default MainInfo;
