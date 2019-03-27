module.exports = app => {
    app.route('/register').post(app.controllers.user.register)
    
    app.route('/login').get(app.controllers.access.login)
}