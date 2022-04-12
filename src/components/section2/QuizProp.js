import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styledComponents from "styled-components";

const QuizProp = () => {
  // 현재 BDI 문제 번호
  const [currentNo, setCurrentNo] = useState(0);
  // 각 문항별 점수 저장
  const [saveScore, setSaveScore] = useState([]);
  // saveScore 점수 합산
  const [bdisum, setBdisum] = useState(0);
  // 결과창 변수 test가 끝나면 true, test 중이면 false
  const [showResult, setShowResult] = useState(false);
  // 저장할 ep설정 변수
  const [ep, setEp] = useState("");

  const navigate = useNavigate();

  // axios의 data파라미터 datas변수로 초기화
  let datas = {};

  // ep값 입력시 대문자로 변경
  const inputHandler = (e) => {
    setEp(e.target.value.toUpperCase());
  };
  // test 답변 클릭 함수
  const handleClick = (score) => {
    // quiz 내부에 answer의 score값을 더하기
    setBdisum((bdisum) => bdisum + score);
    // 현재 문진 번호 확인 if문
    if (currentNo === quiz.length - 1) {
      // 각 점수를 saveScore에 저장
      // saveScore에 각각 저장하는 이유는 테스트 종료 후 테스트의 값들을 db의 lifechat테이블에 값을 넣어주기 위함
      setSaveScore((saveScore) => [...saveScore, score]);
      // 문진종료시 showResult 변수에 true 설정
      setShowResult(true);
    } else {
      // 21까지 문진 번호 증가
      setCurrentNo((currentNo) => currentNo + 1);
      // 각 문진 점수 저장
      setSaveScore((saveScore) => [...saveScore, score]);
    }
  };

  // db로 결과값 보내기
  const sendData = async (datas) => {
    // bdi주소로 post
    await axios({
      method: "post",
      url: "/bdi/",
      data: datas,
    }).catch((e) => {
      console.log("error : ", e);
    });
  };
  // cgi값 0 초기화
  let cgi = 0;
  // 테스트 결과 값을 datas에 정리하여 넣어주는 과정
  const sendScore = () => {
    // bdisum 별 cgi값 설정
    if (bdisum < 10) {
      cgi = 1;
    } else if (bdisum < 16 && bdisum >= 10) {
      cgi = 2;
    } else if (bdisum < 24 && bdisum >= 16) {
      cgi = 3;
    } else {
      cgi = 4;
    }
    // ep : ep코드 (ex: EP0018)
    // bdi_score : [bdi01, bdi02, ・・・・]
    // bdisum : bdi_score 합
    // cgi : 위 if문에서 설정된 값
    datas = {
      ep: ep,
      bdi_score: saveScore,
      bdisum: bdisum,
      cgi: cgi,
    };
    // 설정된 datas 값을 sendData함수의 파라미터로 넣음
    sendData(datas);
    // 점수가 저장되었음을 알리는 알림
    alert("점수가 저장되었습니다.");
    // 종료후 대시보드로 이동
    navigate("/Dashboard");
  };

  return (
    <Wrapper>
      <Page>
        <Title>BDI TEST</Title>

        <Content>
          {/* 삼항연산으로 21개의 문항을 모두 풀었을때 종료문구가 나오게함 */}
          {showResult ? (
            <>
              <ResultHeader>테스트가 종료되었습니다.</ResultHeader>
              <Result>총점 : {bdisum}</Result>
              <Input
                type="text"
                value={ep}
                placeholder="ex)ep0018,ep0023..."
                onChange={inputHandler}
              />
              <Button onClick={sendScore}> 점수 입력 </Button>
            </>
          ) : (
            // 테스트 카드
            <>
              <Header>
                {/* 문제번호 / 문제문항수  */}
                <span>{quiz[currentNo].id}</span>/{quiz.length}
              </Header>
              <SubHeader>
                {/* 문진 종류(ex: 슬픔, 비관주의 ...) */}
                {quiz[currentNo].question}
              </SubHeader>
              <AnsContainer>
                {/* 4개의 답 출력 */}
                {quiz[currentNo].answers.map((answer, index) => (
                  <Button
                    key={index}
                    value={answer.text}
                    // 해당 답을 클릭시 quiz에 있는 score를 보냄
                    onClick={() => handleClick(answer.score)}
                  >
                    {answer.text}
                  </Button>
                ))}
              </AnsContainer>
            </>
          )}
        </Content>
        <CloseBtn>닫기</CloseBtn>
      </Page>
    </Wrapper>
  );
};

