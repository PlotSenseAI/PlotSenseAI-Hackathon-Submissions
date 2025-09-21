# 📖 Detailed Submission Guide

## 🎯 Overview
This guide provides detailed instructions for participating in the Plotsense Hackathon hosted by Havilah Academy.

## 📝 Step-by-Step Process

### 1. Registration & User ID
1. **Fill out the Google Form** (link provided by organizers)
2. **Receive your unique User ID** via email (format: `PSH2025-XXX`)
3. **Save your User ID** - you'll need it throughout the process

### 2. Project Repository Setup
Create a **public GitHub repository** with these requirements:

#### Repository Naming
- **Format:** `plotsense-hackathon-[YOUR-USER-ID]`
- **Example:** `plotsense-hackathon-PSH2025-023`

#### Required README.md Content
Your project repository must include:

```markdown
# [Project Name] - [Your User ID]

## Project Description
Brief description of what your project does and why it's innovative.

## Tech Stack
- Frontend: React, Next.js, etc.
- Backend: Node.js, Python, etc.
- Database: PostgreSQL, MongoDB, etc.
- AI/ML: TensorFlow, PyTorch, etc.

## Team Members
- **[Name]** - [Role] - [Email]
- **[Name]** - [Role] - [Email]

## Setup Instructions
1. Clone the repository
2. Install dependencies
3. Configure environment variables
4. Run the application

## Demo Video
[Link to your 3-5 minute demo video]

## Social Media
- [Twitter/X post link]
- [LinkedIn post link]
- [Other social media links]

## Hackathon Details
- **User ID:** PSH2025-XXX
- **Team:** [Team Name]
- **Contact:** [Main contact email]
```

### 3. Submission JSON File

#### Step 3.1: Fork This Repository
1. Fork the `PlotSenseAI-Hackathon-Submissions` repository
2. Clone your fork locally

#### Step 3.2: Create Your Submission File
1. Navigate to `submissions/plotsense-2025/`
2. Create a file named `[your-project-name].json`
3. Use the template below:

```json
{
  "id": "PSH2025-XXX",
  "project_name": "Your Project Name",
  "team_name": "Your Team Name",
  "repo_url": "https://github.com/yourteam/plotsense-hackathon-PSH2025-XXX",
  "video_url": "https://youtu.be/your-demo-video",
  "social_links": [
    "https://twitter.com/yourteam/status/12345"
  ],
  "discord_handle": "yourhandle#1234",
  "contact_email": "yourteam@example.com",
  "team_members": [
    { "name": "Member Name", "role": "Developer Role" }
  ]
}
```

#### Step 3.3: Submit Pull Request
1. **Commit** your changes
2. **Push** to your fork
3. **Open a Pull Request** to the `review` branch
4. **Use this PR title format:** `Submission: PSH2025-XXX - [Project Name]`

### 4. Video Demo Requirements
- **Duration:** 3-5 minutes
- **Content:**
  - Project overview and problem solved
  - Live demo of key features
  - Technical highlights
  - Team introduction
- **Platform:** YouTube (public/unlisted) or Google Drive
- **Quality:** Clear audio and visible interface

### 5. Social Media (Optional but Recommended)
- **Platforms:** Twitter/X, LinkedIn, TikTok, Instagram
- **Required hashtags:** `#PlotsenseHackathon #HavilahAcademy`
- **Tag:** `@HavilahAcademy`
- **Content ideas:**
  - Project screenshots
  - Team working photos
  - Behind-the-scenes videos
  - Technical insights

### 6. Discord Verification
Post in the `#submissions` channel with:
```
🚀 **Submission Complete!**
**User ID:** PSH2025-XXX
**Project:** [Project Name]
**Repo:** [GitHub link]
**Demo:** [Video link]
**Social:** [Links if available]
```

## ⚠️ Common Mistakes to Avoid

1. **Wrong repository naming** - Must include your User ID
2. **Private repositories** - Must be public for judging
3. **Missing User ID** - Include in repo name and README
4. **Incomplete JSON** - All required fields must be filled
5. **Wrong branch** - Submit PR to `review` branch, not `main`
6. **Invalid email** - Use a working email for communication
7. **Missing video** - Demo video is required
8. **Late submission** - Submit before deadline

## 🔍 Validation Checklist

Before submitting, verify:
- [ ] Google Form completed and User ID received
- [ ] Project repository is public
- [ ] Repository name includes User ID
- [ ] README.md includes all required sections
- [ ] JSON file follows exact template format
- [ ] All team member information is accurate
- [ ] Contact email is valid and monitored
- [ ] Demo video is accessible and within time limit
- [ ] PR submitted to `review` branch
- [ ] Discord post in `#submissions` channel

## 🏆 Judging Criteria

Projects will be evaluated on:
1. **Innovation & Creativity** (25%)
2. **Technical Implementation** (25%)
3. **User Experience** (20%)
4. **Business Viability** (15%)
5. **Presentation Quality** (15%)

## 🆘 Need Help?

- **Discord:** Ask in the `#help` channel
- **Email:** Contact Havilah Academy organizers
- **Documentation:** Check this repository's README
- **Technical Issues:** Create an issue in this repository

---

**Good luck with your submission! We're excited to see what you build! 🚀**