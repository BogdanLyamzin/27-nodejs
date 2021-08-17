const {Category} = require("../models");

const getAll = (page, perPage)=>{
    const skip = (page - 1) * perPage;
    return Category.find({}, "name description", {skip, limit: +perPage});
}

const getById = async (id) => {
    try{
        const result = await Category.findById(id);
        return result;
    }
    catch(error){
        if(error.message.includes("Cast to ObjectId failed")){
            return null;
        }
        throw error;
    }
}

const add = (newCategory)=>{
    // const error = Category.validateData(newCategory);
    // if(error){
    //     return null;
    // }
    return Category.create(newCategory);
};

const update = async (id, updateCategory) => {
    try{
        // return Category.findOneAndUpdate({_id: id}, updateCategory, {new: true});
        const result = await Category.findByIdAndUpdate(id, updateCategory, {new: true});
        return result;
    }
    catch(error){
        if(error.message.includes("Cast to ObjectId failed")){
            return null;
        }
        throw error;
    }

}

const del = async (id)=>{
    try {
        const result = await Category.findByIdAndDelete(id);
    }
    catch(error){
        if(error.message.includes("Cast to ObjectId failed")){
            return null;
        }
        throw error;
    }
    
}

module.exports = {
    add,
    getAll,
    getById,
    update,
    del
}