import cls from "./MainPage.module.scss";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib";

interface MainPageProps {
	className?: string;
}

const MainPage: FC<MainPageProps> = ({ className }) => {
	const { t } = useTranslation("home");

	return (
		<div className={classNames(cls.mainpage, {}, [className])}>
			{
				t("homepage")
			}
		</div>
	);
};

export default MainPage;