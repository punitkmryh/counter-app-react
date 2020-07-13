# JSX (Javascript-XML)

* React-DOM is package -> DOM-specific methods that can be used at the top level of your app
* `ReactDOM.render(element, container[, callback])`
  * `render()` -> a React element into the DOM in the supplied container and return a reference to the component
    **Example**

    ```JSX
    var template = <h4>This is jsx from app.js.</h4>;
    var appRoot = document.getElementById("app");
    ReactDOM.render(template, appRoot);
    ```

    for rendering in HTML file

    ```html
    <body>
        <h1>Hello React ⚛️!!</h1>
        <div id="app"></div>
    </body>
    ```

## ES6

### `var` Datatype

1. let's you Override and reassign, redefine(duplicate) same variable.

   ```js
   var nameVar = "Punitkumar";
   console.log("name: ", nameVar);
   nameVar = "like";
   console.log("Name: ", nameVar);
   ```

2. They are Function scoped.(is specific to inside function)

   ```js
   function getName(){
     var name="mike"
     return name
   }
   getName()
   console.log(name)
   <!-- Gives error -->
   ```

3. `Let` and `const` can help in overcoming this drawback.

### `let` and `const` Datatype

1. `let` Can reassign but cannot redefine(duplicate)

   ```JS
   let nameLet = "Pompano";
   console.log("US defence: ", nameLet);
   nameLet = "Trump";
   <!-- let nameLet = 'Trump" -->
   console.log("US defence: ", nameLet);
   ```

2. `const` cannot reassign and redefine
   
     1. `const` is functional and Block scoped ->{}

```JS
    const nameConst = "Pompano";
   console.log("US defence: ", nameConst);
   nameConst = "Trump"
   <!-- const nameConst = 'Trump" -->
   console.log("US defence: ", nameConst);
```

### Arrow functions

1. They are always anonymous.

## React-Element

 1. A React element describes what you want to see on the screen.
    * It’s important to note that a React element isn’t actually the thing you’ll see on your screen. Instead,
    * it’s just an object representation of it.
 2. In order to create our object representation of a DOM node (aka a React element),
    we can use React’s `createElement` method.

    ```JSX
        // JSX- Javascript  XML
        var template = React.createElement(
            "h4",
            {id:app},
            "This is jsx from app.js."
        );

        var appRoot = document.getElementById("app");
        ReactDOM.render(template, appRoot);
    ```

    * createElement takes in three arguments.
       1. The **first** is a tag name string (`div`, `span`, etc),
       2. the **second** is any attributes you want the element to have,
       3. the **third** is the contents or the children of the element, in this case, the text.
       4. The createElement invocation above is going to return an object that looks like this.

        ```json
        {
            type: 'h4',
            props: {
                children: '<--text-->',
                id: 'app-id'
            }
        }
        ```

    * When it’s rendered to the DOM (using `ReactDOM.render`), we’ll have a new DOM node that looks like this,

        ```html
        <div id='app-id'>This is jsx from app.js.</div>
        ```

## React-Component

 1. A component is a function or a Class which optionally accepts input and returns a React element.
 2. Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions,but work in isolation and returns HTML via a render function.
 3. Components come in two types, Class components and Function components,
    1. **Create a Class Component**
       * When creating a React component, the component's name must start with an upper case letter.
       * The component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.
       * The component also requires a `render()` method, this method returns HTML.

            ```JSX
            class Car extends React.Component {
                render() {
                    return <h2>Hi, I am a Car!</h2>;
                    }
            }
            ```

       * Now your React application has a component called Car, which returns a `<h2>` element.
       * To use this component in your application, use similar syntax as normal HTML: `<Car />`
        **Example**:
        Display the Car component in the "root" element:

            ```JSX
            ReactDOM.render(<Car />, document.getElementById('root'));
            ```

    2. **Create a Function Component**
       * Here is the same example as above, but created using a Function component instead.
       * A Function component also returns HTML, and behaves pretty much the same way as a Class component,
       * but **Class components have some additions,**.
        **Example**
        Create a Function component called Car

            ```jsx
            function Car() {
                return <h2>Hi, I am also a Car!</h2>;
            }
            ```

       * Once again your React application has a Car component.
       * Refer to the Car component as normal HTML (except in React, components must start with an upper case letter):
        **Example**
        Display the Car component in the "root" element:

            ```JSX
            ReactDOM.render(<Car />, document.getElementById('root'));
            ```

## Dynamic Web pages using `React-Element` and `ReactDOM`

1. Using Variables and Objects which is similar to fetching of data from any Database.

    ```jsx
    var app = {
    title: "Indecision Application",
    subtitle: "Find a way in life",
    };
    var userName="punitkumar"
    var templateEle = (
    <div>
        <p>-------------------------------</p>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <h3>{"Author: "+userName}<h3>
        <p>-------------------------------</p>
    </div>
    );
    var appRoot = document.getElementById("app");
    ReactDOM.render(templateEle, appRoot);
    ```

## Conditional Rendering in JSX

1. Using normal JS conditional operators like `if`, `ternary`, logical `and` operators.

    **Using `if-else` clause in React-element-function**

    ```jsx
    var user = {
      age: 25
    };
    // Using variables for dynamic web page
    var userName = "Punitkumar";

    // React-component-functions
    function getAge(userAge) {
    if (userAge) {
        return userAge;
    } else {
        return "Unknown";
    }
    }

    var templateEleOne = (
    <div>
        <h3>
        {userName.toUpperCase()}
        </h3>
        <p>Age: {getAge(user.age)}</p>
    </div>
    );

    var appRootOne = document.getElementById("app-challenge");
    ReactDOM.render(templateEleOne, appRootOne);
    ```

