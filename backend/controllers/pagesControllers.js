const path = require("path");
const getInitialPage = (req, res) =>{
    res.sendFile(path.join(__dirname, "../../front/index.html"));
}
module.exports ={ getInitialPage};