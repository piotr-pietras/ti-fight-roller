import { Box, styled, Button } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface Props {
  value: number;
  title: string;
  onDecrease: () => void;
  onIncrease: () => void;
}

export const StatCounter = ({
  value,
  title,
  onDecrease,
  onIncrease,
}: Props) => {
  return (
    <Container>
      <Title>{title.toUpperCase()}</Title>
      <Button variant="contained" onClick={() => onIncrease()}>
        <KeyboardArrowUpIcon />
      </Button>
      <Counter>{value}</Counter>
      <Button variant="contained" onClick={() => onDecrease()}>
        <KeyboardArrowDownIcon />
      </Button>
    </Container>
  );
};

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
`;

const Title = styled(Box)`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.M};
`;

const Counter = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.XL};
`;
