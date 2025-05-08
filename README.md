# b5-assignment-1
### Blog 1: How does TypeScript help in improving code quality and project maintainability?
In the fast-paced world of software development, shipping reliable and maintainable code is paramount. TypeScript, a statically typed superset of JavaScript, provides robust tools to help teams build scalable and error-resistant applications. Here's how TypeScript contributes to code quality and project maintainability:

#### 1. Type Safety Prevents Bugs Early
TypeScript allows you to define explicit types for variables, function arguments, and return values. This means potential type-related bugs are caught at compile time, not in production.

Example:

function greet(name: string) {
  return `Hello, ${name.toUpperCase()}`;
}

// greet(42); //  Error: Argument of type 'number' is not assignable to parameter of type 'string'

#### 2. Improved Code Readability
With clear type annotations, other developers can understand the purpose of variables and functions without diving deep into the implementation.

#### 3. Powerful IDE Support
TypeScript powers intelligent code completions, navigation, and refactoring tools in editors like VS Code, leading to fewer mistakes and faster development.

#### 4. Refactoring with Confidence
When refactoring code, TypeScript helps detect all the places a variable, function, or type is used. This dramatically reduces the chance of introducing regressions.


### Blog 2 union and intersection types in TypeScript.

#### Union Type
A union type in TypeScript allows a variable to have one of several types. It is represented using the | operator.
##### Example: type Animal = "Dog" | "Cat" | "Bird";
In this example, a variable of type Animal can have the value "Dog", "Cat", or "Bird".
#### Intersection Type
An intersection type combines multiple types into a single type, representing the combination of all types. It is represented using the & operator.
##### Example: type Person = { name: string } & { age: number };
In this example, a variable of type Person must have both a name property of type string and an age property of type number.

