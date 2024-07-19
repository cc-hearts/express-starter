import request from 'supertest'
import { create } from '~/index'
import { AppSetup } from '@/modules/app.module'

describe('GET /user', () => {
  it("it should return 'hello world' as the message.", async () => {
    const { app, registerRouter, _init } = await create()
    registerRouter([AppSetup])
    await _init()
    request(app)
      .get('/user')
      .expect(200)
      .end((err, res) => {
        expect(err).toBe(null)
        expect(res.body).toEqual({
          code: 200,
          data: null,
          message: 'hello world',
          timestamp: expect.stringMatching(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/
          )
        })
      })
  })
})
