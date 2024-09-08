import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInlineLimit: 0, 
  resolve: {
    alias: {
      three: 'three',
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      // Remove 'three' from external if you want it bundled
      // external: ['three'],
      output: {
        // Manual chunking to split the larger bundles
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Create a separate vendor chunk for node modules
          }
        },
      },
    },
    // Increase chunk size warning limit to 1 MB
    chunkSizeWarningLimit: 1000,
  },
});
