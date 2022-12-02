const router = require('express').Router()

const {getUsers, getUser, createUser, updateUser, deleteUser, getBooks, getBook, updateBook, deleteBook, addBook} = require('../controllers/users')

router.get('/users', getUsers)
router.get('/users/:user_id', getUser)
router.patch('/users/:user_id', updateUser)
router.delete('/users/:user_id', deleteUser)
router.get('/users/:user_id/books', getBooks)

router.get('/users/:user_id/books/:book_id', getBook)
router.patch('/users/:user_id/books/:book_id', updateBook)
router.delete('/users/:user_id/books/:book_id', deleteBook)


router.post('/users/:user_id/books', addBook)


router.post('/users', createUser)




module.exports = router