from github import Github
import os
from dotenv import load_dotenv

load_dotenv()

# -------------------------------
# CONFIG
# -------------------------------
REPO_NAME = "your-org/your-repo"   # e.g., "plotsense/hackathon"
OUTPUT_FILE = "docs/submissions_index.md"
BRANCH = "submissions"             # branch where PRs are merged
WORKFLOW_NAME = "Validate Hackathon Submission"  # must match .yml "name:"
TOKEN = os.environ.get("GITHUB_TOKEN")  # export GITHUB_TOKEN="ghp_...."

# -------------------------------
# MAIN SCRIPT
# -------------------------------
def main():
    if not TOKEN:
        raise ValueError("⚠️ Please set GITHUB_TOKEN as environment variable")

    g = Github(TOKEN)
    repo = g.get_repo(REPO_NAME)

    # Get workflows to find the right one
    workflows = {wf.name: wf for wf in repo.get_workflows()}
    workflow = workflows.get(WORKFLOW_NAME)
    if not workflow:
        raise ValueError(f"Workflow '{WORKFLOW_NAME}' not found in repo.")

    # Fetch merged PRs into submissions branch
    pulls = repo.get_pulls(state="closed", base=BRANCH, sort="updated", direction="desc")

    submissions = []
    for pr in pulls:
        if pr.is_merged():
            body = pr.body or ""
            team = extract_field(body, "Team Name")
            track = extract_field(body, "Track")
            video = extract_video_link(body)
            ci_status = get_ci_status(repo, workflow, pr)

            submissions.append({
                "team": team or pr.title,
                "track": track or "N/A",
                "pr_url": pr.html_url,
                "branch": pr.head.ref,
                "video": video or "N/A",
                "ci": ci_status,
            })

    # Write index file
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write("# Hackathon Submissions Index\n\n")
        f.write("| Team Name | Track | PR Link | Branch | Video Link | CI Status |\n")
        f.write("|-----------|-------|---------|--------|------------|-----------|\n")
        for sub in submissions:
            f.write(f"| {sub['team']} | {sub['track']} | [PR]({sub['pr_url']}) | `{sub['branch']}` | {sub['video']} | {sub['ci']} |\n")

    print(f"✅ Generated {OUTPUT_FILE} with {len(submissions)} submissions.")


def extract_field(text, field_name):
    """Extract a field like 'Team Name' or 'Track' from PR body"""
    for line in text.splitlines():
        if field_name.lower() in line.lower():
            # Expect format: - **Field Name:** Value
            parts = line.split(":")
            if len(parts) > 1:
                return parts[-1].strip()
    return None


def extract_video_link(text):
    """Extract a video link (YouTube/Vimeo/Drive) from PR body"""
    for line in text.splitlines():
        if "http" in line and any(x in line for x in ["youtu", "vimeo", "drive.google"]):
            return line.strip()
    return None


def get_ci_status(repo, workflow, pr):
    """Get latest workflow run status for this PR"""
    runs = workflow.get_runs(branch=pr.head.ref, event="pull_request")
    if runs.totalCount == 0:
        return "⚪ Not Run"
    latest = runs[0]
    if latest.conclusion == "success":
        return "✅ Passed"
    elif latest.conclusion == "failure":
        return "❌ Failed"
    elif latest.status == "in_progress":
        return "⏳ Running"
    else:
        return f"⚠️ {latest.conclusion or 'Unknown'}"


if __name__ == "__main__":
    main()
