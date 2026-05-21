export default function ScrollToTopButton() {
  const handleClick = () => {
    window.dispatchEvent(new Event('cloudserver:restart'));
  };

  return (
    <button
      type="button"
      className="restart-fab"
      onClick={handleClick}
      aria-label="Restart animation"
      title="Restart"
    >
      <span className="restart-fab-icon">
        <i className="fa-solid fa-rotate-left"></i>
      </span>
      <span className="restart-fab-text">
        <span className="restart-fab-text-main">Restart</span>
        <span className="restart-fab-text-key">R</span>
      </span>
    </button>
  );
}