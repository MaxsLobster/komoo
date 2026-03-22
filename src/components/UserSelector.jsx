export function UserSelector({ onSelect }) {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-6 text-center">
      <h1 className="font-serif text-4xl text-komo-accent">komo</h1>
      <p className="mt-2 text-komo-muted">Wer bist du?</p>
      <div className="mt-8 grid w-full gap-3">
        <button className="rounded-2xl bg-komo-accent px-5 py-4 font-semibold text-white" onClick={() => onSelect('Max')}>
          Max
        </button>
        <button className="rounded-2xl bg-komo-gold px-5 py-4 font-semibold text-white" onClick={() => onSelect('Anna')}>
          Anna
        </button>
      </div>
    </main>
  )
}
