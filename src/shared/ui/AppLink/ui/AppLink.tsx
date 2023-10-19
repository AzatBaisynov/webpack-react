import cls from "./AppLink.module.scss";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib";

export enum AppLinkTheme {
	PRIMARY = "primary",
	SECONDARY = "secondary"
}

interface AppLinkProps {
	className?: string;
	to?: string;
	children?: ReactNode;
	theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ( { className, to, children, theme = AppLinkTheme.PRIMARY }) => {
	return (
		<Link to={to} className={classNames(cls.applink, {}, [className, cls[theme]])}>
			{
				children
			}
		</Link>
	);
};