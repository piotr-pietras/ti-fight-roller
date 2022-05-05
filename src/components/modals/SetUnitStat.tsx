import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  styled,
} from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../services/store";
import { AppActions, selectModalCache } from "../../stores/app.store";
import { UnitsActions } from "../../stores/units.store";
import { ModalTypes } from "../types/modal.types";
import { UnitStats } from "../types/unit.types";
import { StatCounter } from "../ValueCounter";

export const SetUnitStat = () => {
  const [stat, setStat] = useState({
    [UnitStats.dices]: 1,
    [UnitStats.combat]: 9,
    [UnitStats.soak]: 0,
  });
  const [sustainDamage, setSustainDamage] = useState(false);
  const cache = useAppSelector(selectModalCache);
  const isCached = cache.type === ModalTypes.setUnitStat;
  const { modalToggled } = AppActions;
  const { unitAdded } = UnitsActions;
  const dispatch = useAppDispatch();

  const onClickCancel = () => {
    dispatch(modalToggled({ isOpen: false }));
  };

  const onClickAdd = () => {
    isCached &&
      dispatch(
        unitAdded({ unitType: cache.meta.selectedUnitType, unitStat: stat })
      );
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
                disabled={UnitStats[key] === UnitStats.soak && !sustainDamage}
                value={stat[key]}
                title={UnitStats[key]}
                onDecrease={() => setStat({ ...stat, [key]: stat[key] - 1 })}
                onIncrease={() => setStat({ ...stat, [key]: stat[key] + 1 })}
              />
            )
        )}
      </StatsContainer>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              value={sustainDamage}
              onClick={() => {
                setSustainDamage(!sustainDamage);
                sustainDamage
                  ? setStat({ ...stat, [UnitStats.soak]: 0 })
                  : setStat({ ...stat, [UnitStats.soak]: 1 });
              }}
            />
          }
          label="Has sustain damage ?"
        />
      </FormGroup>
      <ButtonConatiner>
        <Button onClick={onClickCancel}>cancel</Button>
        <Button onClick={onClickAdd} variant="contained">
          Add
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

const StatsContainer = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const ButtonConatiner = styled(Box)`
  display: flex;
  justify-content: space-between;
`;
