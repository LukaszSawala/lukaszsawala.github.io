import React from 'react'
import profile from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-zinc-600 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex gap-4">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedIn} target="_blank" rel="noreferrer">LinkedIn</a>
          {profile.website && <a href={profile.website} target="_blank" rel="noreferrer">Website</a>}
        </div>
      </div>
    </footer>
  )
}