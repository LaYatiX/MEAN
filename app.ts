import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from "path";
import * as http from "http";
import * as cookieParser from "cookie-parser";
import {api} from "./server/routes/api";
//import {birds} from "./routes/birds";

export class ServerApp {
    private serverPort : number;
    private _App: express.Express;
    public _Router: express.Router;
    constructor() {


        this._App = express();
        this._Router = express.Router();
        this._App.set("views", __dirname + "/src");
        this._App.set("view engine", "pug");
        //this._App.use(favicon(path.join(__dirname, "public", "favicon.ico")));
        this._App.use(express.static(path.join(__dirname, "src")));
        this._App.use(bodyParser.json());
        this._App.use(bodyParser.urlencoded({ extended: false }));
        this._App.use(cookieParser());

        // Routes Handlers
        this._App.use("/api", api);
        //this._App.use("/birds", birds);

        this._App.get("*", (req, res) => {
          res.render("index");
        });

        // Handle 404
        // this._App.use((req, res) => {
        //     res.status(400);
        //     res.render("error", { title: "404: File Not Found" });
        // });

        // Handle 500
    //     this._App.use((error: express.ErrorRequestHandler, req: express.Request, res: express.Response, next: express.NextFunction) => {
    //         res.status(500);
    //         res.render("error", { title: "500: Internal Server Error", error: error });
    //     });
    //      this.serverPort = 5000;
    }

    public startServer() {
        this._App.listen(5000, () => console.log("API running on localhost 5000"));
    }
}
