import cls from "./LangSwitcher.module.scss";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib";
import { Button, ButtonTheme } from "shared/ui/Button";

interface LangSwitcherProps {
	className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {

	const { t, i18n } = useTranslation();

	const toggle = async () => {
		i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
	};

	return (
		<Button
			onClick={toggle}
			theme={ButtonTheme.CLEAR}
			className={classNames(cls.langswitcher, {}, [className])}
		>
			{t("language")}
		</Button>
	);
};