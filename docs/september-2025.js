let allSubmissions = [];
let filteredTeam = null;

async function loadSubmissions() {
  try {
    const response = await fetch('data/september-2025/submissions.json', { cache: 'no-store' });
    allSubmissions = await response.json();

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
  // Filter submissions if team search is active
  const displaySubmissions = filteredTeam
    ? allSubmissions.filter(sub =>
        sub.team_name?.toLowerCase().includes(filteredTeam.toLowerCase()) ||
        sub.project_name?.toLowerCase().includes(filteredTeam.toLowerCase())
      )
    : allSubmissions;

  // Calculate metrics
  const totalSubmissions = displaySubmissions.length;
  const openPRs = displaySubmissions.filter(s => s.status === 'open').length;
  const mergedPRs = displaySubmissions.filter(s => s.status === 'merged').length;
  const totalTeams = displaySubmissions.length;

  // ML Track
  const mlSubmissions = displaySubmissions.filter(s => s.track === 'PlotSense ML');
  const mlOpen = mlSubmissions.filter(s => s.status === 'open').length;
  const mlMerged = mlSubmissions.filter(s => s.status === 'merged').length;

  // Dev Track
  const devSubmissions = displaySubmissions.filter(s => s.track === 'PlotSense Dev');
  const devOpen = devSubmissions.filter(s => s.status === 'open').length;
  const devMerged = devSubmissions.filter(s => s.status === 'merged').length;

  // Update stats
  document.getElementById('total-submissions').textContent = totalSubmissions;
  document.getElementById('open-prs').textContent = openPRs;
  document.getElementById('merged-prs').textContent = mergedPRs;
  document.getElementById('total-teams').textContent = totalTeams;

  // Update track summary
  document.getElementById('ml-open').textContent = mlOpen;
  document.getElementById('ml-merged').textContent = mlMerged;
  document.getElementById('ml-total').textContent = mlSubmissions.length;

  document.getElementById('dev-open').textContent = devOpen;
  document.getElementById('dev-merged').textContent = devMerged;
  document.getElementById('dev-total').textContent = devSubmissions.length;

  document.getElementById('all-open').textContent = openPRs;
  document.getElementById('all-merged').textContent = mergedPRs;
  document.getElementById('all-total').textContent = totalSubmissions;

  // Render submissions table
  renderSubmissionsTable(displaySubmissions);
}

function renderSubmissionsTable(submissions) {
  const tbody = document.getElementById('submissions-list');

  if (submissions.length === 0) {
    tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; padding: 2rem; color: #6b7280;">No submissions found.</td></tr>';
    return;
  }

  tbody.innerHTML = submissions.map((submission, index) => {
    const statusClass = submission.status === 'open' ? 'status-open' :
                        submission.status === 'merged' ? 'status-merged' :
                        'status-closed';

    const prLink = submission.pr_url
      ? `<a href="${submission.pr_url}" class="pr-link" target="_blank" rel="noopener noreferrer">View PR</a>`
      : '<span style="color: #9ca3af;">No PR</span>';

    const rowId = `team-${index}`;
    const highlightClass = filteredTeam &&
      (submission.team_name?.toLowerCase().includes(filteredTeam.toLowerCase()) ||
       submission.project_name?.toLowerCase().includes(filteredTeam.toLowerCase()))
      ? 'highlight' : '';

    return `
      <tr id="${rowId}" class="${highlightClass}">
        <td><strong>${submission.team_name || 'Unknown Team'}</strong><br>
            <small style="color: #6b7280;">${submission.project_name || 'No project name'}</small>
        </td>
        <td>${submission.track || 'Unknown'}</td>
        <td><span class="status-badge ${statusClass}">${submission.status || 'pending'}</span></td>
        <td>${prLink}</td>
      </tr>
    `;
  }).join('');

  // Scroll to first highlighted row if filtered
  if (filteredTeam && submissions.length > 0) {
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
