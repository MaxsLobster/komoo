import { TopicCard } from '../components/TopicCard'

export function Topics({ topics, onDone, onFollowUp, onToggleUrgent }) {
  if (!topics.length) {
    return <p className="rounded-card bg-white p-5 text-sm text-komo-muted shadow-card">Noch keine Themen. Erstellt euer erstes gemeinsames Thema!</p>
  }

  return (
    <section className="space-y-3">
      {topics.map((topic) => (
        <TopicCard key={topic.id} topic={topic} onDone={onDone} onFollowUp={onFollowUp} onToggleUrgent={onToggleUrgent} />
      ))}
    </section>
  )
}
