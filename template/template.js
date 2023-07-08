export default {
    promptScript: [
        {
            name: 'AUTHOR',
            type: 'text',
            message: 'Author:'
        }
    ],
    onPromptSubmit: variables => {
        variables.YEAR = new Date().getFullYear()
    }
}
