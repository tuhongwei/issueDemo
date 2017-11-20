var tpl = require("../template/test.art"),
html = tpl(),
test = document.getElementById("test");
test.innerHTML = html;