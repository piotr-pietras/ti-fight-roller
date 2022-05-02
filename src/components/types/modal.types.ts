import { UnitStats, UnitType } from "./unit.types";

export enum ModalTypes {
  chooseUnit = "chooseUnit",
  setUnitStat = "setUnitStat",
}

interface ChooseUnitModalCache {
  type: ModalTypes.chooseUnit;
  meta: {
    selectedUnitType: UnitType;
  };
}

interface SetUnitStatModalCache {
  type: ModalTypes.setUnitStat;
  meta: {
    selectedUnitType: UnitType;
    stat: {
      [UnitStats.combat]: number;
      [UnitStats.dices]: number;
      [UnitStats.soak]: number;
    };
  };
}

export type ModalCache = ChooseUnitModalCache | SetUnitStatModalCache;
