import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from '../../redux/slices/user-slice'

const Register = () => {
  const user = useSelector(s=> s.user.value)
  const dispatch = useDispatch()
  console.log(user);

  const [formData, setFormData] = useState({
    name: "",
    username: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <>
    <div>Register</div>
    <form onSubmit={handleSubmit} action="">
        <input value={formData.name} onChange={e => setFormData(prev=>({...prev, name: e.target.value}))} className='border' type="text"/>
        <input value={formData.username} onChange={e => setFormData(prev=>({...prev, username: e.target.value}))} className='border' type="text"/>
      <button>Register</button>
    </form>
    </>
  )
}

export default Register