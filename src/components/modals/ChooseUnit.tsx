import { Box, Button, styled } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../services/store";
import { AppActions, selectModalCache } from "../../stores/app.store";
import { ModalTypes } from "../types/modal.types";
import { UnitType } from "../types/unit.types";
import { UntiTile } from "../UnitTile";

export const ChooseUnit = () => {
  const modalCache = useAppSelector(selectModalCache);
  const { modalCacheUpdated, modalToggled } = AppActions;
  const dispatch = useAppDispatch();

  return (
    <Container>
      <UnitsContainer>
        {(Object.keys(UnitType) as Array<keyof typeof UnitType>).map((key) => (
          <UntiTile
            type={UnitType[key]}
            selected={
              modalCache.type === ModalTypes.chooseUnit &&
              UnitType[key] === modalCache.meta.selectedUnitType
            }
            onClick={() => {
              dispatch(
                modalCacheUpdated({
                  cache: {
                    type: ModalTypes.chooseUnit,
                    meta: { selectedUnitType: UnitType[key] },
                  },
                })
              );
            }}
          />
        ))}
      </UnitsContainer>
      <ButtonConatiner>
        <Button
          onClick={() => {
            dispatch(modalToggled({ isOpen: false }));
          }}
        >
          cancel
        </Button>
        <Button variant="contained">Next</Button>
      </ButtonConatiner>
    </Container>
  );
};

const Container = styled(Box)``;

const UnitsContainer = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const ButtonConatiner = styled(Box)`
  display: flex;
  justify-content: space-between;
`;
