const { compile } = require("path-to-regexp")
const PATH_INDEX = "/"
const TO_INDEX = compile(PATH_INDEX)

const PATH_POST = "/posts/:slug([a-zA-Z0-9-]+)/"
const TO_POST = compile(PATH_POST)

const PATH_ALL_POSTS = "/all-posts/"
const TO_ALL_POSTS = compile("/all-posts/")

module.exports = {
  PATH_INDEX: "/",
  TO_INDEX,

  PATH_POST,
  TO_POST,

  PATH_ALL_POSTS,
  TO_ALL_POSTS,
}
