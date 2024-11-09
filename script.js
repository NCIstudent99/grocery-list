// Function to add a grocery item to the list
function addItem() {
    const itemInput = document.getElementById("itemInput");
    const itemText = itemInput.value.trim();

    // Input Validation
    if (itemText === "") {
        alert("Please enter an item!");
        return; // Exit the function if the input is empty
    }

    if (itemText.length > 50) {
        alert("Item name is too long! Maximum allowed characters is 50.");
        return;
    }

    // Create a new list item with a remove button
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");

    // Set the itemText as the content of the list item
    listItem.innerText = itemText;

    // Create "Remove" button to delete the item from the list
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-item");
    removeButton.innerText = "Remove";

    // Ask for confirmation before removing
    removeButton.onclick = function () {
        if (confirm("Are you sure you want to remove this item?")) {
            listItem.remove(); // Remove the item from the list
        }
    };

    // Append the remove button to the list item
    listItem.appendChild(removeButton);

    // Append the list item to the unordered list
    document.getElementById("groceryList").appendChild(listItem);

    // Clear the input field after adding the item
    itemInput.value = "";
}
