// So here instead of saying module.exports, we can just say exports for short and it will refer to
// the same thing which is module.exports.

exports.getDate= function (){
const today = new Date();

const options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};

return today.toLocaleDateString("en-US", options);
}

exports.getDay=function (){
const today = new Date();

const options = {
  weekday: "long",

};

return today.toLocaleDateString("en-US", options);
}
