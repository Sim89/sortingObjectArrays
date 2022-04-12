const list = document.querySelector(".list");

const sort_name_button = document.querySelector(".sort-options .sort-name");
const sort_meta_button = document.querySelector(".sort-options .sort-meta");
const sort_age_button = document.querySelector(".sort-options .sort-age");

let list_items = [
   {
      name: "Batman",
      meta: "Black",
      age: "58",
   },
   {
      name: "Superman",
      meta: "Red & Blue",
      age: "33",
   },
   {
      name: "Wonder Woman",
      meta: "Gold, Red & Blue",
      age: "34",
   },
   {
      name: "The Flash",
      meta: "Red & Yellow",
      age: "24",
   },
   {
      name: "Cyborg",
      meta: "Silver",
      age: "28",
   },
   {
      name: "Green Arrow",
      meta: "Green",
      age: "38",
   },
   {
      name: "Nightwing",
      meta: "Blue & Black",
      age: "30",
   },
];

let desc = false;
sort_name_button.addEventListener("click", () => {
   //everytime a button is clicked, we need to call array to sort array by list items-name and desc.
   let array = sort_array_by(list_items, "name", desc);

   //want to display the list.
   displayList(array);

   desc = !desc;
});

sort_meta_button.addEventListener("click", () => {
   let array = sort_array_by(list_items, "meta", desc);
   displayList(array);

   desc = !desc;
});

sort_age_button.addEventListener("click", () => {
   let array = sort_array_by(list_items, "age", desc);
   displayList(array);

   desc = !desc;
});

function sort_array_by(array, sort, desc) {
   array.sort(function (a, b) {
      //if a is smaller than b depending on what the sort is, return -1 so a will go behind b in the array.
      if (a[sort] < b[sort]) return -1;
      if (a[sort] > b[sort]) return 1;
      //return 0 if none of the values are true.
      return 0;
   });

   //if desc is equal to true then want to reverse array order.
   if (desc) array.reverse();

   return array;
}

function displayList(array = []) {
   //Want to clear the .list and don't want to add anything more.
   list.innerHTML = "";

   //When i is equal to 0, i is less than array's length.
   for (let i = 0; i < array.length; i++) {
      let item = array[i];

      //deconstruct each item in the list.
      let item_element = document.createElement("div");
      item_element.classList.add("list-item");

      let title = document.createElement("div");
      title.classList.add("item-title");
      title.innerText = item.name;

      item_element.appendChild(title);

      let meta = document.createElement("div");
      meta.classList.add("item-meta");
      meta.innerText = item.meta;

      item_element.appendChild(meta);

      let age = document.createElement("div");
      age.classList.add("item-age");
      age.innerText = item.age;

      item_element.appendChild(age);

      list.appendChild(item_element);
   }
}

displayList(list_items);
