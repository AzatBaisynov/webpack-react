import { Theme, useTheme } from "app/providers/ThemeProvider";
import cls from "./ThemeSwitcher.module.scss";
import { FC } from "react";
import { Button, ButtonTheme } from "shared/ui/Button";
import { classNames } from "shared/lib";
import ThemeLight from "features/assets/icons/theme-light.svg";
import ThemeDark from "features/assets/icons/theme-dark.svg";

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {

	const { theme, toggleTheme } = useTheme();

	return (
		<Button theme={ButtonTheme.CLEAR} onClick={toggleTheme} className={classNames(cls.themeswitcher, {}, [className])}>
			{
				theme === Theme.DARK ? <ThemeDark /> : <ThemeLight />
			}
		</Button>
	);
};
