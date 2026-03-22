import { useEffect, useState } from 'react'

const STORAGE_KEY = 'komo-user'

export function useUser() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved) {
      setUser(saved)
    }
  }, [])

  const selectUser = (name) => {
    window.localStorage.setItem(STORAGE_KEY, name)
    setUser(name)
  }

  return { user, selectUser }
}
