

interface Props {
    children: React.ReactNode;
    className?: string;
}

export default function Button(props: Props) {
    return (
        <button className={`bg-gradient-to-r from-[#8B7348] to-[#B79856] text-white font-medium tracking-wider outline outline-[#D6C5A0] outline-offset-2 ${props.className}`}>
            {props.children}
        </button>
    )
}