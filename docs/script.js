// Global state
let submissionData = [];
let chartInstances = {};

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
    setupEventListeners();
});

async function initializeDashboard() {
    try {
        // Show loading state
        showLoading();

        // Load submission data
        await loadSubmissionData();

        // Update statistics
        updateStatistics();

        // Render submissions
        renderSubmissions();

        // Initialize charts
        initializeCharts();

        // Update last updated time
        updateLastUpdated();

        // Hide loading state
        hideLoading();

    } catch (error) {
        console.error('Failed to initialize dashboard:', error);
        showError('Failed to load dashboard data. Please refresh the page.');
    }
}

async function loadSubmissionData() {
    try {
        // Try to load real data first
        try {
            const response = await fetch('./data/submissions.json');
            if (response.ok) {
                submissionData = await response.json();
                console.log(`Loaded ${submissionData.length} real submissions`);
                return;
            }
        } catch (fetchError) {
            console.log('No real data available, using mock data');
        }

        // Fallback to mock data if real data not available
        submissionData = await generateMockData();

    } catch (error) {
        console.error('Error loading submissions:', error);
        submissionData = [];
    }
}

async function generateMockData() {
    // Mock data to demonstrate functionality
    return [
        {
            id: "PSH2025-001",
            track: "PlotSense ML",
            project_name: "AI-Powered Market Analysis",
            team_name: "DataViz Wizards",
            repo_url: "https://github.com/example/plotsenseai-hackathon-PSH2025-001",
            video_url: "https://youtube.com/watch?v=example1",
            social_links: [
                "https://x.com/example/status/12345",
                "https://linkedin.com/posts/example_plotsense"
            ],
            team_members: [
                { name: "Alice Johnson", role: "ML Engineer" },
                { name: "Bob Smith", role: "Data Scientist" }
            ],
            status: "validated",
            submitted_date: "2025-01-15T10:30:00Z",
            tech_stack: ["Python", "TensorFlow", "PlotSenseAI", "Pandas"]
        },
        {
            id: "PSH2025-002",
            track: "PlotSense Dev",
            project_name: "Advanced Analytics Dashboard",
            team_name: "Code Crafters",
            repo_url: "https://github.com/example/plotsenseai-hackathon-PSH2025-002",
            video_url: "https://youtube.com/watch?v=example2",
            social_links: [
                "https://x.com/example2/status/12346",
                "https://linkedin.com/posts/example2_plotsense"
            ],
            team_members: [
                { name: "Carol Chen", role: "Fullstack Developer" },
                { name: "David Wilson", role: "AI Researcher" },
                { name: "Eve Brown", role: "UX Designer" }
            ],
            status: "pending",
            submitted_date: "2025-01-16T14:20:00Z",
            tech_stack: ["React", "Node.js", "D3.js", "PlotSenseAI", "MongoDB"]
        },
        {
            id: "PSH2025-003",
            track: "PlotSense ML",
            project_name: "Predictive Analytics Engine",
            team_name: "ML Innovators",
            repo_url: "https://github.com/example/plotsenseai-hackathon-PSH2025-003",
            video_url: "https://youtube.com/watch?v=example3",
            social_links: [
                "https://x.com/example3/status/12347",
                "https://linkedin.com/posts/example3_plotsense"
            ],
            team_members: [
                { name: "Frank Davis", role: "ML Engineer" }
            ],
            status: "validated",
            submitted_date: "2025-01-14T09:15:00Z",
            tech_stack: ["Python", "Scikit-learn", "PlotSenseAI", "Docker"]
        }
    ];
}

function updateStatistics() {
    const totalSubmissions = submissionData.length;
    const totalTeams = submissionData.length; // Assuming one team per submission
    const validatedCount = submissionData.filter(s => s.status === 'validated').length;
    const pendingCount = submissionData.filter(s => s.status === 'pending').length;
    const failedCount = submissionData.filter(s => s.status === 'failed').length;

    document.getElementById('total-submissions').textContent = totalSubmissions;
    document.getElementById('total-teams').textContent = totalTeams;
    document.getElementById('validated-count').textContent = validatedCount;
    document.getElementById('pending-count').textContent = pendingCount;
    document.getElementById('failed-count').textContent = failedCount;
}

