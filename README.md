# 🌱 ALAB 308.2.1 – Control Flow: Plant Growth Lab

🌐 Live Demo: 🔗 https://tahmina-official.github.io/PLANTS-LAB-JS/

## 📌 Overview
This project simulates plant growth in a controlled environment using JavaScript.  
It applies control flow (conditionals, loops, and error handling) to make decisions about plant management based on available space.

---

## 🎯 Objectives
- Use conditional statements (`if / else`)
- Implement loops for growth simulation
- Apply mathematical calculations in code
- Handle errors using `try...catch`

---

## 🧪 Part 1: Growing Pains

### Description
A circular garden is used to grow plants. Each plant requires a minimum amount of space, and the population doubles every week.

### Given Data
- Radius: **5 meters**
- Formula: `area = PI × radius²`
- Each plant needs: **0.8 m²**
- Starting plants: **20**
- Growth rate: **Doubles every week**

### Logic
- Calculate garden capacity
- Compare plant growth against capacity

### Actions
- 🌿 **Plant more** → if < 50% capacity  
- 👀 **Monitor** → if between 50% and 80%  
- ✂️ **Prune** → if > 80%  

### Results
- Week 1 → 40 plants  
- Week 2 → 80 plants  
- Week 3 → 160 plants  

---

## 🌍 Part 2: Thinking Bigger

### Scenario
Start with **100 plants** and let them grow for **10 weeks without pruning**.

### Steps
- Simulate exponential growth using a loop
- Calculate required area
- Compute new radius using:


### Outcome
- Final plants: **102,400**
- Required area: **81,920 m²**
- Required radius: **~161.45 meters**

---

## ⚠️ Part 3: Errors in Judgment

### Scenario
Scientists ignore recommendations and attempt to grow **100 plants** in the original garden.

### Logic
- Compare required space vs available space
- Throw an error if capacity is exceeded

### Implementation
- Used `try...catch`
- Custom error with `new Error()`

------

## 👩‍💻 Author
**Tahmina Akter**

---

## 📄 License
This project is licensed for educational purposes only and is intended for learning and demonstration use.
