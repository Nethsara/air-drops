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

const getWalletBalance = async () => {
  try {
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    const balance = await connection.getBalance(publicKey);
    console.log(`Balance : ${balance}`);
  } catch (error) {
    console.error(error);
  }
};

const airDropSol = async () => {
  try {
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    const fromAirDropSignature = await connection.requestAirdrop(
      publicKey,
      2 * LAMPORTS_PER_SOL
    );

    await connection.confirmTransaction(fromAirDropSignature);
  } catch (error) {
    console.error(error);
  }
};
const main = async () => {
  await getWalletBalance();
  await airDropSol();
  await getWalletBalance();
};

main();