function renderSubmissions(filterTrack = 'all') {
    const grid = document.getElementById('submissions-grid');
    const filteredData = filterTrack === 'all'
        ? submissionData
        : submissionData.filter(s => s.track === filterTrack);

    if (filteredData.length === 0) {
        grid.innerHTML = `
            <div class="loading">
                <i class="fas fa-info-circle" style="margin-right: 0.5rem;"></i>
                ${submissionData.length === 0 ? 'No submissions yet. Be the first to submit!' : 'No submissions in this track yet.'}
            </div>
        `;
        return;
    }

    grid.innerHTML = filteredData.map(submission => `
        <div class="submission-card" data-track="${submission.track}">
            <div class="submission-header">
                <div class="submission-title">${submission.project_name}</div>
                <div class="submission-track">${submission.track}</div>
            </div>
            <div class="submission-body">
                <div class="team-info">
                    <div class="team-name">${submission.team_name}</div>
                    <div class="team-size">${submission.team_members.length} member${submission.team_members.length > 1 ? 's' : ''}</div>
                </div>
                <div class="team-members">
                    ${submission.team_members.map(member => `
                        <div class="member">${member.name} - ${member.role}</div>
                    `).join('')}
                </div>
                <div class="tech-stack">
                    ${submission.tech_stack ? submission.tech_stack.map(tech => `
                        <span class="tech-tag">${tech}</span>
                    `).join('') : ''}
                </div>
                <div class="submission-links">
                    <a href="${submission.repo_url}" target="_blank" class="submission-link">
                        <i class="fab fa-github"></i>
                        Repository
                    </a>
                    <a href="${submission.video_url}" target="_blank" class="submission-link">
                        <i class="fas fa-play"></i>
                        Demo
                    </a>
                    <div class="status-indicator status-${submission.status}">
                        ${submission.status}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function initializeCharts() {
    initializeTrackDistributionChart();
    initializeSubmissionTimelineChart();
    initializeTechStackChart();
    initializeTeamSizeChart();
}

function initializeTrackDistributionChart() {
    const ctx = document.getElementById('trackDistributionChart').getContext('2d');

    const mlCount = submissionData.filter(s => s.track === 'PlotSense ML').length;
    const devCount = submissionData.filter(s => s.track === 'PlotSense Dev').length;

    chartInstances.trackDistribution = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['ML Track', 'Dev Track'],
            datasets: [{
                data: [mlCount, devCount],
                backgroundColor: ['#6366f1', '#06b6d4'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                }
            }
        }
    });
}

function initializeSubmissionTimelineChart() {
    const ctx = document.getElementById('submissionTimelineChart').getContext('2d');

    // Group submissions by date
    const submissionsByDate = {};
    submissionData.forEach(submission => {
        const date = new Date(submission.submitted_date).toISOString().split('T')[0];
        submissionsByDate[date] = (submissionsByDate[date] || 0) + 1;
    });

    const dates = Object.keys(submissionsByDate).sort();
    const counts = dates.map(date => submissionsByDate[date]);

    chartInstances.submissionTimeline = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: 'Submissions',
                data: counts,
                borderColor: '#6366f1',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function initializeTechStackChart() {
    const ctx = document.getElementById('techStackChart').getContext('2d');

    // Count technology usage
    const techCount = {};
    submissionData.forEach(submission => {
        if (submission.tech_stack) {
            submission.tech_stack.forEach(tech => {
                techCount[tech] = (techCount[tech] || 0) + 1;
            });
        }
    });

    const sortedTech = Object.entries(techCount)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 8); // Top 8 technologies

    chartInstances.techStack = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortedTech.map(([tech]) => tech),
            datasets: [{
                label: 'Usage Count',
                data: sortedTech.map(([, count]) => count),
                backgroundColor: '#06b6d4',
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y'
        }
    });
}

function initializeTeamSizeChart() {
    const ctx = document.getElementById('teamSizeChart').getContext('2d');

    const sizeCount = {};
    submissionData.forEach(submission => {
        const size = submission.team_members.length;
        sizeCount[size] = (sizeCount[size] || 0) + 1;
    });

    const sizes = Object.keys(sizeCount).sort((a, b) => parseInt(a) - parseInt(b));
    const counts = sizes.map(size => sizeCount[size]);

    chartInstances.teamSize = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: sizes.map(size => `${size} member${size > 1 ? 's' : ''}`),
            datasets: [{
                data: counts,
                backgroundColor: ['#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#06b6d4']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

function setupEventListeners() {
    // Track filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const track = e.target.dataset.track;
            renderSubmissions(track);
        });
    });

    // Leaderboard tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            tabButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const tab = e.target.dataset.tab;
            updateLeaderboard(tab);
        });
    });

    // Smooth scrolling for nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function updateLeaderboard(type = 'engagement') {
    const content = document.getElementById('leaderboard-content');

    let sortedData = [...submissionData];

    switch(type) {
        case 'engagement':
            sortedData.sort((a, b) => b.social_links.length - a.social_links.length);
            break;
        case 'innovation':
            sortedData.sort((a, b) => (b.tech_stack?.length || 0) - (a.tech_stack?.length || 0));
            break;
        case 'completion':
            sortedData.sort((a, b) => {
                const scoreA = a.status === 'validated' ? 100 : a.status === 'pending' ? 50 : 0;
                const scoreB = b.status === 'validated' ? 100 : b.status === 'pending' ? 50 : 0;
                return scoreB - scoreA;
            });
            break;
    }

    content.innerHTML = sortedData.map((submission, index) => {
        const rank = index + 1;
        let score = 0;

        switch(type) {
            case 'engagement':
                score = submission.social_links.length * 50;
                break;
            case 'innovation':
                score = (submission.tech_stack?.length || 0) * 20;
                break;
            case 'completion':
                score = submission.status === 'validated' ? 100 : submission.status === 'pending' ? 50 : 0;
                break;
        }

        const rankClass = rank === 1 ? 'gold' : rank === 2 ? 'silver' : rank === 3 ? 'bronze' : '';

        return `
            <div class="leaderboard-item">
                <div class="rank ${rankClass}">${rank}</div>
                <div class="team-details">
                    <div class="leaderboard-team-name">${submission.team_name}</div>
                    <div class="leaderboard-project-name">${submission.project_name}</div>
                </div>
                <div class="score">${score}</div>
            </div>
        `;
    }).join('');
}

function updateLastUpdated() {
    const now = new Date();
    const timeString = now.toLocaleString();
    document.getElementById('last-updated').textContent = timeString;
}

function showLoading() {
    const grids = ['submissions-grid', 'leaderboard-content'];
    grids.forEach(gridId => {
        const grid = document.getElementById(gridId);
        if (grid) {
            grid.innerHTML = `
                <div class="loading">
                    <div class="spinner"></div>
                    Loading data...
                </div>
            `;
        }
    });
}

function hideLoading() {
    // Loading states will be replaced by actual content
}

function showError(message) {
    const grids = ['submissions-grid', 'leaderboard-content'];
    grids.forEach(gridId => {
        const grid = document.getElementById(gridId);
        if (grid) {
            grid.innerHTML = `
                <div class="loading">
                    <i class="fas fa-exclamation-triangle" style="color: #ef4444; margin-right: 0.5rem;"></i>
                    ${message}
                </div>
            `;
        }
    });
}

// Auto-refresh data every 5 minutes
setInterval(async () => {
    try {
        await loadSubmissionData();
        updateStatistics();
        renderSubmissions();

        // Update charts
        Object.values(chartInstances).forEach(chart => {
            if (chart) chart.destroy();
        });
        chartInstances = {};
        initializeCharts();

        updateLastUpdated();
    } catch (error) {
        console.error('Auto-refresh failed:', error);
    }
}, 300000); // 5 minutes

// Initialize leaderboard with default tab
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        updateLeaderboard('engagement');
    }, 1000);
});

// Add missing CSS for new elements
const additionalCSS = `
.member {
    font-size: 0.875rem;
    color: var(--text-secondary);
    margin-bottom: 0.25rem;
}

.tech-stack {
    margin: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tech-tag {
    background: var(--bg-tertiary);
    color: var(--text-secondary);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius-sm);
    font-size: 0.75rem;
    font-weight: 500;
}

.status-indicator {
    padding: 0.25rem 0.75rem;
    border-radius: var(--radius-md);
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.status-validated {
    background: rgba(16, 185, 129, 0.1);
    color: var(--success-color);
}

.status-pending {
    background: rgba(245, 158, 11, 0.1);
    color: var(--warning-color);
}

.status-failed {
    background: rgba(239, 68, 68, 0.1);
    color: var(--error-color);
}
`;

// Inject additional CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalCSS;
document.head.appendChild(styleSheet);