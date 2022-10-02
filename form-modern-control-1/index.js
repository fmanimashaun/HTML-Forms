const invite = document.querySelector("#invite");
const output = document.querySelector(".invite-output");

output.textContent = invite.value;

invite.addEventListener("input", () => {
    output.textContent = invite.value;
});