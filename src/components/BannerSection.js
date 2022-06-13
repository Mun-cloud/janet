import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const MainBanner = styled.section`
  width: 1250px;
  margin: 30px auto;

  .swiper {
    padding: 0 24px;
    position: relative;

    .swiper-slide-duplicate {
      cursor: pointer;
    }

    .swiper-button-prev {
      margin-top: -8px;
      height: 15px;
      background-size: 10px;
      left: 4px;
      background: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E")
        no-repeat;
    }
    .swiper-button-next {
      margin-top: -8px;
      height: 15px;
      background-size: 10px;
      right: -17px;
      background: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E")
        no-repeat;
    }
    .swiper-button-next::after,
    .swiper-button-prev::after {
      display: none;
    }
  }
`;

const BannerSection = () => {
  return (
    <MainBanner>
      <Swiper
        navigation={true}
        slidesPerView={3}
        spaceBetween={28}
        loop={true}
        modules={[Navigation]}
        centeredSlides={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://janet.co.kr/html_demo/img/main/MainBn_scroll_01.png"
            alt="한 달만에 취득 가능한 자격증 BEST"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://janet.co.kr/html_demo/img/main/MainBn_scroll_02.png"
            alt="자격증 따기전에 알아둬야 할 것, 내게 꼭 필요한 자격증따기"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://janet.co.kr/html_demo/img/main/MainBn_scroll_03.png"
            alt="가장 따기 쉬운 자격증"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://janet.co.kr/html_demo/img/main/MainBn_scroll_04.png"
            alt="시험 없이 취득가능한 자격증"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://janet.co.kr/html_demo/img/main/MainBn_scroll_05.png"
            alt="월 300이상 버는 자격증이 있다?"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://janet.co.kr/html_demo/img/main/MainBn_scroll_06.png"
            alt="한 달만에 취득 가능한 자격증 BEST"
          />
        </SwiperSlide>
      </Swiper>
    </MainBanner>
  );
};

export default BannerSection;
