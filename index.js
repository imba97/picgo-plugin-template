const prompts = [
  {
    name: 'name',
    type: 'string',
    message: 'Plugin name:',
    required: true
  },
  {
    name: 'description',
    type: 'string',
    message: 'Plugin description:',
    required: false
  },
  {
    name: 'author',
    type: 'string',
    required: false
  },
  {
    name: 'repository',
    type: 'string',
    message: 'Github user/repo:',
    required: false
  }
]

const complete = ({ options, ctx }) => {
  ctx.log.success(`
Generate template files successfully!
Please cd ${options.dest}, and then

pnpm install`)
}

module.exports = {
  prompts,
  complete
}
