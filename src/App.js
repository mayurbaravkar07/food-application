import { default as React, Suspense, lazy, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import Cart from './components/Cart';
import Header from './components/Header';
import Shimmer from './components/Shimmer';
import './index.css';
import appStore from './utils/appStore';
import Error from './components/Error';
import { Toaster } from 'react-hot-toast';
import Collections from './components/Collections';

const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const RestaurantMenu = lazy(() => import('./components/RestaurantMenu'));
// import { SpeedInsights } from "@vercel/speed-insights"

const AppLayout = () => {
    const [userName, setUserName] = useState();

  
    return (
        <Provider store={appStore}>
            
                <Header />
                <div className="container mx-auto px-2 sm:px-4 ">
                    <Outlet />{' '}
                </div>
                {/* <SpeedInsights /> */}
                <Toaster position="bottom-center" reverseOrder={false} />
           
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <About />
                    </Suspense>
                ),
            },
            {
                path: '/contact',
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <Contact />
                    </Suspense>
                ),
            },
            {
                path: '/restaurants/:resId',
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <RestaurantMenu />
                    </Suspense>
                ),
            },
            {
                path: '/cart',
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <Cart />
                    </Suspense>
                ),
            },
            {
                path: '/collections/:collectionId',
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <Collections />
                    </Suspense>
                ),
            },
        ],
        errorElement: <Error />,
    },
]);

const App = () => <RouterProvider router={appRouter} />;

export default App;
