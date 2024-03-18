const { user } = require("./information");
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `je m'apelle ${user.name} et je suis sur le campus ${user.campus}`,
    e: "oO",
    T: "U ",
  })
);
