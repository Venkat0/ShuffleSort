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
  for (var i = 0; i < li.length; i++) {
    content.push(li[i]);
  }

  content.sort(function (a, b) {
    var a1 = parseInt(a.innerHTML);
    var b1 = parseInt(b.innerHTML);
    return a1 < b1 ? -1 : a1 > b1 ? 1 : 0;
  });

  content.reverse();

  for (var i = 0; i < content.length; i++) {
    ul.insertBefore(content[i], ul.firstChild);
  }
};
