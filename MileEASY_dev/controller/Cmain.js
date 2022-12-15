const { User } = require("../model");
exports.main = (req, res) => {
  res.render("index");
};

// 등록
exports.signup = async (req, res) => {
  let data = {
    id: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
  };
  let result = await User.create(data);
  console.log(result);
  console.log(result.id);
  res.send(result.id);
};
