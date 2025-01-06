export const OnlineOrderingPage = () => {
  const handleRedirect = () => {
    window.open("https://da-morning-grind.square.site/#most-popular", "_blank");
  };

  return (
    <div className="ordering-wrapper">
      <button onClick={handleRedirect}>Click to Start Order</button>

      <h3>
        Pick-Ups will be located the the front window facing King Street. We
        have free parking available in the back on Pensacola Street.
      </h3>
    </div>
  );
};
