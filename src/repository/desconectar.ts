import type { MongoClient } from "mongodb";

export default async (conexao: MongoClient) => {
    try {
        const estaConectado = (conexao as any)?.topology?.isConnected();
        if (estaConectado) {
            await conexao.close()
            console.info("#INFO:DB desconectado");
        }
    }
    catch (e) {
        const erro = e instanceof Error ? e : undefined;
        console.error(
            "#ERRO:DB erro ao tentar se desconectar do banco de dados",
            erro?.name,
            erro?.message,
            erro?.cause,
        )
    }
}