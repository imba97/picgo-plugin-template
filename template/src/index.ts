import type { IPicGo } from 'picgo'
import { config } from './config'
import { handle } from './handle'

export default (ctx: IPicGo) => {
  const register = () => {
    ctx.helper.uploader.register('<%=name%>', {
      handle,
      config,
      name: '<%=name%>'
    })
  }

  return {
    uploader: '<%=name%>',
    register
  }
}
