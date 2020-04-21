const middleware = {}

middleware['anonymous'] = require('../src/middleware/anonymous.ts')
middleware['anonymous'] = middleware['anonymous'].default || middleware['anonymous']

middleware['authenticated'] = require('../src/middleware/authenticated.ts')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['i18n'] = require('../src/middleware/i18n.ts')
middleware['i18n'] = middleware['i18n'].default || middleware['i18n']

export default middleware
