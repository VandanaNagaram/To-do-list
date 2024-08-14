function addTodo(){
	const toIn = document.getElementById("AddTask");
	const toText = toIn.value.trim();

	if(toText === "") {
		alert("Please enter the task");
		return;
	}

	const tolist = document.getElementById("addingToList");
	const item = document.createElement("li");
	const task = document.createElement("span");
	task.textContent = toText;
	task.onclick = function(){
		this.parentElement.classList.toggle('completed');
	};
	const del = document.createElement("button");
	del.textContent = "Del";
	del.onclick = function(){
		this.parentElement.remove();
	};
	item.appendChild(task);
	item.appendChild(del);
	tolist.appendChild(item);
	toIn.value = "";
}