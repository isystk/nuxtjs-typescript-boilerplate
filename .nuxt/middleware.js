const middleware = {}

middleware['anonymous'] = require('../src/middleware/anonymous.ts')
middleware['anonymous'] = middleware['anonymous'].default || middleware['anonymous']

middleware['authenticated'] = require('../src/middleware/authenticated.ts')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

export default middleware
