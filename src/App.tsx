import { lazy, Suspense, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { ErrorBoundary } from 'react-error-boundary';

const Remote = lazy(
  // @ts-expect-error @ts-ignore
  async () => import('remote/remote-app')
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center">
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
      <h1 className="my-10 text-3xl font-bold">
        Vite + React (I'm the host app)
      </h1>
      <div className="p-8">
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold"
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
      <Suspense fallback="Loading...">
        <ErrorBoundary fallback="Something went wrong...">
          <Remote />
        </ErrorBoundary>
      </Suspense>
    </>
  );
}

export default App;
