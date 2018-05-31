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
        createListButton.addEventListener("click", function (e) { return _this.createFriendList(); });
    }
    FriendListMaker.prototype.createFriendList = function () {
        var currentList = new FriendList();
        currentList.name = document.getElementById("FriendListName").value;
        document.getElementById("FriendListHeader").innerHTML = currentList.name;
        document.getElementById("FriendListItems").innerHTML = "";
        document.getElementById("CreateListView").hidden = true;
        document.getElementById("FriendListView").style.display = "inline-block";
        this.addEventHandlerToAddFriendButton();
    };
    FriendListMaker.prototype.addEventHandlerToAddFriendButton = function () {
        var _this = this;
        var addFriendButton = document.getElementById("AddFriendButton");
        addFriendButton.addEventListener("click", function (e) { return _this.addFriendToList(); });
    };
    FriendListMaker.prototype.addFriendToList = function () {
        var newFriendName = document.getElementById("NewFriendName").value;
        if (newFriendName) {
            var newFriend = new Friend(newFriendName);
            this.drawFriendList(newFriend);
            document.getElementById("NewFriendName").value = "";
        }
    };
    FriendListMaker.prototype.deleteFriendFromList = function (children, li) {
        document.getElementById("FriendListItems").removeChild(li);
    };
    FriendListMaker.prototype.drawFriendList = function (newFriend) {
        var _this = this;
        var li = document.createElement("li");
        var ul = document.getElementById("FriendListItems");
        var children = ul.children.length + 1;
        var liDeleteButton = this.setupFriendDeleteButton(children);
        this.setupNewFriendListElement(li, ul, liDeleteButton, children, newFriend);
        liDeleteButton.addEventListener("click", function (e) { return _this.deleteFriendFromList(children, li); });
    };
    FriendListMaker.prototype.setupNewFriendListElement = function (li, ul, liDeleteButton, children, newFriend) {
        li.setAttribute("id", "friend" + children);
        li.appendChild(document.createTextNode("" + newFriend.name));
        li.appendChild(liDeleteButton);
        ul.appendChild(li);
    };
    FriendListMaker.prototype.setupFriendDeleteButton = function (children) {
        var liDeleteButton = document.createElement("button");
        liDeleteButton.setAttribute("id", "DeleteButtonNumber" + children);
        liDeleteButton.setAttribute("value", "click");
        return liDeleteButton;
    };
    return FriendListMaker;
}());
window.onload = function () {
    var maker = new FriendListMaker();
};
//# sourceMappingURL=FriendListController.js.map