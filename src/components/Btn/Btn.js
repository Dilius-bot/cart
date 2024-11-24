import './btn.scss';

export default function Btn({ className = 'btn', children, onClick }) {
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
}
