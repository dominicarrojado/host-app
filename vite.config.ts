import { federation } from '@module-federation/vite';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { dependencies } from './package.json';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  const env = loadEnv(mode, process.cwd());

  return {
    base: isProd ? '/host-app/' : '/',
    build: {
      target: 'chrome89',
    },
    plugins: [
      federation({
        name: 'host',
        remotes: {
          remote: {
            type: 'module',
            name: 'remote',
            entry: `${env.VITE_REMOTE_APP_URL}/remoteEntry.js`,
            entryGlobalName: 'remote',
            shareScope: 'default',
          },
        },
        exposes: {},
        filename: 'remoteEntry.js',
        shared: {
          react: {
            requiredVersion: dependencies.react,
            singleton: true,
          },
        },
      }),
      react(),
    ],
  };
});
