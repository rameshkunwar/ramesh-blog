<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="left">
 Ramesh's personal blog started with Gatsby's <a href="https://github.com/gatsbyjs/gatsby-starter-hello-world">hello-world starter</a>. Gatsby-starter-hello-world template comes with a skeleton to kick-start a Gatsby-based project.
</h1>

<h3>
If you want to start your blog from the scratch, it is recommended you use the hello-world-starter template else, you can use this template which already comes with many settings and plugins (Warning: If you are new to Gatsby, it could be complex to start with someone's template).
</h3>

<h3>
My recommendation is to use the <a href="https://github.com/gatsbyjs/gatsby-starter-hello-world">hello-world starter</a> template and follow Gatsby JS <a href="https://www.gatsbyjs.com/tutorial/">tutorial</a> for understanding Gatsby and GraphQL better. It will add authenticity to your project and you can always look this or other similar project for inspiration/help.
</h3>

This blog (major portion) has been created by following Gatsby JS <a href="https://www.gatsbyjs.com/tutorial/">tutorial</a>

## 🚀 Quick start

1.  ** Install the Gatsby CLI **

```shell
npm install -g gatsby-cli
```

**Clone this (ramesh-blog) repository.**

    ```shell
    # create a new Gatsby site using the hello-world starter
    git clone https://github.com/rameshkunwar/ramesh-blog.git
    ```

1.  **Start developing.**

    Navigate into blog's (ramesh-blog) directory and start it up.

    ```shell
    cd ramesh-blog/
    gatsby develop or npm run start
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    |__ static
    |___ content
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── yarn.lock
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`/content`**: This directory contains all blog posts as well as images used in the blog posts.

4.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

5.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

9.  **`package-lock.json & yarn.lock`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

10. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

11. **`README.md`**: A text file containing useful reference information about your project.
12. **`site-config.js`**: Detailed info about author, colors, etc saved centrally so this file can be referenced.
13. **`/static`**: Files, folders that Gatsby has nothing to do on build process should be placed here. It will be copied as it is during build.
