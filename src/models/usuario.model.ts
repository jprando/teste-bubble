import { EntityWithLifecycle } from "mongobubble";

export class Usuario extends EntityWithLifecycle<Usuario, string> {
    static COLLECTION = 'usuarios' as const;
}