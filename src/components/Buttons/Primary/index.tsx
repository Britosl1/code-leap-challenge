import { PrimaryButtonContainer } from "./styles";

interface IPrimaryProps {
  btnName: string;
  onClick: () => void;
  isDisabled?: boolean;
}

export function Primary({ btnName, onClick, isDisabled }: IPrimaryProps) {
  return isDisabled ? (
    <PrimaryButtonContainer onClick={onClick} disabledGrey={true} disabled>
      {btnName}
    </PrimaryButtonContainer>
  ) : (
    <PrimaryButtonContainer onClick={onClick}>{btnName}</PrimaryButtonContainer>
  );
}
