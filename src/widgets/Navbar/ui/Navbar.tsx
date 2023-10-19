import cls from "./Navbar.module.scss";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib";
import { AppLink } from "shared/ui/AppLink/ui/AppLink";

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {

	const { t } = useTranslation();

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<AppLink to="/" className={cls.link}>{t("main_link")}</AppLink>
			<AppLink to="/about" className={cls.link}>{t("about_link")}</AppLink>
		</div>
	);
};
