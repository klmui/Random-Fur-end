const { db } = require('../util/admin');

exports.getRandomCat = (request, response) => {
  // const cats = [
  //   "Art by Hayley Jane Wakenshaw<br/>" +
  //   "  ^~^  ,<br/>" +
  //   " ('Y') )<br/>" +
  //   " /   \\/ <br/>" +
  //   "(\\|||/) hjw<br/>",
  //   '2'
  // ]

  return response.send("<span style='font-size:large;letter-spacing:3.5px'>" + cats[Math.floor(Math.random() * cats.length)].replace(/ /g, "&nbsp").replace(/\\/g, "\\\\")) + "</span>";
}