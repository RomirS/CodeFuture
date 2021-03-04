const Toast = ({ clear, message }) => (
    <div className="toast red accent-2">
        <span className="clear-button" onClick={clear}>
            <i className="material-icons">clear</i>
        </span>
        <p className="white-text">{message}</p>
    </div>
)

export default Toast;