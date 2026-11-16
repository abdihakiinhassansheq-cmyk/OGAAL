const year = document.getElementById("year");
const prepareButton = document.getElementById("prepareRequest");
const statusBox = document.getElementById("formStatus");
const requiredFields = [
  document.getElementById("name"),
  document.getElementById("contact"),
  document.getElementById("details")
];

year.textContent = String(new Date().getFullYear());

function showStatus(message, isError = false) {
  statusBox.replaceChildren();
  statusBox.hidden = false;
  statusBox.setAttribute("aria-live", "polite");
  statusBox.style.background = isError ? "rgba(248,113,113,.12)" : "";
  statusBox.style.borderColor = isError ? "rgba(248,113,113,.4)" : "";
  statusBox.style.color = isError ? "#fecaca" : "";
  const paragraph = document.createElement("p");
  paragraph.textContent = message;
  statusBox.append(paragraph);
}

function prepareRequest() {
  const invalidField = requiredFields.find((field) => !field.value.trim());
  if (invalidField) {
    showStatus("Please complete your name, contact details, and project details before preparing the request.", true);
    invalidField.focus();
    return;
  }

  const request = [
    `Name: ${requiredFields[0].value.trim()}`,
    `Contact: ${requiredFields[1].value.trim()}`,
    `Service: ${document.getElementById("service").value}`,
    `Project details: ${requiredFields[2].value.trim()}`
  ].join("\n");
  statusBox.replaceChildren();
  statusBox.hidden = false;
  statusBox.style.background = "";
  statusBox.style.borderColor = "";
  statusBox.style.color = "";
  const title = document.createElement("p");
  title.textContent = "Your request is prepared. This preview does not send it; copy the details below and share them with OGAAL SERVIS using your preferred contact method.";
  const details = document.createElement("p");
  details.className = "request-copy";
  details.textContent = request;
  statusBox.append(title, details);
}

prepareButton.addEventListener("click", prepareRequest);
for (const field of requiredFields) {
  field.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && field.tagName !== "TEXTAREA") {
      event.preventDefault();
      prepareRequest();
    }
  });
}
