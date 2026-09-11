import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// mode에 따라 base 자동 분기
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/react-ts/' : '/', // repo 이름 맞춰서 변경
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))
