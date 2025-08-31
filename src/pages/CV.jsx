import React from 'react'

export default function CV() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold">Curriculum Vitae</h1>
      <p className="text-zinc-600 mt-2">A concise web version of my CV. You can also <a href="/cv.pdf" target="_blank" rel="noreferrer">download the PDF</a>.</p>

      <div className="mt-8 space-y-10">
        <div>
          <h2 className="text-xl font-semibold">Education</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>MSc Artificial Intelligence</strong>, University of Amsterdam — 2025–current</li>
            <li><strong>BSc Artificial Intelligence (Cum Laude)</strong>, University of Groningen — 2022–2025</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Experience</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Subteam Navigation Lead, Makercie Space Rover Team — 2024–2025</li>
            <li>Teaching Assistant, University of Groningen — 2024–2025</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Awards</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Cognitive Model Blackjack competition winner (2024)</li>
            <li>RDW Lego Self-Driving challenge winner (2023)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Skills</h2>
          <p>Python, Java, PyTorch, Transformers, FastAPI, Signal Processing, Statistics, Deep Learning, NLP, Git, Streamlit, Robotics.</p>
        </div>
      </div>
    </section>
  )
}