import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',  // Set the root folder to 'src'
  build: {
    outDir: '../dist', // Output folder (relative to the 'src' folder)
    emptyOutDir: true, // Ensure the 'dist' folder is emptied before the build
    assetsDir: '', // Place assets in the root of the 'dist' folder
    rollupOptions: {
      input: {
        main: './src/index.html', // Point to the entry HTML file
      }
    }
  },
  server: {
    open: true, // Automatically open the app in the browser
    port: 5500, // You can change the port number if needed
  },
  base: './',  // Ensure assets are loaded from the root
});
