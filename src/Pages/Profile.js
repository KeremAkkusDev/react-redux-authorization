import { useDispatch } from "react-redux"
import { logout } from "../stores/auth"

function Profile() {
  const dispatch = useDispatch()
  return (
    <div>
      Profile
      <br/>
      <button onClick={()=>{dispatch(logout())}}>Logout</button>
    </div>
  )
}

export default Profile