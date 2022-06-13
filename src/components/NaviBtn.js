import styled from "styled-components";

const NaviBtnStyle = styled.div`
  font-family: "Noto Sans KR", "malgun gothic", "dotum", sans-serif;
  padding: 0 2px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  width: 100px;
  height: 55px;
  line-height: 45px;

  a {
    height: 100%;
    width: 100%;
    display: block;
    &:hover {
      color: ${(props) => props.theme.purple};
    }
  }
`;

const NaviBtn = ({ text, link }) => {
  return (
    <NaviBtnStyle>
      <a href={link}>{text}</a>
    </NaviBtnStyle>
  );
};

export default NaviBtn;
