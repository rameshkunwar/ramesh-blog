---
title: "A template for asp.net mvc/web api with React js & webpack"
created: "2020-10-15T19:52:48.247"
modified: "2020-10-15T19:52:48.247"
description: "Use React JS as a view with asp.net mvc/web api (.net framework 4.xx). Inject scripts & styles on _Layout.cshtml on build"
featuredImage: "../../images/blog/blog-003-asp-mvc-react-main-01.jpg"
imageCaption: ""
slug: asp-dot-net-mvc-react-js-template
tags: ["asp.net mvc", "asp.net web api", "react js"]
type: post
blogMonth: October 2020
---

![blog image](../../images/blog/blog-003-asp-mvc-react-main-01.jpg " ")

Substitute View of MVC or build front-end of Web API 2 with React JS. This template bundles, splits, minifies & injects scripts & styles on \_Layout.cshtml file dynamically at build time.

Visual Studio 2019 comes with React JS template but only for .Net Core. For the .Net Framework-based projects, two of the many possible things can be done (consuming third-party API is not considered in this blog as it will be pure React app).

An ideal application would be the first choice; however, it has its constraints. Some of the constraints could be:

1. Authentication & authorization: If an organization already has in-house authentication & authorization (example, IdentityServer 3) then one needs to implement it separately. It adds the development time.
2. The complexity with deployment. A small organization might have constraints on numbers of the web servers available. A traditional .Net Framework web-app could be deployed as a single entity, whereas a separate back-end and a front-end add some extra challenges.

Above mentioned limitations give a reason to make a custom .Net Framework template for the web application.

The good news is, it's not difficult to create and use a custom React template which is not only well integrated with ASP.NET MVC/ Web API but also substitutes Razor with React JS. Moreover, bundling with Webpack leverage ES6+ to the project, which Visual Studio bundler (default bundler for .net framework web application) is unable to do.

Advantages of the template:

1. Inject automatically Reacts JS scripts & styles code dynamically to \_Layout.cshtml file.
2. Code splitting for smaller chunks with hashed file name. This helps to load only those files that has been changed. Options for lazy loading, better tree-shaking and other Webpack supported optimization.
3. Use attributes for authentication on the back-end controller as Index page (React root page) is served from the controller.

```
 [Auth(Roles = "role_for_this_service, another_role")]
 public class HomeController : Controller
```

4. Leverage full support of Webpack for bundling, minifying, splitting, which is not possible for .Net Framework web application.

> Confused with the jungle of .Net Framework, .Net Core, .Net 5 and .Net Standard? I'll be writing a blog for that. In this article, I will interchangeably be using .Net Framework and ASP.NET MVC/Web API for the web application that uses .Net Framework 4.x.x.

5. Attribute based authentication & authorization for Web API which is already available (in-house, example, we use IdentityServer3) or can be made using minimum effort.
6. Template using Typescript (template coming soon).

## Enough background! Let's create the template

> _TL;DR The template can be downloaded from the [Github](https://github.com/rameshkunwar/dotNetFramework4.x.x-ReactJS-template.git)_

This template is created using (and assumed they are already installed):

- Microsoft Visual Studio Community 2019(Version 16.7.5). However, should not be a problem with any versions.
- .Net Framework 4.7.2. Again, works from 4.6.1 onward. Change to lower version, if 4.7.2 is not installed on the computer.
- Latest version of Node.js installed

### Create folder for the React

1. Create an empty asp.net mvc or web api project. _Remember to select MVC_. Non essential files and folders will be removed later.
2. Create a folder on the root of the project, say **wwwroot.**. This is where React app resides.
3. Right-click this **wwwroot** folder and select _Open folder in file explorer_.
4. On folder explorer, click on the end of the address bar, this will select all text, if not selected, select all text on address bar.
5. Write **cmd** and hit enter key.
6. This will open a Terminal/Command prompt. It should be something like this, **wwwroot** should be the root.
   `D:\Workspace\AspNetFrameworkReactTemplate\wwwroot>`. This blog assumes React app root folder as _wwwroot_.

### Package.json

1. Package.json contains list of all installed packages as well as command for the development and production build.
2. `npm init` creates package.json file.
   > `npm init` creates an interactive session, which gives a chance to input various entries.
3. After creating package.json, it's time to add packages need to create the template.

### Webpack

`npm install --save-dev webpack` and webpack-cli for > v4.x.x `npm install --save-dev webpack-cli` installs latest version of Webpack as development dependency, i.e., files will not be bundled for production.

We need webpack config files for bundling related operations. We will create 3 files, one common (containing basic settings) and two for development and production respectively. It is also possible to create 4th for staging with little effort.

> > > "While we will separate the production and development specific bits out, note that we'll still maintain a "common" configuration to keep things DRY. In order to merge these configurations together, we'll use a utility called webpack-merge. With the "common" configuration in place, we won't have to duplicate code within the environment-specific configuration" - [webpack](https://webpack.js.org/guides/production/)

1. `npm install --save-dev webpack-merge`
2. Create 3 webpack config files, i.e., webpack.common.js, webpack.prod.js, webpack.dev.js inside _wwwroot_ .
3. Let's tell package.json about webpack config files by adding following:

```
  "scripts": {
    "start": "webpack --config webpack.dev.js --watch",
    "build": "webpack --config webpack.prod.js",
    }
```

4. Let's install some useful packages for webpack. Install all of them using `npm install --save-dev PACKAGE-NAME-WRITTEN-BELOW`
   - @babel/core
   - @babel/preset-env
   - @babel/preset-react
   - babel-loader
   - clean-webpack-plugin
   - css-loader
   - html-webpack-plugin
   - mini-css-extract-plugin
   - optimize-css-assets-webpack-plugin
   - react-svg-loader
   - terser-webpack-plugin

## webpack.common.js

copy and paste following in the file _webpack.common.js_

```
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//This will inject correct path of scripts in _Layout.cshtml via _Layout_Template.cshtml otherwise it will omit /research
const ASSET_PATH = process.env.ASSET_PATH || '/wwwroot/dist/';

module.exports = {
    entry: {
       app: './src/index.js',
    },
    plugins: [
        // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production',
            filename: '../../Views/Shared/_Layout.cshtml',
            template: '../Views/Shared/_Template.cshtml',
            inject: false
        }),
    ],
    module: {
        rules: [
            {
                use: {
                    loader: "babel-loader"
                },
                test: /\.js$|jsx/,
                resolve: {
                    extensions: [".js", ".jsx"]
                },
                exclude: /node_modules/
            },
            {
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                test: /\.css$/
            },
            {
                test: /\.svg$/,
                exclude: path.resolve(__dirname, 'node_modules', 'font-awesome'),
                use: ['babel-loader', 'react-svg-loader'],
            },
        ]
    },
    watch:true,
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
```
