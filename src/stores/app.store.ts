import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State } from "../services/store";
import { ModalTypes } from "../Modal";

interface InitialState {
  modal: {
    isOpen: boolean;
    type: ModalTypes;
  };
}

const initialState: InitialState = {
  modal: {
    isOpen: false,
    type: ModalTypes.chooseUnit,
  },
};

export const AppSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    modalToggled: (
      state,
      {
        payload: { isOpen, type },
      }: PayloadAction<{ isOpen: boolean; type?: ModalTypes }>
    ) => {
      state.modal.isOpen = isOpen;
      if (type) state.modal.type = type;
    },
  },
});

export const AppActions = AppSlice.actions;

const selectAppSlice = (state: State) => state.appSlice;

export const selectIsModalOpen = createSelector(
  selectAppSlice,
  (app) => app.modal.isOpen
);

export const selectModalType = createSelector(
  selectAppSlice,
  (app) => app.modal.type
);

// export const selectUnits = (state: State) => state.unitsSlice.units;
