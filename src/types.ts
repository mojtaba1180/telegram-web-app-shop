export type TelegramType = {
  WebApp: WebApp;
};
export type WebApp = {
  /** A string with raw data transferred to the Web App, convenient for [validating data](https://core.telegram.org/bots/webapps#validating-data-received-via-the-web-app).
   *
   * **WARNING:** [Validate data](https://core.telegram.org/bots/webapps#validating-data-received-via-the-web-app) from this field before using it on the bot's server. */
  initData: string;

  /**
   * An object with input data transferred to the Web App.
   *
   * **WARNING:** Data from this field should not be trusted. You should only use data from initData on the bot's server and only after it has been [validated](https://core.telegram.org/bots/webapps#validating-data-received-via-the-web-app).
   */
  initDataUnsafe: WebAppInitData;

  /** The color scheme currently used in the Telegram app. */
  colorScheme: "light" | "dark";

  /** An object containing the current theme settings used in the Telegram app. */
  themeParams: ThemeParams;

  /**
   * _True_ if the Web App is expanded to the maximum available height. _False_, if the Web App occupies part of the screen and can be expanded to the full height using the **expand()** method.
   *
   * @see expand
   */
  isExpanded: boolean;

  /**
   * The current height of the visible area of the Web App.
   *
   * The application can display just the top part of the Web App, with its lower part remaining outside the screen area. From this position, the user can “pull” the Web App to its maximum height, while the bot can do the same by calling the **expand()** method. As the position of the Web App changes, the current height value of the visible area will be updated in real time.
   *
   * Please note that the refresh rate of this value is not sufficient to smoothly follow the lower border of the window. It should not be used to pin interface elements to the bottom of the visible area. It's more appropriate to use the value of the `viewportStableHeight` field for this purpose.
   */
  viewportHeight: number;

  /**
   * The height of the visible area of the Web App in its last stable state.
   *
   * Unlike the value of `viewportHeight`, the value of `viewportStableHeight` does not change as the position of the Web App changes with user gestures or during animations. The value of `viewportStableHeight` will be updated after all gestures and animations are completed and the Web App reaches its final size.
   */
  viewportStableHeight: number;

  /** An object for controlling the main button, which is displayed at the bottom of the Web App in the Telegram interface. */
  MainButton: MainButton;

  /**
   * Occurs whenever theme settings are changed in the user's Telegram app (including switching to night mode).
   *
   * @param event The name of the event.
   * @param eventHandler The callback to execute. Receives no parameters, new theme settings and color scheme can be received via `this.themeParams` and `this.colorScheme` respectively.
   */
  onEvent(
    event: "themeChanged",
    eventHandler: EventHandler<"themeChanged">
  ): void;

  /**
   * Occurs when the visible section of the Web App is changed.
   * @param event The name of the event.
   * @param eventHandler The callback to execute. Receives an object with the single field `isStateStable`. If `isStateStable` = true, the resizing of the Web App is finished. If it is false, the resizing is ongoing (the user is expanding or collapsing the Web App or an animated object is playing). The current value of the visible section’s height is available in `this.viewportHeight`.
   */
  onEvent(
    event: "viewportChanged",
    eventHandler: EventHandler<"viewPortChanged">
  ): void;

  /**
   * Occurs when the {@link MainButton main button} is pressed.
   * @param event The name of the event.
   * @param eventHandler The callback to execute. Receives no parameters.
   */
  onEvent(
    event: "mainButtonClicked",
    eventHandler: EventHandler<"mainButtonClicked">
  ): void;

  /** A method that deletes a previously set event handler. */
  offEvent(
    event: "themeChanged" | "viewportChanged" | "mainButtonClicked",
    eventHandler: EventHandler<
      "themeChanged" | "viewportChanged" | "mainButtonClicked"
    >
  ): void;

  /**
   * A method used to send data to the bot. When this method is called, a service message is sent to the bot containing the data `data` of the length up to 4096 bytes, and the Web App is closed. See the field `web_app_data` in the class [Message](https://core.telegram.org/bots/api#message).
   *
   * _This method is only available for Web Apps launched via a [Keyboard button](https://core.telegram.org/bots/webapps#keyboard-button-web-apps)._
   */
  sendData(data: any): void;

  /**
   * A method that informs the Telegram app that the Web App is ready to be displayed.
   *
   * It is recommended to call this method as early as possible, as soon as all essential interface elements are loaded. Once this method is called, the loading placeholder is hidden and the Web App is shown.
   *
   * If the method is not called, the placeholder will be hidden only when the page is fully loaded.
   */
  ready(): void;

  /**
   * A method that expands the Web App to the maximum available height.
   *
   * @see isExpanded
   */
  expand(): void;

  /** A method that closes the Web App. */
  close(): void;
};

