import { DangerButtonContainer } from "./styles";

interface IDangerProps {
  btnName: string;
  onClick: () => void;
}

export function Danger({ btnName, onClick }: IDangerProps) {
  return (
    <DangerButtonContainer onClick={onClick}>{btnName}</DangerButtonContainer>
  );
}
