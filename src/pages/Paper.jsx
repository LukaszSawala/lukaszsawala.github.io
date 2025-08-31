import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import papers from '../data/papers.js'
import { marked } from 'marked'

export default function Paper() {
  const { slug } = useParams()
  const meta = papers.find(p => p.slug === slug)
  const [html, setHtml] = useState('<p>Loading…</p>')

  useEffect(() => {
    if (!meta) return
    fetch(meta.file)
      .then(r => r.text())
      .then(md => setHtml(marked.parse(md)))
      .catch(() => setHtml('<p>Could not load this summary.</p>'))
  }, [slug])

  if (!meta) {
    return <section className="max-w-5xl mx-auto px-4 py-12"><p>Summary not found.</p></section>
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold">{meta.title}</h1>
      <div className="text-sm text-zinc-500 mt-1">{meta.date} • {meta.tags.join(', ')}</div>
      <article className="container-prose mt-6" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  )
}