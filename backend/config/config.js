const config = {
  mongoURI:
    "mongodb+srv://mike0298:mike0298@movit.5fjbo.mongodb.net/movit?retryWrites=true&w=majority",
  jwtSecret: "movitsecrettoken",
};

const dataDict = {
  admin: "admin",
  moderator: "moderator",
  member: "member",
};

module.exports = { config, dataDict };
