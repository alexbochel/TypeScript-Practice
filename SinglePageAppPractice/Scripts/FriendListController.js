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
    }
    FriendListMaker.prototype.createFriendList = function () {
        var _this = this;
        var createListButton = document.getElementById("CreateButton");
        if (createListButton != null) {
            createListButton.addEventListener("click", function (e) { return _this.prepareFriendList(); });
        }
    };
    FriendListMaker.prototype.prepareFriendList = function () {
        var _this = this;
        var addFriendButton = document.getElementById("AddFriendButton");
        addFriendButton.addEventListener("click", function (e) { return _this.addFriendToList(); });
    };
    FriendListMaker.prototype.addFriendToList = function () {
        var newFriendName = document.getElementById("NewFriendName").value;
    };
    return FriendListMaker;
}());
window.onload = function () {
    var maker = new FriendListMaker();
    maker.createFriendList();
};
