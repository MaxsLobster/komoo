const tones = {
  Max: 'bg-komo-accent text-white',
  Anna: 'bg-komo-gold text-white',
}

export function Avatar({ name = 'Max' }) {
  return (
    <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${tones[name] || tones.Max}`}>
      {name[0]}
    </span>
  )
}
