# PlotSenseAI Hackathon 2025 - Dashboard Documentation

## Overview

This GitHub Pages site serves as the official dashboard for the PlotSenseAI Hackathon 2025, providing real-time metrics, submission showcases, and comprehensive analytics for the hackathon.

## Features

### Real-time Metrics Dashboard
- **Submission Statistics**: Live count of total submissions, teams, and validation status
- **Track Distribution**: Visual breakdown of ML vs Dev track participation
- **Technology Analytics**: Most popular tech stacks and frameworks used
- **Timeline Tracking**: Submission trends and daily activity

### Project Showcase
- **Interactive Gallery**: Browse all submitted projects with filtering by track
- **Rich Project Cards**: Display team info, tech stack, demo videos, and social links
- **Validation Status**: Real-time indication of submission validation status
- **Direct Links**: Quick access to GitHub repos and demo videos

### Analytics & Leaderboards
- **Social Engagement**: Track social media activity and community participation
- **Innovation Metrics**: Technology diversity and creative stack usage
- **Completion Rates**: Validation success and submission quality metrics

### Automated Updates
- **5-minute refresh cycle** for real-time data
- **GitHub Actions integration** for automatic deployment
- **Data aggregation** from submission JSON files
- **README statistics** auto-update with submission counts

## Technical Architecture

### Frontend Stack
- **HTML5** with semantic markup and accessibility features
- **Modern CSS** with CSS Grid, Flexbox, and custom properties
- **Vanilla JavaScript** with ES6+ features and async/await
- **Chart.js** for interactive data visualizations
- **Font Awesome** icons and Google Fonts typography

### Data Pipeline
```
GitHub Submissions → Python Data Aggregator → JSON API → Dashboard UI
```

1. **Data Collection**: Python script scans `submissions/` directories
2. **Validation Integration**: Links with existing validation workflow
3. **Metrics Generation**: Real-time statistics and analytics
4. **API Generation**: Structured JSON endpoints for frontend consumption

### Deployment Workflow
```yaml
# Automated GitHub Actions Pipeline
Trigger: Push to main, PR merge, hourly cron
Process: Data aggregation → Build → Deploy to GitHub Pages
Result: Live dashboard with latest submission data
```

## File Structure

```
docs/
├── index.html              # Main dashboard page
├── styles.css              # Comprehensive styling
├── script.js               # Dashboard functionality
├── README.md               # This documentation
├── favicon.ico             # Site favicon
└── data/
    ├── submissions.json    # Aggregated submission data
    └── metrics.json        # Computed metrics and statistics
```

## Design System

### Color Palette
- **Primary**: #6366f1 (Indigo) - Main brand color
- **Secondary**: #06b6d4 (Cyan) - Accent and highlights
- **Success**: #10b981 (Emerald) - Validated submissions
- **Warning**: #f59e0b (Amber) - Pending submissions
- **Error**: #ef4444 (Red) - Failed validations

### Typography
- **Headings**: Inter Bold/ExtraBold
- **Body**: Inter Regular/Medium
- **UI Elements**: Inter Medium/SemiBold

### Component System
- **Cards**: Rounded corners, subtle shadows, hover animations
- **Charts**: Interactive with consistent color scheme
- **Buttons**: Gradient backgrounds with hover states
- **Status Indicators**: Color-coded with clear labels

## Getting Started

### Local Development
```bash
# Clone the repository
git clone https://github.com/PlotSenseAI/PlotSenseAI-Hackathon-Submissions.git

# Navigate to docs directory
cd PlotSenseAI-Hackathon-Submissions/docs

# Serve locally (Python 3)
python -m http.server 8000

# Or with Node.js
npx http-server .

# Visit http://localhost:8000
```

### Data Structure

#### Submission Format
```json
{
  "id": "PSH2025-XXX",
  "track": "PlotSense ML",
  "project_name": "Project Title",
  "team_name": "Team Name",
  "repo_url": "https://github.com/...",
  "video_url": "https://youtube.com/...",
  "social_links": ["https://x.com/...", "https://linkedin.com/..."],
  "team_members": [
    { "name": "Name", "role": "Role" }
  ],
  "tech_stack": ["Python", "React", "..."],
  "status": "validated|pending|failed",
  "submitted_date": "2025-01-15T10:30:00Z"
}
```

#### Metrics Format
```json
{
  "total_submissions": 42,
  "total_teams": 42,
  "tracks": {
    "PlotSense ML": 18,
    "PlotSense Dev": 24
  },
  "status_counts": {
    "validated": 35,
    "pending": 5,
    "failed": 2
  },
  "tech_stack_usage": {
    "Python": 25,
    "React": 20,
    "Node.js": 18
  }
}
```

## Configuration

### Environment Variables
No environment variables required - the dashboard runs entirely client-side with data from JSON files.

### Customization Options

#### Colors (CSS Custom Properties)
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #06b6d4;
    --accent-color: #f59e0b;
    /* ... */
}
```

#### Chart Configuration
Charts use Chart.js with custom themes that can be modified in `script.js`:
```javascript
const chartOptions = {
    plugins: {
        legend: { /* custom legend styling */ }
    },
    scales: { /* custom axis configuration */ }
}
```

## Responsive Design

The dashboard is fully responsive with breakpoints:
- **Desktop**: 1200px+ (Full layout with sidebar charts)
- **Tablet**: 768px-1199px (Stacked layout, larger touch targets)
- **Mobile**: <768px (Single column, optimized navigation)

## Accessibility

- **Semantic HTML** with proper heading hierarchy
- **ARIA labels** for interactive elements
- **Keyboard navigation** support
- **High contrast** color ratios (WCAG AA compliant)
- **Screen reader** compatibility

## SEO Optimization

- **Meta tags** for social media sharing
- **Structured data** for search engines
- **Performance optimization** with lazy loading
- **Progressive enhancement** for all users

## Analytics Integration

Ready for integration with analytics platforms:
```javascript
// Google Analytics 4 example
gtag('event', 'view_submission', {
    'submission_id': submission.id,
    'track': submission.track
});
```

## Security

- **No server-side code** reduces attack surface
- **Static hosting** on GitHub Pages
- **Input sanitization** for any dynamic content
- **CSP headers** recommended for production

## Performance

### Optimization Features
- **Lazy loading** for non-critical resources
- **Image optimization** with modern formats
- **CSS/JS minification** in production build
- **Caching strategies** for static assets

### Performance Metrics
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1

## Contributing

### Adding New Features
1. **Fork** the repository
2. **Create** feature branch
3. **Add** functionality to appropriate files
4. **Update** documentation
5. **Test** across devices and browsers
6. **Submit** pull request

### Reporting Issues
Use GitHub Issues with:
- **Clear description** of the problem
- **Steps to reproduce** the issue
- **Expected vs actual** behavior
- **Screenshots** if applicable

## Maintenance

### Regular Tasks
- **Monitor** dashboard performance
- **Update** dependencies quarterly
- **Review** accessibility compliance
- **Optimize** for new browser features

### Deployment Checklist
- [ ] Test all interactive elements
- [ ] Verify chart rendering
- [ ] Confirm responsive design
- [ ] Validate HTML/CSS
- [ ] Check load times
- [ ] Review analytics data

## Support

For technical issues or questions:
- **GitHub Issues**: [Repository Issues](https://github.com/PlotSenseAI/PlotSenseAI-Hackathon-Submissions/issues)
- **Discord**: `#submissions` channel
- **Email**: Contact through hackathon form

---

Developed by PlotSenseAI and the Havilah Academy team.

**Happy hacking!**