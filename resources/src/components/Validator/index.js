export const ValidateProductForm = (payload) => {
    var isValid = true
    var errors = {}
    if(!payload.name ){
        isValid = false
        errors.name = false
    }
    if (!payload.category){
        isValid = false
        errors.category = true
    }
    if(!payload.subcategory){
        isValid = false
        errors.subcategory = false
    }
    if(!payload.summary) {
        isValid = false
        errors.summary = false
    }
    if(!payload.desc) {
        isValid = false
        errors.desc = false
    }
    return {isValid,errors,message:"please check your product infos...!"}
}