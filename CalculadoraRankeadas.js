let vitoria = "150";
let derrota = "100";

function calcularRank (vitoria, derrota) {
    let saldo = vitoria - derrota;
    return saldo;
}

let saldoVitorias = calcularRank (vitoria, derrota);
let nivel;

if (saldoVitorias <= 10) {
    nivel = "Ferro"; 
} else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    nivel = "Bronze";
} else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    nivel = "Prata";
} else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    nivel = "Ouro";
} else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivel = "Diamante";
} else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    nivel = "Lendário";
} else {
    nivel = "Imortal";
}

console.log ("O Herói tem saldo de " + saldoVitorias + " vitórias e está no nível " + nivel)