import { useState } from 'react'
import { register } from '../api/auth'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const navigate = useNavigate()

  const handleRegister = async () => {
    if (!name || !email || !password || !phone) {
      alert('All fields required')
      return
    }

    try {
      const res = await register({ name, email, password, phone })

      if (res.id) {
        // User created → go to OTP verification
        navigate('/verify-otp', {
          state: { userId: res.id },
        })
      } else {
        alert(res.message || 'Registration failed')
      }
    } catch (error) {
      console.error(error)
      alert('Something went wrong')
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>Register</h2>
      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <input
        placeholder="Phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  )
}
