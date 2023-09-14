import db from "@/repository";
import projeto from './package.json';

(async () => {
    console.info('#INFO:APP inicio', projeto.name);
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
            '#ERRO', erro?.name || projeto.name,
            erro?.message || 'ocorreu um erro durante a execucao do programa',
            erro?.cause || 'erro inesperado'
        );
    }
    finally {
        db.desconectar();
        console.info("#INFO:APP fim", projeto.name);
    }
})()