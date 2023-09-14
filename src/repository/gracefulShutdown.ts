import type { MongoClient } from "mongodb";

import desconectar from "./desconectar";

export default (conexao: MongoClient) => {
    for (const evento of ['SIGINT', 'SIGTERM']) {
        process.on(evento, async () => {
            console.info(`\n#INFO:APP [${evento.toUpperCase()}] encerrando aplicacao...`);
            await desconectar(conexao);
            console.info("#INFO:APP aplicacao encerrada!");
            process.exit(0);
        });
    }
}
