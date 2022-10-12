import React from 'react';

const Blogs = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mb-10 border-t border-b divide-y">
          <div className="grid py-8 sm:grid-cols-4">
            <div className="mb-4 sm:mb-0">
              
            </div>
            <div className="sm:col-span-3 lg:col-span-2">
              <div className="mb-3">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                    What is the purpose of React Router?
                  </p>
                </a>
              </div>
              <p className="text-gray-700">
              ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
              </p>
            </div>
          </div>
          <div className="grid py-8 sm:grid-cols-4">
            <div className="mb-4 sm:mb-0">
              
            </div>
            <div className="sm:col-span-3 lg:col-span-2">
              <div className="mb-3">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                    How does Context API works?
                  </p>
                </a>
              </div>
              <p className="text-gray-700">
              Context provides a way to pass data through the component tree without having to pass props down manually at every level.
              In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
              </p>
            </div>
          </div>
          <div className="grid py-8 sm:grid-cols-4">
            <div className="mb-4 sm:mb-0">
            </div>
            <div className="sm:col-span-3 lg:col-span-2">
              <div className="mb-3">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                   What is useRef hook?
                  </p>
                </a>
              </div>
              <p className="text-gray-700">
              useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
              The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
              </p>
            </div>
          </div>
        </div>
       
      </div>
    );
};

export default Blogs;