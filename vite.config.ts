
import { federation } from '@module-federation/vite';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dependencies } from './package.json';

// https://vite.dev/config/
export default defineConfig({
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
					entry: 'http://localhost:4174/remoteEntry.js',
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
    react()
  ],
})
