import { useState } from 'react'

const baseTags = [
  { id: 'reiseplanung', name: 'Reiseplanung', bgColor: '#E0EAF2', textColor: '#5B7B9A' },
  { id: 'alltag', name: 'Alltag', bgColor: '#F5EED4', textColor: '#C4A24E' },
  { id: 'zukunft', name: 'Zukunft', bgColor: '#E7DCF0', textColor: '#8B6BAE' },
  { id: 'finanzen', name: 'Finanzen', bgColor: '#DCE9DD', textColor: '#5E8B62' },
  { id: 'familie', name: 'Familie', bgColor: '#F5E1EA', textColor: '#C88EA7' },
  { id: 'haushalt', name: 'Haushalt', bgColor: '#F0E6D0', textColor: '#A08050' },
]

export function useTags() {
  const [tags, setTags] = useState(baseTags)

  const addTag = ({ name, bgColor, textColor }) => {
    setTags((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name,
        bgColor,
        textColor,
      },
    ])
  }

  return { tags, addTag }
}
