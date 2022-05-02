import { Box, styled } from "@mui/material";
import { UnitType, UnitImagePath } from "./types/unit.types";

interface Props {
  type: UnitType;
}

export const UnitAvatar = ({ type }: Props) => {
  return (
    <Type>
      <img src={`static/shipImage/${UnitImagePath[type]}`} alt={type} />
      <Type>{type}</Type>
    </Type>
  );
};

const Type = styled(Box)`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.M};
  text-align: center;
  text-decoration: underline;
  ::first-letter {
    text-transform: capitalize;
  }
`;
