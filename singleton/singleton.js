const Niveau = {
    DEBUG: "DEBUG",
    INFO: "INFO",
    ERROR: "ERROR",
};

function formatTimestamp(date) {
    const dd = String(date.getDate()).padStart(2, "0");
    const MM = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
    const HH = String(date.getHours()).padStart(2, "0");
    const mm = String(date.getMinutes()).padStart(2, "0");
    const ss = String(date.getSeconds()).padStart(2, "0");
    return `${dd}/${MM}/${yyyy} ${HH}:${mm}:${ss}`;
}

class Logger {
    static #instance = null;

    constructor() {
        if (Logger.#instance) {
            return Logger.#instance;
        }
        this.niveau = Niveau.DEBUG;
        Logger.#instance = this;
    }

    static getInstance() {
        if (!Logger.#instance) {
            Logger.#instance = new Logger();
        }
        return Logger.#instance;
    }

    setNiveau(niveau) {
        const niveauUpper = niveau.toUpperCase();
        if (!Object.values(Niveau).includes(niveauUpper)) {
            throw new Error(`Niveau invalide: ${niveau}. Valeurs acceptées: debug, info, error`);
        }
        this.niveau = niveauUpper;
    }

    debug(msg) {
        if (this.niveau === Niveau.DEBUG) {
            console.log(`${formatTimestamp(new Date())} – DEBUG - ${msg}`);
        }
    }

    info(msg) {
        if (this.niveau === Niveau.DEBUG || this.niveau === Niveau.INFO) {
            console.log(`${formatTimestamp(new Date())} – INFO - ${msg}`);
        }
    }

    error(msg) {
        if (
            this.niveau === Niveau.DEBUG ||
            this.niveau === Niveau.INFO ||
            this.niveau === Niveau.ERROR
        ) {
            console.log(`${formatTimestamp(new Date())} – ERROR - ${msg}`);
        }
    }
}

const logger = Logger.getInstance();
const logger2 = Logger.getInstance();

console.log("--- Niveau DEBUG ---");
logger.debug("Ceci est un message de debug");
logger.info("Ceci est un message d'information");
logger.error("Ceci est un message d'erreur");

console.log("\n--- Niveau INFO ---");
logger.setNiveau("info");
logger.debug("Ceci est un message de debug");
logger.info("Ceci est un message d'information");
logger.error("Ceci est un message d'erreur");

console.log("\n--- Niveau ERROR ---");
logger.setNiveau("error");
logger.debug("Ceci est un message de debug");
logger.info("Ceci est un message d'information");
logger.error("Ceci est un message d'erreur");

console.log("\n--- Vérification singleton ---");
console.log("Même instance :", logger === logger2);

module.exports = Logger;
