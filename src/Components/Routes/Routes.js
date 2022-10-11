import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layouts/Main';
import Blogs from '../Blogs/Blogs';
import ErrorPage from '../ErrorPage/ErrorPage';
import Home from '../Home/Home';
import Quiz from '../Quiz/Quiz';
import Statistics from '../Statistics/Statistics';
import Topics from '../Topics/Topics';


export const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/home',
          element: <Home></Home>,
        },
        {
          path: '/topics',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Topics></Topics>,
          children: [
            {
                path:'./quiz',
                element: <Quiz></Quiz>
            }
          ]
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>,
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        }
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
  ])


