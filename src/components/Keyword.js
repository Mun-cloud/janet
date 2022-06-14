import styled from "styled-components";

const KeyBox = styled.li`
  width: 300px;
  height: 190px;
  position: relative;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  overflow: hidden;
  margin-bottom: 16px;

  .imgBox {
    height: 120px;
    position: relative;
    overflow: hidden;
    background: #e9b107;

    img {
      opacity: 0.2;
    }

    .title {
      font-size: 1.65em;
      font-weight: bold;
      color: #fff;
      line-height: 60px;
      background: rgb(0, 0, 0);
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.6) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      position: absolute;
      bottom: 0;
      padding: 0 30px;
      width: 100%;
    }

    .d_day {
      position: absolute;
      right: 20px;
      top: 20px;
      display: block;
      width: 44px;
      line-height: 19px;
      text-align: center;
      font-size: 0.9em;
      color: #fff;
      background: ${(props) => props.theme.purple};
      border-radius: 10px;
    }
  }
  .sub_info {
    margin: 0 30px;
    padding: 12px 0 20px;

    p {
      font-size: 1.2em;
      line-height: 2;
      height: 28px;
      color: #6e6e6e;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .date {
      font-size: 1em;
      color: ${(props) => props.theme.red};
    }
  }
`;

const imgJson = [
  {
    imgSrc: "https://janet.co.kr/data/licenseitem/155/hotKeyword_02.jpg",
    background: "#e9b107",
  },
  {
    imgSrc: "https://janet.co.kr/data/licenseitem/144/hotKeyword_03.jpg",
    background: "#4b3962",
  },
  {
    imgSrc: "https://janet.co.kr/data/licenseitem/91/hotKeyword_11.jpg",
    background: "#e16045",
  },
  {
    imgSrc: "https://janet.co.kr/data/licenseitem/331/hotKeyword_05.jpg",
    background: "#474756",
  },
  {
    imgSrc: "https://janet.co.kr/data/licenseitem/96/hotKeyword_13.jpg",
    background: "#305a7e",
  },
  {
    imgSrc:
      "https://janet.co.kr/data/licenseitem/145/.6rO17Ya17ZWc6rWt7Ja066mU7J24.jpg",
    background: "#b13c2f",
  },
  {
    imgSrc:
      "https://janet.co.kr/data/licenseitem/1622601017/7IKs7ZqM67O17KeA7IKs66mU7J24.jpg",
    background: "#383f4e",
  },
  {
    imgSrc: "https://janet.co.kr/data/licenseitem/176/hotKeyword_24.jpg",
    background: "#cd9308",
  },
];

const Keyword = ({ item }) => {
  const dateObj = new Date(item.esRegdt);
  const year = dateObj.getFullYear();
  const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
  const day = ("0" + dateObj.getDate()).slice(-2);
  const examDay = `${year}-${month}-${day}`;

  const todayTime = new Date();
  const dDay = Math.ceil((dateObj - todayTime) / (1000 * 60 * 60 * 24));

  return (
    <KeyBox>
      <a href="/">
        <div
          className="imgBox"
          style={{ background: imgJson[item.id - 1].background }}
        >
          <img src={imgJson[item.id - 1].imgSrc} alt="토익" />
          <h3 className="title">{item.title}</h3>
          <h5 className="d_day">
            {dDay > -1 ? `D-${dDay}` : `D+${Math.abs(dDay)}`}
          </h5>
        </div>
        <div className="sub_info">
          <p>시행기관 : {item.licenseOrgan}</p>
          <span className="date"> 시험일 : {examDay}</span>
        </div>
      </a>
    </KeyBox>
  );
};

export default Keyword;
