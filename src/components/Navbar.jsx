import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItemClass = ({ isActive }) =>
  'px-3 py-2 rounded-xl transition ' + (isActive ? 'bg-zinc-900 text-white' : 'hover:bg-zinc-200')

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-semibold text-lg">Łukasz Sawala</Link>
        <nav className="flex gap-1">
          <NavLink to="/" className={navItemClass} end>Home</NavLink>
          <NavLink to="/cv" className={navItemClass}>CV</NavLink>
          <NavLink to="/projects" className={navItemClass}>Projects</NavLink>
          <NavLink to="/papers" className={navItemClass}>Paper Summaries</NavLink>
        </nav>
      </div>
    </header>
  )
}