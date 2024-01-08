import styled from 'styled-components'
import exit from './exit.png'
import exit_hover from './exit-hover.png'

export const ModalForm = styled.div`
  --modal-width: 800px;
  --modal-height: 900px;
  position: absolute;
  left: calc(50% - (var(--modal-width) / 2));
  top: calc(50% - (var(--modal-height) / 2));
  box-sizing: border-box;
  width: var(--modal-width);
  min-height: var(--modal-height);
  background-color: #ffffff;
  border-radius: 12px;
  padding: 18px 47px 47px 40px;
  align-items: center;
  flex-direction: column;
  box-shadow: 3px 3px 10px 5px #d9d9d9;
  display: ${(props) => (props.modal === 'visible' ? 'flex' : 'none')};
  z-index: 2;
  opacity: 1;
  @media (max-width: 320px) {
    top: 0;
    --modal-width: 320px;
    padding: 0;
    --modal-height: auto;
  }
`
export const ModalExit = styled.div`
  position: absolute;
  left: 722px;
  top: 38px;
  width: 43px;
  height: 43px;
  background-image: url(${exit});
  &:hover {
    background-image: url(${exit_hover});
  }
  cursor: pointer;
  @media (max-width: 320px) {
    display: none;
  }
`
export const ModalFormArea = styled.form`
  display: flex;  
  margin-top: 5px;
  width: 650px;
  height: 310px;
  flex-direction: column;
  align-items: start;
  background-color: #ffffff;
  @media (max-width: 320px) {
    width: 278px;
  }
}
`
export const ModalTitle = styled.div`
  height: 70px;
  min-width: 100%;
  background-color: #ffffff;
  font-size: 32px;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 320px) {
    font-size: 24px;
    line-height: 29px;
  }
`
export const ModalLabel = styled.label`
  height: 30px;
  min-width: 100%;
  background-color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  @media (max-width: 320px) {
    display: none;
  }
`
export const ModalTextarea = styled.textarea`
  height: 100px;
  width: 650px;
  background-color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  resize: none;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  padding: 10px;
  line-height: 24px;
  &:focus {
    outline: 2px solid #d9d9d9;
  }
  @media (max-width: 320px) {
    border-radius: 20px;
    width: 278px;
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 10px;
    &:focus {
      outline: 1px solid #009ee4;
    }
  }
`
export const ModalButton = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  justify-content: center;
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  width: 181px;
  height: 50px;
  border-radius: 6px;
  border: 1px solid #009ee4;
  cursor: pointer;
  background-color: ${(props) =>
    props.disabled === true ? '#d9d9d9' : '#009ee4'};
  border: ${(props) =>
    props.disabled === true ? '1px solid #d9d9d9' : '1px solid #009ee4'};
  &:hover {
    background-color: ${(props) =>
      props.disabled === true ? '#d9d9d9' : '#0080c1'};
    border: ${(props) =>
      props.disabled === true ? '1px solid #d9d9d9' : '1px solid #009ee4'};
  }
  &:active {
    background-color: ${(props) =>
      props.disabled === true ? '#d9d9d9' : '#009ee4'};
    border: ${(props) =>
      props.disabled === true ? '1px solid #d9d9d9' : '1px solid #009ee4'};
  }
  @media (max-width: 320px) {
    width: 278px;
    height: 47px;
  }
`
export const ModalCommentsField = styled.div`
  display: flex;  
  margin-top: 5px;
  width: 650px;
  height: 510px;
  flex-direction: column;
  align-items: start;
  background-color: #ffffff;
  gap:5px;
  overflow-y:auto;
  @media (max-width: 320px) {
    width: 278px;   
  }  
}
`
export const ModalCommentContainer = styled.div`
  display: flex;    
  width: 650px;
  min-height: 125px;
  flex-direction: row;
  align-items: start;
  background-color: #ffffff;
  flex-shrink:0;
}
`
export const ModalAvatarField = styled.div`
  display: flex;    
  width: 40px;
  min-height: 125px;
  flex-direction: column;
  justify-content: start;
  background-color: #ffffff;
  margin-right:10px;
}
`
export const ModalAvatar = styled.div`
  width: 40px;
  height:40px;
  border-radius:20px;  
  background-color: #d9d9d9;
  overflow: hidden;
}
`
export const ModalComment = styled.div`
  width: 600px;
  min-height:125px;
  background-color: #ffffff;
  display:flex;
  flex-direction: column;
  justify-content: start;
}
`
export const ModalAuthor = styled.div`
  width: 600px;
  min-height:32px;
  background-color: #ffffff;  
  display:flex;
  align-items: center;
  font-size:16px;
  font-weight:500;
  @media (max-width: 320px) {
    font-size:14px;
    line-height:28px;
  }  
}
`
export const ModalDate = styled.span`
  font-weight: 400;
  color: #5f5f5f;
  @media (max-width: 320px) {
    font-size:14px;
    line-height:28px;
  }  
`
export const ModalText = styled.div`
  width: 600px;
  font-weight: 500;
  font-size: 16px;
  line-height:32px;
  min-height: 32px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  word-wrap:break-word;
  @media (max-width: 320px) {
    width: 230px;   
  }  
`
export const ModalContent = styled.div`
  width: 600px;
  font-weight: 400;
  font-size: 16px;
  line-height:24px;
  min-height: 48px;
  background-color: #ffffff;
  text-wrap: normal;
  @media (max-width: 320px) {
    width: 230px;   
  }  
`
export const EmptyContainer = styled.div`
  width: 650px;
  height: 510px;
  text-align: center;
  padding-top: 200px;
  font-weight: 500;
  font-size: 32px;
  @media (max-width: 320px) {
    width: 278px;   
  }  
`
export const HeaderNav = styled.div`
  display: none;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  @media (max-width: 320px) {
    display: flex;
    height: 55px;
    justify-content: start;
    padding-left: 17px;
    background-color: #009ee4;
    width: 320px;
  }
`
export const SmallLogo = styled.img`
  width: 32px;
  height: 32px;
  display: none;
  @media (max-width: 320px) {
    display: block;
  }
`
export const ModalArrow = styled.img`
  width: 9px;
  height: 18px;
  margin-right: 20px;
  display: none;
  @media (max-width: 320px) {
    display: block;
  }
`
