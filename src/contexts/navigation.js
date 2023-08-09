"use client";

import { useEffect } from "react";
import { useRouter } from 'next/navigation'

import { createContext, useContext, useState } from "react";
import { usePathname } from "next/navigation";

const Context = createContext(undefined);

export const NavigationProvider = ({
	children,
}) => {
	const [lastViewed, setLastViewed] = useState(null);

	return (
		<Context.Provider value={{ lastViewed, setLastViewed }}>
			{children}
		</Context.Provider>
	);
};

export const useLastViewed = () => useContext(Context).lastViewed;

export const TrackLastViewed = ({
	pageName,
	team,
}) => {
	const setLastViewed = useContext(Context).setLastViewed;
	const pathName = usePathname();
	const router = useRouter();

	useEffect(() => {
		setLastViewed(
			!team ? { type: pageName } : { type: "team", team },
		);

		setTimeout(() => {
			console.log('weird');
		}, 5000);

	}, [pathName]);

	return null;
};
