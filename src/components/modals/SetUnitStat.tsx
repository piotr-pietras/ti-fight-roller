import { Box, Button, styled } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../services/store";
import { AppActions, selectModalCache } from "../../stores/app.store";
import { ModalTypes } from "../types/modal.types";
import { UnitStats } from "../types/unit.types";
import { StatCounter } from "../ValueCounter";

export const SetUnitStat = () => {
  const cache = useAppSelector(selectModalCache);
  const isCached = cache.type === ModalTypes.setUnitStat;
  const { modalToggled } = AppActions;
  const dispatch = useAppDispatch();

  const onClickCancel = () => {
    dispatch(modalToggled({ isOpen: false }));
  };

  return (
    <Box>
      <Title>Set stats per unit</Title>
      <StatsContainer>
        {(Object.keys(UnitStats) as Array<keyof typeof UnitStats>).map(
          (key) =>
            isCached && (
              <StatCounter
                value={cache.meta.stat[key]}
                title={UnitStats[key]}
                onDecrease={() => 1}
                onIncrease={() => 1}
              />
            )
        )}
      </StatsContainer>
      <ButtonConatiner>
        <Button onClick={onClickCancel}>cancel</Button>
        <Button variant="contained">Add</Button>
      </ButtonConatiner>
    </Box>
  );
};

const Title = styled(Box)`
  text-align: center;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.XL};
`;

const StatsContainer = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const ButtonConatiner = styled(Box)`
  display: flex;
  justify-content: space-between;
`;
