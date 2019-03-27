const md5 = require('md5')

module.exports = app => {
    
    //TODO: Fazer a validação dos dados e mostrar erro se der errado alguma coisa.
    //TODO: Fazer um padrão de insert, select para usar rapidamente
    const register = async (req, res) => {
        try {
            const user = {
                name: req.body.name,
                email: req.body.email,
                password: md5(req.body.password)
            }
            await app.models.user.register(user)
            delete user.password
            res.send(user)
        } catch (error) {
            res.status(500).send(error)
        }
    }

    return { register }
}