import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const TopSwiperStyle = styled(Swiper)`
  width: 420px;
  height: 100%;
  margin: 0;
  margin-right: 10px;

  .swiper-slide {
    background: #fff;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-pagination {
    padding-right: 30px;
    bottom: 25px;
    color: white;
    text-align: right;
  }
`;

const TopSwiper = () => {
  return (
    <TopSwiperStyle
      pagination={{
        type: "fraction",
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        <a href="https://janet.co.kr/jnRcmd/">
          <img
            src="https://janet.co.kr/img/common/main/banner/mainBn_top_01.png"
            alt="자격증 AI테스트"
          />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="https://janet.co.kr/jnRcmd/big_test.php">
          <img
            src="https://janet.co.kr/img/common/main/banner/mainBn_top_02.png"
            alt="영국 테스트"
          />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="https://janet.co.kr/jnTalk/index.php">
          <img
            src="https://janet.co.kr/img/common/main/banner/mainBn_top_03.png"
            alt="질문톡한테 물어봐"
          />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://janet.co.kr/img/common/main/banner/mainBn_top_04.png"
          alt="자료를 남겨주세요"
        />
      </SwiperSlide>
    </TopSwiperStyle>
  );
};

export default TopSwiper;
