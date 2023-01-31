---
title: "Schema validation with Zod with Typescript"
created: "2023-01-31T21:29:01.947"
modified: "2023-01-31T21:29:01.947"
description: "Taking Typescript one step ahead with Zod"
featuredImage: "../../images/blog/zod.jpg"
imageCaption: ""
slug: validate-schema-with-zod
tags: ["zod", "typescript"]
type: post
blogMonth: January 2023
---

![blog image](../../images/blog/zod.jpg " ")

According to the [Zod](https://zod.dev/?id=introduction) , it's a TypeScript-first schema declaration and validation library.

One might not need Zod, however. I think one should use it if it gives any value.

One of the area where it shines is validating API schema. If you think you can't 100% rely on API schema or you're in a team where both backend and front-end are in development than probably you need Zod to validate the API schema.

Let's see how it works. Let's create a Zod schema.

```
import { z } from "zod";

const MyDataSchema = z.object({
        firstName: z.string(),
        middleName:z.string().nullable(),
        lastName: z.string(),
        mobile: z.number(),
        postNr: z.number().nullable()
    });

```

Let's create a type of the schema.

```
type MyDataType = z.infer<typeof MyDataSchema>;
```

Let's make a fetch request for the data and validate with Zod schema

```
const response = await fetch('/url/to/api');
const json = await response.json();
const parsedData = z.array(MyDataScheme).parse(json);
```

> In the code above, one can either put the code inside a try-catch block or use `safeParse` to handle the error.

In the above code, if the returned schema from API does not match, then it will throw an error. Normally, Zod will not throw error if any additional field is received from the API, however, this too can be validated by explicitly using the `strict` option as shown in the example below.

```
const MyDataSchema = z.object({
firstName: z.string(),
middleName:z.string().nullable(),
lastName: z.string(),
mobile: z.number(),
postNr: z.number().nullable()
}).strict();

```

Zod can further be used to parse rather than validate by using different built in methods. Example,

```
const searchStringSchema = z.string().trim().min(1, "search word must be min. 2 char");
type SearchString = z.infer<typeof searchStringSchema>;
searchStringSchema.parse(searchStr);
```

Zod has ability to take the TypeScript to a new level!.
