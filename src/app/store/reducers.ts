import { sample } from '../../features/services/_sample';
import { characters } from '../../features/services/characters';
import { condition } from '../../features/services/condition';
import { mobile } from '../../features/services/mobile';
import { Sample } from '../../features/widgets/_Sample';
import { Auth } from '../../features/widgets/Auth';
import { Character } from '../../features/widgets/Character';
import { Characters } from '../../features/widgets/Characters';
import { Content } from '../../features/widgets/Content';
import { Header } from '../../features/widgets/Header';

export const reducersList = {
  // MetaServices
  condition: condition.Reducer,
  mobile: mobile.Reducer,
  // MetaServices

  // Sample
  _sample: sample.Reducer,
  _Sample: Sample.Reducer,
  // Sample

  // Services
  characters: characters.Reducer,
  // Services

  // Widgets
  Content: Content.Reducer,
  Characters: Characters.Reducer,
  Character: Character.Reducer,
  Auth: Auth.Reducer,
  Header: Header.Reducer,
  // Widgets
};
