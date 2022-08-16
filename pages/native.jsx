import Moralis from 'moralis';

function Native({ nativeBalance, address }) {
    return (
        <div>
            <h3>Wallet: {address}</h3>
            <h3>Native Balance: {nativeBalance} ETH</h3>
        </div>
    )
}

// This gets called on every page render
export async function getServerSideProps(context) {

    // reads the api key from .env.local and starts Moralis SDK
    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

    const address = '0x9e8f0f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f';

    const nativeBalance = await Moralis.EvmApi.account.getNativeBalance({
        address,
    });

    return {
        props: {
            address,
            // Return the native balance formatted in ether via the .ether getter
            nativeBalance: nativeBalance.result.balance.ether 
        }, // will be passed to the page component as props
    }
}

export default Native