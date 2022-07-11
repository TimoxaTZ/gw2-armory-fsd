import React, { lazy } from 'react'
import NotFound from '../../components/templates/404'
import { Page } from '../../pages'
import { RouterType } from '../entry/lib/types'
import { WithSuspense } from './utils/withSuspense'

const LazyComponent = lazy(() => import('../../components/templates/404'))

export const Routes: RouterType[] = [
  {
    path: '/',
    child: [
      {
        index: true,
        element: <Page.MainPage />,
      },
      {
        path: 'auth',
        child: [
          {
            index: true,
            element: <Page.AuthPage />,
          },
        ],
      },
      {
        path: 'characters',
        child: [
          {
            index: true,
            element: <Page.CharactersPage />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    child: [
      {
        index: true,
        element: <Page.NotFoundPage />,
      },
    ],
  },
  {
    path: '/suspense',
    element: WithSuspense(LazyComponent),
  },
  {
    path: '/NotFound',
    element: <NotFound />,
  },
]
