import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Unit } from "../components/types/unit.types";
import { UnitsList1 } from "../services/mocks";
import { State } from "../services/store";
import { UnitValues } from "../components/types/unit.types";

interface InitialState {
  units: Unit[];
}

const initialState: InitialState = {
  units: UnitsList1,
};

export const UnitsSlice = createSlice({
  name: "unitsSlice",
  initialState,
  reducers: {
    valueChanged: (
      state,
      {
        payload: { id, valueType, changeType },
      }: PayloadAction<{
        id: string;
        valueType: UnitValues;
        changeType: "increase" | "decrease";
      }>
    ) => {
      const change = changeType === "increase" ? 1 : -1;
      return {
        ...state,
        units: state.units.map((unit) => {
          if (unit.id === id)
            return {
              ...unit,
              values: {
                ...unit.values,
                [valueType]: unit.values[valueType] + change,
              },
            };
          return unit;
        }),
      };
    },
    unitRemoved: (
      state,
      { payload: { unitId } }: PayloadAction<{ unitId: string }>
    ) => {
      return { ...state, units: state.units.filter(({ id }) => id !== unitId) };
    },
  },
});

export const UnitsActions = UnitsSlice.actions;

export const selectUnitsSlice = (state: State) => state.unitsSlice.units;
