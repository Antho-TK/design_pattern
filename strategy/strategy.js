
const strategies = [
    {
        name: "6L",
        verifier: (motDePasse) => motDePasse.length >= 6,
    },
    {
        name: "8D",
        verifier: (motDePasse) =>
            motDePasse.length >= 8 && /\d/.test(motDePasse),
    },
    {
        name: "12X",
        verifier: (motDePasse) =>
            motDePasse.length >= 12 &&
            /\d/.test(motDePasse) &&
            /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(motDePasse),
    },
];



class VerificationMotDePasse {
    constructor(strategyName) {
        this.strategy = strategies.find((s) => s.name === strategy);
        if (!this.strategy) {
            throw new Error(`Stratégie inconnue : ${strategy}`);
        }
    }
    verifier(motDePasse) {
        return this.strategy.verifier(motDePasse);
    }
}
const verification = new VerificationMotDePasse("6L");
console.log(verification.verifier("12345678"));

const verification2 = new VerificationMotDePasse("8D");
console.log(verification2.verifier("12345678"));

const verification3 = new VerificationMotDePasse("12X");
console.log(verification3.verifier("12345678901234567890"));