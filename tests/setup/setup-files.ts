jest.mock('chalk', () => {
  return {
    Chalk: jest.fn().mockImplementation(() => {
      return {
        blue: jest.fn((text) => `mocked blue: ${text}`)
      }
    })
  }
})
