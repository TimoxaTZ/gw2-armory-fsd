import { Route, Routes } from 'react-router-dom';

import { NotFound } from '../../components/templates/404';
import { Page } from '../../pages';

export const AppRouter: FC = () => (
  <Routes>
    {/* <Route path="/">
      <Route index element={<Page.TodoPage />} />
    </Route> */}
    <Route path="/">
      <Route index element={<Page.MainPage />} />
    </Route>
    <Route path="/auth">
      <Route index element={<Page.AuthPage />} />
    </Route>
    <Route path="/characters">
      <Route index element={<Page.CharactersPage />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);
