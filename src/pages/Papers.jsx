import React from 'react'
import { Link } from 'react-router-dom'
import papers from '../data/papers.js'

export default function Papers() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex items-end justify-between gap-4">
        <h1 className="text-2xl font-semibold">Paper Summaries</h1>
        <a className="text-sm underline" href="https://dillinger.io/" target="_blank" rel="noreferrer">Write markdown online</a>
      </div>
      <p className="text-zinc-600 mt-2">Each entry links to a Markdown file you can edit. Add more by copying the template in <code>/public/papers</code> and an entry in <code>src/data/papers.js</code>.</p>

      <div className="mt-6 grid gap-4">
        {papers.map(p => (
          <Link key={p.slug} to={`/papers/${p.slug}`} className="block border rounded-2xl p-6 hover:shadow-md transition bg-white">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-zinc-600 mt-1">{p.abstract}</p>
            <div className="mt-2 text-xs text-zinc-500">{p.date} • {p.tags.join(', ')}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}