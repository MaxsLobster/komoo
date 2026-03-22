import { Avatar } from './Avatar'
import { TagBadge } from './TagBadge'
import { UrgentToggle } from './UrgentToggle'

export function TopicCard({ topic, onDone, onFollowUp, onToggleUrgent }) {
  return (
    <article
      className={`card-press rounded-card bg-white p-4 shadow-card transition ${topic.isUrgent ? 'ring-1 ring-komo-urgent/40' : ''}`}
    >
      <div className="flex items-start justify-between gap-3">
        <TagBadge tag={topic.tag} />
        <UrgentToggle active={topic.isUrgent} onClick={() => onToggleUrgent(topic.id)} />
      </div>
      <h3 className="mt-3 text-lg font-bold text-komo-text">{topic.title}</h3>
      {topic.notes && <p className="mt-2 text-sm text-komo-muted">{topic.notes}</p>}
      {topic.proposedDate && <p className="mt-2 text-sm text-komo-accent">Vorschlag: {new Date(topic.proposedDate).toLocaleString('de-DE')}</p>}

      <div className="mt-4 flex items-center gap-2 text-xs text-komo-muted">
        <span>Von</span>
        <Avatar name={topic.createdBy} />
        {topic.assignedTo && (
          <>
            <span>für</span>
            <Avatar name={topic.assignedTo} />
          </>
        )}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <button className="rounded-xl bg-komo-done px-3 py-2 text-sm font-semibold text-white" onClick={() => onDone(topic.id)}>
          Erledigt
        </button>
        <button
          className="rounded-xl bg-komo-gold px-3 py-2 text-sm font-semibold text-white disabled:opacity-40"
          onClick={() => onFollowUp(topic.id)}
          disabled={topic.hasFollowUp}
        >
          Nächste Schritte
        </button>
      </div>
    </article>
  )
}
