import styled from "styled-components";

const HeaderSection = styled.section`
  height: 131px;
  background-color: saddlebrown;

  /* .section_area {
        display: flex;
        flex-direction: column;
    } */

  .header_upper {
    padding-top: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .login_box {
    display: flex;
    align-items: center;
    justify-content: right;
  }

  .login_btn {
    height: 42px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    line-height: 1.5;
    color: #919191;
    font-size: 14px;
    margin-right: 20px;
  }
`;

const Header = () => {
  return (
    <HeaderSection>
      <div className="section_area">
        <div className="header_upper">
          <div className="logo_box">
            <img
              src="https://janet.co.kr/html_demo/img/common/logo.png"
              alt="자넷 로고"
            />
          </div>
          <div className="login_box">
            <div className="login_btn">
              <img
                src="https://janet.co.kr/img/common/header/member.png"
                //   src="https://janet.co.kr/img/common/header/member_ov.png"
                alt="회원가입"
              />
              <span>회원가입</span>
            </div>

            <div className="login_btn">
              <img
                src="https://janet.co.kr/img/common/header/login.png"
                //   src="https://janet.co.kr/img/common/header/login_ov.png"
                alt="로그인"
              />
              <span>로그인</span>
            </div>
            <div className="login_btn">
              <img
                src="https://janet.co.kr/img/common/header/company.png"
                //   src="https://janet.co.kr/img/common/header/company_ov.png"
                alt="기업서비스"
              />
              <span>기업서비스</span>
            </div>
          </div>
        </div>
        <div className="header_lower">자넷</div>
      </div>
    </HeaderSection>
  );
};

export default Header;
