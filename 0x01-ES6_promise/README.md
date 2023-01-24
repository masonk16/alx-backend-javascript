# 0x01. ES6 Promises

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- Promises (how, why, and what)
- How to use the then, resolve, catch methods
- How to use every method of the Promise object
- Throw / Try
- The await operator
- How to use an async function

## Tasks

| Task | File | Description |
|------|------|-------------|
| 0. Keep every promise you make and only make promises you can keep | 0-promise.js | Return a Promise using this prototype function getResponseFromAPI() |
| 1. Don't make a promise...if you know you can't keep it | `1-promise.js` | Using the prototype below, return a `promise`. The parameter is a `boolean`.

 `getFullResponseFromAPI(success)`
When the argument is:
- `true`:
resolve the promise by passing an object with 2 attributes:
- `status: `200`
- `body`: `'Success'`
- `false`:reject the promise with an error object with the message `The fake API is not working currently` |
