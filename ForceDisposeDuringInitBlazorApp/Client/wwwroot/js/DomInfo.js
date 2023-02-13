 function GetWidthByElementId(elementId) {
    return document.getElementById(elementId).clientWidth;
}
function GetHeightByElementId(elementId) {
    return document.getElementById(elementId).clientHeight;
}
function GetLeftPositionByElementId(elementId) {
    return document.getElementById(elementId).getBoundingClientRect().left;
}
function GetBottomPositionByElementId(elementId) {
    return document.getElementById(elementId).getBoundingClientRect().bottom;
}
function OpenNewTab(url) {
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        link.remove();
}