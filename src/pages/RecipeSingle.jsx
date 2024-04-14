import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const RecipeSingle = () => {
  let location = useLocation();
  console.log(location)
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-4 d-flex  
         justify-content-center" >
          <img height={"250px"} width={"250px"} src={location.state.recipe.image} alt="" />
        </div>
        <div className="col-md-8 ">
          <h1 className='text-center'>{location.state.recipe.label}</h1>
          <h5 className='text-center'>Meal type: {location.state.recipe.mealType}</h5>
         <div className="col-md-4  d-flex justify-content-center m-auto mt-3">
         <Link to={location.state.recipe.url} className="btn btn-primary">See full recipe here</Link>
         </div>

         <div  className="w-75 row d-flex justify-content-center gap-2  m-auto mt-2">
          <div className="col-md-3 bg-warning p-2 ">
            <h3 className='text-center'>{location.state.recipe.totalDaily.CA.label}</h3>
            <p className='text-center'>{Math.floor(location.state.recipe.totalDaily.CA.quantity)}%</p>
          </div>
          <div className="col-md-3 bg-warning p-2 ">
          <h3 className='text-center'>{location.state.recipe.totalDaily.FAT.label}</h3>
            <p className='text-center'>{Math.floor(location.state.recipe.totalDaily.FAT.quantity)}%</p>
          </div>
          <div className="col-md-3 bg-warning p-2">
          <h5 className='text-center'>{location.state.recipe.totalDaily.CHOLE.label}</h5>
            <p className='text-center'>{Math.floor(location.state.recipe.totalDaily.CHOLE.quantity)}%</p>
          </div>
         </div>
        </div>
      </div>

<div className="row mt-4">
  <div className="col-md-6 d-flex justify-content-center">
  <ul className=''>
      <h1>Health Labels</h1>
      {location.state.recipe.healthLabels.map((ele)=>{
        return <li>{ele}</li>
      })}
     </ul>
  </div>
  <div className="col-md-6">
  <ul>
        <h1>Ingredients {location.state.recipe.ingredients.length}</h1>

        {location.state.recipe.ingredientLines.map((ele) => {
          return <li key={ele}>{ele}</li>
        })}
      </ul>
  </div>
</div>

     
   
 
    </div>
  )
}

export default RecipeSingle
