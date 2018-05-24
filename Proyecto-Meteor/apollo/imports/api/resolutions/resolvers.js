import Resolutions from './resolutions';
// Resolutions.insert({
//   name:"luego"
// });

//seleccion de datos de la base de datos
const res=Resolutions.find({}).fetch();
console.log(res);//[]vacio

export default {
  Query:{
    resolutions(){
      return res;
    }
  },

  Mutation:{
    createResolution(obj,{name},context){
      // console.log("Got Here");
      const resolutionsId=Resolutions.insert({
        name
      });
      return Resolutions.findOne(resolutionsId);
    }
  }
};
