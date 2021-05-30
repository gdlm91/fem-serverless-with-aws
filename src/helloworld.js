module.exports.handler = (evt, ctx, done) => {
  console.log(evt);

  if (evt.message !== "hello") {
    done(new Error("you didn't say hello"), "working!!");
  } else {
    done(null, "working!!");
  }
};
