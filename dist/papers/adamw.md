### **TL;DR**
AdamW applies weight decay correctly by separating it from gradient updates, fixing Adam’s flawed regularization.

### **Core Contribution / Main Lesson**
When training any modern neural network, do:

1. **Switch from Adam to AdamW** whenever weight decay is needed.  
2. **Set weight decay explicitly** (typical 0.01 for many models).  
3. **Tune learning rate and weight decay separately** — they no longer interact.  
4. **Apply weight decay only to weights**, not biases or layernorm parameters.  
5. **Use AdamW for practically all transformer-based architectures.**


### **Main Ideas**
- Adam’s standard L2 regularization isn't actual weight decay.  
- Adaptive gradient scaling corrupts the intended shrinkage.  
- AdamW decouples parameter shrinkage from the gradient step.

### **Implications / Lessons**
- Proper regularization improves generalization.  
- Weight decay and learning rate become independent.  
- AdamW is more stable and predictable.

This leads to **better generalization**, easier hyperparameter tuning, and avoids Adam’s incorrect L2 behavior.

### **Central Claims**
- L2 regularization ≠ weight decay in adaptive optimizers.  
- Decoupling restores theoretical correctness.  
- AdamW is empirically superior.

**Paper link:**  
TBD

**Full citation:**  
Loshchilov & Hutter, *Decoupled Weight Decay Regularization (AdamW),* 2017.

**Full correct title:**  
Decoupled Weight Decay Regularization