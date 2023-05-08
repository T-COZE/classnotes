const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function isValid({ id, name, meaning, quadrant, starsWithPlanets }) {
  return id && name && meaning && quadrant && starsWithPlanets;
}

function update(constellation={}) {
  const url = `${BASE_URL}/constellations/${constellation.id}`
  return axios.put(url,constellation)
  .then(response =>{
   return response
  })
  .catch((error)=>{
    throw {
      error: `Updating constellation (id: ${constellation.id}) failed.`
    }
  })    
}

function bulkImport(constellations) {
  if(!Array.isArray(constellations)){
    return Promise.reject({ error: "Inputted argument must be an array." })
  }
  constellations.forEach((constellationObj)=>{
   if(!isValid(constellationObj))
   return Promise.reject({ error: "All constellations must include relevant fields." })
  })
  //  if(!stars) 
  //  return Promise.reject({ error: "All constellations must include relevant fields." })
  
   let bigBang = constellations.map((starGroup)=>{
return update(starGroup)
  })
  return Promise.allSettled(bigBang)
}

module.exports = { bulkImport, update } 
