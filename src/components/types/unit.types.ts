export enum UnitType {
  infantry = "infantry",
  carrier = "carrier",
  fighter = "fighter",
  destroyer = "destroyer",
  cruiser = "cruiser",
  dreadnought = "dreadnought",
  flagship = "flagship",
  warsun = "warsun",
}

export enum UnitImagePath {
  infantry = "infantry.png",
  carrier = "carrier.png",
  fighter = "fighter.png",
  destroyer = "destroyer.png",
  cruiser = "cruiser.png",
  dreadnought = "dreadnought.png",
  flagship = "flagship.png",
  warsun = "warsun.png",
}

export enum UnitValues {
  quantity = "quantity",
  damage = "damage",
}

export enum UnitStats {
  combat = "combat",
  dices = "dices",
  soak = "soak",
}

export interface Unit {
  id: string;
  type: UnitType;
  values: {
    [UnitValues.quantity]: number;
    [UnitValues.damage]: number;
  };
  stats: {
    [UnitStats.combat]: number;
    [UnitStats.dices]: number;
    [UnitStats.soak]: number;
  };
}
