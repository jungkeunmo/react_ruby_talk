import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "antd";


const Wrapper = styled.div`
  width: 100%;
  height: 75px;
  border-bottom: 1px solid #d2d2d2;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isSend ? "flex-end" : "flex-start")};
  justify-content: flex-start;
  padding: 5px;
`;

const TopMsg = styled.div`
  font-weight: 700;
  color: ${(props) => (props.isSend ? "#a29bfe" : "#6c5ce7")};
  margin-bottom: 5px;
`;

const Content = styled.p`
  font-size: 12px;
  color: #666;
  padding: 5px;
`;

const MsgBox = ({id, isSend, content, isRead, createdAt, who, whom,whoName, whomName }) => {
  const [contentModal, setContentModal] = useState(false);

  const modalToggle = () => {
    setContentModal(!contentModal);
  };

  if (isSend) {
    return (
      
        <Wrapper isSend={isSend} onClick={() => modalToggle()}>
          <TopMsg isSend={isSend}>보낸 메세지({whomName})</TopMsg>
          <Content>{content}</Content>

          <Modal
            title="쪽지함 내용"
            visible={contentModal}
            footer={null}
            onCancel={() => modalToggle()}
          >
            <p>{content}</p>
          </Modal>
        </Wrapper>
     
    );
  } else {
    return (
      
        <Wrapper isSend={isSend} onClick={() => modalToggle()}>
          <TopMsg isSend={isSend}>받은 메세지({whoName})</TopMsg>
          <Content>{content}</Content>

          <Modal
            title="쪽지함 내용"
            visible={contentModal}
            footer={null}
            onCancel={() => modalToggle()}
          >
            <p>{content}</p>
          </Modal>
        </Wrapper>
      
    );
  }
};

export default MsgBox;