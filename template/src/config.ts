import type { IPicGo, IPluginConfig } from 'picgo'

export function config(ctx: IPicGo): IPluginConfig[] {
  let userConfig = ctx.getConfig<MyPluginConfig>('picBed.<%=name%>')
  if (!userConfig) {
    userConfig = {
      foo: '',
      bar: ''
    }
  }

  return [
    {
      name: 'foo',
      type: 'input',
      default: userConfig.foo,
      required: true,
      message: 'foo placeholder',
      alias: 'Foo'
    },
    {
      name: 'bar',
      type: 'input',
      default: userConfig.bar,
      required: true,
      message: 'bar placeholder',
      alias: 'Bar'
    }
  ]
}

export interface MyPluginConfig {
  foo: string
  bar: string
}
