const router = require("express").Router;
const {
    createUser, 
    deleteUser, 
    getUser, 
    getUsers, 
    updateUser
} = require("../controllers/users.controllers");
const { pathMiddleware } = require ("../middlewares/pathMiddleware");

const useRouter = router();

useRouter.route("/").get(pathMiddleware, getUsers).post(createUser);
useRouter.route("/:useId")
            .get(getUser)
            .patch(updateUser)
            .delete(deleteUser);

module.exports = useRouter;