import { FC } from "react";

interface Props {
    title?: string;
    level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    subtitle?: string;
}

const GenericHeader: FC<Props> = ({ title = "A Title", level = "h1", subtitle = "subtitle" }) => {
    const Tag = level;
    return (
        <div className="content-center">
            <Tag>{title}</Tag>
            <p>{subtitle}</p>
        </div>
    )
}

export default GenericHeader
