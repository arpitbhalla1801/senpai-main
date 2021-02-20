const mongoose = require('mongoose')

module.exports = async () => {
  mongoose.connect("mongodb+srv://tech-wiz:passwordseeker1@cluster0.3fbwr.mongodb.net/Cluster0?retryWrites=true&w=majority", {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}