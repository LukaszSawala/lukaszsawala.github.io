
### **TL;DR**
Hallucinations are the optimal output under uncertainty because LLMs model text distributions, not facts. Eliminating hallucination requires grounding, not more training.


### **Core Contribution / Main Lesson**
When your model hallucinates, **do not attempt more fine-tuning**.  
Do **one or more** of these instead:

1. **Add retrieval grounding (RAG):**  
   Force the model to condition on retrieved context *before* generating answers.

2. **Introduce tool-use:**  
   - calculator for numbers  
   - search API for facts  
   - database queries for structured info
   Remember: **if an intern cannot use a tool, neither can you agent.**

3. **Use “verify-then-generate”:**  
   Prompt the model to check sources or retrieved context before output.

4. **Use self-consistency or majority voting** for critical tasks.  

5. **Constrain decoding**  
   - lower temperature  
   - limit token budget  
   - use constrained generation frameworks (regex, grammar models).

6. **Expose uncertainty:**  
   Ask the model to report confidence, measure it directly or identify unclear parts to avoid confident hallucinations.

These are the only reliable ways to reduce hallucinations *in production*.


### **Main Ideas**
- Next-token prediction rewards plausibility, not truth.  
- Under uncertainty, the model must choose a single token → hallucination.  
- Larger models hallucinate less often but more confidently.  
- Hallucination is structurally built into the objective.

### **Implications / Lessons**
- No amount of raw scaling eliminates hallucinations.  
- Architecture is not the bottleneck; the objective is.  
- Grounding or verification is required for factuality.

### **Central Claims**
- Hallucination is unavoidable without external grounding.  
- Fluent guessing is an inherent property of the training objective.  
- Grounding is the only path to truth.

**Paper link:**  
TBD

**Full citation:**  
Zhang et al., *Why Language Models Hallucinate,* 2024.

**Full correct title:**  
Why Language Models Hallucinate
