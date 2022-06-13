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
  }
  .sub_info {
    margin: 0 30px;
    padding: 12px 0 20px;
  }
`;

const Keyword = ({ item }) => {
  let dateObj = new Date(item.esRegdt);
  let year = dateObj.getFullYear();
  let month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
  let day = ("0" + dateObj.getDate()).slice(-2);
  // dateObj.toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })
  return (
    <KeyBox>
      <a href="/">
        <div className="imgBox">
          <img
            src="https://janet.co.kr/data/licenseitem/155/hotKeyword_02.jpg"
            alt="토익"
          />
          <h3 className="title">{item.title}</h3>
        </div>
        <div className="sub_info">
          <p>시행기관 : {item.licenseOrgan}</p>
          <span className="date">
            {" "}
            시험일 : {year + "-" + month + "-" + day}
          </span>
        </div>
      </a>
    </KeyBox>
  );
};

export default Keyword;
