class FriendList {
    name: string;
}

class Friend {
    name: string;

    constructor(newName: string) {
        this.name = newName;
    }
}

class FriendListMaker {

    constructor() {
        const createListButton = document.getElementById("CreateButton");
        createListButton.addEventListener("click", (e: Event) => this.createFriendList());
    }

    createFriendList() {
        const currentList = new FriendList();
        currentList.name = (document.getElementById("FriendListName") as HTMLInputElement).value;
        document.getElementById("FriendListHeader").innerHTML = currentList.name;
        document.getElementById("FriendListItems").innerHTML = "";
        document.getElementById("CreateListView").hidden = true;
        document.getElementById("FriendListView").style.display = "inline-block";
        this.addEventHandlerToAddFriendButton();
    }

    addEventHandlerToAddFriendButton() {
        const addFriendButton = document.getElementById("AddFriendButton");
        addFriendButton.addEventListener("click", (e: Event) => this.addFriendToList());
    }

    addFriendToList() {
        const newFriendName = (document.getElementById("NewFriendName") as HTMLInputElement).value;

        if (newFriendName) {
            const newFriend = new Friend(newFriendName);
            this.drawFriendList(newFriend);
            (document.getElementById("NewFriendName") as HTMLInputElement).value = "";
        }
    }

    deleteFriendFromList(children: Number, li) {
        document.getElementById("FriendListItems").removeChild(li);
    }

    drawFriendList(newFriend: Friend) {
        const li = document.createElement("li");
        const ul = document.getElementById("FriendListItems");
        const children = ul.children.length + 1;
        const liDeleteButton = this.setupFriendDeleteButton(children);

        this.setupNewFriendListElement(li, ul, liDeleteButton, children, newFriend);

        liDeleteButton.addEventListener("click", (e: Event) => this.deleteFriendFromList(children, li));
    }

    setupNewFriendListElement(li: HTMLElement, ul: HTMLElement, liDeleteButton: HTMLElement, children: Number, newFriend: Friend) {
        li.setAttribute("id", `friend${children}`);
        li.appendChild(document.createTextNode(`${newFriend.name}`));
        li.appendChild(liDeleteButton);
        ul.appendChild(li);
    }

    setupFriendDeleteButton(children: Number) {
        const liDeleteButton = document.createElement("button");
        liDeleteButton.setAttribute("id", `DeleteButtonNumber${children}`);
        liDeleteButton.setAttribute("value", "click");
        return liDeleteButton;
    }
}

window.onload = () => {
    const maker = new FriendListMaker();
};