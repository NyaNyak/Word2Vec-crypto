import React from "react";
import "./css/modal.css";
import KakaoButton from "../image/kakao_login_medium_wide.png";

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{props.children}</main>
          <footer>
            <button className="kakao" onClick={close}>
              <img src={KakaoButton} alt="KakaoLogin" />
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
