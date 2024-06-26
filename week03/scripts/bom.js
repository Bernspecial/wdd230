const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const getChapterList = () => {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
};

const setChapterList = () => {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
};

const displayList = (item) => {
    const buttonList = document.createElement("li");
    const deleteButton = document.createElement("button");

    buttonList.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.classList.add('delete');
    buttonList.append(deleteButton);

    list.append(buttonList);

    deleteButton.addEventListener("click", () => {
        list.removeChild(buttonList);
        deleteChapter(buttonList.textContent);
        input.focus()
    });
};

let chaptersArray = getChapterList() || [];


chaptersArray.forEach(chapter => {
    displayList(chapter);
});


const deleteChapter = (chapter) => {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
};

button.addEventListener("click", () => {
    if (input.value != '') {
        // const buttonList = document.createElement("li");
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
        // const deleteButton = document.createElement("button");

        // buttonList.textContent = input.value;
        // deleteButton.textContent = "❌";

        // buttonList.append(deleteButton);

        // list.append(buttonList);

        // deleteButton.addEventListener("click", () => {
        //     list.removeChild(buttonList);
        //     input.focus()
        // });

    }

    input.focus();
    input.value = '';
});

