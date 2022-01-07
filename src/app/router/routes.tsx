import { RouterComponentType } from '../entry/lib/types'
import NotFound from '../../components/templates/404'
import React, { lazy, LazyExoticComponent, Suspense } from 'react'
import Loading from '../../components/templates/Loading'
import { Page } from '../../pages'

const OtherComponent = lazy(() => import('../../components/templates/404'))

const withSuspense = (Component: LazyExoticComponent<() => JSX.Element>) => (
  <Suspense fallback={Loading}>
    <Component />
  </Suspense>
)

export const Routes: RouterComponentType[] = [
  {
    path: '/',
    component: <Page.MainPage/>,
  },
  {
    path: '/auth',
    component: <Page.AuthPage/>,
  },
  {
    path: '/characters',
    component: <Page.CharactersPage/>,
  },
  {
    path: '*',
    component: <Page.NotFoundPage/>,
  },
  {
    path: '/3',
    component: <p>sd</p>,
  },
  {
    path: '/NotFound',
    component: <NotFound />,
  },
]
