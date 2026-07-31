/**
 * Signature background element: a quiet, generative node-and-signal graph.
 * Reads as both a circuit board (his IoT projects) and a neural net (his ML projects) —
 * animated dashes travel along the paths like a signal propagating through the system.
 * Pure SVG/CSS, respects prefers-reduced-motion via Tailwind's global override.
 */
const NODES = [
  { id: 'n1', x: 60, y: 80 },
  { id: 'n2', x: 220, y: 40 },
  { id: 'n3', x: 340, y: 130 },
  { id: 'n4', x: 120, y: 220 },
  { id: 'n5', x: 300, y: 260 },
  { id: 'n6', x: 460, y: 90 },
  { id: 'n7', x: 480, y: 240 },
  { id: 'n8', x: 40, y: 300 },
]

const EDGES = [
  ['n1', 'n2'],
  ['n2', 'n3'],
  ['n1', 'n4'],
  ['n4', 'n5'],
  ['n3', 'n6'],
  ['n5', 'n7'],
  ['n3', 'n5'],
  ['n4', 'n8'],
  ['n6', 'n7'],
]

function findNode(id) {
  return NODES.find((n) => n.id === id)
}

export default function SignalGraph({ className = '' }) {
  return (
    <svg
      viewBox="0 0 520 340"
      className={className}
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {EDGES.map(([a, b], i) => {
        const from = findNode(a)
        const to = findNode(b)
        return (
          <g key={`${a}-${b}`}>
            <line
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="currentColor"
              strokeOpacity="0.12"
              strokeWidth="1"
            />
            <line
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="currentColor"
              strokeOpacity="0.55"
              strokeWidth="1.5"
              strokeDasharray="6 234"
              className="animate-signal"
              style={{ animationDelay: `${i * 0.7}s` }}
            />
          </g>
        )
      })}
      {NODES.map((n, i) => (
        <circle
          key={n.id}
          cx={n.x}
          cy={n.y}
          r={i % 3 === 0 ? 5 : 3.5}
          fill="currentColor"
          className={i % 2 === 0 ? 'animate-drift' : 'animate-drift-slow'}
          opacity="0.85"
        />
      ))}
    </svg>
  )
}
