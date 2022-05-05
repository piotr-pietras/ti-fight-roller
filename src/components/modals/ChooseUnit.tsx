import { Box, Button, styled } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../../services/store";
import { AppActions } from "../../stores/app.store";
import { ModalTypes } from "../types/modal.types";
import { UnitType } from "../types/unit.types";
import { UntiTile } from "../UnitTile";

export const ChooseUnit = () => {
  const [selected, setSelected] = useState<UnitType>(UnitType.infantry);
  const { modalToggled } = AppActions;
  const dispatch = useAppDispatch();

  const OnClickNext = () => {
    dispatch(
      modalToggled({
        isOpen: true,
        cache: {
          type: ModalTypes.setUnitStat,
          meta: {
            selectedUnitType: selected,
          },
        },
      })
    );
  };

  const onClickCancel = () => {
    dispatch(modalToggled({ isOpen: false }));
  };

  return (
    <Box>
      <Title>Choose unit</Title>
      <UnitsContainer>
        {(Object.keys(UnitType) as Array<keyof typeof UnitType>).map((key) => (
          <UntiTile
            type={UnitType[key]}
            selected={UnitType[key] === selected}
            onClick={() => setSelected(UnitType[key])}
          />
        ))}
      </UnitsContainer>
      <ButtonConatiner>
        <Button onClick={onClickCancel}>cancel</Button>
        <Button variant="contained" onClick={OnClickNext}>
          Next
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

const UnitsContainer = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const ButtonConatiner = styled(Box)`
  display: flex;
  justify-content: space-between;
`;
