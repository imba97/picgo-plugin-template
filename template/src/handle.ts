import type { IPicGo } from 'picgo'
import type { MyPluginConfig } from './config'
import { useUploader } from './upload'

export async function handle(ctx: IPicGo) {
  const userConfig: MyPluginConfig = ctx.getConfig('picBed.<%=name%>')
  if (!userConfig) {
    throw new Error('Can\'t find uploader config')
  }

  const input = ctx.input
  const output = ctx.output

  const { upload } = useUploader(ctx)

  for (const i in input) {
    const localPath = input[i]

    await upload(localPath)
      .then((path) => {
        output[i].url = path
        output[i].imgUrl = path
      })
      .catch((err) => {
        ctx.log.error(`ERROR: ${err.message}`)

        ctx.emit('notification', {
          title: 'ERROR',
          body: err.message,
          text: ''
        })
      })
  }

  ctx.emit('notification', {
    title: 'SUCCESS',
    body: 'Upload success',
    text: ''
  })

  return ctx
}
