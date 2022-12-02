const User = require("../models/user");

const getUsers = (request, response) => {
  return User.find({}).then((users) => response.status(200).send(users));
};

const getUser = (request, response) => {
  const { user_id } = request.params;

  return User.findById(user_id).then((user) => {
    response.status(200).send(user);
  });
};

const createUser = (request, response) => {
  return User.create({ ...request.body })
    .then((user) => {
      response.status(201).send(user);
    })
    .catch((e) => {
      response.status(400).send(e);
    });
};

const updateUser = (request, response) => {
  const { user_id } = request.params;
 return User.findByIdAndUpdate(user_id, { ...request.body })
    .then((user) => {
      response.status(200).send(user);
    })
    .catch((e) => {
      response.status(500);
    });
};

const deleteUser = (request, response) => {
  const { user_id } = request.params;
  User.deleteOne({ _id: user_id })
    .then((dbResponse) => {
      response.status(200).send(dbResponse);
    })
    .catch((e) => {
      response.status(500);
    });
};

const addBook = (request, response) => {
  const { user_id } = request.params;
  User.findById(user_id).then((user) => {   
    console.log(user)
    response.status(201).send(user.userBooks);
  }).
  catch((e) => {
    response.status(400).send(e);
  })
  User.create({ ...request.body })
  .then((user) => {
    response.status(201).send(user);
  })

};

const getBooks = (request, response) => {
  const { user_id } = request.params;
  return User.findById(user_id).
  then((user) => {
    response.status(200).send(user.userBooks);
  });
};

const getBook = (request, response) => {
  const { user_id, book_id } = request.params;
  return User.findById(user_id).
  then((user) => {
    console.log(user)
    return User.findById(book_id).
    then(() => {
      response.status(200).send(user.userBooks);
    })
  })
};

const updateBook = (request, response) => {
  const { user_id, book_id } = request.params;
return User.findByIdAndUpdate(user_id)
  .then((user) => {
    response.status(200).send(user.userBooks);
  }).catch((e) => {
    response.status(500);
  })
  
};

const deleteBook = (request, response) => {
  const { book_id } = req.params;
  return User.findById(book_id).then((user) => {
    res.status(200).send(user);
  });
};

module.exports = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
  addBook,
};
