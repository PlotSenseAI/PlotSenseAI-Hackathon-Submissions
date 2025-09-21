
# PlotSense Hackathon - September 2025

Welcome to the **PlotSense Hackathon**! This repository hosts all templates, scripts, and submissions for the hackathon. Whether you're participating in the **ML Track** or the **Dev Track**, this README will guide you through the repo structure, contribution workflow, and useful resources.

## 🗂 Repository Structure

```bash
plotsense-hackathon/
│
├─ libs/plotsense/            # PlotSense library (editable install)
│   └─ ...                    # Core PlotSense modules
│
├─ submissions/               # Team submissions
│   ├─ teamname-ml/           # ML track submissions
│   │   ├─ notebooks/         # Jupyter notebooks
│   │   ├─ video-link.txt     # Link to team demo video
        ├─ requirements.txt   # Python dependencies
        ├─ docs/              # Technical documentation
│   │   └─ README.md          # Team description
│   └─ teamname-dev/          # Dev track submissions
│       ├─ src/               # Source code contributions
│       ├─ tests/             # Test scripts
│       ├─ docs/              # Technical documentation
        ├─ notebooks/         # Jupyter notebooks
│       ├─ requirements.txt   # Python dependencies
│       ├─ video-link.txt     # Link to team demo video
│       └─ README.md          # Team description
│
├─ templates/                 # Starter templates for submissions
│   ├─ ml\_notebook\_template.ipynb
│   └─ dev\_template/
│       ├─ src/
│       ├─ tests/
│       ├─ docs/
│       └─ requirements.txt
│
├─ scripts/                   # Helper scripts
│   └─ generate\_submissions\_index.py  # Generates docs/submissions\_index.md
│
├─ docs/                      # Hackathon documentation
│   ├─ CONTRIBUTION\_GUIDE.md   # Guide for participants
│   ├─ JUDGING.md              # Guide for judges
│   └─ submissions\_index.md    # Auto-generated index of all submissions
│
└─ .env                        # Local environment variables (ignored in git)

```

## 📘 Key Documentation

- **[CONTRIBUTION_GUIDE.md](docs/CONTRIBUTION_GUIDE.md)**  
Step-by-step guide for participants: setup, submission workflow, CI checklist, and templates.

- **[JUDGING.md](docs/JUDGING.md)**  
Guidelines for judges: scoring criteria, rubric, review process, and tie-breakers.

- **[submissions_index.md](docs/submissions_index.md)**  
Auto-generated index of all submissions with CI status, video links, and team info.

---

## 🔧 Development Dependencies

All submissions require **PlotSense** as a development dependency.  

- **Install editable version**:

```bash
pip install -e ./libs/plotsense

This ensures participants can **import PlotSense modules directly** for both ML and Dev tracks.
```

## 🚀 How to Contribute

1. Follow the instructions in **[CONTRIBUTION\_GUIDE.md](docs/CONTRIBUTION_GUIDE.md)**
2. Create your submission under `submissions/teamname-ml/` or `submissions/teamname-dev/`
3. Open a **Pull Request** to the `submissions` branch
4. CI will validate your submission (checklist, tests, notebook execution)
5. Your submission will appear automatically in `docs/submissions_index.md` and on the **GitHub Pages** site

## 🧩 CI Workflow

* Validates **submission checklist**
* Runs **Dev tests** (`pytest`) and **ML notebooks** (`nbconvert`)
* Generates **submission\_report.md** artifact for each PR
* Updates **`submissions_index.md`** for judges to review

> Participants receive immediate feedback if any files are missing or if tests/notebooks fail.


## 🎯 Hackathon Tracks

### ML Track

* Focus: Notebooks, data visualizations, AI enhancements
* Required files: `notebooks/`, `video-link.txt`, `README.md`

### Dev Track

* Focus: Source code improvements, tests, technical documentation
* Required files: `src/`, `tests/`, `docs/`, `requirements.txt`, `video-link.txt`, `README.md`

## 💡 Tips for Participants

* Test your notebooks and code locally
* Keep your commits clean and meaningful
* Follow the provided folder structure strictly to pass CI checks
* Use descriptive README and clear video links

## 🏆 Judging

Judges should consult **[JUDGING.md](docs/JUDGING.md)**. All submissions are automatically indexed with **checklist, tests, notebook status, and video links** on GitHub Pages.

## 🛠 Resources

* **PlotSense Docs**: [https://github.com/your-org/plotsense-docs](https://github.com/PlotSenseAI/PlotSense-Docs)
* **PlotSense Dev Repo**: [https://github.com/your-org/plotsense](https://github.com/PlotSenseAI/PlotSense)

**Happy hacking! Build, test, visualize, and share your data insights with PlotSense.**

```