2. If `else` clause is removed from `getAge()`function than --> **Nothing will be showed on Browser.**

3. HTML tags like `<h1>` can be used inside {} in React-Element:

   ```jsx
   var app = {
       title: "☸️ Indecision App ",
       subtitle: "Find a way to life"
       };
   var templateEle = (
    <div>
        <h1>{app.title ? app.title : "Anonymous"}</h1>
        {<p>{app.subtitle}</p>}
    </div>)
   var appRoot = document.getElementById("app");
   ReactDOM.render(templateEle, appRoot);
   ```

4. Using Ternary operators:

   ```jsx
   var userName="Punitkumar"
   var templateEle = (
       <h1>{userName?userName:"anonymous"</h1>
   );

   var appRootEle = document.getElementById("app")
   ReactDOM.render(templateEle,appRootEle)
   ```

5. `undefined`, `false`, `true`, `null` are ignored by JSX.
6. Using `&&` and `||` operators:
   1. `AND` Operator:
      * `"first" && "second"` when we run it in browser Console we get `"Second"` string.

   2. `OR` Operator:
      * `"first" || "Second"` on running we get `"first"`.

    ```jsx
        var user = {
        age: 25
        };
        // Using variables for dynamic web page
       var userName = "Punitkumar";

        var templateEleOne = (
        <div>
            <h3>
            {userName.toUpperCase()}
            </h3>
            <p>Age: {use.age}</p>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        </div>
       );

        var appRootOne = document.getElementById("app-challenge");
        ReactDOM.render(templateEleOne, appRootOne);
    ```

   * In the above complex operator we perform 2 operations:
       1. Check if age exists? `(user.age && user.age >= 18)`
       2. If age exists the check if age>=18 ? `(user.age && user.age >= 18) && <p>Age: {user.age}</p>`

### React Event handler

1. `onClick={}`
    * Takes function,
    * defined in html tag for certain click events to handle
    
    ```jsx
    let count = 0;
    const addOne = () => {
        console.log("addOne");
        };

    const templateEleTwo = (
        <div>
        <h3>Count:{count}</h3>
        <button onClick={addOne}>+1</button>
        </div>
        );
    const appRootTwo = document.getElementById("count-btn");
    ReactDOM.render(templateEleTwo, appRootTwo);
    ```

2. `onSubmit={}`
    * control the submit action by adding an event handle.
    * covers both keyboardevent and MouseEvent

    ```js

    ```
    
3. `event.preventDefault();` prevents from entering refresh page check in url table.

4. ```js
   const optionList = (strings) => {
       return strings.map((string) => <li key="option">Item-{string}</li>);
       };
   ```

    * `key="option"` makes the list unique.
5. `  const option = event.target.elements.option.value;`
   1. `event` is object.
   2. `event.target` targets the tag mentioned.
   3. `event.target.elements.option.value` -> elements of `option` form tag having `value`

### React-bind

* When we cannot't have access to the instance of the current object of class outside the render,
    we loose the `this` reference props.like:

```js
handleRemoveAll() {
console.log(this.props.options);
}
```

> **:warning:Error:** Returns gives error of not able to access the 

* Can be solved by 2 methods
**1.	Method-1**

```js
class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision Application";
    const subtitle = "❁ Get a way Life ❁";
    const options = ["item 1", "item 2", "item 3"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Options options={options} />
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>RemoveAll</button>
        <p>
          {this.props.options.length > 0
            ? "Here are some options"
            : "No options"}
        </p>
      </div>
    );
  }
}
```

​	**2.	Method-2**

```js
class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision Application";
    const subtitle = "❁ Get a way Life ❁";
    const options = ["item 1", "item 2", "item 3"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Options options={options} />
      </div>
    );
  }
}

class Options extends React.Component {
  handleRemoveAll() {
    console.log(this.props.options);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll.bind(this}>RemoveAll</button>
        <p>
          {this.props.options.length > 0
            ? "Here are some options"
            : "No options"}
        </p>
      </div>
    );
  }
}
```

### React-Component-State

* React components has a built-in state object.
* The state object is where you store property values that belongs to the component.
* When the state object changes, the component re-renders.

 #### Steps to implement component-state

**1. Set a default State object value in Constructor.**

  ```js
   class Counter extends React.Component {
     constructor(props){
       super(props);
       this.handleAddOne = this.handleAddOne.bind(this);
       <!-- $$ default State object -->
       this.state = { };
       }
       render(){
         return
         }
   }
  ```

**2. Component rendered with default state values.**

   ```js
       this.state = { };
   ```

**3. Change state based on event.**
   * method `setState` manipulate state object and component refresh automatically
   * `setState((prevState)=>{})` gets called with single argument that is a **Update function**`()=>{return }` with return.
   * **Update Function** has a Pervious state object values as argument `prevState`.
   * updates state object by returning of various state values  and new values we want to assign.

**4. Component re-rendered using new state values.**

  **1. Method-1:**

  ```js
   handleAddOne() {
    // prevState -> this.state ={} value
    this.setState((prevState) => {
      return {
        count: 0
      };
      })
    }

  ```

  **2. Method-2:**

  ```js
  handleReset() {
    // prevState -> this.state ={} value
    this.setState({count: 0}) // ^ CASE-1
    this.setState({count: prevState.count+1}) // ^ CASE-2
    }
  ```

  > **:warning:** Since, `setState()` is async it wont set count=0 as CASE-1 goes in background and CASE-2 performs the logic

**5. Start again at step-3.**

