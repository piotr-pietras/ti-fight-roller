import { UnitType } from "./unit.types";

export enum ModalTypes {
  chooseUnit = "chooseUnit",
  test = "test",
}

interface ChooseUnitModalCache {
  type: ModalTypes.chooseUnit;
  meta: {
    selectedUnitType: UnitType | undefined;
  };
}

interface TestModalCache {
  type: ModalTypes.test;
  meta: {
    test: "test";
  };
}

export type ModalCache = ChooseUnitModalCache | TestModalCache;
