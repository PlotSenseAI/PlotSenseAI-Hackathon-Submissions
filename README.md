
# PlotSenseAI OpenSource Hackathon Submissions

![Submission Validation](https://github.com/PlotSenseAI/PlotSenseAI-Hackathon-Submissions/workflows/Validate%20Submission/badge.svg)

Welcome to the official submission repository for the **PlotSenseAI Hackathon**

## Hackathon Submission Dashboard
Access the live dashboard of submissions and their statuses here:
[![Hackathon Dashboard](https://img.shields.io/badge/Dashboard-View%20Submissions-blue?logo=github)](https://plotsenseai.github.io/PlotSenseAI-Hackathon-Submissions/)

## Prize Pool Breakdown

**Total Prize Pool: £600**

### Track 1 — PlotSense ML (£200)
Use PlotSenseAI as your primary tool for exploratory data analysis (EDA) in a machine learning project.

### Track 2 — PlotSense Dev (£400)
Develop modules that add advanced analytical capabilities to PlotSenseAI's core functionality.

**For detailed guidelines on Dev Track contributions, see [DEV_TRACK_GUIDE.md](DEV_TRACK_GUIDE.md)**

## Submission Process

### Step 1: Fill the Submission Form
- Complete the [Google Form](https://forms.gle/pdBzSpuJ9iV3Tkhy8 "Open the submission form") with:
  - Project Title + Description
  - Contact Email
  - Social Profile Links (X/Twitter, and LinkedIn)
- **Important:** You'll receive a unique User ID (e.g., `PSH2025-XXX`) after you've submitted the form. Copy and keep somewhere safe. It will be needed for the next steps below.

### Step 2: Create Your Project Repository
Create a **public GitHub repository** with:
- Repository name: `plotsenseai-hackathon-[YOUR-USER-ID]`
- Include in your README.md:
  - Your unique User ID
  - Project description
  - Tech stack used
  - Setup instructions
  - Team members & roles
  - Video demo link (see Step 4 for details)
  - Social media post links (see Step 5 for details)

### Step 3: Submit to This Repository

> **Important:** Submit your entry to the official PlotSense Hackathon Submissions repository:
> **https://github.com/PlotSenseAI/PlotSenseAI-Hackathon-Submissions/**

#### Fork & Create Submission
1. **Fork** the [PlotSenseAI-Hackathon-Submissions](https://github.com/PlotSenseAI/PlotSenseAI-Hackathon-Submissions) repository to your GitHub account
2. **Choose your track** and navigate to the appropriate directory:
   - **PlotSense ML Track**: `submissions/plotsense-2025-ml/`
   - **PlotSense Dev Track**: `submissions/plotsense-2025-dev/`
3. Create a new file: `[your-project-name].json`
4. Use the appropriate template below:

**For PlotSense ML Track:**
```json
{
  "id": "PSH2025-XXX",
  "track": "PlotSense ML",
  "project_name": "Your ML Project Name",
  "team_name": "Your Team Name",
  "repo_url": "https://github.com/yourteam/plotsenseai-hackathon-PSH2025-XXX",
  "video_url": "https://youtube.com/your-demo-video",
  "social_links": [
    "https://x.com/yourteam/status/12345",
    "https://linkedin.com/posts/yourteam_plotsense-hackathon"
  ],
  "discord_handle": "yourhandle#1234",
  "contact_email": "yourteam@example.com",
  "team_members": [
    { "name": "Member 1", "role": "ML Engineer" },
    { "name": "Member 2", "role": "Data Scientist" }
  ]
}
```

**For PlotSense Dev Track:**
```json
{
  "id": "PSH2025-XXX",
  "track": "PlotSense Dev",
  "project_name": "Your Dev Project Name",
  "team_name": "Your Team Name",
  "repo_url": "https://github.com/yourteam/plotsenseai-hackathon-PSH2025-XXX",
  "video_url": "https://youtube.com/your-demo-video",
  "contribution_prs": [
    "https://github.com/plotsenseai/plotsenseai/pull/123",
    "https://github.com/plotsenseai/plotsenseai/pull/124"
  ],
  "social_links": [
    "https://x.com/yourteam/status/12345",
    "https://linkedin.com/posts/yourteam_plotsense-hackathon"
  ],
  "discord_handle": "yourhandle#1234",
  "contact_email": "yourteam@example.com",
  "team_members": [
    { "name": "Member 1", "role": "Fullstack Developer" },
    { "name": "Member 2", "role": "AI Researcher" }
  ]
}
```

#### Submit Pull Request
1. **Commit** your JSON file to your fork
2. **Open a Pull Request** to the `review` branch
3. **PR Title:** `Submission: [YOUR-ID] - [Project Name]`
4. **PR Description:** Include your User ID, repo link, video link, and team details

### Step 4: Video Demo
- Create a **3-5 minute demo video**
- Upload to YouTube (public/unlisted) or Google Drive
- Add the link to your GitHub README and submission JSON

### Step 5: Social Media
- Post about your project on Twitter/X and LinkedIn
- Use hashtags: `#PlotSenseAI #PlotSenseAIHackathon2025 #HavilahAcademy`
- Tag: `@PlotSenseAI` and `@HavilahAcademy`
- Add links to your submission JSON

### Step 6: Discord Verification
Post in the `#submissions` Discord channel with:
- GitHub repo link

## Branch Structure

- **`main`** → Official docs and approved submissions
- **`review`** → Submit PRs here for review
- **`archive/plotsense-2025`** → Post-hackathon archive

## Requirements Checklist

Before submitting, ensure you have:
- [ ] Filled out the Google Form and received your User ID
- [ ] Created your project repository with the correct naming format
- [ ] Included all required information in your project README
- [ ] Created your submission JSON file in the correct track directory
- [ ] Opened a PR to the `review` branch
- [ ] Uploaded your demo video
- [ ] Posted on Twitter/X and LinkedIn with required hashtags
- [ ] Starred PlotSense Github
- [ ] Followed PlotSenseAI and Havilah Academy on X/Twitter, LinkedIn, and YouTube
- [ ] Posted in Discord #submissions channel

## Important Notes

- **One submission per team** - Only one JSON file per team
- **Valid contact email required** - We'll use it for updates
- **Complete all requirements** - Incomplete submissions may not be considered
- **Public repositories only** - Ensure your project repo is public

## Automated Validation

When you submit your PR, our automated system will:
- **Validate your JSON format** - Check all required fields are present
- **Verify User ID format** - Ensure it matches PSH2025-XXX pattern
- **Check repository URL** - Confirm it's a GitHub URL with your User ID
- **Validate social media** - Ensure both Twitter/X and LinkedIn links are provided
- **Verify email format** - Check your contact email is valid
- **Review team structure** - Validate team member information

The bot will comment on your PR with validation results. **Fix any issues** and push changes to re-trigger validation.

## Post-Hackathon

After the hackathon, all approved submissions will be:
- Showcased on the PlotSenseAI website
- Showcased on the Havilah Academy website
- Archived in the `archive/plotsense-2025` branch
- Featured in our community highlights

---

**Questions?** Reach out in the Discord server.

Happy hacking!


