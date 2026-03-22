export function TagBadge({ tag }) {
  if (!tag) return null

  return (
    <span
      className="inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
      style={{ backgroundColor: tag.bgColor, color: tag.textColor }}
    >
      {tag.name}
    </span>
  )
}
