## TL;DR
AdamW fixes Adam’s flawed regularization by decoupling weight decay from gradients, enabling better generalization and independent tuning of learning rate and decay.

## Core Contribution / Main Lesson (Practical)
For modern NN training:

1. **Switch Adam → AdamW**.  
2. **Apply weight decay only to weights**, not biases/LayerNorm.  
3. **Tune learning rate and decay independently**.  
4. Use **warm restarts**: cyclically reset LR to explore new minima.  
5. **Per-parameter LR schedulers**: scale learning rate per parameter group if needed.  
6. Choose weight decay based on **planned number of batch passes**.

Outcome: better generalization, more predictable optimization, avoids Adam’s L2 flaw.

## Main Ideas
- Standard Adam L2 regularization ≠ true weight decay due to adaptive updates.  
- Weight decay should be **decoupled** from gradient step; AdamW achieves this.  
- Optimal weight decay depends on **total number of updates**: more updates → smaller decay.  
- Warm restarts and per-parameter learning rate schedules further improve convergence.

## Implications / Lessons
- Proper regularization improves generalization.  
- Decoupled weight decay allows **independent LR and decay tuning**.  
- Momentum or adaptive optimizers alone do not guarantee proper L2 shrinkage.

## Central Claims
- L2 ≠ weight decay in adaptive optimizers.  
- Decoupling restores theoretical correctness.  
- AdamW empirically outperforms standard Adam.

**Paper link:**  
TBD

**Full citation:**  
Loshchilov & Hutter, *Decoupled Weight Decay Regularization (AdamW),* 2017.

**Full correct title:**  
Decoupled Weight Decay Regularization