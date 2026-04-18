# SG Retirement Planner 🇸🇬

A comprehensive, Singapore-specific retirement readiness calculator for Citizens and PRs.

**Live demo:** `https://YOUR-USERNAME.github.io/sg-retirement-planner`

---

## What it covers

| Category | Details |
|---|---|
| **CPF** | OA / SA / MA / RA balances, 2024 contribution rates (20% + 17%), age-based rate changes, CPF LIFE BRS/FRS/ERS, property pledge & accrued interest, SA top-up tax relief |
| **CPF LIFE** | BRS (~S$900/mo), FRS (~S$1,700/mo), ERS (~S$2,400/mo) payout estimates. Deferral bonus of ~7%/yr from 65→70. |
| **Property** | HDB or condo, multiple properties, mortgage repayment, rental income, downgrade/sell proceeds, CPF refund on sale |
| **Investments** | SG stocks/REITs, foreign ETFs (IBKR etc.), SSB/T-bills/bonds, endowment insurance, SRS account |
| **Business income** | Multiple income streams; models whether they continue in retirement |
| **Healthcare** | Separate healthcare inflation rate (default 4%), MediShield Life note |
| **Scenarios** | Bear market, bull market, retire early/late, high inflation |
| **Recommendations** | Personalised action items based on your inputs |

---

## Features

- 📊 Wealth projection chart (liquid + CPF + property equity)
- 📈 Annual savings/deficit waterfall
- 🥧 Retirement income sources breakdown
- 🏦 CPF account growth chart with age-55 SA→RA transfer
- 💼 Asset composition donut chart at retirement
- 🔀 6-scenario comparison bar chart
- 💡 Personalised Singapore-specific recommendations
- 🔗 Save inputs to URL (bookmark your scenario)
- 🖨️ Print-friendly layout

---

## How to deploy to GitHub Pages

### Option A — Simplest (drag & drop)

1. Create a new repo on [github.com](https://github.com/new) named `sg-retirement-planner`
2. Upload `index.html`
3. Go to **Settings → Pages → Source → Deploy from a branch → main → / (root)**
4. Wait ~60 seconds. Your planner is live at `https://YOUR-USERNAME.github.io/sg-retirement-planner`

### Option B — Git CLI

```bash
git init
git add index.html README.md
git commit -m "Initial commit: SG Retirement Planner"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/sg-retirement-planner.git
git push -u origin main
```

Then enable Pages in repo Settings as above.

---

## Assumptions & limitations

- CPF contribution rates based on **2024 CPF Board rates**
- CPF LIFE payouts are **estimates** — actual amounts depend on your RA balance at 55, CPF Board adjustments, and chosen plan
- Property appreciation modelled at a flat annual rate (no market volatility)
- Returns are pre-tax for simplicity (SRS tax deferral noted qualitatively)
- Healthcare modelled as a separate line item; MediShield Life covers hospitalisation
- This is **not financial advice** — consult a MAS-licensed financial adviser

---

## Useful Singapore resources

- [CPF Board](https://www.cpf.gov.sg) — official CPF balances, calculators
- [CPF LIFE estimator](https://www.cpf.gov.sg/member/retirement-income/retirement-schemes/cpf-life)
- [MAS Financial Adviser search](https://www.mas.gov.sg/regulation/registers-and-directories)
- [MoneySense](https://www.moneysense.gov.sg) — Singapore's financial literacy portal
- [CPFIS-OA/SA approved investments](https://www.cpf.gov.sg/member/growing-your-savings/earning-higher-returns/investing-your-cpf-savings)

---

## Local development

No build tools needed. Just open `index.html` in a browser:

```bash
open index.html
# or
python3 -m http.server 8080
```

---

*Built with vanilla HTML/CSS/JS + Chart.js. No frameworks, no dependencies to install, no backend required.*
