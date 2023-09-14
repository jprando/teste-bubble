const { MONGODB_SENHA: _senha } = process.env;
const senha = _senha ? `:${_senha}` : '';
export const {
    MONGODB_PROTOCOLO: protocolo,
    MONGODB_SERVIDOR: servidor,
    MONGODB_USUARIO: usuario,
    MONGODB_BANCODADOS: bancoDados,
} = process.env;

export default `${protocolo}://${usuario}${senha}@${servidor}/${bancoDados}`

if (!protocolo) {
    throw new Error("configs:db:protocolo nao informado");
}

if (!servidor) {
    throw new Error("configs:db:servidor nao informado");
}

if (!usuario) {
    throw new Error("configs:db:usuario nao informado");
}

if (!bancoDados) {
    throw new Error("configs:db:bancoDados nao informado");
}
