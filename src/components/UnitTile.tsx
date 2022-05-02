import { Box, styled } from "@mui/material";
import { UnitImagePath, UnitType } from "./types/unit.types";

interface Props {
  type: UnitType;
  selected: boolean;
  onClick: () => void;
}

export const UntiTile = ({ type, selected, onClick }: Props) => {
  return (
    <Container selected={selected} onClick={onClick}>
      <img src={`static/shipTile/${UnitImagePath[type]}`} alt={type} />
    </Container>
  );
};

const Container = styled(Box)<{ selected: boolean }>`
  margin: 0.5rem;
  transform: ${({ selected }) => selected && "scale(1.1)"};
  opacity: ${({ selected }) => !selected && 0.7};
  :hover {
    cursor: pointer;
  }
`;
