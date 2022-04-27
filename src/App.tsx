import { Box, Button, styled } from "@mui/material";
import { UnitPaper } from "./components/UnitPaper";
import { Modal } from "./Modal";
import { useAppDispatch, useAppSelector } from "./services/store";
import { selectUnitsSlice } from "./stores/units.store";
import CasinoIcon from "@mui/icons-material/Casino";
import { AppActions, selectIsModalOpen } from "./stores/app.store";

function App() {
  const units = useAppSelector(selectUnitsSlice);
  const isModalOpen = useAppSelector(selectIsModalOpen);
  const { modalToggled } = AppActions;
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      <Modal />
      <Container>
        <Box>
          {units.map((unit) => (
            <UnitPaper key={unit.id} unit={unit} />
          ))}
          <UnitCreate
            onClick={() => {
              dispatch(modalToggled({ isOpen: !isModalOpen }));
            }}
          >
            Tap here to create unit
          </UnitCreate>
        </Box>
        <Roll startIcon={<CasinoIcon />} variant="contained">
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

// const UnitList = styled(Box)`
//   display: flex;
//   flex-direction: column;
// `;

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
  /* background-color:  ${({ theme }) => theme.colors.green300}; */
`;
