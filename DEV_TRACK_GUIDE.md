# PlotSense Dev Track Submission Guide

Welcome to the PlotSense Dev Track! This guide will help you make meaningful contributions to the PlotSense project.

## Overview

The Dev Track focuses on contributing to the PlotSense platform by implementing features, fixing bugs, improving documentation, or enhancing the codebase. Your contributions should be made directly to the [PlotSense repository](https://github.com/PlotSenseAI/PlotSense).

For detailed information on what you can contribute, review the [PlotSense Technical Roadmap](https://plotsenseai.gitbook.io/plotsense-technical-roadmap/) which outlines the project's development phases, features, and priorities.

## Prerequisites

Before you start, make sure you have:
- A GitHub account
- Git installed on your local machine
- Basic knowledge of the PlotSense tech stack
- Familiarity with pull request workflows

## Getting Started

### 1. Fork the PlotSense Repository

1. Navigate to [https://github.com/PlotSenseAI/PlotSense](https://github.com/PlotSenseAI/PlotSense)
2. Click the "Fork" button in the top-right corner
3. This creates a copy of the repository under your GitHub account

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/PlotSense.git
cd PlotSense
```

### 3. Set Up Upstream Remote

```bash
git remote add upstream https://github.com/PlotSenseAI/PlotSense.git
git fetch upstream
```

### 4. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

Use descriptive branch names:
- `feature/add-user-analytics`
- `fix/login-timeout-issue`
- `docs/update-api-documentation`

## Making Contributions

### Types of Contributions

1. **Feature Development**: Implement new functionality
2. **Bug Fixes**: Resolve existing issues
3. **Documentation**: Improve README, guides, or code documentation
4. **Performance Improvements**: Optimize existing code
5. **Testing**: Add or improve test coverage
6. **UI/UX Enhancements**: Improve user interface and experience

### Development Workflow

1. **Keep Your Fork Updated**
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Make Your Changes**
   - Write clean, well-documented code
   - Follow the project's coding standards
   - Add tests for new features
   - Update documentation as needed

3. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "type(scope): brief description"
   ```

   **Commit Message Format:**
   - `feat(auth): add OAuth login support`
   - `fix(api): resolve timeout issue in data endpoint`
   - `docs(readme): update installation instructions`
   - `test(utils): add unit tests for helper functions`
   - `refactor(dashboard): improve performance of chart rendering`

4. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

### 5. Create a Pull Request

1. Go to your fork on GitHub
2. Click "Compare & pull request"
3. Fill out the PR template with:
   - **Title**: Clear, descriptive title
   - **Description**: What changes you made and why
   - **Related Issues**: Link any related issues
   - **Testing**: How you tested your changes
   - **Screenshots**: For UI changes, include before/after screenshots

## Submission Requirements

To submit your Dev Track entry, your pull request must include:

### Required Information

Create or update your team's submission file:

```json
{
  "team_name": "Your Team Name",
  "project_name": "Brief Project Name",
  "track": "PlotSense Dev",
  "members": [
    {
      "name": "Team Member 1",
      "github": "github-username",
      "role": "Frontend Developer"
    },
    {
      "name": "Team Member 2",
      "github": "github-username",
      "role": "Backend Developer"
    }
  ],
  "contribution_prs": [
    "https://github.com/PlotSenseAI/PlotSense/pull/YOUR_PR_NUMBER"
  ],
  "description": "Brief description of your contributions",
  "tech_stack": ["React", "Python", "FastAPI"],
  "video_url": "https://youtube.com/watch?v=YOUR_VIDEO_ID",
  "submission_date": "2025-09-30"
}
```

### Submission Steps

1. **Create Your Contribution PR**: Submit your PR to PlotSenseAI/PlotSense
2. **Document Your Submission**: Create a JSON file in `submissions/plotsense-2025-dev/your-team-name.json`
3. **Submit Your Entry**: Create a PR to the official [PlotSenseAI-Hackathon-Submissions](https://github.com/PlotSenseAI/PlotSenseAI-Hackathon-Submissions) repository with your submission file

## Quality Guidelines

Your contributions will be evaluated based on:

- **Code Quality**: Clean, maintainable, well-documented code
- **Impact**: How meaningful and useful your contribution is
- **Testing**: Adequate test coverage
- **Documentation**: Clear documentation of changes
- **Best Practices**: Following project conventions and standards
- **Completeness**: Fully implemented features without breaking existing functionality

## Examples of Good Contributions

### Feature Development
- Implement a new data visualization component
- Add export functionality for reports
- Create a user preferences system

### Bug Fixes
- Fix authentication issues
- Resolve data processing errors
- Address UI rendering problems

### Documentation
- Create comprehensive API documentation
- Write setup guides for different platforms
- Add inline code documentation

### Performance
- Optimize database queries
- Improve frontend rendering performance
- Reduce bundle size

## Tips for Success

1. **Start Early**: Give yourself time to understand the codebase
2. **Communicate**: Ask questions in GitHub issues or discussions
3. **Review Existing Code**: Understand the project structure and patterns
4. **Test Thoroughly**: Ensure your changes don't break existing features
5. **Document Well**: Make it easy for reviewers to understand your changes
6. **Be Responsive**: Address feedback on your PR promptly

## Need Help?

- **Technical Roadmap**: Review the [PlotSense Technical Roadmap](https://plotsenseai.gitbook.io/plotsense-technical-roadmap/) for contribution ideas
- **Project Issues**: Check the [PlotSense Issues](https://github.com/PlotSenseAI/PlotSense/issues)
- **Discussions**: Join conversations in GitHub Discussions
- **Documentation**: Review the PlotSense project documentation

## Important Notes

- All contributions must be original work
- Ensure you have the right to submit the code
- Follow the PlotSense Code of Conduct
- Respect the project maintainers' time and feedback
- Multiple small, focused PRs are better than one large PR

## Submission Deadline

Check the hackathon announcement for the official submission deadline. Late submissions may not be accepted.

---

**Good luck with your contributions! We look forward to seeing your work on PlotSense.**
