const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener("click", () => {
    if (input.value != '') {
        const buttonList = document.createElement("li");
        const deleteButton = document.createElement("button");

        buttonList.textContent = input.value;
        deleteButton.textContent = "❌";

        buttonList.append(deleteButton);

        list.append(buttonList);

        deleteButton.addEventListener("click", () => {
            list.removeChild(buttonList);
            input.focus()
        })

    }

    input.focus
    input.value = '';
});