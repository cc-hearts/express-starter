import type {Express} from 'express';
import {setupParseJson} from './parse-json.js';
import {setupErrorCatch} from './error-catch.js';

export async function beforeLoadMiddle(app: Express) {
  await Promise.all([setupParseJson].map(setup => setup(app)));
}

export async function afterLoadMiddle(app: Express) {
  await Promise.all([setupErrorCatch].map(setup => setup(app)));
}
