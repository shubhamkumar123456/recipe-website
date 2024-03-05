import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  const [arr, setarr] = useState([]);
  const [value, setvalue] = useState("cookies");

  let searchRef = useRef()


  let fetchData = async () => {
    let res = await fetch(`https://api.edamam.com/search?q=${value}&app_id=249b8c77&app_key=accc417489d9e0dfa317fbc0cb7be4c8`)

    let data = await res.json()
    // console.log(data.hits)
    setarr(data.hits)
  }



  useEffect(() => {
    fetchData()
  }, [value])

  console.log(arr);


  const handleSearch =(e)=>{
    e.preventDefault()
    let searchValue = searchRef.current.value;
    setvalue(searchValue)
    console.log(searchValue)
  }
  console.log(value)
  return (
    <div className="container m-auto mt-3">
      <div className="col-md-4 m-auto">
        <form className="d-flex" role="search">
          <input ref={searchRef} className="form-control outline-primary me-2" type="search" placeholder="Search" aria-label="Search" />
          <button onClick={handleSearch} className="btn btn-success" type="submit">Search</button>
        </form>
      </div>
      <div className='row'>
        {arr?.map((ele) => {

          return <div key={ele.recipe.image} className="card m-3" style={{ width: '18rem' }}>
            <img src={ele.recipe.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{ele.recipe.label}</h5>
              <Link state={ele} to={'/singleRecipe'} className="btn btn-success">View Recipe</Link>
            </div>
          </div>


        })}
      </div>
    </div>
  )
}

export default Home
