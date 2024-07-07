import express, { type Express } from 'express'

export function setupParseJson(app: Express) {
  app.use(express.json())
}
