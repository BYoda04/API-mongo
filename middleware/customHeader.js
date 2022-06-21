const customHeader = (req,res,next)=>{
    try {
        const apiKey = req.headers.api_key;
        if (apiKey === '123456') {
            next();
        } else {
            res.status(403);
            res.send({error: "KEY_INCORRECTA"})
        }
    } catch (error) {
        res.status(403);
        res.send({error:"CUSTOM_HEADER_ERROR"})
    }
}

module.exports = { 
    customHeader
};