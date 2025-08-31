import React from 'react'
import projects from '../data/projects.js'

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <a key={p.title} href={p.link} target="_blank" rel="noreferrer" className="border rounded-2xl p-6 hover:shadow-md transition bg-white">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-zinc-600 mt-2">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {p.skills.map(s => <span key={s} className="px-2 py-1 rounded-full border">{s}</span>)}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}