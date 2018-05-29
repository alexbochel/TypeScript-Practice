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
        
    }

    createFriendList() {
        const createListButton = document.getElementById("CreateButton");

        if (createListButton != null) {
            createListButton.addEventListener("click", (e: Event) => this.prepareFriendList());
        }
    }

    prepareFriendList() {
        const addFriendButton = document.getElementById("AddFriendButton");
        addFriendButton.addEventListener("click", (e: Event) => this.addFriendToList());
    }

    addFriendToList() {
        const newFriendName = (document.getElementById("NewFriendName") as HTMLInputElement).value;
    }
}

window.onload = () => {
    const maker = new FriendListMaker();
    maker.createFriendList();
};