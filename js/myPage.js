const contents = ["modifyProfile","myWrited","saved","receiveLike"]

function SelectedContent(selectNum){
  for(let i = 0; i < contents.length; i++){
    const element = document.getElementById(contents[i]);
    element.classList.remove("active");
  }
  const selectedElement = document.getElementById(contents[selectNum]);
  selectedElement.classList.add("active");
}
