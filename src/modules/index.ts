import type { Express } from 'express';
import { AppSetup } from './app.module';

export function setupModules(app: Express) {
  [AppSetup].forEach(setup => {
    setup(app);
  });
}
