console.log(React)
console.log(ReactDOM)

const rootElement = document.getElementById("root_container");


ReactDOM.render('graphics', rootElement);
var elementOne = React.createElement('button', null, "React Button");
ReactDOM.render(elementOne, rootElement);

var menu = React.createElement('menu', null, [
    React.createElement("li", null, "item1"),
    React.createElement("li", null, "item2"),
    React.createElement("li", null, "item3"),
    React.createElement("li", null, "item4"),
])

var menuJSX = (
    <ul>
        <li>Item 1</li>
        <li></li>
    </ul>
);

ReactDOM.render(menu, rootElement);
ReactDOM.render(menuJSX, rootElement);
