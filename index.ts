import db from "@/repository";
import packageJson from './package.json';
const nomeProjeto = packageJson.name;

(async () => {
    console.info('#INFO:APP inicio', nomeProjeto);
    try {
        const usuarios = await db.usuarios.list();
        // db.usuario.insertOne({
        //     _id: "jeudiprando@gmail.com",
        //     // nome: "Jeudi Prando"
        // });
        console.table(usuarios);
    } catch (e) {
        const erro = e instanceof Error ? e : undefined;
        console.error(
            '#ERRO', erro?.name || nomeProjeto,
            erro?.message || 'ocorreu um erro durante a execucao do programa',
            erro?.cause || 'erro inesperado'
        );
    }
    finally {
        db.desconectar();
        console.info("#INFO:APP fim", nomeProjeto);
    }
})()