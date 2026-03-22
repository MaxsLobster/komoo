export function TagSelector({ tags, selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag.id}
          onClick={() => onSelect(tag)}
          className={`rounded-full px-3 py-1 text-xs font-semibold ${selected?.id === tag.id ? 'ring-2 ring-komo-accent' : ''}`}
          style={{ backgroundColor: tag.bgColor, color: tag.textColor }}
        >
          {tag.name}
        </button>
      ))}
    </div>
  )
}
