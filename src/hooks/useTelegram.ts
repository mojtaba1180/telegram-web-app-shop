const useTelegram = () => {
  if (window.Telegram) {
    return window.Telegram.WebApp;
  }
  return null;
};
export default useTelegram;
