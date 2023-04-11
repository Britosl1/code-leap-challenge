import { PrimaryButtonContainer } from "./styles";

interface IPrimaryProps {
  btnName: string;
  onClick: () => void;
}

export function Primary({ btnName, onClick }: IPrimaryProps) {
  return (
    <PrimaryButtonContainer onClick={onClick}>{btnName}</PrimaryButtonContainer>
  );
}
