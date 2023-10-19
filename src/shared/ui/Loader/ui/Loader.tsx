import "./Loader.scss";
import { FC } from "react";
import { classNames } from "shared/lib";

interface LoaderProps {
	className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => {
	return (
		<div className={classNames("loadingio-spinner-rolling-yk5w5sbfmyl", {}, [className])}>
			<div className="ldio-a05lxf4wz3b">
				<div></div>
			</div>
		</div>
	)
}