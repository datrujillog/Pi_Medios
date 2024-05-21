import { cleanEnv, str, port } from "envalid";

import 'dotenv/config'

const env = cleanEnv(process.env, {
    PORT: port({ desc: 'pendiente configurar el puerto de la aplicacion' }),
})

export default env