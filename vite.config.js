// import { defineConfig } from 'vite';

// export default defineConfig({
//   root: 'src',
//   build: {
//     outDir: '../dist',
//     emptyOutDir: true
//   }
// });

import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  // Define base paths for different environments
  const bases = {
    home:'/ISA/',
    dev: '/ISA/',   // Fill in if different
    qa: '/ISA/',    // Fill in if different
    prod: '/ISA/'   // Fill in if different
  };

  return {
    root: 'src',
    base: bases[mode] || '/ISA/',  // defaults to /ISA/ if mode not specified
    build: {
      outDir: '../dist',
      emptyOutDir: true
    }
  };
});