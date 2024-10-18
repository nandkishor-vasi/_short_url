const sessionIdUserMap = new Map();

function setUser(id, user){
    sessionIdUserMap.set(id, user);
}

function getUser(id, user){
    return sessionIdUserMap.get(id);
}

module.exports = {
    setUser,
    getUser,
};