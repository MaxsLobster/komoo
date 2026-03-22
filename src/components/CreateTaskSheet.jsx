import { useState } from 'react'
import { TagSelector } from './TagSelector'

export function CreateTaskSheet({ open, onClose, tags, currentUser, onCreate, onCreateTag }) {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [selectedTag, setSelectedTag] = useState(tags[0])
  const [assignedTo, setAssignedTo] = useState('')

  if (!open) return null

  return (
    <div className="fixed inset-0 z-40 bg-black/30 p-4" onClick={onClose}>
      <div className="mx-auto mt-20 max-w-md rounded-card bg-white p-4" onClick={(event) => event.stopPropagation()}>
        <h3 className="font-semibold text-komo-text">Neue Aufgabe</h3>
        <input className="mt-3 w-full rounded-xl border border-[#DFE8DF] px-3 py-2" placeholder="Titel" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="mt-3 w-full rounded-xl border border-[#DFE8DF] px-3 py-2" placeholder="Kurznotiz" value={notes} onChange={(e) => setNotes(e.target.value)} />
        <div className="mt-3">
          <TagSelector tags={tags} selected={selectedTag} onSelect={setSelectedTag} />
          <button className="mt-2 text-xs font-semibold text-komo-accent" onClick={onCreateTag}>+ Eigenes Tag</button>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button className={`rounded-xl px-3 py-2 text-sm font-semibold ${assignedTo === 'Max' ? 'bg-komo-accent text-white' : 'bg-komo-bg text-komo-muted'}`} onClick={() => setAssignedTo('Max')}>Für Max</button>
          <button className={`rounded-xl px-3 py-2 text-sm font-semibold ${assignedTo === 'Anna' ? 'bg-komo-gold text-white' : 'bg-komo-bg text-komo-muted'}`} onClick={() => setAssignedTo('Anna')}>Für Anna</button>
        </div>

        <button
          className="mt-4 w-full rounded-xl bg-komo-accent px-3 py-2 font-semibold text-white"
          onClick={() => {
            if (!title.trim()) return
            onCreate({
              title: title.trim(),
              notes: notes.trim(),
              tag: selectedTag,
              createdBy: currentUser,
              assignedTo: assignedTo || null,
              isUrgent: false,
              hasFollowUp: false,
            })
            setTitle('')
            setNotes('')
            setAssignedTo('')
            onClose()
          }}
        >
          Aufgabe erstellen
        </button>
      </div>
    </div>
  )
}
