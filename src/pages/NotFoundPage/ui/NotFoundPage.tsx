import cls from "./NotFoundPage.module.scss";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib";

interface NotFoundPageProps {
	className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
	const { t } = useTranslation();
	return (
		<div className={classNames(cls.notfoundpage, {}, [className])}>
			<h1>{t("not_found")}</h1>
		</div>
	)
}