export type ThemeParams = {
  /** Background color in the `#RRGGBB` format */
  bg_color?: string;

  /** Main text color in the `#RRGGBB` format */
  text_color?: string;

  /** Hint text color in the `#RRGGBB` format */
  hint_color?: string;

  /** Link color in the `#RRGGBB` format */
  link_color?: string;

  /** Button color in the `#RRGGBB` format */
  button_color?: string;

  /** Button text color in the `#RRGGBB` format */
  button_text_color?: string;
};

export type MainButton = {
  /** Current button text. Set to `CONTINUE` by default. */
  text: string;

  /** Current button color. Set to `themeParams.button_color` by default. */
  color: string;

  /** Current button text color. Set to `themeParams.button_text_color` by default. */
  text_color: string;

  /** Shows whether the button is visible. Set to `false` by default */
  isVisible: boolean;

  /** Shows whether the button is active. Set to `true` by default */
  isActive: boolean;

  /** @readonly Shows whether the button is displaying a loading indicator */
  isLoading: boolean;

  /**
   * A method to set the button text.
   *
   * @param text New button text.
   */
  setText(this: MainButton, text: string): void;

  /** A method that sets the button press event handler
   *
   * An alias for {@link WebApp.onEvent WebApp.onEvent with `mainButtonClicked` event}.
   */
  onClick(this: MainButton, handler: EventHandler<"mainButtonClicked">): void;

  /**
   * A method to make the button visible.
   *
   * _Note that opening the Web App from the [attachment menu](https://core.telegram.org/bots/webapps#launching-web-apps-from-the-attachment-menu) hides the main button until the user interacts with the Web App interface._
   */
  show(this: MainButton): void;

  /** A method to hide the button. */
  hide(this: MainButton): void;

  /** A method to enable the button. */
  enable(this: MainButton): void;

  /** A method to disable the button. */
  disable(this: MainButton): void;

  /**
   * A method to show a loading indicator on the button.
   *
   * It is recommended to display loading progress if the action tied to the button may take a long time.
   *
   * @param leaveActive If `true`, the button remains enabled while the action in progress. Set to `false` by default.
   */
  showProgress(this: MainButton, leaveActive: boolean = false): void;

  /** A method to hide the loading indicator on the button. */
  hideProgress(this: MainButton): void;

  /**
   * A method to set the button parameters.
   * @param params An object containing one or several fields that need to be changed.
   */
  setParams(
    this: MainButton,
    params: {
      /** Current button text. */
      text?: string;

      /** Current button color. */
      color?: string;

      /** Current button text color. */
      text_color?: string;

      /** Shows whether the button is visible. */
      is_visible?: boolean;

      /** Shows whether the button is active. */
      is_active?: boolean;
    }
  ): void;
};

export type WebAppInitData = {
  /** A unique identifier for the Web App session, required for sending messages via the [answerWebAppQuery](https://core.telegram.org/bots/api#answerwebappquery) method. */
  query_id?: string;

  /** An object containing data about the current user. */
  user?: WebAppUser;

  /** An object containing data about the chat partner of the current user in the chat where the bot was launched via the attachment menu. Returned only for Web Apps launched via the attachment menu. */
  receiver?: WebAppUser;

  /**
   * The value of the `startattach` parameter, passed via link. Only returned for Web Apps when launched from the attachment menu via link.
   *
   * The value of the `start_param` parameter will also be returned in the {@link useStartParam}, so the Web App can load the correct interface right away.
   *
   * @see useStartParam
   */
  start_param?: string;

  /** Unix time when the form was opened. */
  auth_date: number;

  /** A hash of all passed parameters, which the bot server can use to [check their validity](https://core.telegram.org/bots/webapps#validating-data-received-via-the-web-app). */
  hash: string;
};

export type WebAppUser = {
  /** A unique identifier for the user or bot. */
  id: number;

  /** `True`, if this user is a bot. Returns in the {@link WebAppInitData.receiver receiver} field only */
  is_bot?: boolean;

  /** First name of the user or bot. */
  first_name: string;

  /** Last name of the user or bot. */
  last_name?: string;

  /** Username of the user or bot. */
  username?: string;

  /** [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag) of the user's language. Returns in {@link WebAppInitData.user user} field only */
  language_code?: "en" | string;

  /**
   * URL of the user’s profile photo. The photo can be in `.jpeg` or `.svg` formats.
   *
   * Only returned for Web Apps launched from the attachment menu.
   */
  photo_url?: string;
};
