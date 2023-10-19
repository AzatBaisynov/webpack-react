import { ThemeSwitcher } from "features/ThemeSwitcher";
import cls from "./Sidebar.module.scss";
import { FC, useState } from "react";
import { classNames } from "shared/lib";
import { LangSwitcher } from "features/LangSwitcher/ui/LangSwitcher";

interface SidebarProps {
	className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {

	const [collapsed, setCollapsed] = useState<boolean>(false);

	const onToggle = () => {
		setCollapsed(prev => !prev);
	};

	return (
		<div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
			<button onClick={onToggle}></button>
			<div className={cls.switcher}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} />
			</div>
		</div>
	);
};