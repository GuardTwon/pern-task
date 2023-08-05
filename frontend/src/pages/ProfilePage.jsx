import { useAuth } from '../context/Auth.context';

function ProfilePage() {

const {user}=useAuth()
  return (
    <div>
      {JSON.stringify(user)}
    </div>
  )
}

export default ProfilePage