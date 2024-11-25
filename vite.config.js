import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const PORT = parseInt(env.VITE_PORT, 10) || 5000;
  
  return {
    plugins: [react()],
    server: {
      port: PORT,
      host: '0.0.0.0'
    },
    define: {
      'process.env': env,
    },
  }
})
