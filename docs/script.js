async function loadMetrics() {
  try {
    const response = await fetch("data/metrics.json", { cache: "no-store" });
    const metrics = await response.json();

    // Update metrics
    document.getElementById("total-submissions").textContent = metrics.total_submissions;
    document.getElementById("total-teams").textContent = metrics.total_teams;
    document.getElementById("validated-count").textContent = metrics.status_counts.validated;
    document.getElementById("pending-count").textContent = metrics.status_counts.pending;

    // Render charts
    renderCharts(metrics);
  } catch (err) {
    console.error("Failed to load metrics:", err);
  }
}

function renderCharts(metrics) {
  const chartOptions = {
    responsive: true,
    plugins: { legend: { position: "bottom" } }
  };

  // Track Chart
  new Chart(document.getElementById("trackChart"), {
    type: "pie",
    data: {
      labels: Object.keys(metrics.tracks),
      datasets: [{ data: Object.values(metrics.tracks), backgroundColor: ["#2563eb", "#16a34a"] }]
    },
    options: chartOptions
  });

  // Tech Stack Chart
  new Chart(document.getElementById("techChart"), {
    type: "bar",
    data: {
      labels: Object.keys(metrics.tech_stack_usage),
      datasets: [{
        label: "Usage Count",
        data: Object.values(metrics.tech_stack_usage),
        backgroundColor: "#2563eb"
      }]
    },
    options: { ...chartOptions, indexAxis: "y" }
  });

  // Team Sizes
  new Chart(document.getElementById("teamChart"), {
    type: "doughnut",
    data: {
      labels: Object.keys(metrics.team_sizes),
      datasets: [{ data: Object.values(metrics.team_sizes), backgroundColor: ["#f59e0b", "#10b981", "#3b82f6", "#ef4444"] }]
    },
    options: chartOptions
  });

  // Timeline
  new Chart(document.getElementById("timelineChart"), {
    type: "line",
    data: {
      labels: metrics.submission_timeline.map(t => t.date),
      datasets: [{
        label: "Submissions",
        data: metrics.submission_timeline.map(t => t.count),
        fill: true,
        borderColor: "#2563eb",
        backgroundColor: "rgba(37, 99, 235, 0.1)"
      }]
    },
    options: chartOptions
  });
}

// Initial load + auto-refresh every 5 minutes
loadMetrics();
setInterval(loadMetrics, 5 * 60 * 1000);
