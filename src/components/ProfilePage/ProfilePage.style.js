import styled from 'styled-components'

export const ProfileContainer = styled.div`
  max-width: 1178px;
  @media (max-width: 320px) {
    width: 320px;
  }
`
export const ProfileBackground = styled.div`
  width: 100%;
  height: 200vh;
  position: absolute;
  background-color: #009ee4;
  left: 0px;
  top: 0px;
  opacity: 0.05;
  z-index: 1;
`
export const ProfileContent = styled.div`
  max-width: 834px;
  margin-bottom: 60px;
  @media (max-width: 320px) {
    width: 320px;
  }
`
export const ProfileTitle = styled.h3`
  font-size: 32px;
  line-height: 70px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 20px;
  @media (max-width: 320px) {
    font-size: 18px;
    line-height: 18px;
    padding-left: 22px;
  }
`
export const ProfileSettings = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 320px) {
    flex-direction: column;
    align-items: center;
  }
`
export const ProfileLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 43px;
  @media (max-width: 320px) {
    margin-right: 0px;
  }
`
export const ProfileImgContainer = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  border: 1px solid #f0f0f0;
  background-color: #f0f0f0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 320px) {
    width: 132px;
    height: 132px;
  }
`
export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ProfileChangeButton = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 16px;
  line-height: 24px;
  color: #009ee4;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 320px) {
    font-size: 16px;
    line-height: 24px;
    margin-top: 5px;
  }
`
export const ProfileRight = styled.div`
  width: 630px;
  @media (max-width: 320px) {
    width: 279px;
  }
`
export const ProfileForm = styled.form`
  width: 630px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 320px) {
    flex-direction: column;
    width: 100%;
  }
`
export const ProfileBlock = styled.div`
  display: inline-block;
  margin: 0 7px 20px;
  @media (max-width: 320px) {
    margin: 0 0px 20px;
  }
`
export const ProfileInput = styled.input`
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 13px 19px;
  font-size: 16px;
  line-height: 24px;
  width: ${(props) => (props.name === 'phone' ? '614px' : '300px')};
  &::placeholder {
    color: #d9d9d9;
  }
  &:focus {
    outline: 1px solid #009ee4;
  }
  @media (max-width: 320px) {
    width: ${(props) => (props.name === 'phone' ? '279px' : '279px')};
    border-radius: 30px;
    padding: 10px 19px;
    font-size: 14px;
    line-height: 21px;
  }
`
export const ProfileLabel = styled.label`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: ${(props) => (props.focus === props.htmlFor ? '#009EE4' : '#c4c4c4')};
  margin-bottom: 4px;
  display: block;
  @media (max-width: 320px) {
    padding-left: 20px;
    font-size: 14px;
    line-height: 21px;
  }
`
export const ProfileSaveButton = styled.button`
  display: flex;
  align-items: center;
  margin-left: 6px;
  justify-content: center;
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  width: 154px;
  height: 50px;
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  cursor: pointer;
  &:hover {
    background-color: #0080c1;
  }
  &:active {
    background-color: #009ee4;
  }
  &:disabled {
    background-color: #d9d9d9;
    border: 1px solid #d9d9d9;
  }
  @media (max-width: 320px) {
    width: 278px;
    height: 46px;
    line-height: 24px;
    margin-left: 0px;
    margin-top: 20px;
  }
`
