let allSubmissions = [];
let metricsData = null;
let filteredTeam = null;

async function loadSubmissions() {
  try {
    const [submissionsResponse, metricsResponse] = await Promise.all([
      fetch('data/september-2025/submissions.json', { cache: 'no-store' }),
      fetch('data/september-2025/metrics.json', { cache: 'no-store' })
    ]);

    allSubmissions = await submissionsResponse.json();
    metricsData = await metricsResponse.json();

    // Check if we have a team filter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const teamParam = urlParams.get('team');
    if (teamParam) {
      filteredTeam = teamParam;
      document.getElementById('team-search').value = teamParam;
    }

    updateDashboard();
  } catch (err) {
    console.error('Failed to load submissions:', err);
    document.getElementById('submissions-list').innerHTML =
      '<tr><td colspan="4" style="text-align: center; padding: 2rem; color: #ef4444;">Failed to load submissions. Please try again later.</td></tr>';
  }
}

function updateDashboard() {
  // Filter out submissions with Unknown track (used for testing)
  const validSubmissions = allSubmissions.filter(sub => sub.track !== 'Unknown');

  // Filter submissions if team search is active
  const displaySubmissions = filteredTeam
    ? validSubmissions.filter(sub =>
        sub.team_name?.toLowerCase().includes(filteredTeam.toLowerCase()) ||
        sub.project_name?.toLowerCase().includes(filteredTeam.toLowerCase())
      )
    : validSubmissions;

  // Get PR data from metrics and filter out Unknown track
  const prData = metricsData?.prs || { total_open: 0, total_merged: 0, open_prs: [], merged_prs: [] };

  // Calculate metrics from PR data (submissions are represented by PRs)
  const openPRs = prData.total_open;
  const mergedPRs = prData.total_merged;
  const totalSubmissions = openPRs + mergedPRs;

  // Count unique teams from PRs
  const allPRs = [...(prData.open_prs || []), ...(prData.merged_prs || [])];
  const uniqueTeams = new Set(allPRs.map(pr => pr.user).filter(Boolean));
  const totalTeams = uniqueTeams.size || displaySubmissions.length;

  // ML Track
  const mlSubmissions = displaySubmissions.filter(s => s.track === 'PlotSense ML');

  // Dev Track
  const devSubmissions = displaySubmissions.filter(s => s.track === 'PlotSense Dev');

  // Update stats
  document.getElementById('total-submissions').textContent = totalSubmissions;
  document.getElementById('open-prs').textContent = openPRs;
  document.getElementById('merged-prs').textContent = mergedPRs;
  document.getElementById('total-teams').textContent = totalTeams;

  // Update track summary with PR breakdown by track
  const mlTrack = prData.ml_track || { open: 0, merged: 0 };
  const devTrack = prData.dev_track || { open: 0, merged: 0 };

  document.getElementById('ml-open').textContent = mlTrack.open;
  document.getElementById('ml-merged').textContent = mlTrack.merged;
  document.getElementById('ml-total').textContent = mlTrack.open + mlTrack.merged;

  document.getElementById('dev-open').textContent = devTrack.open;
  document.getElementById('dev-merged').textContent = devTrack.merged;
  document.getElementById('dev-total').textContent = devTrack.open + devTrack.merged;

  document.getElementById('all-open').textContent = openPRs;
  document.getElementById('all-merged').textContent = mergedPRs;
  document.getElementById('all-total').textContent = totalSubmissions;

  // Render submissions table with PR data
  renderSubmissionsTable(displaySubmissions, prData);
}

function renderSubmissionsTable(submissions, prData) {
  const tbody = document.getElementById('submissions-list');

  // Combine submissions with PR data and filter out Unknown track
  const allPRs = [...(prData.open_prs || []), ...(prData.merged_prs || [])]
    .filter(pr => pr.track !== 'Unknown');

  if (submissions.length === 0 && allPRs.length === 0) {
    tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; padding: 2rem; color: #6b7280;">No submissions found.</td></tr>';
    return;
  }

  // Create a map of submission IDs to their data
  const submissionMap = new Map();
  submissions.forEach(sub => {
    submissionMap.set(sub.id, sub);
  });

  // Render PRs
  const prRows = allPRs.map((pr, index) => {
    const prTitle = pr.title || 'Untitled PR';
    const prNumber = pr.number;
    const prState = pr.state;
    const prUrl = pr.html_url;

    // Try to extract team info from PR title (format: "Submission: PSH2025-XXX - Project Name")
    const idMatch = prTitle.match(/PSH2025-\d{3}/);
    const submissionId = idMatch ? idMatch[0] : null;
    const submission = submissionId ? submissionMap.get(submissionId) : null;

    const statusClass = prState === 'open' ? 'status-open' :
                        prState === 'merged' ? 'status-merged' :
                        'status-closed';

    const teamName = submission?.team_name || pr.user || 'Unknown Team';
    const projectName = submission?.project_name || prTitle.split(' - ')[1] || '';

    // Use track from PR data (which was detected from submission), fallback to submission track
    const track = pr.track || submission?.track || 'Unknown';

    const prLink = prUrl
      ? `<a href="${prUrl}" class="pr-link" target="_blank" rel="noopener noreferrer">PR #${prNumber}</a>`
      : '<span style="color: #9ca3af;">No PR</span>';

    // Determine track badge class
    const trackClass = track === 'PlotSense ML' ? 'track-ml' :
                       track === 'PlotSense Dev' ? 'track-dev' :
                       'track-unknown';

    const trackDisplay = track === 'PlotSense ML' ? 'ML Track' :
                         track === 'PlotSense Dev' ? 'Dev Track' :
                         track;

    const rowId = `pr-${index}`;
    const highlightClass = filteredTeam &&
      (teamName?.toLowerCase().includes(filteredTeam.toLowerCase()) ||
       projectName?.toLowerCase().includes(filteredTeam.toLowerCase()))
      ? 'highlight' : '';

    return `
      <tr id="${rowId}" class="${highlightClass}">
        <td><strong>${teamName}</strong><br>
            <small style="color: #6b7280;">${projectName}</small>
        </td>
        <td><span class="track-badge ${trackClass}">${trackDisplay}</span></td>
        <td><span class="status-badge ${statusClass}">${prState}</span></td>
        <td>${prLink}</td>
      </tr>
    `;
  }).join('');

  tbody.innerHTML = prRows || '<tr><td colspan="4" style="text-align: center; padding: 2rem; color: #6b7280;">No submissions found.</td></tr>';

  // Scroll to first highlighted row if filtered
  if (filteredTeam && allPRs.length > 0) {
    setTimeout(() => {
      const firstHighlight = document.querySelector('.highlight');
      if (firstHighlight) {
        firstHighlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  }
}

// Search functionality
const searchInput = document.getElementById('team-search');

searchInput.addEventListener('input', (e) => {
  const query = e.target.value.trim();

  if (query.length === 0) {
    filteredTeam = null;
    // Remove team parameter from URL
    const url = new URL(window.location);
    url.searchParams.delete('team');
    window.history.replaceState({}, '', url);
  } else {
    filteredTeam = query;
    // Update URL with team parameter
    const url = new URL(window.location);
    url.searchParams.set('team', query);
    window.history.replaceState({}, '', url);
  }

  updateDashboard();
});

// Handle enter key in search
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    const query = e.target.value.trim();
    if (query) {
      filteredTeam = query;
      updateDashboard();
    }
  }
});

// Load data on page load
loadSubmissions();

// Auto-refresh every 5 minutes
setInterval(loadSubmissions, 5 * 60 * 1000);
