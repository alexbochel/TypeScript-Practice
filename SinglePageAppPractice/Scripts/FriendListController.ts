class FriendList {
    name: string;

    constructor() {

    }
}

class Friend {
    name: string;

    constructor(newName) {
        this.name = newName;
    }
}

class FriendListMaker {

    constructor() {
        const createListButton = document.getElementById("CreateButton");
        const addFriendButton = document.getElementById("AddButton");
        createListButton.addEventListener("click", (e: Event) => this.createFriendList());
        addFriendButton.addEventListener("click", (e:Event) => this.addFriendToList());
    }

    createFriendList() {
        const currentList = new FriendList();
        currentList.name = (document.getElementById("FriendListName") as HTMLInputElement).value;
        document.getElementById("FriendListHeader").innerHTML = currentList.name;
        document.getElementById("FriendListItems").innerHTML = "";
        document.getElementById("CreateListView").hidden = true;
        document.getElementById("FriendListView").style.display = "inline-block";
    }

    addFriendToList() {
        const newFriendName = (document.getElementById("NewFriendName") as HTMLInputElement).value;
        const friendList = document.getElementById("FriendListItems");
        const newFriend = new Friend(newFriendName);
    }

    //drawFriendList() {
    //    for (let i = 0; i < currentList.items.length; i++) {

    //    }
    //}
}

window.onload = () => {
    const maker = new FriendListMaker();
};