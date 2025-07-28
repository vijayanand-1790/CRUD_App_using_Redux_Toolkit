import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from './userReducer';

const update = () => {

  const { id } = useParams()
  const users = useSelector((state) => state.users);
  const existingUser = users.filter(f => f.id == id)
  const { name, email } = existingUser[0];
  const [updatedName, setupdatedName] = useState(name);
  const [updatedEmail, setupdatedEmail] = useState(email);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const HandleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({
      id: id,
      name: updatedName,
      email: updatedEmail
    }))
    navigate('/')
  }

  return (
    <div className='flex flex-col justify-center items-center text-center'>
      <h2 className='text-3xl font-semibold'>Update User</h2>

      <form onSubmit={HandleUpdate} className='space-y-4 mt-14 bg-gray-700 px-8 py-4 rounded-2xl'>
        <div className='flex flex-col'>
          <label htmlFor="name" className='text-left'>Name:</label>
          <input onChange={e => setupdatedName(e.target.value)} value={updatedName} type="text" name='name' placeholder='Your Name' className='bg-white rounded w-100 py-2 text-black px-2' />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="email" className='text-left'>Email:</label>
          <input onChange={e => setupdatedEmail(e.target.value)} value={updatedEmail} type="email" name='email' placeholder='Your Email' className='bg-white rounded w-100 py-2 text-black px-2' />
        </div>

        <button type='submit' className='bg-green-500 font-bold px-5 py-2 rounded cursor-pointer'>Submit</button>

      </form>


    </div>
  )
}

export default update