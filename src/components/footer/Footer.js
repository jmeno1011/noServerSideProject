import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <Foooter>
      <FooterDiv>
        <div>
          <a style={{ fontSize: "1.625rem" }} href="#">
            Footer
          </a>
          <div style={{ marginTop: 24 }}>
            <DesP>React Project and Examples</DesP>
            <DesP>Code Examples and documentation CC 1.0</DesP>
          </div>
          <ul style={{ marginTop: 48, display: "flex" }}>
            <li>Documentation</li>
            <li style={{ marginLeft: 24 }}>Resource</li>
            <li style={{ marginLeft: 24 }}>GitHub</li>
            <li style={{ marginLeft: 24 }}>etc</li>
          </ul>
        </div>
        <div>
          <FooterUl>
            <li>
              <a
                href="https://github.com/jmeno1011/noServerSideProject"
                target={"_blank"}
              >
                <span>GitHub</span>
                <Icon icon="ant-design:github-filled" fontSize={40} />
              </a>
            </li>
            <li style={{ marginLeft: 24 }}>
              <a href="#">
                <span>Twitter</span>
                <Icon icon="ant-design:twitter-circle-filled" fontSize={40} />
              </a>
            </li>
          </FooterUl>
          <p style={{ marginTop: 32, marginBottom: 0 }}>&copy; 2022 Remix</p>
        </div>
      </FooterDiv>
    </Foooter>
  );
};

export default Footer;

const Foooter = styled.footer`
  padding: 32px 0 24px;
  background-color: #15171c;
  color: white;
`;
const FooterDiv = styled.div`
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div > a {
    color: white;
  }
`;
const DesP = styled.div`
  margin: 0;
`;

const FooterUl = styled.ul`
  display: flex;
  align-items: center;
  > li > a {
    color: gray;
  }
  > li > a :hover {
    color: white;
  }
  > li > a > span {
    width: 1px;
    height: 1px;
    position: absolute;
    overflow: hidden;
  }
`;
