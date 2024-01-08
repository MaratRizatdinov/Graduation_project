import {styled,css} from 'styled-components'


export const ButtonStyle = css`
  width: 100%;
  height: 52px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  line-height: 24px;
  cursor: pointer;
`


export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 43px;
  @media (max-width: 320px) {
    display: none;
    
  }
`
export const Navigation = styled.div`
  --search-width: ${(props)=>props.$page==='/' ? 'auto':'0px'};
  --button-width:  ${(props)=>props.$page==='/' ? '158px':'241px'};
  height: 50px;
  max-width: 1178px;
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: stretch;  
  grid-template-columns: 110px var(--search-width) var(--button-width);
  column-gap:  ${(props)=>props.$page==='/' ? '10px':'0px'};
`

export const LogoField = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const SearchField = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: inherit;
  padding: 13px 19px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  &::placeholder {
    color: #d9d9d9;
  }
`
export const SearchButton = styled.div`
  ${ButtonStyle};
  height: 50px;
  font-size: 16px;
  background-color: #009ee4;
  color: #ffffff;
  &:hover {
    background-color: #0080c1;
  }
  &:active {
    background-color: #009ee4;
  }
`
