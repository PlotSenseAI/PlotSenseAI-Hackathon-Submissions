# PlotSense Hackathon Contribution Guide

Welcome to the PlotSense Hackathon! This guide explains how to set up your environment, make submissions, and ensure your work is correctly reviewed.

---

## 1. Hackathon Tracks

- **ML Track**: Focus on notebooks, data analysis, visualization, and AI enhancements.
- **Dev Track**: Focus on improving PlotSense modules, writing tests, and creating technical documentation.

---

## 2. Repository Structure

plotsense-hackathon/
│
├─ libs/plotsense/ # PlotSense library (editable install)
├─ submissions/ # Your submissions go here
│ ├─ teamname-ml/
│ │ ├─ notebooks/
│ │ ├─ video-link.txt
│ │ └─ README.md
│ └─ teamname-dev/
│ ├─ src/
│ ├─ tests/
│ ├─ docs/
│ ├─ requirements.txt
│ ├─ video-link.txt
│ └─ README.md
├─ templates/ # Templates for ML & Dev submissions
└─ scripts/ # Helper scripts (index generation)


---

## 3. Setup

1. **Clone the repository**
```bash
git clone https://github.com/<org>/plotsense-hackathon-2025.git
cd plotsense-hackathon-2025
```
2. **Create a virtual environment**
```bash
python -m venv venv
source venv/bin/activate  # macOS/Linux
venv\Scripts\activate     # Windows
```

3. **Install dependencies**
```bash
pip install -r templates/ml_requirements.txt   # ML track
pip install -r templates/dev_template/requirements.txt  # Dev track
pip install -e ./libs/plotsense
```

4. **Create a .env file**
```bash
GITHUB_TOKEN=<your_personal_access_token>
```

## 4. Making a Submission

1. **Copy the template**

```bash
# ML track
cp -r templates/ml_notebook_template.ipynb submissions/teamname-ml/notebooks/demo.ipynb

# Dev track
cp -r templates/dev_template submissions/teamname-dev
```
2. **Add your work**
- ML: Notebooks, charts, video link in video-link.txt, README.md
- Dev: Code in src/, tests in tests/, docs in docs/, video link, README.md

3. **Commit and push your changes**
```bash 
git checkout -b teamname-ml
git add submissions/teamname-ml
git commit -m "Team Sunrise ML submission"
git push origin teamname-ml
```

4. **Open a Pull Request to the submissions branch with**

5. **Submission Checklist**
- ML Track
    - notebooks/ folder with at least one notebook
    - docs/ folder with at least a pdf
    - video-link.txt
    - requirements.txt
    - README.md

- Dev Track
    - src/ folder with at least one Python file
    - tests/ folder with at least one Python file
    - docs/ folder with at least a pdf
    - requirements.txt
    - video-link.txt
    - README.md

**CI will automatically validate these. Missing files will cause the PR to fail.**

6. **Tips**
- Regularly push changes to avoid conflicts.
- Test notebooks and code locally before PR
- Keep commits clean and meaningful
- Videos should be concise (max 5 minutes recommended)
- Name your team folders consistently (teamname-ml / teamname-dev)
- Use the provided template structure to avoid CI errors

7. **Support**
- For questions or issues during the hackathon:
- Open a discussion in the repo
- Tag the organizers on GitHub
- Check the README.md in the root for additional links and resources

## Good luck and happy hacking!