import { giraffes } from "@/giraffe-database";
import Card from "./Card";
// import { ContainerStyles } from "./styles/Container.styled";

export default function Content() {
  return (
    <div>
      {
        giraffes.map((giraffe, index) => (
          <Card key={index} giraffe={{ ...giraffe, index }} />
        ))
      }
    </div>
  )
};