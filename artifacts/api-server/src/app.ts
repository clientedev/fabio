import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import { existsSync } from "fs";
import { join } from "path";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

const staticPath = process.env["STATIC_PATH"];
if (staticPath && existsSync(staticPath)) {
  app.use(express.static(staticPath));
  app.get("/{*path}", (_req, res) => {
    res.sendFile(join(staticPath, "index.html"));
  });
  logger.info({ staticPath }, "Serving static files");
}

export default app;
