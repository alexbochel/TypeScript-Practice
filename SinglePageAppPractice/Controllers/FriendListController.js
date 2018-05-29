var FriendList = /** @class */ (function () {
    function FriendList() {
    }
    return FriendList;
}());
function createFriendList() {
    var currentList = new FriendList();
    currentList.name = document.getElementById("FriendListName").toString();
    document.getElementById("FriendListHeader").innerHTML = currentList.name;
    var ul = document.getElementById("yourElementId");
    emptyList(ul);
}
function emptyList(ul) {
    while (ul.firstChild)
        ul.removeChild(ul.firstChild);
}
//# sourceMappingURL=FriendListController.js.map