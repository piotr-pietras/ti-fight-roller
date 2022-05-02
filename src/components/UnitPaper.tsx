import { Paper, styled } from "@mui/material";
import { Unit, UnitValues } from "./types/unit.types";
import { StatCounter } from "./ValueCounter";
import { useAppDispatch } from "../services/store";
import { UnitsActions } from "../stores/units.store";
import { UnitAvatar } from "./UnitAvatar";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  unit: Unit;
}

export const UnitPaper = ({ unit }: Props) => {
  const { valueChanged, unitRemoved } = UnitsActions;
  const dispatch = useAppDispatch();
  return (
    <Container elevation={6}>
      <UnitAvatar type={unit.type} />
      {Object.values(UnitValues).map((valueType) => (
        <StatCounter
          value={unit.values[valueType]}
          title={valueType}
          onDecrease={() =>
            dispatch(
              valueChanged({ id: unit.id, valueType, changeType: "decrease" })
            )
          }
          onIncrease={() =>
            dispatch(
              valueChanged({ id: unit.id, valueType, changeType: "increase" })
            )
          }
        />
      ))}
      <Close
        onClick={() => {
          dispatch(unitRemoved({ unitId: unit.id }));
        }}
      />
    </Container>
  );
};

const Container = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const Close = styled(CloseIcon)`
  position: absolute;
  right: 1rem;
`;
