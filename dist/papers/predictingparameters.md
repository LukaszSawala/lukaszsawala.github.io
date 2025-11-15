## TL;DR
Most network parameters are redundant. A small subset (~5–10%) can reconstruct the rest with linear predictors and pseudo-inverse, enabling compression and faster training.

## Core Contribution / Main Lesson
To compress or accelerate a model:

1. **Select anchor weights** (spatially or randomly).  
2. **Train parameter predictors** (low-rank regression or pseudo-inverse).  
3. **Predict remaining parameters** rather than storing them.  
4. **Check conditioning**; if poor, adjust anchors or layer size.  
5. **Apply mostly to structured layers** (CNNs) where smoothness exists.

Outcome: Significant **compression and faster training** with negligible performance loss.

## Main Ideas
- CNNs learn structured filters; many parameters are predictable from a few anchors.  
- Distinguish **active** vs **passive** parameters.  
- Lora-style decomposition: W ≈ UV; learning only V while keeping U fixed approximates full model.  
- Pseudo-inverse allows optimal reconstruction but **conditioning can be unstable**.  
- Realistic usage depends on **network structure** (CNNs, spatial smoothness help).

## Implications / Lessons
- Parameter count ≠ effective degrees of freedom.  
- Exploit low-dimensional structure for **compression and efficiency**.  
- Be cautious of **numerical instability** when scaling to large layers.


## Central Claims
- Most weights are redundant.  
- Low-dimensional structure is exploitable but fragile.  
- Conditioning limits naive scalability.

**Paper link:**  
TBD

**Full citation:**  
Denil et al., *Predicting Parameters in Deep Learning,* 2013.

**Full correct title:**  
Predicting Parameters in Deep Learning