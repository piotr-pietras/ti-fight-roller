import { Modal as Container, Box } from "@mui/material";
import { ChooseUnit } from "./components/modals/ChooseUnit";
import { ModalTypes } from "./components/types/modal.types";
import { useAppSelector } from "./services/store";
import { selectIsModalOpen } from "./stores/app.store";

export const ModalRoutes = {
  [ModalTypes.chooseUnit]: <ChooseUnit />,
};

export const Modal = () => {
  const isOpen = useAppSelector(selectIsModalOpen);
  return (
    <Container open={isOpen}>
      <Box sx={style}>{ModalRoutes[ModalTypes.chooseUnit]}</Box>
    </Container>
  );
};

const style = {
  position: "absolute" as "absolute",
  // width: "95%",
  // height: "95%",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
};
