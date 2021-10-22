
const isAdmin = (req, res, next) => {
    if (req.session.currentUser.role !== 'admin') {
        return res.redirect('/login');
    }
    next();
}

module.exports = isAdmin;