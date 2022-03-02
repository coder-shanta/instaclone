import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import { Axios } from './axios';

export const connectWallet = async (wallet = 'metamask') => {
	try {
		let provider, signer;

		if (wallet === 'metamask') {
			if (window.ethereum.providers) {
				let provider = window.ethereum.providers.find(
					(provider) => provider.isMetaMask
				);

				await provider.request({ method: 'eth_requestAccounts' });

				provider = new ethers.providers.Web3Provider(provider);

				signer = await provider.getSigner();
			} else {
				const w3m = new Web3Modal({});

				const instance = await w3m.connect();

				provider = new ethers.providers.Web3Provider(instance);

				signer = await provider.getSigner();
			}
		}

		const signature = await signer.signMessage(`Welcome to Nifti!

      Click to sign in and accept the Indicium Terms of Service: https://nifti.wtf/tos

      This request will not trigger a blockchain transaction or cost any gas fees.

      Your authentication status will reset after 24 hours.`);

		const walletAddress = await signer.getAddress();

		const { data } = await Axios.post('/auth/login', {
			walletAddress,
			signature,
		});

		if (data.error) {
			throw Error(data.error.issue);
		} else {
			return data.user;
		}
	} catch (error) {
		throw error;
	}
};
