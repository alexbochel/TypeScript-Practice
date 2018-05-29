var FriendList = /** @class */ (function () {
    function FriendList() {
    }
    return FriendList;
}());
var Friend = /** @class */ (function () {
    function Friend(newName) {
        this.name = newName;
    }
    return Friend;
}());
var FriendListMaker = /** @class */ (function () {
    function FriendListMaker() {
        var _this = this;
        var createListButton = document.getElementById("CreateButton");
        var addFriendButton = document.getElementById("AddButton");
        createListButton.addEventListener("click", function (e) { return _this.createFriendList(); });
        addFriendButton.addEventListener("click", function (e) { return _this.addFriendToList(); });
    }
    FriendListMaker.prototype.createFriendList = function () {
        var currentList = new FriendList();
        currentList.name = document.getElementById("FriendListName").value;
        document.getElementById("FriendListHeader").innerHTML = currentList.name;
        document.getElementById("FriendListItems").innerHTML = "";
        document.getElementById("CreateListView").hidden = true;
        document.getElementById("FriendListView").style.display = "inline-block";
    };
    FriendListMaker.prototype.addFriendToList = function () {
        var newFriendName = document.getElementById("NewFriendName").value;
        var friendList = document.getElementById("FriendListItems");
        var newFriend = new Friend(newFriendName);
    };
    return FriendListMaker;
}());
window.onload = function () {
    var maker = new FriendListMaker();
};
//# sourceMappingURL=FriendListController.js.map