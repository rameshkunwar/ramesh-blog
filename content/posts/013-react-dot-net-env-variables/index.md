---
title: "Creating environment variables for asp.net core 5 React SPA template"
created: "2021-08-30T19:45:46.629"
modified: "2021-08-30T19:45:46.629"
description: "Creating environment variables for development, staging and production for React with asp.net core 5 template"
featuredImage: "../../images/blog/blog_013_react_dontnet_env_variables.jpg"
imageCaption: ""
slug: create-environment-variable-react-asp-dot-net-core
tags: ["asp.net core", ".net5", "react js", "env"]
type: post
blogMonth: August 2021
---

![blog image](../../images/blog/blog_013_react_dontnet_env_variables.jpg " ")

Custom environment variables that is declared once and is available globally can increase the efficiency. Create React App (CRA) provides such a mechanism with `react-scripts@0.2.3` and higher.

Some of the commonly used scenario for environment variables:

1. API key (_warning:_ not a good idea)
2. API base url for different environments (localhost, staging, production, etc)
3. Any global constant that should be available through out the application
4. Filtering out code snippet not needed in certain environment. example, Google Analytics in development and staging.

CRA provides a way to to declare environment variables. Generally it's done using `.env` files. One can create several environment variable files like `.env.staging`, `.env.production`.

The environment variable should be declared in a special way. It has to be named by using a special prefix `REACT_APP_`.
These environment variables will be defined for us on `process.env`.

`REACT_APP_API_BASE_URL = https://mysite.stage.com/myappname/`

The above variable can be accessed anywhere using `process.env.REACT_APP_API_BASE_URL`

> Apart from custom environment variable, by default, `NODE_ENV` variable is defined for us. It is a built-in environment available which is equal to `development` on `npm start`, `production` on `npm run build` and so on.

## CRA as an asp.net core 5 React SPA template

Microsoft has integrated CRA as a React SPA template for .net core web applications. A .net core 5 (also 3.2) web app with React can be created by both cli (`dotnet new react app-name`) or using Visual Studio.

## No need to type `npm ...` commands

Microsoft has integrated CRA as a React SPA template in a way that user should not be bothered to use _npm_ commands. A user can just use traditional way of compiling and running any web app in Visual Studio.

However, this has also created some complexity. By default, there is only two configuration i.e., _Debug_ and _Production_. _npm run start_ for the development and _npm run build_ for the production. What happens if you have a different set of environment variables for the _staging_ but wants to have a _build_ or production output?

At least on Visual Studio 2019, I could not find a straight forward solution. However, good thing is that it can be done.

## Editing _.csproj_ file & creating _staging_ configuration via Configuration Manager

_npm_ command for the development and production is defined in project file _.csproj_ file.

1. Create a _Staging_ configuration via Configuration Manager (click on small dropdown arrow next to Debug on top of Visual Studio menu)
2. Right-click the project and choosen _Edit Project File_
3. Here in the project file, we can see all the publish settings. We will add one for _Staging_.
4. Add the following:

```
  <Target Name="PublishStagingRunWebpack" AfterTargets="ComputeFilesToPublish" Condition=" '$(Configuration)' == 'Staging'  ">
    <!-- As part of publishing, ensure the JS resources are freshly built in production mode -->
    <Exec WorkingDirectory="$(SpaRoot)" Command="npm install" />
    <Exec WorkingDirectory="$(SpaRoot)" Command="npm run staging" />

    <!-- Include the newly-built files in the publish output -->
    <ItemGroup>
      <None Include="appsettings.Staging.json" CopyToOutputDirectory="Always" CopyToPublishDirectory="Always" />
      <None Include="appsettings.json" CopyToOutputDirectory="Never" CopyToPublishDirectory="Never" />
      <DistFiles Include="$(SpaRoot)build\**" />
      <ResolvedFileToPublish Include="@(DistFiles->'%(FullPath)')" Exclude="@(ResolvedFileToPublish)">
        <RelativePath>%(DistFiles.Identity)</RelativePath>
        <CopyToPublishDirectory>PreserveNewest</CopyToPublishDirectory>
        <ExcludeFromSingleFile>true</ExcludeFromSingleFile>
      </ResolvedFileToPublish>
    </ItemGroup>
  </Target>

```

5. Most of the above configuration is copied from Release's with few difference.
   5.1 `Target Name="PublishStagingRunWebpack" AfterTargets="ComputeFilesToPublish" Condition=" '$(Configuration)' == 'Staging' ">` Here we compare with our newly created _Staging_ configuration.
   5.2 ` <Exec WorkingDirectory="$(SpaRoot)" Command="npm run staging" />` Yes, we need to add `npm run staging` which basically gives us a build/production bundle.
6. Let's also add a comparison for the _Release_ or else after running the above command, the command for the release will also run. The below code snippet should be applied to the existing default Release publish profile.

```
 <Target Name="PublishRunWebpack" AfterTargets="ComputeFilesToPublish" Condition=" '$(Configuration)' == 'Release' ">
```

## Updating _package.json_ for the _staging_ & install `env-cmd` npm package

1. Install _env-cmd_ by `npm i env-cmd --save`
2. Go to _package.json_ and add the following under `"scripts"` property (where there is already start, build, test, etc):
   `"staging": "env-cmd -f .env.staging react-scripts build",`
   Basically, it instructs web-pack to read environment variables from .env.staging file and run a 'npm run build' command.
   > For default build, no need to use _env-cmd_ as _npm run build_ default environment file would be _.env.production_

Now, to publish a staging build, we just have to change our configuratin to _Staging_ and just _publish_. It will use the specified environment variable file and specified commands from the _package.json_.

[Read]("https://create-react-app.dev/docs/adding-custom-environment-variables/") more about CRA custom environment variables.

Another .net core React SPA [template]("https://github.com/NetCoreTemplates/react-spa")
