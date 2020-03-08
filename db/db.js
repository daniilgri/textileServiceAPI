const mongoose = require("mongoose");

exports.initDBConnection = () => {
  mongoose.connect(process.env.DB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
  });
  mongoose.Promise = global.Promise;
  const { connection } = mongoose;

  connection.on("error", err => {
    console.log("DB error: ", err);
  });

  connection.once("open", function() {
    console.log("DB connected!");
  });

  return connection;
};
