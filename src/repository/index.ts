import { MongoClient } from "mongodb";
import { MongoBubble } from "mongobubble"

import mongodbUrl, { bancoDados } from "@configs/db.config"
import { Usuario } from "@models/usuario.model"

import desconectar from "./desconectar";
import gracefulShutdown from "./gracefulShutdown";

const conexao = new MongoClient(mongodbUrl)
const db = conexao.db(bancoDados)
gracefulShutdown(conexao);

export class Repositorio {
    readonly usuarios = new MongoBubble<Usuario, string>(Usuario, { db });

    async destroy() {
        await this.desconectar();
    }

    async desconectar() {
        await desconectar(conexao);
    }
}

export default new Repositorio();
