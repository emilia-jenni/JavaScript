(function () {
  let firstTime, secondTime;
  window.addEventListener("DOMContentLoaded", (event) => {
    let users = [];
    fetch("https://randomuser.me/api/?results=100")
      .then((resp) => resp.json())
      .then((json) => {
        users = json.results;
        console.log(users);
        renderTable(users);

        const oldest = getOldest(users);
        console.log("The oldest person is", oldest.name, oldest.age);
      })
      .catch((err) => {
        console.log("An err has occured while trying to fetch users");
      });
    document
      .getElementById("sort-button")
      .addEventListener("click", (event) => {
        const sortedUsers = sortUsers(users);
        console.log(sortedUsers);
        renderTable(sortedUsers);
      });
  });

  secondTime = new Date().getTime();
  console.log("hello from anon fn", secondTime);

  function sortUsers(userObjects) {
    for (let i = 0; i < userObjects.length - 1; i++) {
      for (let j = i + 1; j < userObjects.length; j++) {
        if (userObjects[i].dob.age > userObjects[j].dob.age) {
          let temp = userObjects[j];
          userObjects[j] = userObjects[i];
          userObjects[i] = temp;
        }
      }
    }
    return userObjects;
  }
  function renderTable(userObjects) {
    document.getElementById("table-content").innerHTML = "";
    userObjects.forEach((user) => addUser(user));
  }

  function getOldest(userObjects) {
    let oldest = userObjects[0];

    for (let i = 1; i < userObjects.length; i++) {
      if (userObjects[i].age < oldest.age) {
        oldest = userObjects[i];
      }
    }
    return oldest;
  }

  function addUser(userObjects) {
    let newRow = document.createElement("tr");
    newRow.innerHTML = `
    <td>${userObj.id.value}</td>
        <td>${userObj.name.title}. ${userObj.name.first}, ${
      userObj.name.last
    }</td>
        <td>${userObj.dob.age}</td>
        <td>${userObj.gender === "female"}</td>
      `;
    document.getElementById("table-content").appendChild(newRow);
  }

  function getUsers() {
    return [
      {
        studentNo: -1,
        name: "Hagrid",
        age: 65,
      },
      {
        studentNo: 123,
        name: "harry",
        age: 15,
      },
      {
        studentNo: 135,
        name: "Hermione",
        age: 17,
      },
      {
        studentNo: -1,
        name: "Snape",
        age: 55,
      },
      {
        studentNo: 234,
        name: "Ron",
        age: 16,
      },
    ];
  }
})();
