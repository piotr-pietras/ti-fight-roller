import { Modal as Container, Box } from "@mui/material";
import { ChooseUnit } from "./components/modals/ChooseUnit";
import { useAppSelector } from "./services/store";
import { selectIsModalOpen } from "./stores/app.store";

export enum ModalTypes {
  chooseUnit = "chooseUnit",
}

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
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
};