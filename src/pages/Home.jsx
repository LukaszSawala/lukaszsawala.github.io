import React from 'react'
import profile from '../data/profile.js'

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            {profile.name}
          </h1>
          <p className="text-zinc-600 mt-2">{profile.tagline}</p>
          <div className="mt-6 grid gap-2 text-zinc-700">
            <a href={`mailto:${profile.email}`} className="w-fit">📧 {profile.email}</a>
            {profile.showPhone && <div>📱 {profile.phone}</div>}
            <div>📍 {profile.location}</div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl bg-zinc-900 text-white">GitHub</a>
            <a href={profile.linkedIn} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl border">LinkedIn</a>
            <a href="/cv.pdf" className="px-4 py-2 rounded-xl border" target="_blank" rel="noreferrer">Download CV</a>
          </div>
        </div>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <Card title="CV" desc="Education, experience, skills" href="/cv" />
        <Card title="Projects" desc="Selected academic & hobby projects" href="/projects" />
        <Card title="Paper Summaries" desc="My notes & takeaways from research papers" href="/papers" />
      </div>
    </section>
  )
}

function Card({ title, desc, href }) {
  return (
    <a href={href} className="block border rounded-2xl p-6 hover:shadow-md transition bg-white">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-zinc-600 mt-1">{desc}</p>
    </a>
  )
}