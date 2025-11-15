### **TL;DR**
Neural networks have predictable weight structure; most parameters can be reconstructed from a small subset. But pseudo-inverse instability limits scalability.

### **Core Contribution / Main Lesson**
If you want to compress or accelerate model training, try this workflow:

1. **Select anchor weights** (e.g., every k-th neuron or spatial position).  
2. **Train a parameter predictor** (low-rank basis, regression, etc.).  
3. **Predict missing parameters** instead of storing or training them fully.  
4. **Check conditioning** of the reconstruction matrix:  
   - if condition number is high → reduce layer size, increase anchors.  
5. **Use this primarily for CNNs**, where spatial structure makes prediction stable.

This gives you significant **compression or faster training** if the network has smooth weight structure.


### **Main Ideas**
- Trained weights lie on low-dimensional manifolds.  
- A small subset (~5–10%) can recover most of the model performance.  
- Reconstruction uses linear predictors + pseudo-inverse.  
- Large layers are numerically unstable.

### **Implications / Lessons**
- Parameter count is not equal to effective degrees of freedom.  
- Strong structural correlations exist in weights.  
- Practical deployment is limited by matrix conditioning.


### **Central Claims**
- Most weights are redundant.  
- Low-dimensional structure is real but fragile.  
- Numerical conditioning limits scalability.

**Paper link:**  
TBD

**Full citation:**  
Denil et al., *Predicting Parameters in Deep Learning,* 2013.

**Full correct title:**  
Predicting Parameters in Deep Learning