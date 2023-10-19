import cls from "./PageError.module.scss";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib";
import { Button } from "shared/ui/Button";

interface PageErrorProps {
	className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {

	const { t } = useTranslation();

	const handleReload = () => {
		location.reload()
	}

	return (
		<div className={classNames(cls.pageerror, {}, [className])}>
			<h1>{t("error_page")}</h1>
			<Button onClick={ handleReload }>{t("reload")}</Button>
		</div>
	)
}