const {
  Connection,
  PublicKey,
  clusterApiUrl,
  Keepair,
  LAMPORTS_PER_SOL,
  Keypair,
} = require("@solana/web3.js");

const wallet = new Keypair();

const publicKey = new PublicKey(wallet._keypair.publicKey);
const secretKey = wallet._keypair.secretKey;

console.log("Public Key: ", publicKey.toString());
console.log("Secret Key: ", secretKey.toString());
