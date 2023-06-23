let myFavorites = [];

function postFav(req, res) {
    myFavorites.push(req.body)

    return res.status(200).json(myFavorites)
}

function deleteFav(req, res) {
    const {id} = req.params;
    console.log(myFavorites);
    console.log(typeof(id));
    myFavorites = myFavorites.filter((char) => char.id != id)
    
    return res.status(200).json(myFavorites)
    console.log(myFavorites);
}

module.exports = {
    postFav, 
    deleteFav
}