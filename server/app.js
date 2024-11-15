    const express = require("express")
    const cors = require("cors")
    const cookieParser = require("cookie-parser")
    const bodyParser = require('body-parser');
    const path = require("path");
    const app = express()

    const _dirname = path.dirname("")
    const buildpath = path.join(_dirname , "../client/dist")
    app.use(express.static(buildpath))


    app.use(cors({
        origin : 'http://localhost:5174',
        credentials: true
    }));

    app.use(cookieParser())
    app.use(bodyParser.json());

    app.use(express.json())
    app.use(express.urlencoded({extended:true}))

    app.use("/" , require("./routes/user.route.js"))
    app.use("/" , require("./routes/article.route.js"))
    app.use("/" , require("./routes/comment.route.js"))
    
    module.exports = app;
