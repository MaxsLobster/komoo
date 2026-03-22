import { TaskCard } from '../components/TaskCard'

export function Tasks({ tasks, onDone, onFollowUp, onToggleUrgent }) {
  if (!tasks.length) {
    return <p className="rounded-card bg-white p-5 text-sm text-komo-muted shadow-card">Noch keine Aufgaben. Erstellt eure erste Aufgabe!</p>
  }

  return (
    <section className="space-y-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onDone={onDone} onFollowUp={onFollowUp} onToggleUrgent={onToggleUrgent} />
      ))}
    </section>
  )
}
