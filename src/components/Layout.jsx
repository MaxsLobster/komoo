function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 11) return 'Guten Morgen'
  if (hour < 18) return 'Guten Tag'
  return 'Guten Abend'
}

export function Layout({ tab, setTab, children, onFab }) {
  return (
    <div className="mx-auto min-h-screen max-w-xl px-4 pb-28 pt-8">
      <header>
        <p className="font-serif text-3xl text-komo-accent">{getGreeting()}</p>
        <p className="mt-1 text-sm text-komo-muted">Euer Raum für das Wesentliche</p>
      </header>

      <main className="mt-6">{children}</main>

      <button
        onClick={onFab}
        className="fixed bottom-24 right-6 h-14 w-14 rounded-full bg-komo-accent text-3xl leading-none text-white shadow-card transition hover:scale-105"
      >
        +
      </button>

      <nav className="fixed bottom-0 left-0 right-0 mx-auto flex max-w-xl gap-3 border-t border-[#DFE8DF] bg-komo-bg p-4">
        {[
          ['topics', 'Themen'],
          ['tasks', 'Aufgaben'],
        ].map(([id, label]) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`flex-1 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
              tab === id ? 'bg-komo-accent text-white' : 'bg-white text-komo-muted'
            }`}
          >
            {label}
          </button>
        ))}
      </nav>
    </div>
  )
}
