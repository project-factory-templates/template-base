import { $ } from 'execa'

export default {
    promptScript: [
        {
            name: 'AUTHOR',
            type: 'text',
            message: 'Author:'
        },
        {
            name: 'INIT_GIT',
            type: 'confirm',
            message: 'Would you like to initialize Git automatically?',
            initial: true
        }
    ],
    onPromptSubmit: variables => {
        variables.YEAR = new Date().getFullYear()
    },
    onScaffolded: async (dir, vars) => {
        if (!vars.INIT_GIT) return

        const $$ = $({
            cwd: dir,
            stderr: 'inherit'
        })

        await $$`git init`
        await $$`git add .`
        await $$`git commit -m ${'Initial commit'}`
    }
}
