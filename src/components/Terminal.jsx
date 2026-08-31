const LINES = [
  { text: '$ dotnet build', delay: 0 },
  { text: '  Build succeeded. 0 Warning(s), 0 Error(s)', delay: 550, muted: true },
  { text: '$ cd ../frontend', delay: 1050 },
  { text: '$ npm run dev', delay: 1500 },
  { text: '  ready in 214 ms', delay: 2000, muted: true },
]

export default function Terminal() {
  return (
    <div className="terminal">
      <div className="terminal-bar">
        <span className="dot r"></span>
        <span className="dot y"></span>
        <span className="dot g"></span>
        <span className="terminal-title">portfolio — zsh</span>
      </div>
      <div className="terminal-body">
        {LINES.map((l, i) => (
          <div
            key={i}
            className={'line' + (l.muted ? ' muted-line' : '')}
            style={{ animationDelay: `${l.delay}ms` }}
          >
            {l.text}
          </div>
        ))}
        <span className="cursor"></span>
      </div>
    </div>
  )
}
