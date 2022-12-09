const router = require("express").Router();
const logMiddleWare = require("../middlewares/logMiddleWare");

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
  addBook,
} = require("../controllers/users");

router.use("/users", logMiddleWare);
router.get("/users", getUsers);

router.use("/users/:user_id", logMiddleWare);
router.get("/users/:user_id", getUser);

router.use("/users", logMiddleWare);
router.post("/users", createUser);

router.use("/users/:user_id", logMiddleWare);
router.patch("/users/:user_id", updateUser);

router.use("/users/:user_id", logMiddleWare);
router.delete("/users/:user_id", deleteUser);

router.use("/users/:user_id/books", logMiddleWare);
router.get("/users/:user_id/books", getBooks);

router.use("/users/:user_id/books/:book_id", logMiddleWare);
router.get("/users/:user_id/books/:book_id", getBook);

router.use("/users/:user_id/books/:book_id", logMiddleWare);
router.patch("/users/:user_id/books/:book_id", updateBook);

router.use("/users/:user_id/books/:book_id", logMiddleWare);
router.delete("/users/:user_id/books/:book_id", deleteBook);

router.use("/users/:user_id/books", logMiddleWare);
router.post("/users/:user_id/books", addBook);

module.exports = router;
