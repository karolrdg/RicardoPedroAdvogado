import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // CONFIGURAÇÕES DE PROTEÇÃO NO BUILD
  build: {
    // 1. Desativa os Source Maps (Isso impede que o código original apareça no "Sources" do navegador)
    sourcemap: false,

    // 2. Ofuscação e Minificação (Remove comentários e encurta nomes de variáveis)
    minify: 'terser',
    terserOptions: {
      compress: {
        // Remove todos os console.log para o cliente não ver seus testes/debugs
        drop_console: true,
        drop_debugger: true,
      },
    },

    // 3. Divide o código em pedaços menores (Code Splitting) para dificultar a leitura completa
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});