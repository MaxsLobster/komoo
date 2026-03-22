export function DateTimePicker({ value, onChange }) {
  return (
    <label className="block text-sm text-komo-muted">
      Terminvorschlag
      <input
        type="datetime-local"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 w-full rounded-xl border border-[#DFE8DF] px-3 py-2 text-komo-text"
      />
    </label>
  )
}
