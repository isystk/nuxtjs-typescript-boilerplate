import moment from 'moment'

import 'moment/locale/ja'

export default (ctx, inject) => {
  ctx.$moment = moment
  inject('moment', moment)
}
