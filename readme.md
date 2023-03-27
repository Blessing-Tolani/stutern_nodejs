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
