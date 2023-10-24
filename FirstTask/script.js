const workers = [];

function addOrUpdateWorker() {
  const workerId = document.getElementById("workerId").value;
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const gender = document.getElementById("gender").value;
  const typeOfJob = document.getElementById("typeOfJob").value;
  const salary = document.getElementById("salary").value;

  const existingWorker = workers.find((worker) => worker.id === workerId);
  if (existingWorker) {
    // Update existing worker
    existingWorker.firstName = firstName;
    existingWorker.lastName = lastName;
    existingWorker.gender = gender;
    existingWorker.typeOfJob = typeOfJob;
    existingWorker.salary = salary;
  } else {
    // Add new worker
    const newWorker = {
      id: workerId,
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      typeOfJob: typeOfJob,
      salary: salary,
    };
    workers.push(newWorker);
  }

  clearInputFields();
  alert("Worker Added Successfully");
}

function deleteWorker() {
  const workerId = prompt("Enter Worker ID to Delete:");
  const index = workers.findIndex((worker) => worker.id === workerId);
  if (index !== -1) {
    workers.splice(index, 1);
    alert("Worker Deleted Successfully");
  } else {
    alert("Worker not found for the given ID.");
  }
}

function displayWorkers() {
  let workersHtml = "<h2>Worker List</h2>";
  workers.forEach((worker) => {
    workersHtml += `<p>ID: ${worker.id}, Name: ${worker.firstName} ${worker.lastName}, Gender: ${worker.gender}, Type of Job: ${worker.typeOfJob}, Salary: ${worker.salary}</p>`;
  });
  document.getElementById("result").innerHTML = workersHtml;
}

function getWorkerById() {
  const workerId = prompt("Enter Worker ID:");
  const worker = workers.find((w) => w.id === workerId);

  if (worker) {
    const workerInfo = `ID: ${worker.id}, Name: ${worker.firstName} ${worker.lastName}, Gender: ${worker.gender}, Type of Job: ${worker.typeOfJob}, Salary: ${worker.salary}`;
    alert(workerInfo);
  } else {
    alert("Worker not found for the given ID.");
  }
}

function clearInputFields() {
  document.getElementById("workerId").value = "";
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("typeOfJob").value = "";
  document.getElementById("salary").value = "";
}
