var ul = document.querySelector("ul");
var li = ul.querySelectorAll("li");

// Shuffle function
const shuffle = () => {
  for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[(Math.random() * i) | 0]);
  }
};

// Sort function
const sort = () => {
  var content = [];
  for (var j = 0; j < li.length; j++) {
    content.push(li[j]);
  }

  content.sort(function (a, b) {
    var valOne = parseInt(a.innerHTML);
    var valTwo = parseInt(b.innerHTML);
    return valOne < valTwo ? -1 : valOne > valTwo ? 1 : 0;
  });

  content.reverse();

  for (var k = 0; k < content.length; k++) {
    ul.insertBefore(content[k], ul.firstChild);
  }
};
