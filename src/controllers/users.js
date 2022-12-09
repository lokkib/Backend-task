const User = require("../models/user");

const getUsers = (request, response) => {
  return User.find({})
    .then((users) => response.status(200).send(users))
    .catch((e) => {
      response.status(404).send(e.message);
    });
};

const getUser = (request, response) => {
  const { user_id } = request.params;

  return User.findById(user_id)
    .then((user) => {
      response.status(200).send(user);
    })
    .catch((e) => {
      response.status(404).send(e.message);
    });
};

const createUser = (request, response) => {
  return User.create({ ...request.body })
    .then((user) => {
      response.status(201).send(user);
    })
    .catch((e) => {
      response.status(500).send(e);
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
  User.findOneAndUpdate(
    { _id: user_id },
    {
      $push: {
        userBooks: {
          title: request.body.title,
          author: request.body.author,
          date: request.body.date,
        },
      },
    }
  )
    .then((userBook) => {
      console.log(request.body);
      return response.status(201).send(userBook);
    })
    .catch((e) => {
      response.status(500).send(e);
    });
};

const getBooks = (request, response) => {
  const { user_id } = request.params;
  return User.findById(user_id)
    .then((user) => {
      response
        .status(200)
        .send(
          user.userBooks.length ? user.userBooks : "У пользователя нет книг"
        );
    })
    .catch((e) => {
      response.status(404).send(e.message);
    });
};

const getBook = (request, response) => {
  const { book_id } = request.params;

  User.find({ "userBooks._id": book_id }, { "userBooks.$": true })
    .then((userBook) => {
      console.log(userBook);
      return response
        .status(200)
        .send(
          userBook.length
            ? userBook[0].userBooks
            : "У пользователя нет такой книги"
        );
    })
    .catch((e) => {
      response.status(404).send(e.message);
    });
};

const updateBook = (request, response) => {
  const { book_id } = request.params;
  User.findOneAndUpdate(
    { "userBooks._id": book_id },
    {
      $set: {
        "userBooks.$.title": request.body.title,
        "userBooks.$.author": request.body.author,
        "userBooks.$.date": request.body.date,
      },
    },
    { "userBooks.$": true }
  )
    .then((userBook) => {
      return response.status(200).send(userBook);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

const deleteBook = (request, response) => {
  const { book_id } = request.params;
  User.findOneAndUpdate(
    { "userBooks._id": book_id },
    { $pull: { userBooks: { _id: book_id } } }
  )
    .then((dbResponse) => {
      return response.status(200).send(dbResponse);
    })
    .catch((e) => {
      response.status(500).send(e);
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
