## TL;DR
LLMs hallucinate because they optimize for plausibility, not truth. Grounding via retrieval, tools, or verification is required to reduce hallucinations reliably.

## Core Contribution / Main Lesson
If your LLM hallucinates:

1. **Retrieval-Augmented Generation (RAG):** force conditioning on external context before generating.  
2. **Tool use:** calculator, search APIs, structured databases. Remember - if an intern cannot use a tool, an agent cannot as well (use well-structured tools with easy calls)
3. **Verify-then-generate:** ask model to confirm correctness against retrieved info.  
4. **Self-consistency / majority voting** for critical outputs.  
5. **Constrain decoding:** lower temperature, limit tokens, enforce grammar/regex.  
6. **Behaviour prompting with penalties:** answer only if confidence > threshold t; otherwise output “I don’t know” to encourage correct uncertainty reporting.

Outcome: Hallucinations drop significantly while maintaining fluent outputs.

## Main Ideas
- Next-token prediction favors **plausibility over correctness**.  
- Truth evaluation is often impossible during pretraining; syntax and probability patterns dominate.  
- Larger models hallucinate less frequently but more confidently.  
- Pretraining is **distribution learning**, post-training optimizes performance metrics; expressing uncertainty is often penalized, not rewarded.

## Implications / Lessons
- Hallucination is **structural**, not a bug.  
- Scaling or architecture changes alone **won’t eliminate it**.  
- Reliable methods require **external grounding or verification**.


## Central Claims
- Hallucinations are unavoidable without grounding.  
- Fluent guessing is inherent to next-token objectives.  
- Post-training metrics should **reward correct uncertainty**.

**Paper link:**  
TBD

**Full citation:**  
Zhang et al., *Why Language Models Hallucinate,* 2024.

**Full correct title:**  
Why Language Models Hallucinate