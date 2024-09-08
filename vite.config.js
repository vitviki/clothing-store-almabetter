import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // This will allow the project to be accessible on the network
    port: 3000,  // You can specify any available port
  },
})
