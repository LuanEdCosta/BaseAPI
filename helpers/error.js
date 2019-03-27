module.exports = app => { 
    return {
        messages: {
            unespected: { code: 1, message: 'Ocorreu um erro inesperado' }
        },
        getError(msg) {
            const e = this.messages[msg]
            return this.showError(e.code, e.message)
        },
        showError(code, message) { return `Código ${ code }: ${ message }` }
    }
}