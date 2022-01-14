import { Sample } from '../../features/widgets/_Sample'
import { condition } from '../../features/services/condition'
import { sample } from '../../features/services/_sample'
import { mobile } from '../../features/services/mobile'

import {Content} from "../../features/widgets/Content";
import {Characters} from "../../features/widgets/Characters";
import {Auth} from "../../features/widgets/Auth";
import {Header} from "../../features/widgets/Header";

export const reducersList = {
  // Sample
  _sample: sample.Reducer,
  _Sample: Sample.Reducer,
  // Sample

  // Services
  condition: condition.Reducer,
  mobile: mobile.Reducer,
  // Services

  // Widgets
  Content: Content.Reducer,
  Characters: Characters.Reducer,
  Auth: Auth.Reducer,
  Header: Header.Reducer,
  // Widgets
}
