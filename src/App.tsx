import { Box, Button, styled } from "@mui/material";
import { UnitPaper } from "./components/UnitPaper";
import { ModalRouter } from "./ModalRouter";
import { useAppDispatch, useAppSelector } from "./services/store";
import { selectUnits, UnitsActions } from "./stores/units.store";
import CasinoIcon from "@mui/icons-material/Casino";
import { AppActions, selectIsModalOpen } from "./stores/app.store";
import { ModalTypes } from "./components/types/modal.types";
import { UnitType } from "./components/types/unit.types";

function App() {
  const units = useAppSelector(selectUnits);
  const isModalOpen = useAppSelector(selectIsModalOpen);
  const { modalToggled } = AppActions;
  const { damageRolled } = UnitsActions;
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      <ModalRouter />
      <Container>
        <Box>
          {units.map((unit) => (
            <UnitPaper key={unit.id} unit={unit} />
          ))}
          <UnitCreate
            onClick={() => {
              dispatch(
                modalToggled({
                  isOpen: !isModalOpen,
                  cache: {
                    type: ModalTypes.chooseUnit,
                    meta: { selectedUnitType: UnitType.infantry },
                  },
                })
              );
            }}
          >
            Tap here to create unit
          </UnitCreate>
        </Box>
        <Roll
          startIcon={<CasinoIcon />}
          variant="contained"
          onClick={() => {
            dispatch(damageRolled({}));
            dispatch(
              modalToggled({
                isOpen: !isModalOpen,
                cache: { type: ModalTypes.rolledDamage },
              })
            );
          }}
        >
          Roll!
        </Roll>
      </Container>
    </div>
  );
}

export default App;

const Container = styled(Box)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UnitCreate = styled(Box)`
  margin-top: 3rem;
  margin-bottom: 3rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.XL};
  color: ${({ theme }) => theme.colors.grey700};
  :hover {
    cursor: pointer;
  }
`;

const Roll = styled(Button)`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.XL};
`;
