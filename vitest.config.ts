import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./src/setupTests.ts'],
        coverage: {
            include: ['src/components/**/*.{ts,tsx}'],
            exclude: ['src/components/**/*.{types,stories,constant,test,spec}.{ts,tsx}'],
        },
    },
});
