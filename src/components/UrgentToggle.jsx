export function UrgentToggle({ active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl border px-3 py-1 text-xs font-semibold transition ${
        active ? 'border-komo-urgent bg-[#F7EBE6] text-komo-urgent' : 'border-[#DFE8DF] text-komo-muted'
      }`}
    >
      Wichtig
    </button>
  )
}
