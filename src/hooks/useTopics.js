import { useMemo, useState } from 'react'

export function useTopics() {
  const [topics, setTopics] = useState([])

  const sortedTopics = useMemo(
    () =>
      [...topics].sort((a, b) => {
        if (a.isUrgent !== b.isUrgent) return Number(b.isUrgent) - Number(a.isUrgent)
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      }),
    [topics],
  )

  const createTopic = (payload) => {
    setTopics((prev) => [
      ...prev,
      {
        ...payload,
        id: crypto.randomUUID(),
        status: 'open',
        createdAt: new Date().toISOString(),
      },
    ])
  }

  const markDone = (id) => setTopics((prev) => prev.filter((t) => t.id !== id))

  const createFollowUp = (id) => {
    const origin = topics.find((t) => t.id === id)
    if (!origin || origin.hasFollowUp) return

    setTopics((prev) =>
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

  const toggleUrgent = (id) => setTopics((prev) => prev.map((t) => (t.id === id ? { ...t, isUrgent: !t.isUrgent } : t)))

  return { topics: sortedTopics, createTopic, markDone, createFollowUp, toggleUrgent }
}
