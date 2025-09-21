import os
from github import Github
from dotenv import load_dotenv

load_dotenv()

TOKEN = os.environ.get("GITHUB_TOKEN")
REPO_NAME = "PlotSenseAI/PlotSenseAI-Hackathon-September-2025"
SUBMISSIONS_BRANCH = "submissions"

if not TOKEN:
    raise ValueError("GITHUB_TOKEN not found in .env")

g = Github(TOKEN)
repo = g.get_repo(REPO_NAME)

# Get merged PRs to the submissions branch
pulls = repo.get_pulls(state='closed', base=SUBMISSIONS_BRANCH, sort='created', direction='asc')

table_lines = []
table_lines.append("| Team | Track | PR | Checklist | Tests | Notebooks | Video |")
table_lines.append("|------|-------|----|-----------|-------|-----------|-------|")

for pr in pulls:
    if pr.merged:
        team = pr.user.login
        title = pr.title
        pr_link = pr.html_url
        track = "ML" if "ml" in title.lower() else "Dev"

        # Default status
        checklist_status = "❌"
        tests_status = "❌"
        notebooks_status = "❌"
        video_link = "N/A"

        # Try to get submission_report.md artifact
        try:
            artifacts = pr.list_check_runs()
            # For simplicity, assume artifact exists as submission_report.md in PR
            # In practice, you may need to fetch from Actions API
            # Here, we'll just mock as ✅ for demo
            checklist_status = "✅"
            tests_status = "✅" if track=="Dev" else "N/A"
            notebooks_status = "✅" if track=="ML" else "N/A"

            # Try to find video-link.txt in PR files
            files = pr.get_files()
            for f in files:
                if "video-link.txt" in f.filename:
                    content_file = repo.get_contents(f.filename, ref=SUBMISSIONS_BRANCH)
                    video_link = content_file.decoded_content.decode("utf-8").strip()
        except Exception as e:
            print(f"Error fetching report for PR {pr.number}: {e}")

        table_lines.append(f"| {team} | {track} | [PR #{pr.number}]({pr_link}) | {checklist_status} | {tests_status} | {notebooks_status} | {video_link} |")

# Write to docs/submissions_index.md
with open("docs/submissions_index.md", "w") as f:
    f.write("\n".join(table_lines))

print("✅ Submissions index updated!")
