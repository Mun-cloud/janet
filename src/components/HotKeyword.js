import styled from "styled-components";
import top20 from "../top20.json";
import Keyword from "./Keyword";
const HotKeyBox = styled.section`
  width: 1250px;
  margin: auto;
  margin-bottom: 10px;
  .hot_head {
    display: flex;
    align-items: center;
    height: 40px;
    margin-bottom: 20px;

    img {
      height: 40px;
    }
    h1 {
      font-weight: 400;
      font-size: 28px;
      line-height: 40px;
      font-family: "noto sans kr";
      padding-left: 15px;
    }
    .purple {
      color: ${(props) => props.theme.purple};
    }
  }
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
`;

const HotKeyword = () => {
  return (
    <HotKeyBox>
      <div className="hot_head">
        <img
          src="https://janet.co.kr/img/common/main/m_main/hot_keyword.png"
          alt="HOT키워드"
        />
        <h1>
          <b>
            <span className="purple">HOT</span>
            키워드
          </b>
          TOP20
        </h1>
      </div>
      <ul>
        {top20.map((v) => (
          <Keyword item={v} key={v.id} />
        ))}
      </ul>
    </HotKeyBox>
  );
};

export default HotKeyword;
