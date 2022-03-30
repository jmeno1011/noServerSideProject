import React from "react";
import styles from "./css/styles.module.css";

export function Memo() {
  return (
    <>
      {/* <div className={styles.memo__app}> */}
      <h2>메모내용</h2>
      <h3>・프론트 주제</h3>
      <p className={styles.front__memo_p}>
        주제 : webrtc, webgl, storybook, sdk제작, tdd, pwa 만들어보기
      </p>
      <p>
        아이디어 : 구글 이미지 검색 만들어보기
        <br />
        - 이미지마다 카테코리 속성 넣어서 <br />- 예를 들면 1을 검색하면 1과
        관련된 이미지가 나오고 하나의 이미지를 클릭하면 오른쪽엔 확대되서 나오고
        해당 이미지 정보를 보여주는 링크로 보내주고 그 아래엔 카테고리에
        해당하는 이미지를 추가로 보여주기 왼쪽에는 원래 창에 있던 이미지들을
        왼쪽 창 크기에 맞게 알아서 배치하기
      </p>
      <h3>・책 저장 (✅은 있음)</h3>
      <ul className={styles.memo__ul}>
        <li>Node.js 디자인 패턴 바이블</li>
        <li>쿠버네티스 완벽 가이드</li>
        <li>실전 카프카 개발부터 운영까지</li>
        <li>도메인 주도 설계로 시작하는 마이크로서비스 개발</li>
        <li>Node.js 마이크로서비스 코딩 공작소</li>
        <li>HTTP 완벽 가이드✅</li>
        <li>Git 교과서</li>
        <li>운영체제 10판</li>
        <li>밑바닥부터 만드는 인터프리터 in Go</li>
      </ul>
      <h3>설문으로 리소스 모으기</h3>
      <p className={styles.front__memo_p}>
        bdi라는 21개의 문진을 하여 성별 나이 문진 결과를 수집
      </p>
      <p className={styles.front__memo_p}>
        1인당 1회씩을 하기 위해서는 kakao같은 이메일을 수집하여 중복처리를 한다.
      </p>
      <p className={styles.front__memo_p}>
        email 수집 동의, kakao api연동, 수집한 데이터 사용 용도 생각하기
      </p>
      <h3>・추가주제</h3>
      <p className={styles.front__memo_p}>todo-list 만들어보기</p>
      <p className={styles.front__memo_p}>스벨트로도 만들어보기</p>
      <h3>메모 3</h3>
      <p className={styles.front__memo_p}>
        {" "}
        pdf파일이나 여러 파일 제공하는 서버 만들어보기
      </p>
      <p>공부할 내용 + SEO 관련 찾아보기</p>
      <p>공부할 내용1 + elasticsearch이 뭔지 알아보기</p>
      <p>
        멍개님 블로그 보면서 공부하기 <br />
        https://blog.naver.com/pjt3591oo/222676339976
        <br />
        https://github.com/pjt3591oo/react-hook-zustand
      </p>
      <p>
        아이디어 - 앱 버전
        <br />
        시간: <br />
        걸음:
        <br />
        거리:
        <br />
        배경: 사진찍으면 바로 뒷배경 전환
        <br />
        추가 - 날짜, 칼로리, 현재시간, // 걸음 % , 뛰기 %,
        <br />
        필요 카메라 퍼미션 위치 퍼미션
      </p>
      <h3>메모 flutter</h3>
      <p>카카오 로그인 깃허브 링크 <br/>
        <a href="https://github.com/kakao/kakao_flutter_sdk" target={"_blank"} rel="noopener noreferrer">🔵카카오 로그인 flutter</a>
      </p>
    </>
  );
}
