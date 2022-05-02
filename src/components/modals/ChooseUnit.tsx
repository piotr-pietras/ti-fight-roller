import { Box, Button, styled } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../services/store";
import { AppActions, selectModalCache } from "../../stores/app.store";
import { ModalTypes } from "../types/modal.types";
import { UnitType } from "../types/unit.types";
import { UntiTile } from "../UnitTile";

export const ChooseUnit = () => {
  const cache = useAppSelector(selectModalCache);
  const isCached = cache.type === ModalTypes.chooseUnit;
  const { modalCacheUpdated, modalToggled } = AppActions;
  const dispatch = useAppDispatch();

  const OnClickNext = () => {
    isCached &&
      dispatch(
        modalToggled({
          isOpen: true,
          cache: {
            type: ModalTypes.setUnitStat,
            meta: {
              selectedUnitType: cache.meta.selectedUnitType,
              stat: {
                combat: 9,
                dices: 1,
                soak: 0,
              },
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
            selected={isCached && UnitType[key] === cache.meta.selectedUnitType}
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
