module.exports = app => {
    
    const register = (user) => {
        return app.db(app.config.tables.user).insert(user)
    }

    return { register }
}