import { Icon } from "@iconify/react";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { gettToken, onMessageListener } from "./firebase";

const Layout = styled.div`
    padding: 16px;
`

const AlarmBlock = styled.div`
padding: 8px;
display: flex;
align-items: center;
h3{
  margin: 0;
  padding: 0;
  font-size: 1rem;
}
p{
  margin: 0;
  padding: 0;
  margin-left: 8px;
  font-size: 0.875rem;
}
@media only screen and (max-width: 576px) {
  flex-direction: column;
  align-items: flex-start;
  p{
    margin-left: 0px;
  }
}
`

const MessageBlock = styled.div`
margin-top: 16px;
padding: 16px;
display: flex;
background-color: #fff;
border: 1px solid silver;
border-radius: 8px;
/* max-width: 1000px; */
max-width: 700px;
@media only screen and (max-width: 576px) {
  flex-direction: column;
}
`

const MessageForm = styled.form`
padding: 8px;
border-right: 1px solid silver;
min-width: 300px;
h3{
  margin: 0;
  padding: 0;
  font-size: 0.875rem;
}
input{
  width: 90%;
  margin-top: 8px;
  margin-bottom: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  font-size: 1rem;
  outline: none;
  border: none;
  border-bottom: 1px solid silver;
}
input:focus{
  border-bottom: 2px solid #1976d2;
}
@media only screen and (max-width: 576px) {
  min-width: 200px;
  border-right: none;
  border-bottom: 1px solid silver;
}
`

const ButtonBlock = styled.div`
margin-top: 16px;
display: flex;
justify-content: end;
align-items: center;
button{
  background-color: transparent;
  border: none;
  outline: none;
  color: #333;
  font-size: 0.75rem;
  font-weight: bold;
  cursor: pointer;
}
`

const ResultBlock = styled.div`
padding-left: 8px;
padding-right: 8px;
width: 100%;
`
const Result = styled.div`
padding: 8px;
  border-bottom: 1px solid silver;
  /* box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%); */
  div{
    display: flex;
    align-items: center;
    svg{
      color: green;
      font-size: 1.5rem;
      margin-right: 4px;
    }
    span{
      font-size: 0.875rem;
      font-weight: bold;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
  }
  div:last-child{
    margin-left: 30px;
    font-size: 1rem;
    line-height: 1.5;
  }
`

const Message = () => {
    const [show, setShow] = useState(false); // 메세지 있으면 보여줌
    const [notification, setNotification] = useState({ title: "", body: "" }); // 메세지 내용
    const [isTokenFound, setTokenFound] = useState(false);
    const [targetToken, setTargetToken] = useState('')

    useEffect(() => {
        gettToken(setTokenFound, setTargetToken);
    }, [])

    onMessageListener()
        .then((payload) => {
            setShow(true);
            setNotification({
                title: payload.notification.title,
                body: payload.notification.body,
            });
            console.log(payload);
        })
        .catch((err) => console.log("failed: ", err));
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')


    const sendMessageEvent = (e) => {
        e.preventDefault();
        axios.post(`/api/send`, { title: title, text: text, token: targetToken })
            .then(res => {
                if (res.data.msg === "성공") {
                    setTitle('');
                    setText('');
                } else {
                    alert("전송을 실패하였습니다..")
                }
            })
    }

    const resetMessage = () => {
        setShow(false)
        setNotification({ title: "", body: "" })
    }
    return (
        <Layout>
            <h1 style={{ fontFamily: 'Roboto' }}>Message Send Form</h1>
            <hr />
            <AlarmBlock>
                <h3>
                    Permission State:
                </h3>
                {
                    isTokenFound ? <p>Notification permission enabled 👍🏻 — <strong>check it out!</strong></p>
                        : <p>Need notification permission ❗️ — <strong>check it out!</strong></p>
                }

            </AlarmBlock>
            <MessageBlock>
                <MessageForm>
                    <div>
                        <h3>Message Title</h3>
                        <input type={"text"} value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div>
                        <h3>Message Text</h3>
                        <input type={"text"} value={text} onChange={(e) => setText(e.target.value)} />
                    </div>
                    <ButtonBlock>
                        <button onClick={sendMessageEvent}>SEND</button>
                    </ButtonBlock>
                </MessageForm>
                <ResultBlock>

                    {
                        show ?
                            <Result>
                                <div>
                                    <Icon icon="ep:circle-check" />
                                    <span>{notification.title}</span>
                                </div>
                                <div>{notification.body}</div>
                            </Result> :
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', fontWeight: 'bold' }}>Please write a message</div>
                    }
                    {
                        show ?
                            <ButtonBlock>
                                <button onClick={resetMessage}>RESET</button>
                            </ButtonBlock> :
                            null
                    }
                </ResultBlock>
            </MessageBlock>
        </Layout>
    )
}

export default Message;