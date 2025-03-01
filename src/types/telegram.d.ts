interface TelegramWebApp {
    init: () => void;
    initDataUnsafe: any;
    WebApp: TelegramWebApp;
  }
  
  interface Window {
    Telegram: TelegramWebApp;
  }
  