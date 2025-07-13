export default {
  entry: [
    'src/main.tsx',
    'src/App.tsx',
    'vite.config.ts',
    'vitest.config.ts',
    'tailwind.config.js',
    'postcss.config.js',
    'eslint.config.js'
  ],
  project: [
    'src/**/*.{ts,tsx}',
    '!src/test/**',
    '!**/*.test.{ts,tsx}',
    '!**/*.spec.{ts,tsx}'
  ],
  ignore: [
    'src/vite-env.d.ts',
    'src/test/**',
    '**/*.test.{ts,tsx}',
    '**/*.spec.{ts,tsx}'
  ],
  ignoreDependencies: [
    '@types/react',
    '@types/react-dom',
    'typescript',
    '@vitejs/plugin-react',
    'vite',
    'tailwindcss',
    'autoprefixer',
    'postcss',
    'eslint',
    '@eslint/js',
    'eslint-plugin-react-hooks',
    'eslint-plugin-react-refresh',
    'typescript-eslint',
    'globals',
    'vitest',
    '@testing-library/react',
    '@testing-library/jest-dom',
    '@testing-library/user-event',
    'jsdom',
    '@vitest/coverage-v8',
    '@vitest/ui'
  ]
}