const chapterInput = document.querySelector("#favchap");
const addButton = document.querySelector("button");
const chapterList = document.querySelector("#list");

let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

addButton.addEventListener("click", () => {
    if (chapterInput.value === ""){
        console.log("Error: Input is Blank");
        chapterInput.focus();
    }

    else{
        displayList(chapterInput.value);
        chaptersArray.push(chapterInput.value)
        setChapterList();
        chapterInput.value = "";
        chapterInput.focus();



    }
})

function displayList(item){
    const newItem = item;
    item.value = "";
    const listItem = document.createElement("li")
    const deleteItem = document.createElement("button");
    
    listItem.textContent = newItem;
    chapterList.appendChild(listItem)
    deleteItem.textContent = "❌";
    listItem.appendChild(deleteItem);
    deleteItem.addEventListener("click", () => {
        chapterList.removeChild(listItem);
        deleteChapter(listItem.textContent);
        item.focus;
    })
}

function setChapterList(){
    localStorage.setItem("myFavBOMChapters", JSON.stringify(chaptersArray));
}

function getChapterList(){
    return JSON.parse(localStorage.getItem("myFavBOMChapters"));
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}
