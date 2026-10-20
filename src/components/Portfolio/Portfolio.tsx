import { useEffect, useRef, useState, type ReactNode } from 'react'
import P1 from '../../assets/Screenshot 2025-04-28 191658.png'
import P2 from '../../assets/Screenshot 2025-04-28 191728.png'
import P3 from '../../assets/Screenshot 2025-04-28 191838.png'
import P4 from '../../assets/Screenshot 2025-04-28 191903.png'
import P5 from '../../assets/Screenshot 2025-04-28 192024.png'
import P6 from '../../assets/Screenshot 2025-04-28 192102.png'
import P7 from '../../assets/Screenshot 2025-06-13 214900.png'
import P8 from '../../assets/Screenshot 2025-04-28 192132.png'
import P9 from '../../assets/last.png'
import P10 from '../../assets/Screenshot 2026-01-09 120741.png'
import P11 from '../../assets/Screenshot 2026-05-04 103538.png'
import P12 from '../../assets/Screenshot 2026-10-17 135459.png'

const projects = [
  {
    title: 'Furniture Website',
    imageSrc: P1,
    tech: ['React', 'Firebase', 'Tailwind CSS', 'Typescript'],
    demoLink: 'https://myfurniture-pi.vercel.app/',
  },
  {
    title: 'Real-estate Website',
    imageSrc: P2,
    tech: ['React', 'Tailwind CSS', 'Typescript'],
    demoLink: 'https://my-estate-b6cu.vercel.app/',
  },
  {
    title: 'Restaurant Website',
    imageSrc: P3,
    tech: ['React', 'Tailwind CSS', 'Typescript'],
    demoLink: 'https://dboss-alpha.vercel.app/',
  },
  {
    title: 'Laundry Website',
    imageSrc: P4,
    tech: ['React', 'Tailwind CSS', 'Typescript'],
    demoLink: 'https://mylaundry-one.vercel.app/',
  },
  {
    title: 'Lawfirm Website',
    imageSrc: P5,
    tech: ['React', 'Tailwind CSS', 'Typescript'],
    demoLink: 'https://okusanya-lawfirm.vercel.app/',
  },
  {
    title: 'Ticket Generator',
    imageSrc: P6,
    tech: ['HTML', 'CSS', 'JavaScript'],
    demoLink: 'https://conference-ticket-kappa.vercel.app/',
  },
  {
    title: 'Photogallery',
    imageSrc: P7,
    tech: ['React', 'Tailwind CSS', 'Typescript', 'Firebase', 'cloudinary'],
    demoLink: 'https://tpl-two.vercel.app/',
  },
  {
    title: 'My First Portfolio',
    imageSrc: P8,
    tech: ['HTML', 'CSS', 'Typescript'],
    demoLink: 'https://erinayo.vercel.app/',
  },
  {
    title: 'My Second Portfolio',
    imageSrc: P9,
    tech: ['React', 'Tailwind CSS', 'Typescript'],
    demoLink: 'https://okusanya.vercel.app/',
  },
  {
    title: 'An E-commerce headset website',
    imageSrc: P10,
    tech: ['NEXTJS', 'Tailwind CSS', 'Typescript', 'convex'],
    demoLink: 'https://audiophile-five-sigma.vercel.app/',
  },
  {
    title: 'An E-commerce Pet Store',
    imageSrc: P11,
    tech: ['NEXTJS', 'TailwindCSS', 'Firebase', 'Typescript','cloudinary'],
    demoLink: 'https://pawstore-nu.vercel.app/',
  },
  {
    title: 'A World Population Chart',
    imageSrc: P12,
    tech: ['NEXTJS', 'TailwindCSS', 'Typescript', 'Api'],
    demoLink: 'https://world-dashboard-orpin.vercel.app/',
  },
]

/* ---------- scroll-in animation ---------- */

type Direction = 'left' | 'right' | 'top' | 'bottom'

// Full class names are written out so Tailwind can see them.
const HIDDEN: Record<Direction, string> = {
  left: '-translate-x-24 opacity-0',
  right: 'translate-x-24 opacity-0',
  top: '-translate-y-24 opacity-0',
  bottom: 'translate-y-24 opacity-0',
}
const SHOWN = 'translate-x-0 translate-y-0 opacity-100'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Matches the grid: 1 column < md, 2 columns at md, 3 columns at lg.
const getColumns = () => {
  if (typeof window === 'undefined') return 3
  if (window.matchMedia('(min-width: 1024px)').matches) return 3
  if (window.matchMedia('(min-width: 768px)').matches) return 2
  return 1
}

function useColumns() {
  const [cols, setCols] = useState(getColumns)
  useEffect(() => {
    const onResize = () => setCols(getColumns())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return cols
}

// Left column slides in from the left, right column from the right,
// and the middle column alternates between top and bottom row by row.
function directionFor(idx: number, cols: number): Direction {
  if (cols === 1) return 'bottom'
  const col = idx % cols
  const row = Math.floor(idx / cols)
  if (col === 0) return 'left'
  if (col === cols - 1) return 'right'
  return row % 2 === 0 ? 'top' : 'bottom'
}

function Reveal({
  direction,
  delay = 0,
  children,
}: {
  direction: Direction
  delay?: number
  children: ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(prefersReducedMotion)

  useEffect(() => {
    if (visible) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect() // animate once
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [visible])

  return (
    // The outer div never moves, so the observer always sees the real position.
    <div ref={ref} className="h-full">
      <div
        style={{ transitionDelay: `${delay}ms` }}
        className={`h-full transition-all duration-700 ease-out will-change-transform ${
          visible ? SHOWN : HIDDEN[direction]
        }`}
      >
        {children}
      </div>
    </div>
  )
}

/* ---------- section ---------- */

const PortfolioSection = () => {
  const cols = useColumns()

  return (
    // overflow-x-clip stops the sideways slide from creating a horizontal scrollbar
    <section id="portfolio" className="container mx-auto overflow-x-clip px-6 py-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        My <span className="text-blue-500">Portfolio</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <Reveal
            key={proj.title}
            direction={directionFor(idx, cols)}
            delay={(idx % cols) * 120}
          >
            <div className="group relative h-full overflow-hidden rounded-lg shadow-lg">
              <img
                src={proj.imageSrc}
                alt={proj.title}
                loading="lazy"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Overlay for hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
                <h3 className="text-white text-xl font-semibold mb-2">{proj.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={proj.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-600 px-4 py-2 rounded-full"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default PortfolioSection