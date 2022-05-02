import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalCache, ModalTypes } from "../components/types/modal.types";
import { UnitType } from "../components/types/unit.types";
import { State } from "../services/store";
interface InitialState {
  modal: {
    isOpen: boolean;
    cache: ModalCache;
  };
}

const initialState: InitialState = {
  modal: {
    isOpen: false,
    cache: {
      type: ModalTypes.chooseUnit,
      meta: {
        selectedUnitType: UnitType.infantry,
      },
    },
  },
};

export const AppSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    modalToggled: (
      state,
      {
        payload: { isOpen, cache },
      }: PayloadAction<{ isOpen: boolean; cache?: ModalCache }>
    ) => {
      state.modal.isOpen = isOpen;
      if (cache) state.modal.cache = cache;
    },
    modalCacheUpdated: (
      state,
      { payload: { cache } }: PayloadAction<{ cache: ModalCache }>
    ) => {
      if (cache.type === state.modal.cache.type) {
        state.modal.cache = cache;
      }
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
  (app) => app.modal.cache.type
);

export const selectModalCache = createSelector(
  selectAppSlice,
  (app) => app.modal.cache
);
