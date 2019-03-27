module.exports = app => {
    return {
        values: null,

        use(...values){
            this.values = values
            return this 
        },
        
        //The values false, null, 0, "", undefined, and NaN are falsey
        notFalsey(something){
            const notFalseyArray = app._.compact(this.values)
            if(notFalseyArray && notFalseyArray.length === this.values.length){
                return this
            }else{
                throw something
            }
        },

        //Check if the values are null or undefined
        isDefined(something){
            if(!app._.isNil(this.values)){
                return this
            }else{
                throw something
            }
        }
    }
}