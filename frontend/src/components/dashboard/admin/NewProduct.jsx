import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthProvider';

const NewProduct = () => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [photoUrl, setPhotoUrl] = useState('');
  const [category, setCategory] = useState('CATEGORY');
  const [recipe, setRecipe] = useState('');
  const { user } = useContext(AuthContext);

  const handleAddProduct = () => {
    if (user && user.email) {
      const productItem = {
        name, price, photoUrl, category, recipe,
      }
      console.log(productItem)
      fetch("http://localhost:5001/v1/food/product",
        {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productItem),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          toast.success("Create product successfully!!!")
        })
    } else {
      toast.error("You are not logged in ?")
    }
  }


  return (
    <>
      <div className='bg-white rounded-md shadow-md'>
        <div className='p-4 flex gap-4 flex-col'>
          <p className='text-2xl text-slate-900'>Add new product</p>
          <div className='flex gap-4 flex-col xl:flex-row'>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name product"
              className="input input-bordered w-full" />
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price product"
              className="input input-bordered w-full" />
          </div>
          {/* <input type="file" className="file-input file-input-bordered w-full " /> */}
          <div className='flex gap-4 flex-col xl:flex-row'>
            <input
              type="text"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              placeholder="Photo URL"
              className="input input-bordered w-full" />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="select text-base select-bordered w-full">
              <option disabled selected
                value='CATEGORY'>-- Category --</option>
              <option value='popular'>popular</option>
              <option value='salad'>salad</option>
              <option value='soups'>soups</option>
              <option value='dessert'>dessert</option>
              <option value='drinks'>drinks</option>
            </select>
          </div>
          <textarea
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
            className="textarea h-48 textarea-bordered"
            placeholder="Description of the item">
          </textarea>
          <button
            onClick={handleAddProduct}
            className='btn text-white hover:bg-[#2B3440] bg-[#2B3440] w-48'>Add new product</button>
        </div>
      </div >
    </>
  )
}

export default NewProduct
