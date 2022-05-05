import { Box, Button, styled } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../services/store";
import { AppActions } from "../../stores/app.store";
import { selectRolledDamage } from "../../stores/units.store";

export const RolledDamage = () => {
  const rolledDamage = useAppSelector(selectRolledDamage);
  const { modalToggled } = AppActions;
  const dispatch = useAppDispatch();

  const onClickOk = () => {
    dispatch(modalToggled({ isOpen: false }));
  };

  return (
    <Box>
      <Title>You dealt</Title>
      <Title>{rolledDamage}</Title>
      <ButtonConatiner>
        <Button onClick={onClickOk} variant="contained">
          ok
        </Button>
      </ButtonConatiner>
    </Box>
  );
};

const Title = styled(Box)`
  text-align: center;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.XL};
`;

const ButtonConatiner = styled(Box)`
  display: flex;
  justify-content: end;
`;
