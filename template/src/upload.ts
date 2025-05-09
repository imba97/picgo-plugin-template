import type { IPicGo } from 'picgo'
import type { MyPluginConfig } from './config'

export function useUploader(
  ctx: IPicGo
) {
  const upload = async (localPath: string) => {
    const userConfig: MyPluginConfig = ctx.getConfig('picBed.<%=name%>')

    // TODO: Upload logic
    ctx.log.info(localPath)
    ctx.log.info(JSON.stringify(userConfig))

    const uploadPath = 'https://example.com/uploads/foo.png'

    return uploadPath
  }

  return {
    upload
  }
}
