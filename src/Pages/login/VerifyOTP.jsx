import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { verifyOTP } from './api/auth'

export default function VerifyOTPPms() {
  const [otp, setOtp] = useState('')
  const navigate = useNavigate()
  const { state } = useLocation()

  const handleVerify = async () => {
    const res = await verifyOTP({
      userId: state.userId,
      otp,
    })

    if (res.message === 'Phone verified successfully') {
    //   navigate('/dashboard')
    } else {
      alert(res.message)
    }
  }
 return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Verify OTP</h2>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={e => setOtp(e.target.value)}
          className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
        />

        <button
          onClick={handleVerify}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Verify
        </button>

        <p className="mt-4 text-center text-sm text-gray-500">
          Didn’t receive OTP?{' '}
          <button
            onClick={() => alert('Resend OTP logic here')}
            className="text-blue-500 hover:underline"
          >
            Resend
          </button>
        </p>
      </div>
    </div>
  )
}
