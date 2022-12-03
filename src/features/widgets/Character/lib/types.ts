export type CharacterType = {
  name: string;
  // "race"?: string,
  // "gender"?: string,
  flags?: [];
  stats?: { id: number; attributes: {} };
  // "profession"?: string,
  // "level"?: 80,
  // "guild"?: string,
  // "age"?: 3395169,
  // "created"?: "2014-12-18T16:15:00Z",
  // "deaths"?: 4028,
  // "crafting"?: [],
  // "title"?: 365,
  // "backstory"?: [],
  // "wvw_abilities"?: [],
  // equipment: EquipmentType[]; // - will returned later
  // "recipes"?: [],
  // "training"?: [],
  // "bags"?: [],
  // "equipment_pvp"?: {},
  // "specializations"?: {},
  // "skills"?: {}
};

export type CharactersReducedType = Record<string, CharacterType>;
