import { SuccessButtonContainer } from "./styles";

interface ISuccessProps {
  btnName: string;
  onClick: () => void;
}

export function Success({ btnName, onClick }: ISuccessProps) {
  return (
    <SuccessButtonContainer onClick={onClick}>{btnName}</SuccessButtonContainer>
  );
}
