import { SnackbarProvider } from 'notistack'

const SnackBarProvider: FC = ({ children }) => {
  return <SnackbarProvider>{children}</SnackbarProvider>
}

export default SnackBarProvider
