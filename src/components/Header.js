import styled from "styled-components";
import NaviBtn from "./NaviBtn";

const HeaderSection = styled.section`
  height: 131px;
  border-bottom: 1px solid #dfdfdf;
  font-weight: bold;

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

  .header_lower {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header_lower_left {
      margin-top: 15px;
      display: flex;
      align-items: center;

      button {
        cursor: pointer;
        width: 55px;
        height: 55px;
        border-radius: 50%;
        border: 0;
        padding: 0;
        background-color: white;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      div:nth-child(5) {
        width: 90px;
        a:hover {
          display: block;
          text-indent: -9999px;
          background: url("https://janet.co.kr/img/common/gnbInfo.png")
            no-repeat 11px 6px;
        }
      }

      div:nth-child(6) {
        width: 80px;
        a:hover {
          display: block;
          text-indent: -9999px;
          background: url("https://janet.co.kr/img/common/gnbTalk.png")
            no-repeat 13px 5px;
        }
      }
    }

    .header_lower_right {
      display: flex;
      align-items: center;
      height: 55px;

      div {
        width: 104px;
        height: 100%;
        a {
          width: 100%;
          height: 100%;
          text-indent: -9999px;
        }
      }

      div:nth-child(1) a {
        background: url("https://janet.co.kr/img/common/header/aca.png")
          no-repeat center 12px;
      }
      div:nth-child(2) a {
        background: url("https://janet.co.kr/img/common/header/commu.png")
          no-repeat 29px 15px;
      }
      div:nth-child(3) a {
        background: url("https://janet.co.kr/img/common/header/ai.png")
          no-repeat center 25px;

        &:hover {
          background: url(https://janet.co.kr/img/common/header/ai_ov.png)
            no-repeat 18px 0px;
        }
      }
    }
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
        <div className="header_lower">
          <div className="header_lower_left">
            <button>
              <img
                src="https://janet.co.kr/img/common/header/gnb.png"
                alt="전체메뉴열기"
              />
            </button>
            <NaviBtn text="Top100" link="https://janet.co.kr/jnTops/" />
            <NaviBtn text="자격증정보" link="https://janet.co.kr/njLics/" />
            <NaviBtn text="어학/공무원" link="https://janet.co.kr/jnLnPo/" />
            <NaviBtn
              text="자넷info"
              link="https://janet.co.kr/bbs/board.php?bo_table=bNews"
            />
            <NaviBtn
              text="자넷톡"
              link="https://janet.co.kr/jnTalk/index.php"
            />
          </div>
          <div className="header_lower_right">
            <NaviBtn text="우리동네학원" link="https://janet.co.kr/jnTown/" />
            <NaviBtn text="커뮤니티" link="https://janet.co.kr/jnComm/" />
            <NaviBtn
              text="추천"
              link="https://janet.co.kr/jnRcmd/jnRcmd_test.php"
            />
          </div>
        </div>
      </div>
    </HeaderSection>
  );
};

export default Header;
