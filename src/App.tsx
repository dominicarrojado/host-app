import { lazy, Suspense, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { ErrorBoundary } from 'react-error-boundary';
import PageHeaderLoading from './components/PageHeaderLoading';

const Remote = lazy(
  // @ts-expect-error @ts-ignore
  async () => import('remote/remote-app')
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Suspense fallback={<PageHeaderLoading />}>
        <ErrorBoundary fallback={null}>
          <Remote />
        </ErrorBoundary>
      </Suspense>
      <div className="flex flex-col items-center justify-center max-w-7xl px-2 py-8 mx-auto text-center">
        <div className="flex">
          <a href="https://vite.dev" target="_blank">
            <img
              src={viteLogo}
              className="transition-filter h-36 p-6 duration-300 hover:drop-shadow-[0_0_2em_#646cffaa] hover:filter"
              alt="Vite logo"
            />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className="transition-filter h-36 animate-[spin_infinite_20s_linear] p-6 duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] hover:filter"
              alt="React logo"
            />
          </a>
        </div>
        <h1 className="my-10 text-3xl font-bold font-poppins text-gray-900">
          Vite + React (I'm the host app)
        </h1>
        <div className="p-8">
          <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white cursor-pointer"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p className="my-4">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-gray-500">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
