import { Provider } from 'react-redux'
import store from '../../store/store'

const ReduxStoreProvider: FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

export default ReduxStoreProvider
