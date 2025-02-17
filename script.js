const shareBtn = document.getElementById("shareBtnFirst");
const internalShareBtn = document.getElementsByClassName("__internal")[0];

shareBtn.onclick = (el, e) => {
    const hiddelElement = document.getElementById("hiddenContainer");
    hiddelElement.classList.remove("closed");
    hiddelElement.classList.toggle("active");
}

internalShareBtn.onclick = (el, e) => {
    const hiddelElement = document.getElementById("hiddenContainer");
    hiddelElement.classList.toggle("active");
    hiddelElement.classList.add("closed");
}