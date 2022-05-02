import { Modal as Container, Box } from "@mui/material";
import { ChooseUnit } from "./components/modals/ChooseUnit";
import { SetUnitStat } from "./components/modals/SetUnitStat";
import { ModalTypes } from "./components/types/modal.types";
import { useAppSelector } from "./services/store";
import { selectIsModalOpen, selectModalType } from "./stores/app.store";

export const ModalRoutes = {
  [ModalTypes.chooseUnit]: <ChooseUnit />,
  [ModalTypes.setUnitStat]: <SetUnitStat />,
};

export const Modal = () => {
  const modal = useAppSelector(selectModalType);
  const isOpen = useAppSelector(selectIsModalOpen);
  return (
    <Container open={isOpen}>
      <Box sx={style}>{ModalRoutes[modal]}</Box>
    </Container>
  );
};

const style = {
  overflow: "auto",
  position: "absolute",
  width: "85%",
  maxHeight: "85%",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
  opacity: 0.95,
};