export default QuizProp;

const Wrapper = styledComponents.div`
display: flex;
justify-content: center;
`;
const Page = styledComponents.div`
display: flex;
flex-direction: column;
background-color: #E6E6E6;
color: #242F3E;
border-radius: 10px;
`;
const Title = styledComponents.h1`
margin: 10px 20px 0 20px;
`;

const Content = styledComponents.div`
margin: 10px 20px;
    width: 400px;
    height: 340px;
`;

const Header = styledComponents.header`
font-size: 16px;
	font-weight: bold;
	margin-bottom: 8px;
`;

const SubHeader = styledComponents.h2`
font-size: 20px;
margin-bottom: 16px;
`;

const AnsContainer = styledComponents.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const Button = styledComponents.button`
font-size: 16px;
color: #ffffff;
background-color: rgb(115, 98, 255);
border-radius: 5px;
border: 1px;
height: 56px;
padding: 4px;
margin: 4px;
cursor: pointer;
width: 100%;
outline: none;
font-weight: 700;
 &:hover{
    background-color: #a99fee;
 }
`;

const ResultHeader = styledComponents.header`
font-size: 30px;
font-weight: bold;
margin-bottom: 8px;
text-align: center;
`;

const Result = styledComponents.p`
font-size: 40px;
margin: 40px;
text-align: center;
color: rgb(115, 98, 255);
`;

const Input = styledComponents.input`
font-size: 20px;
border-radius: 5px;
border: 1px rgb(115, 98, 255) solid;
height: 56px;
padding: 4px;
margin: 4px;
width: 100%;
outline: none;
font-weight: 700;
`;

const CloseBtn = styledComponents.button`
margin: 0 20px 20px 20px;
position: relative;
padding: 4px;
font-size: large;
border: #242f3e solid 1px;
border-radius: 5px;
cursor: pointer;
`;

