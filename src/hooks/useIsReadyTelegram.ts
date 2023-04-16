const useIsReadyTelegram = () => {
  if (window.Telegram) {
    return true;
  }
  return false;
};

export default useIsReadyTelegram;
