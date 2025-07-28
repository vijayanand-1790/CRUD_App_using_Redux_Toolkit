import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from './userReducer';

const Home = () => {

	const users = useSelector((state) => state.users)
	const dispatch = useDispatch()

	const HandleDelete = (id) =>{
		dispatch(deleteUser({ id: id }));
	}

	return (
		<div>
			<h2 className='text-3xl font-semibold'>CRUD App with Redux Toolkit</h2>
			<br />
			<br />
			<Link to='/create' ><button className='text-xl px-2 py-1 bg-green-600 rounded font-bold cursor-pointer'>Create +</button></Link>
			<div className="overflow-x-auto p-4">
				<table className="min-w-full table-auto border border-gray-300 rounded-md shadow-md">
					<thead className="bg-gray-100">
						<tr>
							<th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">ID</th>
							<th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Name</th>
							<th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Email</th>
							<th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Action</th>
						</tr>
					</thead>
					<tbody className="bg-white">
						{
							users.map((user, index) =>
								<tr key={index} className="hover:bg-gray-50">
									<td className="px-6 py-4 text-left text-sm text-gray-800 border-b"> {user.id} </td>
									<td className="px-6 py-4 text-left text-sm text-gray-800 border-b"> {user.name} </td>
									<td className="px-6 py-4 text-left text-sm text-gray-800 border-b"> {user.email} </td>
									<td className="px-6 py-4 text-left text-sm text-gray-800 border-b">
										<Link to={ `/update/${user.id}` } ><button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition cursor-pointer">
											Update
										</button></Link>
										<button onClick={ ()=> HandleDelete(user.id) } className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition cursor-pointer ml-1">
											Delete
										</button>
									</td>
								</tr>
							)
						}
					</tbody>
				</table>
			</div>

		</div>
	)
}

export default Home