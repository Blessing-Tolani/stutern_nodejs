## What is the Event loop ?

The event loop is the loop that runs call back functions on FIFO(First In First Out) idealogy. When Node is initialized, it excutes the call back functions first, import the modules and register the callback to the event loop. The event loop exist to process asynchronous tasks, It allows Node.js to perform non-blocking I/O operations despite the fact that JavaScript is single-threaded, it allows us to use callbacks and promises.

## Explain the 6 phases of the event loop

1. Timers : This phase processes timers that have been set using setTimeout(), setInterval() or setImmediate();
2. Pending Callbacks : This phase processes any callbacks that have been added to the message queue by asynchronous functions;
3. Idle, Prepare: The “idle.ignore” phase is not a standard phase of the event loop in Node.js. It is used internally only, The “idle” phase is a period of time during which the event loop has nothing to do and can be used to perform background tasks, such as running garbage collection or checking for low-priority events.
4. Poll: This phase is used to check for new I/O events and process any that have been detected.
5. Check: This phase processes any setImmediate() callbacks that have been added to the message queue
6. Close Callbacks: This phase processes any callbacks that have been added to the message queue by the close event of a socket. This means that any code that needs to be executed when a socket is closed is placed in the message queue and processed during this phase. If there are no timers, or input/output calls left, the event loop closes and the process ends.

## List some best practices in server-side code development

1. Focus on code quality: Use a formatter like Prettier for syntactical consistency, Follow a JavaScript linting tool such as ESLint - linters check pattern e.g ensure you are not calling a function before declaring them, leaving unused declared variables in the codebase. Use well-named variables and functions.

2. Prefer ES6+ and Async/Await: ES6 is the standard and should be used, server-side development relies heavily on accessing information from databases, a lot of asynchronous calls and in asynchronous javascript, Async/Await syntax is the easiest to read.

3. Keep Code Small: NodeJS encourages the use of modules, Applications should be scalable and services should be kept separate. Similiar functions can be grouped together as individual modules.

4. Handle Errors: The user should be presented with feedback about what has happened and a solution to continue using the application when there is an error. The developer should be writing and presenting relevant error messages to locate edge cases, improve application reliability, and debug.

## What is NPM5: How do you initialize a package in npm

NPM is a tool for managing project dependencies via command line and a website hosting more than 1 million third-party packages that can be used for your project.
Initializing npm will create a package.json within the root of my application folder containing general information about the project.
To initialize a package in npm - $ npm init

## How do you run a script in the package.json ?

To run a script that you have added to your package.json file, simply run $ npm run argument with the name of the script as the argument e.g $ npm run prettier

## Initialize a package if your choice, give it a name and install the following npm packages to it, express, mongoose, joi.

$ npm init <br>
$ npm install express <br>
$ npm install mongoose <br>
$ npm install joi

## Define Monolithic architecture

Monolithic architecture is the traditional approach to building a self-contained application, often called a “single-tier” application. In monolithic, the application contains different components combined together to form a single platform. This architecture is a singular, large computing network with one code base that couples all of the business concerns together. To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the service-side interface. This makes updates restrictive and time-consuming.

## Explain microservices in your own understanding

Microservices is an architectural method that relies on a series of independently deployable services. These services can be developed, deployed and scaled without impacting the others. Microservices decouple major business, domain-specific concerns into separate, independent code bases. Microservices make any complexity visible and more manageable by separating tasks into smaller processes that function independently of each other and contribute to the overall whole. So the idea here is to split your service into smaller interconnected services with its own database.

## Which of the backend architecture appeals to you and why?

Microservices really appeals to me because of the flexibility and ease in scaling. To scale up, I just need to know which of the particular service has so much traffic or needs to be scaled, then scale it up instead of scaling up the whole application.
Also issues and bugs can be pointed out in a service and fixed while other services are running, the fact that a service is down doesn't bring down the whole company application.

## Is Nodejs a multithreaded language?

JavaScript is single threaded, which means that only one set of instructions is executed at a time. However, Let's say you want to read data from a database or do some file operations. By using a single thread, these operations can prevent other operations from running. So when Node.js encounters these operations, it delegates them to a separate pool of threads managed by a C library known as libuv so it provides hidden threads through the libuv library, which handles I/O operations like reading files from a disk or network requests. Through the use of hidden threads, Node.js provides asynchronous methods that allow your code to make I/O requests without blocking the main thread so we can run some operations in parallel so JavaScript is single threaded and Node.js is single threaded with the ability to use threads if an operation is going to require too much power.

## What does REPL stand for?

Read
Eval
Print
Loop
