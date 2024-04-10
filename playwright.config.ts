import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './src/specs',
  fullyParallel: true,
  workers: 3,
  reporter: [
    ['list', { printSteps: true }]
  ],
  use: {
    baseURL: 'https://github.com/',
    headless: true
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});
