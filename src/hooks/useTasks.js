import { useMemo, useState } from 'react'

const cheers = ['Gut gemacht! 💪', 'Erledigt! Stark!', 'Einer weniger auf der Liste!']

export function useTasks() {
  const [tasks, setTasks] = useState([])
  const [toast, setToast] = useState('')

  const sortedTasks = useMemo(
    () =>
      [...tasks].sort((a, b) => {
        if (a.isUrgent !== b.isUrgent) return Number(b.isUrgent) - Number(a.isUrgent)
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      }),
    [tasks],
  )

  const createTask = (payload) => {
    setTasks((prev) => [
      ...prev,
      {
        ...payload,
        id: crypto.randomUUID(),
        status: 'open',
        createdAt: new Date().toISOString(),
      },
    ])
  }

  const markDone = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id))
    setToast(cheers[Math.floor(Math.random() * cheers.length)])
    setTimeout(() => setToast(''), 2600)
  }

  const createFollowUp = (id) => {
    const origin = tasks.find((t) => t.id === id)
    if (!origin || origin.hasFollowUp) return

    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, hasFollowUp: true } : t)).concat({
        ...origin,
        id: crypto.randomUUID(),
        title: `Nächste Schritte: ${origin.title}`,
        parentId: origin.id,
        hasFollowUp: false,
        createdAt: new Date().toISOString(),
      }),
    )
  }

  const toggleUrgent = (id) => setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, isUrgent: !t.isUrgent } : t)))

  return { tasks: sortedTasks, createTask, markDone, createFollowUp, toggleUrgent, toast }
}
