import { UnitType } from "./unit.types";

export enum ModalTypes {
  chooseUnit = "chooseUnit",
  setUnitStat = "setUnitStat",
  rolledDamage = "rolledDamage",
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
  };
}

interface RolledDamageModalCache {
  type: ModalTypes.rolledDamage;
}

export type ModalCache =
  | ChooseUnitModalCache
  | SetUnitStatModalCache
  | RolledDamageModalCache;
