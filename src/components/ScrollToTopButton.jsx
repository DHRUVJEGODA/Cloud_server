export default function ScrollToTopButton() {
  const handleClick = () => {
    const freshUrl = new URL(window.location.href);
    freshUrl.searchParams.set('reload', Date.now().toString());
    window.location.replace(freshUrl.toString());
  };

  return (
    <button
      type="button"
      className="restart-fab"
      onClick={handleClick}
      aria-label="Reload site"
      title="Reload"
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