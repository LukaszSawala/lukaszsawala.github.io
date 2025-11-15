### **TL;DR**
Scaling laws reflect average data quality. With computed loss-based pruning schedules, you can surpass expected scaling performance by training on *less* but *better* data.

### **Core Contribution / Main Lesson**
If training is compute-limited, do **this**:

1. **Score every sample** with a small proxy model using a loss-based metric.  
2. **Sort by loss** and prune:  
   - early training → prune *high-loss, chaotic, noisy* samples  
   - mid training → prune *redundant medium-loss* samples  
   - late training → prune *low-loss, already-learned* samples  
3. **Repeat scoring every few training stages** (“dynamic pruning”).  
4. **Train only on the best ~30–50% of the dataset** per cycle.

You will get **lower final loss with the same compute**, and often **better generalization**.


### **Main Ideas**
- Not all data contributes equally; many samples actively waste compute.  
- Compute-efficient proxy losses allow dynamically pruning unhelpful samples.  
- Pruning early vs. late in training should target different samples.  
- The resulting model outperforms classical power-law predictions.

### **Implications / Lessons**
- Dataset quality should be treated as a scaling axis.  
- The “bigger is always better” assumption breaks.  
- Properly pruned datasets bend the scaling curve downward.

### **Central Claims**
- Stage-aware pruning systematically beats full-dataset scaling.  
- Loss signals can be estimated cheaply with proxy models.  
- Scaling depends on data curation, not just size.

**Paper link:**  
TBD

**Full citation:**  
Do et al., *Beyond Neural Scaling Laws: Beating Power Law Scaling via Data Pruning,* OpenAI, 2024.

**Full correct title:**  
Beyond Neural Scaling Laws: Beating Power Law Scaling via Data Pruning
