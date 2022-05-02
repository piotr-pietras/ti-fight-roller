import { Unit } from "../components/types/unit.types";
import { v4 as uuidv4 } from "uuid";
import { UnitType } from "../components/types/unit.types";

export const UnitsList1: Unit[] = [
  {
    id: uuidv4(),
    type: UnitType.carrier,
    values: {
      damage: 0,
      quantity: 5,
    },
    stats: {
      combat: 8,
      dices: 1,
      "sustain damage": false,
    },
  },
  {
    id: uuidv4(),
    type: UnitType.dreadnought,
    values: {
      damage: 3,
      quantity: 1,
    },
    stats: {
      combat: 3,
      dices: 1,
      "sustain damage": true,
    },
  },
];
