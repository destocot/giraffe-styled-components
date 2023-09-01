import { styled } from "styled-components";


export const HeaderStyles = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;
`;

export const NavStyles = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 40px;

  h1 {
  text-shadow: 2px 2px 4px peru;
}

@media(max-width: ${({ theme }) => theme.mobile}) {
  flex-direction: column;
}
`;

export const ImageStyles = styled.img`
width: 375px;
margin-left: 40px;

@media(max-width: ${({ theme }) => theme.mobile}) {
  margin: 40px 0 30px;
}
`;