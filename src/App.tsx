import type { ComponentType } from 'react'
import { createBrowserRouter, type RouteObject } from 'react-router'
import Layout from './Components/Layout'
import PageLoading from './Components/PageLoading'
import Home from './Pages/Home'

/* Home is in the main bundle; each post is its own chunk, fetched by the
   router before it navigates, so a view transition never waits on a
   suspended page. On a cold load straight onto a post, the layout renders
   at once and PageLoading holds the content area. */
const post = (load: () => Promise<{ default: ComponentType }>) => ({
  lazy: async () => ({ Component: (await load()).default }),
  HydrateFallback: PageLoading,
})

export const routes: RouteObject[] = [
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'dotnet-and-csharp', ...post(() => import('./Pages/DotNetAndCsharp')) },
      { path: 'web-development', ...post(() => import('./Pages/WebDev')) },
      { path: 'devops', ...post(() => import('./Pages/DevOps')) },
      { path: 'machine-learning', ...post(() => import('./Pages/MachineLearning')) },
      { path: '*', ...post(() => import('./Pages/ErrorPage')) },
    ],
  },
]

export const router = createBrowserRouter(routes)
