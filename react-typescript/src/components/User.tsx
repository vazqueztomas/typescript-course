import { useState, useEffect } from "react";

interface User {
  id: number,
  name: string,
}

const User = () => {
  const [user, setUser] = useState<User[] | null>(null)

  useEffect(() => {
    console.log('Users ', user)
  },[user])
  return (
    <div>User</div>
  )
}

export default User