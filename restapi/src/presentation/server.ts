import express, { Router } from "express";
import cors from "cors";
import path from "path";

interface Options {
    port: number,
    routes: Router,
    publicPath?: string
}

export class Server {

    private app = express();
    private readonly port: number;
    private readonly publicPath: string;
    private readonly routes: Router;

    constructor(options: Options) {
        const { port, routes, publicPath = 'public' } = options;
        this.port = port;
        this.routes = routes;
        this.publicPath = publicPath;
    }

    async start() {
        //^middleware
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.static(this.publicPath));

        //^routes
        this.app.use(this.routes);

        //^SPA
        this.app.get('*', (req, res) => {
            //res.sendFile(`${this.publicPath}/index.html`);
            const indextPath = path.join(__dirname + `../../../${this.publicPath}/index.html`);
            res.sendFile(indextPath);
        });

        //^start server
        this.app.listen(this.port, () => {
            console.log(`Server is running at http://localhost:${this.port}`);
        });
    }
}


