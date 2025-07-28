import React, { useState } from 'react'
import { addUser } from './userReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const create = () => {

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const users = useSelector((state) => state.users)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const HandleSubmit = (event) => {
		event.preventDefault()
		dispatch(addUser({
			id: users[users.length-1].id+1,
			name,
			email
		}))
		navigate('/')
	}

	return (

		<div className='flex flex-col justify-center items-center text-center'>
			<h2 className='text-2xl'>Create User</h2>
			<form onSubmit={HandleSubmit} className='space-y-4 mt-14 bg-gray-700 px-8 py-4 rounded-2xl'>
				<div className='flex flex-col'>
					<label htmlFor="name" className='text-left'>Name:</label>
					<input onChange={e => setName(e.target.value)} value={name} type="text" name='name' placeholder='Your Name' className='bg-white rounded w-100 py-2 text-black px-2' />
				</div>

				<div className='flex flex-col'>
					<label htmlFor="email" className='text-left'>Email:</label>
					<input onChange={e => setEmail(e.target.value)} value={email} type="email" name='email' placeholder='Your Email' className='bg-white rounded w-100 py-2 text-black px-2' />
				</div>

				<button className='bg-green-700 px-5 py-2 rounded cursor-pointer'>Submit</button>

			</form>


		</div>

	)
}

export default create