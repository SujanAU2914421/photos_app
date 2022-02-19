/* eslint-disable */
import { createContext, useEffect, useState } from "react";

export const MainContext = createContext(null);
import { db } from "../config/firebase-config1";
import { doc, getDoc } from "firebase/firestore";

export function MainContextProvider({ children }) {
	const [data, setData] = useState({
		signedIn: false,
		darkMode: false,
		user: null,
	});

	const userRef = doc(db, "users", "OXbqsSDjDPrgcM85xYs0");

	const getUser = async () => {
		const response = await getDoc(userRef);

		if (response.exists) {
			setData({
				...data,
				user: response.data(),
			});

			console.log(response.data());
		} else {
			console.log("%cUser not found", "color: #3498DB; font-weight: bold");
		}
	};

	useEffect(() => {
		getUser();

		return () => {};
	}, []);

	return (
		<>
			<MainContext.Provider value={[data, setData]}>
				{children}
			</MainContext.Provider>
		</>
	);
}
