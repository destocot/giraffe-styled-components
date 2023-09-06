import { FooterStyles } from "./pre/Footer.styled";
import { ContainerStyles } from "./styles/Container.styled";
import { FlexStyles } from "./pre/Flex.styled";

export default function Footer() {
  return (
    <FooterStyles>
      <ContainerStyles>
        <FlexStyles>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cupiditate, ratione praesentium magni illo ab.
            </li>
            <li>+1-234-567-8901</li>
            <li>example@giraffe.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </FlexStyles>
      </ContainerStyles>
    </FooterStyles>
  )
}
