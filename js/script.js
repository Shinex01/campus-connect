const buttons = document.querySelectorAll(".card button");
const postForm = document.getElementById("postForm");
const message = document.getElementById("formMessage");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.textContent = "Request sent ✓";
    button.disabled = true;
  });
});

// POST QUEST FORM
const showMessage = (text, type) => {
  message.textContent = text;
  message.className = "form-message " + type;
};

postForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = document.getElementById("title").value.trim();
  const need = document.getElementById("need").value.trim();
  const skills = document.getElementById("skills").value.trim();
  const deadline = document.getElementById("deadline").value;
  const today = new Date().toISOString().split("T")[0];

  if (input.length < 5) {
    showMessage("Title must be at least 5 characters long.", "error");
    return;
  }
  if (need === "") {
    showMessage("Tell us what you need.", "error");
    return;
  }
  if (skills === "") {
    showMessage("Add at least one skill.", "error");
    return;
  }
  if (deadline === "") {
    showMessage("Pick a deadline.", "error");
    return;
  }
  if (deadline < today) {
    showMessage("Deadline can't be in the past", "error");
    return;
  }

  showMessage("Quest posted! Students can now respond.", "success");
  postForm.reset();
});