const quiz = [
  {
    id: 1,
    question: "슬픔",
    answers: [
      { text: "나는 슬프지 않다.", score: 0 },
      { text: "나는 슬플 때가 자주 있다.", score: 1 },
      { text: "나는 항상 슬프다.", score: 2 },
      { text: "나는 너무 슬프고 불행해서 견딜 수가 없다.", score: 3 },
    ],
  },
  {
    id: 2,
    question: "비관주의",
    answers: [
      { text: "나는 미래에 대해 낙심하지 않는다.", score: 0 },
      { text: "나는 이전에 비해 미래에 대한 희망이 줄었다.", score: 1 },
      { text: "나는 내 앞날이 잘 풀릴 거이라고 기대하지 않는다.", score: 2 },
      {
        text: "나는 미래가 희망이 없고 점점 더 나빠질 것 같은 느낌이 든다.",
        score: 3,
      },
    ],
  },
  {
    id: 3,
    question: "과거의 실패",
    answers: [
      { text: "나는 나 자신을 실패자라고 느끼지 않는다.", score: 0 },
      { text: "나는 생각보다 많은 실패를 했다.", score: 1 },
      { text: "돌이켜보면, 나는 실패를 너무 많이 했다.", score: 2 },
      { text: "나는 인간으로서 완전히 실패한 것 같다.", score: 3 },
    ],
  },
  {
    id: 4,
    question: "즐거움 상실",
    answers: [
      {
        text: "나는 이전처럼 내가 좋아하는 일을 함녀서 즐거움을 느낀다.",
        score: 0,
      },
      { text: "나는 이전만큼 일을 즐기지 못하고 있다.", score: 1 },
      {
        text: "나는 이전과 달리 일에서 즐거움을 거의 느끼지 못하고 있다.",
        score: 2,
      },
      {
        text: "나는 이전과 달리 어떤 일에서도 즐거움을 느끼지 못하고 있다.",
        score: 3,
      },
    ],
  },
  {
    id: 5,
    question: "죄책감",
    answers: [
      { text: "나는 특별히 죄책감을 느끼지 않는다.", score: 0 },
      {
        text: "나는 내가 했던 일이나 하지 못했던 일 때문에 죄책감을 느낀다.",
        score: 1,
      },
      { text: "나는 죄책감을 느낄 때가 자주 있다.", score: 2 },
      { text: "나는 항상 죄책감을 느낀다.", score: 3 },
    ],
  },
  {
    id: 6,
    question: "벌 받는 느낌",
    answers: [
      { text: "나는 벌을 받고 있다고 느끼지 않는다.", score: 0 },
      { text: "나는 벌을 받을지도 모른다는 느낌이 든다.", score: 1 },
      { text: "나는 벌을 받을 것 같다.", score: 2 },
      { text: "나는 지금 벌을 받고 있다는 느낌이 든다.", score: 3 },
    ],
  },
  {
    id: 7,
    question: "자기혐오",
    answers: [
      { text: "나는 나 자신에 대해 변함없이 같은 느낌이다.", score: 0 },
      { text: "나는 나 자신에 대한 믿음이 없어졌다.", score: 1 },
      { text: "나는 나 자신에 대해 실행하고 있다.", score: 2 },
      { text: "나는 나 자신을 혐오한다.", score: 3 },
    ],
  },
  {
    id: 8,
    question: "자기 비판",
    answers: [
      {
        text: "나는 이전에 비해 자신을 더 탓하거나 비난하지 않는다.",
        score: 0,
      },
      { text: "나는 이전에 비해 나 자신을 더 많이 탓한다.", score: 1 },
      {
        text: "내가 저지른 실수는 다 나의 잘못 때문이라고 생각한다.",
        score: 2,
      },
      {
        text: "안 좋은 일이 벌어지면 다 나 때문인 것 같아 자신을 비난한다.",
        score: 3,
      },
    ],
  },
  {
    id: 9,
    question: "자살 사고 및 자살 소망",
    answers: [
      { text: "나는 자살 같은 것은 생각하지 않는다.", score: 0 },
      {
        text: "나는 자살을 생각해 본적은 있지만, 행동으로 옮기지는 않을 것이다.",
        score: 1,
      },
      { text: "나는 자살하고 싶다.", score: 2 },
      { text: "나는 기회만 있으면 자살할 것이다.", score: 3 },
    ],
  },
  {
    id: 10,
    question: "울음",
    answers: [
      { text: "나는 이전보다 울음이 더 많아지지 않았다.", score: 0 },
      { text: "나는 이전보다 울음이 더 많아졌다.", score: 1 },
      { text: "나는 사소한 일에도 울음이 터져 나온다.", score: 2 },
      { text: "나는 울고 싶어도 울 기력조차 없다.", score: 3 },
    ],
  },
  {
    id: 11,
    question: "초조",
    answers: [
      { text: "나는 이전보다 더 초조하거나 긴장되지 않는다.", score: 0 },
      { text: "나는 이전보다 더 초조하고 긴장된다.", score: 1 },
      { text: "나는 너무 초조해서 가만히 있기가 어렵다.", score: 2 },
      {
        text: "나는 너무 초조해서 계속 움직이거나 뭐든 하고 있어야한다.",
        score: 3,
      },
    ],
  },
  {
    id: 12,
    question: "흥미상실",
    answers: [
      { text: "나는 사람들이나 일에 대한 관심이 변하지 않았다.", score: 0 },
      {
        text: "나는 사람들이나 일에 대한 관심이 이전에 비해 줄어들었다.",
        score: 1,
      },
      { text: "나는 사람들이나 일에 대한 관심이 많이 줄어들었다.", score: 2 },
      { text: "나는 어떤 것에도 관심을 갖기가 힘들다.", score: 3 },
    ],
  },
  {
    id: 13,
    question: "우유부단",
    answers: [
      { text: "나는 이전처럼 결정을 잘 내린다.", score: 0 },
      { text: "나는 이전처럼 결정을 내리기가 힘들다.", score: 1 },
      { text: "나는 이전처럼 결정을 내리는 것이 너무 힘들다.", score: 2 },
      { text: "나는 어떤 결정도 내리기 힘들다.", score: 3 },
    ],
  },
  {
    id: 14,
    question: "무가치감",
    answers: [
      { text: "나는 내가 무가치한 사람이라고 느끼지 않는다.", score: 0 },
      {
        text: "나는 내가 이전만큼 가치 있고 쓸모 있는 사람이라는 생각이 들지 않는다.",
        score: 1,
      },
      {
        text: "나는 다른 사람들보다 무가치한 사람이라는 느낌이 든다.",
        score: 2,
      },
      { text: "나는 완전히 무가치한 사람이라는 느낌이 든다.", score: 3 },
    ],
  },
  {
    id: 15,
    question: "기력 상실",
    answers: [
      { text: "나는 이전에 비해 기력이 떨어지지 않았다.", score: 0 },
      { text: "나는 이전보다 기력이 떨어졌다.", score: 1 },
      { text: "나는 기력이 많이 떨어졌다.", score: 2 },
      { text: "나는 기력이 너무 없어 아무 일도 할 수가 없다.", score: 3 },
    ],
  },
  {
    id: 16,
    question: "수면 양상 변화",
    answers: [
      { text: "나는 수면 양상에 변화가 없다.", score: 0 },
      { text: "나는 이전보다 잠이 약간 늘었다/줄었다.", score: 1 },
      { text: "나는 이전보다 잠이 훨씬 늘었다/줄었다.", score: 2 },
      { text: "나는 거의 하루종일 잠을 잔다/못 잔다.", score: 3 },
    ],
  },
  {
    id: 17,
    question: "짜증",
    answers: [
      { text: "나는 이전에 비해 짜증이 심해지지 않는다.", score: 0 },
      { text: "나는 이전에 비해 짜증이 약간 늘었다.", score: 1 },
      { text: "나는 이전에 비해 짜증이 훨씬 심해졌다.", score: 2 },
      { text: "나는 항상 짜증이 난다.", score: 3 },
    ],
  },
  {
    id: 18,
    question: "식욕 변화",
    answers: [
      { text: "나는 식욕에 변화가 없다.", score: 0 },
      { text: "나는 이전에 비해 식욕이 약간 줄었다/늘었다.", score: 1 },
      { text: "나는 이전에 비해 식욕이 많이 줄었다/늘었다.", score: 2 },
      { text: "나는 식욕이 전혀없다/심해졌다.", score: 3 },
    ],
  },
  {
    id: 19,
    question: "주의집중 어려움",
    answers: [
      { text: "나는 이전처럼 집중을 잘 할 수 있다.", score: 0 },
      { text: "나는 이전처럼 집중을 잘 할 수 없다.", score: 1 },
      { text: "나는 어떤 일에도 오래 집중하기가 어렵다.", score: 2 },
      { text: "나는 어떤 일에도 전혀 집중할 수가 없다.", score: 3 },
    ],
  },
  {
    id: 20,
    question: "피로감",
    answers: [
      { text: "나는 평소보다 더 피곤하지는 않다.", score: 0 },
      { text: "나는 평소보다 더 쉽게 피곤해진다.", score: 1 },
      {
        text: "나는 너무 피곤해서 이전에 해왔던 많은 일들을 하기 힘들다.",
        score: 2,
      },
      {
        text: "나는 너무 피곤해서 이전에 해왔던 일들을 아무 것도 할 수 없다.",
        score: 3,
      },
    ],
  },
  {
    id: 21,
    question: "성(性)에 대한 흥미 상실",
    answers: [
      {
        text: "나는 성(性)에대한 관심이 별다른 변화 없이 유지되고 있다.",
        score: 0,
      },
      { text: "나는 이전에 비해 성(性)에 대한 관심이 줄었다.", score: 1 },
      { text: "나는 최근에 성(性)에 대한 관심이 상당히 줄었다.", score: 2 },
      { text: "나는 성(性)에 대한 관심을 완전히 잃었다.", score: 3 },
    ],
  },
];
