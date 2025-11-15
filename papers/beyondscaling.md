## TL;DR
Most training data contributes nothing to final performance. Using self-supervised pruning (latent k-means hardship scoring), you can remove 20–80% of the dataset with no performance loss, bending scaling curves downwards. Hard vs. easy samples must be selected depending on data availability.

## Core Contribution / Main Lesson
If you want **compute-efficient training**:

1. **Encode dataset** using a self-supervised model.  
2. **Cluster latent embeddings** (k-means or similar).  
3. **Compute “hardship”** = distance to cluster centroid.  
4. **Prune samples** based on hardship and current data regime:
   - abundant → keep hard  
   - scarce → keep easy  
5. Optional: **memorization scoring** for fine-grained pruning.  
6. Retrain using **only the selected subset**.  
7. Monitor **OOD and validation performance** to avoid hidden degradation.

## Main Ideas
- Classical exponential error reduction has slowed; simply adding data gives diminishing returns.  
- **Most samples are redundant**: e.g., reducing cross-entropy from 3.4 → 2.8 requires ~10× more data.  
- Standard supervised pruning fails at scale — label dependence doesn't work for trillion-token regimes.  
- The authors propose **latent-space k-means**:
  - train a self-supervised encoder–decoder  
  - cluster representations  
  - define **“hardship”** as distance to centroid  
- Rule of thumb (very important):  
  - **Abundant data → keep hard samples**  
  - **Scarce data → keep easy samples**  
- A second method: **memorization-based importance** — measure how much including a sample raises its predicted probability; high-gain samples are important.  
- Key concern: **scaling to LLM datasets is unproven**, and **in RL, pruning only hard examples may be harmful**.

## Implications / Lessons
- Dataset quality can be a **scaling axis**: bigger isn’t always better.  
- Self-supervised pruning allows massive compute savings.  
- Selection strategies must account for **data abundance** and **task type**.


Outcome: same or better performance with less compute; scaling curves bend downward.

## Central Claims
- Stage-aware, self-supervised pruning **beats naive full-dataset scaling**.  
- Most data points are redundant; some actively waste compute.  
- Pruning strategy depends on **dataset size, model size, and task**.

**Paper link:**  
TBD

**Full citation:**  
Do et al., *Beyond Neural Scaling Laws: Beating Power Law Scaling via Data Pruning,* OpenAI, 2024.

**Full correct title:**  
Beyond Neural Scaling Laws: Beating Power Law Scaling via Data Pruning