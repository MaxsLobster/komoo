import { Avatar } from './Avatar'
import { TagBadge } from './TagBadge'
import { UrgentToggle } from './UrgentToggle'

export function TaskCard({ task, onDone, onFollowUp, onToggleUrgent }) {
  return (
    <article
      className={`card-press rounded-card bg-white p-4 shadow-card transition ${task.isUrgent ? 'ring-1 ring-komo-urgent/40' : ''}`}
    >
      <div className="flex items-start justify-between gap-3">
        <TagBadge tag={task.tag} />
        <UrgentToggle active={task.isUrgent} onClick={() => onToggleUrgent(task.id)} />
      </div>
      <h3 className="mt-3 text-lg font-bold text-komo-text">{task.title}</h3>
      {task.notes && <p className="mt-2 text-sm text-komo-muted">{task.notes}</p>}

      <div className="mt-4 flex items-center gap-2 text-xs text-komo-muted">
        <span>Von</span>
        <Avatar name={task.createdBy} />
        {task.assignedTo && (
          <>
            <span>für</span>
            <Avatar name={task.assignedTo} />
          </>
        )}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <button className="rounded-xl bg-komo-done px-3 py-2 text-sm font-semibold text-white" onClick={() => onDone(task.id)}>
          Erledigt
        </button>
        <button
          className="rounded-xl bg-komo-gold px-3 py-2 text-sm font-semibold text-white disabled:opacity-40"
          onClick={() => onFollowUp(task.id)}
          disabled={task.hasFollowUp}
        >
          Nächste Schritte
        </button>
      </div>
    </article>
  )
}
