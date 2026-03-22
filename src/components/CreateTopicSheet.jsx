import { useState } from 'react'
import { DateTimePicker } from './DateTimePicker'
import { TagSelector } from './TagSelector'

export function CreateTopicSheet({ open, onClose, tags, currentUser, onCreate, onCreateTag }) {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [selectedTag, setSelectedTag] = useState(tags[0])
  const [proposedDate, setProposedDate] = useState('')
  const [assignedTo, setAssignedTo] = useState('')

  if (!open) return null

  return (
    <div className="fixed inset-0 z-40 bg-black/30 p-4" onClick={onClose}>
      <div className="mx-auto mt-16 max-w-md rounded-card bg-white p-4" onClick={(event) => event.stopPropagation()}>
        <h3 className="font-semibold text-komo-text">Neues Thema</h3>
        <input className="mt-3 w-full rounded-xl border border-[#DFE8DF] px-3 py-2" placeholder="Titel" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea className="mt-3 w-full rounded-xl border border-[#DFE8DF] px-3 py-2" rows="3" placeholder="Notiz" value={notes} onChange={(e) => setNotes(e.target.value)} />
        <div className="mt-3">
          <TagSelector tags={tags} selected={selectedTag} onSelect={setSelectedTag} />
          <button className="mt-2 text-xs font-semibold text-komo-accent" onClick={onCreateTag}>+ Eigenes Tag</button>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button className={`rounded-xl px-3 py-2 text-sm font-semibold ${assignedTo === 'Max' ? 'bg-komo-accent text-white' : 'bg-komo-bg text-komo-muted'}`} onClick={() => setAssignedTo('Max')}>Für Max</button>
          <button className={`rounded-xl px-3 py-2 text-sm font-semibold ${assignedTo === 'Anna' ? 'bg-komo-gold text-white' : 'bg-komo-bg text-komo-muted'}`} onClick={() => setAssignedTo('Anna')}>Für Anna</button>
        </div>
        <div className="mt-3">
          <DateTimePicker value={proposedDate} onChange={setProposedDate} />
        </div>

        <button
          className="mt-4 w-full rounded-xl bg-komo-accent px-3 py-2 font-semibold text-white"
          onClick={() => {
            if (!title.trim()) return
            onCreate({
              title: title.trim(),
              notes: notes.trim(),
              tag: selectedTag,
              proposedDate: proposedDate ? new Date(proposedDate).toISOString() : null,
              createdBy: currentUser,
              assignedTo: assignedTo || null,
              isUrgent: false,
              hasFollowUp: false,
            })
            setTitle('')
            setNotes('')
            setProposedDate('')
            setAssignedTo('')
            onClose()
          }}
        >
          Thema erstellen
        </button>
      </div>
    </div>
  )
}
