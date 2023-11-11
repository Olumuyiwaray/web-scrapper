A simple web scrapping software 

This web app is can be used to scrape data from various websites, most especially server-side rendered websites

## Table of contents

- [Introduction](#introduction)

- [Getting started](#getting started)

 - [Prerequisites](#prerequisites)

 - [Installation](#installation)

- [Usage](#usage)

- [Contributing](#contributing)

-[License](#license)

## Introduction 

This is just a simple web scrapper web application to demonstrate webscraping

## Getting started

After installing necessary dependencies by running npm install in terminal,
run npm start to start application, visit localhost:3000 in your web browser  

### Prerequisites

 * Nodejs
 * expressJS
 * body-parser
 * ejs
 * axios
 * cheerio

 ### Installation

 * Run npm install to install dependencies

 ## Usage
 After running npm start in the terminal, local development server should start up
 provide url of website you want to get data from in the url field and provide the 
 selector holding the data on the website on in the selector field. To find selector
 go to the website you want to get data from and inspect the website, find the selector
 holding data you need through the element console right on the selector or element
 hover on copy and choose copy js path, paste this in the selector field, rememember
 to remove quotes and document.querySelector before submitting, click submit and application
 should return data you want as json data 

## Contributing

### [We Develop with Github](github.com)

We use github to host code, to track issues and feature requests, as well as accept pull requests.

To contribute:

1. Fork the repository and create your branch from main.
2. If you've changed APIs, update the documentation.
3. Issue that pull request!
4. Always add a README and/or requirements.txt to your added code.

## License

ISC License (ISC)

Copyright (c) [2023] [Samuel Jimoh]

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.