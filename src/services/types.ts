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
  infantry = "static/shipImage/infantry.png",
  carrier = "static/shipImage/carrier.png",
  fighter = "static/shipImage/fighter.png",
  destroyer = "static/shipImage/destroyer.png",
  cruiser = "static/shipImage/cruiser.png",
  dreadnought = "static/shipImage/dreadnought.png",
  flagship = "static/shipImage/flagship.png",
  warsun = "static/shipImage/warsun.png",
}

export enum UnitValues {
  quantity = "quantity",
  damage = "damage",
}

export enum UnitStats {
  combat = "combat",
  dices = "dices",
  sustainDamage = "sustain damage",
}

export interface Unit {
  id: string;
  type: UnitType,
  values: {
    [UnitValues.quantity]: number;
    [UnitValues.damage]: number;
  };
  stats: {
    [UnitStats.combat]: number;
    [UnitStats.dices]: number;
    [UnitStats.sustainDamage]: boolean;
  };
}
