import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Unit, UnitStatsType, UnitType } from "../components/types/unit.types";
import { State } from "../services/store";
import { UnitValues } from "../components/types/unit.types";
import { v4 as uuidv4 } from "uuid";
import { diceRoll } from "../services/dice";

interface InitialState {
  units: Unit[];
  rolledDamage: number;
}

const initialState: InitialState = {
  units: [],
  rolledDamage: 0,
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
      const isQuantityDecrease =
        valueType === UnitValues.quantity && changeType === "decrease";

      state.units = state.units.map((unit) => {
        if (unit.id === id) {
          if (isQuantityDecrease) {
            const maxDamage = (unit.values.quantity + change) * unit.stats.soak;
            const isOverDamage = unit.values.damage > maxDamage;

            return {
              ...unit,
              values: {
                [UnitValues.quantity]: unit.values[valueType] + change,
                [UnitValues.damage]: isOverDamage
                  ? maxDamage
                  : unit.values.damage,
              },
            };
          }

          return {
            ...unit,
            values: {
              ...unit.values,
              [valueType]: unit.values[valueType] + change,
            },
          };
        }
        return unit;
      });
    },
    unitAdded: (
      state,
      {
        payload: { unitType, unitStat },
      }: PayloadAction<{ unitType: UnitType; unitStat: UnitStatsType }>
    ) => {
      const newUnit: Unit = {
        id: uuidv4(),
        type: unitType,
        stats: {
          dices: unitStat.dices,
          combat: unitStat.combat,
          soak: unitStat.soak,
        },
        values: {
          quantity: 1,
          damage: 0,
        },
      };
      return { ...state, units: [...state.units, newUnit] };
    },
    unitRemoved: (
      state,
      { payload: { unitId } }: PayloadAction<{ unitId: string }>
    ) => {
      return { ...state, units: state.units.filter(({ id }) => id !== unitId) };
    },
    damageRolled: (state, _) => {
      let rolled = 0;
      state.units.forEach((unit) => {
        for (let i = 0; i < unit.values.quantity; i++)
          for (let j = 0; j < unit.stats.dices; j++)
            if (diceRoll(10, unit.stats.combat)) rolled++;
      });
      state.rolledDamage = rolled;
    },
  },
});

export const UnitsActions = UnitsSlice.actions;

export const selectUnits = (state: State) => state.unitsSlice.units;
export const selectRolledDamage = (state: State) =>
  state.unitsSlice.rolledDamage;
