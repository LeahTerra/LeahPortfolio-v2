
interface PrettyButtonProps {
    href?: string;
    text?: string;
    icon?: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
}

const PrettyButton = (props: PrettyButtonProps) => {
    const { href, text, icon, disabled = false, onClick} = props;

    if (disabled) {
        return (
            <button
                className={`
                    inline-flex items-center gap-2 px-6 py-3
                    bg-neutral-800 hover:bg-rose-400
                    rounded-full  text-neutral-300 border border-rose-400/20
                    transition-all shadow-md 
                    hover:shadow-lg shadow-rose-400/50`}
                rel="noopener noreferrer"
                onClick={onClick}>
            
                {icon}
                {text}
            </button>
        );
    } else {
        return (
            <a
                href={disabled ? "" : href}
                className={`
                    inline-flex items-center gap-2 px-6 py-3
                    bg-neutral-800 hover:bg-rose-400
                    rounded-full text-neutral-300 border border-rose-400/20
                    transition-all shadow-md 
                    hover:shadow-lg shadow-rose-400/50`}
                rel="noopener noreferrer"
                target="_blank"
                onClick={onClick}>
            
                {icon}
                {text}
            </a>
        );
    }
};
export default PrettyButton;
