import { useState } from 'react'

export function CreateTagSheet({ open, onClose, onCreate }) {
  const [name, setName] = useState('')
  const [bgColor, setBgColor] = useState('#E0EAF2')
  const [textColor, setTextColor] = useState('#5B7B9A')

  if (!open) return null

  return (
    <div className="fixed inset-0 z-40 bg-black/30 p-4" onClick={onClose}>
      <div className="mx-auto mt-28 max-w-md rounded-card bg-white p-4" onClick={(event) => event.stopPropagation()}>
        <h3 className="font-semibold">Neues Tag</h3>
        <input className="mt-3 w-full rounded-xl border px-3 py-2" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <div className="mt-3 grid grid-cols-2 gap-2">
          <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
          <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} />
        </div>
        <button
          className="mt-4 w-full rounded-xl bg-komo-accent px-3 py-2 font-semibold text-white"
          onClick={() => {
            if (!name.trim()) return
            onCreate({ name: name.trim(), bgColor, textColor })
            setName('')
            onClose()
          }}
        >
          Tag erstellen
        </button>
      </div>
    </div>
  )
}
