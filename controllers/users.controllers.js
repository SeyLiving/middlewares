const getUsers = (req, res) => {
  res.status(200).send("All Users");
};

const getUser = (req, res) => {
  res.status(200).send("My Personal User");
};

const createUser = (req, res) => {
  res.status(201).send("Create User.");
};

const updateUser = (req, res) => {
  res.status(200).send("update user");
};

const deleteUser = (req, res) => {
  res.status(200).send("delete user");
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
}; 
