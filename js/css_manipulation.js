const all = document.getElementById("all");
const theLocation = document.getElementById("location");
const seniorityLevel = document.getElementById("seniority_level");
const jobType = document.getElementById("job_type");
all.onclick = () => {
  if (all.className != "bold") {
    all.className = "bold";
    theLocation.className = "";
    seniorityLevel.className = "";
    jobType.className = "";
  } else {
    all.className = "";
  }
};
theLocation.onclick = () => {
  if (theLocation.className != "bold") {
    theLocation.className = "bold";
    all.className = "";
    seniorityLevel.className = "";
    jobType.className = "";
  } else {
    theLocation.className = "";
  }
};
seniorityLevel.onclick = () => {
  if (seniorityLevel.className != "bold") {
    seniorityLevel.className = "bold";
    all.className = "";
    theLocation.className = "";
    jobType.className = "";
  } else {
    seniorityLevel.className = "";
  }
};
jobType.onclick = () => {
  if (jobType.className != "bold") {
    jobType.className = "bold";
    all.className = "";
    theLocation.className = "";
    seniorityLevel.className = "";
  } else {
    jobType.className = "";
  }
};
