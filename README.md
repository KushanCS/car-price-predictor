# Car Price Prediction System (V7)

An advanced machine learning system for predicting car prices, analyzing feature importance, and forecasting future depreciation using a **Random Forest Regressor** with custom rule-based enhancements.

---

## Model Overview

* **Algorithm**: Random Forest Regressor
* **Version**: V7
* **Evaluation Metrics**:

  * Mean Absolute Error (MAE)
  * R² Score

This model is trained on real-world vehicle data with extensive feature engineering to improve prediction accuracy.

---

##  Key Capabilities

### 1. 📊 Price Prediction Engine

Predicts the market value of a vehicle based on:

* Make & Model
* Year
* Mileage
* Engine Capacity
* Fuel Type
* Transmission
* Location
* Condition

👉 Includes:

* Smart input cleaning
* Automatic feature alignment
* Confidence range using MAE

---

### 2. VIP Guardrail System (Unique Feature)

A custom rule-based layer designed to detect **premium trims** and improve pricing accuracy.

* Filters supported brands:

  * Toyota, Suzuki, Honda, Nissan, Mitsubishi

* Detects premium variants using:

  * Model matching (Aqua, Premio, Axio, etc.)
  * Keyword analysis (`ZXI`, `TURBO`, `GRADE`, etc.)

👉 Output:

* `is_premium_trim` (binary feature)

---

### 3.  Feature Engineering

Key engineered features include:

* `age` → Vehicle age
* `km_per_year` → Usage intensity
* `make_model` → Combined categorical feature
* `is_registered` → Registration status
* One-hot encoded categorical variables

---

### 4. Feature Importance Analysis

Analyzes how much influence each input variable has on price prediction.

Grouped insights:

* Make & Model (dominant factor)
* Age & Mileage (high impact)
* Engine Capacity
* Fuel Type, Gear, Condition
* Location (low impact)

---

### 5. 5-Year Price Forecasting (Time Simulation)

Simulates how a car’s value changes over time based on:

* Future age progression
* Buyer’s expected yearly mileage

👉 Outputs:

* Year-by-year predicted value
* Total depreciation
* Percentage loss over 5 years

---

## Model Training

* Train/Test Split: 85% / 15%
* Parameters:

  * `n_estimators = 100`
  * `max_depth = 15`
  * `random_state = 42`

---

## Saved Model

The trained model is stored as:

```
car_price_model_v7.pkl
```

Includes:

* Trained model
* MAE score
* Feature column structure

---

##  Example Use Cases

* Estimate fair car market value
* Detect overpriced listings
* Identify good deals
* Analyze depreciation before buying
* Build automotive pricing tools

---

## Tech Stack

* Python
* Pandas
* Scikit-learn
* Joblib

---

##  Summary

This project combines:

* **Machine Learning (Random Forest)**
* **Domain Logic (VIP Guardrail)**
* **Simulation (Future Price Prediction)**

to create a practical and intelligent car valuation system.

---
