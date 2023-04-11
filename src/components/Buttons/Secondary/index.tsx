import { SecondaryButtonContainer } from "./styles";

interface ISecondaryProps {
  btnName: string;
  onClick: () => void;
}

export function Secondary({ btnName, onClick }: ISecondaryProps) {
  return (
    <SecondaryButtonContainer onClick={onClick}>
      {btnName}
    </SecondaryButtonContainer>
  );
}
