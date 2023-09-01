import { useEffect, useState } from 'react';
import { HeaderStyles, NavStyles, ImageStyles } from './pre/Header.styled';
// import { ContainerStyles } from "./styles/Container.styled";
import { FlexStyles } from './pre/Flex.styled';
import { ButtonStyles } from './pre/Button.styled';
import { FaToggleOn, FaToggleOff } from "react-icons/fa";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle) { document.body.classList.add('dark') }
    else { document.body.classList.remove('dark') }
  }, [toggle])

  return (
    <HeaderStyles>
      <div>
        <NavStyles>
          <h1>🦒 Giraffe</h1>
          {
            toggle ? <h1><FaToggleOn onClick={() => setToggle(false)} /></h1>
              : <h1><FaToggleOff onClick={() => setToggle(true)} /></h1>
          }
          <ButtonStyles>Discover Giraffes</ButtonStyles>
        </NavStyles>
        <FlexStyles>
          <div>
            <h1>Explore the World of Giraffes</h1>
            <p>Giraffe World re-imagines the way we learn about these majestic creatures. You have a passion for giraffes, and so do we. Join our community as we share fascinating facts and engage in meaningful discussions.</p>
            <ButtonStyles bg="peru">Get Giraffe Updates</ButtonStyles>
          </div>
          <ImageStyles src="/images/giraffebanner.png" alt="" />
        </FlexStyles>
      </div>
    </HeaderStyles >
  )
};
