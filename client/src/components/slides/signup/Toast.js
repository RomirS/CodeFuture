const Toast = ({ clear, message, color }) => (
    <div className={`toast ${color} accent-3`}>
        <span className="clear-button" onClick={clear}>
            <i className="material-icons">clear</i>
        </span>
        <p className="white-text">{message}</p>
    </div>
)

export default Toast;