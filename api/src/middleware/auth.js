const authMiddleware = async (req, res, next) => {
    const userId = req.header('Auth'); 
    if (!userId) {
        return res.status(401).send('Unauthorized');
    }
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
        return res.status(403).send('Forbidden');
    }
    req.user = user;
    next();
};

app.use(authMiddleware);
