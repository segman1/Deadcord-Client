//META{"name":"Deadcord"}*//

const config = {
  ACCESS_URL: "http://localhost:6660",
};

const main_html = `<div class=full-wrap id=deadcord-wrapper><style>.modal-window{position:fixed;top:0;right:0;bottom:0;left:0;z-index:999;visibility:hidden;opacity:0;pointer-events:none;transition:all .3s}.modal-window:target{visibility:visible;opacity:1;pointer-events:auto}.modal-window>div{width:400px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);padding:2em;background:#3a3d5d;border:2px solid #9a34ff;color:#fff!important}.modal-window header{font-weight:700}.modal-window h1{font-size:150%;margin:0 0 15px;font-weight:600;color:#fff!important}.modal-close{color:#fff;line-height:50px;font-size:80%;position:absolute;right:0;text-align:center;top:0;width:70px;text-decoration:none}.modal-window>div{border-radius:1rem}.modal-window div:not(:last-of-type){margin-bottom:15px}.modal-footer{margin-top:10px}.full-wrap{display:inline-block;padding:3px;position:relative;background:linear-gradient(90deg,#9a34ff,#ce42f5,#ff34c2);background-position:0 100%}.controls{background-color:#3a3d5d}textarea{resize:vertical}#spam_modes{width:100%;padding:5px;color:#fff;font-size:12px;background:0 0;-webkit-appearance:none;border:solid #9a34ff 1px;border-radius:4px;margin-bottom:8px}#spam_modes option{background-color:#3a3d5d}.section-title{color:#fff;font-weight:700;font-size:24px}.switch{display:inline-block;position:relative;margin:0 0 10px;font-size:16px;line-height:24px}.switch__input{position:absolute;top:0;left:0;width:36px;height:20px;opacity:0;z-index:0}.switch__label{display:block;padding:0 0 0 44px;cursor:pointer;color:#fff}.switch__label:before{content:"";position:absolute;top:5px;left:0;width:36px;height:14px;background-color:rgba(0,0,0,.26);border-radius:14px;z-index:1;transition:background-color .28s cubic-bezier(.4,0,.2,1)}.switch__label:after{content:"";position:absolute;top:2px;left:0;width:20px;height:20px;background-color:#e631a2;border-radius:14px;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);z-index:2;transition:all .28s cubic-bezier(.4,0,.2,1);transition-property:left,background-color}.switch__input:checked+.switch__label:before{background-color:rgb(103 75 162 / 50%)}.switch__input:checked+.switch__label:after{left:16px;background-color:#a738fc}.deadcord-input{box-sizing:border-box;width:100%;font-size:14px;padding:10px;margin-bottom:8px;border:solid 1px #9a34ff;border-radius:4px;color:#fff;background-color:#313344}.deadcord-input::placeholder{color:#a7acd4;opacity:1}.deadcord-button{color:#fff;background-color:#9a34ff;padding:10px;position:relative;border:none;border-radius:4px;cursor:pointer}.deadcord-button:hover{background-color:#8637d4}.bottom{position:absolute;bottom:0}.menu-hook{position:relative}.popout-menu{width:250px;position:absolute;visibility:hidden;right:100%;top:100%;background:#3a3d5d;color:#fff;padding:10px;margin-right:20px;border:2px #9a34ff solid;z-index:999}.menu-hook:active>.popout-menu,.menu-hook:focus-within>.popout-menu{visibility:visible}</style><section aria-label="Deadcord Toolbar"class="container-ZMc96U controls title-31SJ6t"><h3 class="base-21yXnu size16-rrJ6ag title-17SveM">💀｜Deadcord</h3><div class=children-3xh0VB></div><div class=toolbar-3_r2xA><a class="button-12Fmur button-f2h6uQ colorBrand-I6CyqQ enabled-9OeuTA grow-2sR_-F lookBlank-21BCro"href=#start-spam-modal aria-label="Start Spam"style=color:#fff;margin:5px type=button><div class=contents-18-Yxp><svg fill=none height=24 stroke=currentColor viewBox="0 0 24 24"width=24><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"stroke-linecap=round stroke-linejoin=round stroke-width=2></path></svg></div></a><div class=modal-window id=start-spam-modal><div><a class=modal-close href=# title=Close>Close</a><h1>Guild Spammer</h1><div>Have all tokens spam a guild. Spam speed is occasionally adjusted, among other things, for an efficient experience.</div><div class=switch><input class=switch__input id=tts-text type=checkbox><label class=switch__label for=tts-text>TTS Messages</label></div><select id=spam_modes name=spam_modes><option value=1>Regular Messages<option value=2>@everyone Ping<option value=3>Mass User Ping<option value=4>Blank Message Spam<option value=5>Laggy Messages</select> <textarea class=deadcord-input id=messages placeholder="Messages to spam. Seperate by new line."style=height:266px></textarea><div class=modal-footer><button class=deadcord-button id=start-spam>Start Spam</button></div></div></div><button class="button-12Fmur button-f2h6uQ colorBrand-I6CyqQ enabled-9OeuTA grow-2sR_-F lookBlank-21BCro"id=start-typing-spam aria-label="Start Typing Spam"style=color:#fff;margin:5px type=button><div class=contents-18-Yxp><svg fill=none height=24 stroke=currentColor viewBox="0 0 24 24"width=24><path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"stroke-linecap=round stroke-linejoin=round stroke-width=2></path></svg></div></button> <button class="button-12Fmur button-f2h6uQ colorBrand-I6CyqQ enabled-9OeuTA grow-2sR_-F lookBlank-21BCro"id=stop-all aria-label="Stop All Actions"style=color:#ff007f;margin:5px type=button><div class=contents-18-Yxp><svg fill=none height=24 stroke=currentColor viewBox="0 0 24 24"width=24><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"stroke-linecap=round stroke-linejoin=round stroke-width=2></path></svg></div></button> <a class="button-12Fmur button-f2h6uQ colorBrand-I6CyqQ enabled-9OeuTA grow-2sR_-F lookBlank-21BCro"href=#join-tokens-modal aria-label="Join Tokens"style=color:#fff;margin:5px type=button><div class=contents-18-Yxp><svg fill=none height=24 stroke=currentColor viewBox="0 0 24 24"width=24><path d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"stroke-linecap=round stroke-linejoin=round stroke-width=2></path></svg></div></a><div class=modal-window id=join-tokens-modal><div><a class=modal-close href=# title=Close>Close</a><h1>Guild Joiner</h1><div>Have all loaded tokens join the target guild.</div><input class=deadcord-input id=guild-invite placeholder="Guild Invite"><div class=modal-footer><button class=deadcord-button id=join-tokens>Join Guild</button></div></div></div><a class="button-12Fmur button-f2h6uQ colorBrand-I6CyqQ enabled-9OeuTA grow-2sR_-F lookBlank-21BCro"href=#leave-tokens-modal aria-label="Leave Tokens"style=color:#fff;margin:5px type=button><div class=contents-18-Yxp><svg fill=none height=24 stroke=currentColor viewBox="0 0 24 24"width=24><path d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"stroke-linecap=round stroke-linejoin=round stroke-width=2></path></svg></div></a><div class=modal-window id=leave-tokens-modal><div><a class=modal-close href=# title=Close>Close</a><h1>Guild Leaver</h1><div>Have all loaded tokens leave the target guild.</div><div class=modal-footer><button class=deadcord-button id=leave-tokens>Leave Guild</button></div></div></div><a class="button-12Fmur button-f2h6uQ colorBrand-I6CyqQ enabled-9OeuTA grow-2sR_-F lookBlank-21BCro"href=#react-tokens-modal aria-label="React Tokens"style=color:#fff;margin:5px type=button><div class=contents-18-Yxp><svg fill=none height=24 stroke=currentColor viewBox="0 0 24 24"width=24><path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"stroke-linecap=round stroke-linejoin=round stroke-width=2></path></svg></div></a><div class=modal-window id=react-tokens-modal><div><a class=modal-close href=# title=Close>Close</a><h1>Token React</h1><div>Have all tokens react to a certain message. Emoji name should be provided. (smile)</div><input class=deadcord-input id=react-channel-id placeholder="Channel ID"><input class=deadcord-input id=react-message-id placeholder="Message ID"><input class=deadcord-input id=react-emoji placeholder="Emoji Name"><div class=modal-footer><button class=deadcord-button id=react-tokens>React Tokens</button></div></div></div><a class="button-12Fmur button-f2h6uQ colorBrand-I6CyqQ enabled-9OeuTA grow-2sR_-F lookBlank-21BCro"href=#disguise-tokens-modal aria-label="Disguise Tokens"style=color:#fff;margin:5px type=button><div class=contents-18-Yxp><svg fill=none height=24 stroke=currentColor viewBox="0 0 24 24"width=24><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"stroke-linecap=round stroke-linejoin=round stroke-width=2></path></svg></div></a><div class=modal-window id=disguise-tokens-modal><div><a class=modal-close href=# title=Close>Close</a><h1>Disguise Tokens</h1><div>The button below will "disguise" all loaded tokens, changing their profile pictures, etc.</div><div class=modal-footer><button class=deadcord-button id=disguise-tokens>Disguise Tokens</button></div></div></div><a class="button-12Fmur button-f2h6uQ colorBrand-I6CyqQ enabled-9OeuTA grow-2sR_-F lookBlank-21BCro"href=#nick-tokens-modal aria-label="Nick Tokens"style=color:#fff;margin:5px type=button><div class=contents-18-Yxp><svg fill=none height=24 stroke=currentColor viewBox="0 0 24 24"width=24><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"stroke-linecap=round stroke-linejoin=round stroke-width=2></path></svg></div></a><div class=modal-window id=nick-tokens-modal><div><a class=modal-close href=# title=Close>Close</a><h1>Nick Tokens</h1><div>Mass change all token nicknames. Only applies to singular guilds.</div><input class=deadcord-input id=nickname placeholder=Nickname><div class=modal-footer><button class=deadcord-button id=nick-tokens>Nick Tokens</button></div></div></div><a class="button-12Fmur button-f2h6uQ colorBrand-I6CyqQ enabled-9OeuTA grow-2sR_-F lookBlank-21BCro"href=#speak-tokens-modal aria-label="Speak Tokens"style=color:#fff;margin:5px type=button><div class=contents-18-Yxp><svg fill=none height=24 stroke=currentColor viewBox="0 0 24 24"width=24><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"stroke-linecap=round stroke-linejoin=round stroke-width=2></path></svg></div></a><div class=modal-window id=speak-tokens-modal><div><a class=modal-close href=# title=Close>Close</a><h1>Token Speak</h1><div>Send a singular message to all open channels in a guild.</div><input class=deadcord-input id=speak-message placeholder=Message style=margin-top:8px><div class=modal-footer><button class=deadcord-button id=speak-tokens>Send Messages</button></div></div></div><a class="button-12Fmur button-f2h6uQ colorBrand-I6CyqQ enabled-9OeuTA grow-2sR_-F lookBlank-21BCro"href=#friend-spam-modal aria-label="Send Friend Requests"style=color:#fff;margin:5px type=button><div class=contents-18-Yxp><svg fill=none height=24 stroke=currentColor viewBox="0 0 24 24"width=24><path d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"stroke-linecap=round stroke-linejoin=round stroke-width=2></path></svg></div></a><div class=modal-window id=friend-spam-modal><div><a class=modal-close href=# title=Close>Close</a><h1>Friend Request Spammer</h1><div>Send mass friend requests to target user ID. May get ratelimited quickly.</div><input class=deadcord-input id=friend-user-id placeholder="User ID"><div class=modal-footer><button class=deadcord-button id=send-friend-requests>Send Requests</button></div></div></div><a class="button-12Fmur button-f2h6uQ colorBrand-I6CyqQ enabled-9OeuTA grow-2sR_-F lookBlank-21BCro"href=#ping-tokens-modal aria-label="Ping Tokens"style=color:#fff;margin:5px type=button><div class=contents-18-Yxp><svg fill=none height=24 stroke=currentColor viewBox="0 0 24 24"width=24><path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"stroke-linecap=round stroke-linejoin=round stroke-width=2></path></svg></div></a><div class=modal-window id=ping-tokens-modal><div><a class=modal-close href=# title=Close>Close</a><h1>Ping Tokens</h1><div>Ping all loaded tokens. See full results in the Deadcord engine.</div><div class=modal-footer><button class=deadcord-button id=ping-all-tokens>Ping Tokens</button></div></div></div><a class="button-12Fmur button-f2h6uQ colorBrand-I6CyqQ enabled-9OeuTA grow-2sR_-F lookBlank-21BCro"aria-label="Check for Updates"style=color:#fff;margin:5px type=button id=check-for-updates><div class=contents-18-Yxp><svg fill=none height=24 stroke=currentColor viewBox="0 0 24 24"width=24><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"stroke-linecap=round stroke-linejoin=round stroke-width=2></path></svg></div></a></div></section></div>`

class Deadcord {
  getName() {
    return "Deadcord";
  }
  getDescription() {
    return "A BetterDiscord plugin to interact with the Deadcord engine.";
  }
  getVersion() {
    return "1.0";
  }
  getAuthor() {
    return "GalaxzyDev";
  }

  start() {
    const client_version = this.getVersion();
    var container = document.querySelector("div[class='base-2jDfDU']");
    console.log(
      "%cDeadcord v" + this.getVersion(),
      "color: #9a34ff; font-size: 60px; font-weight: bold; background: #222433; padding: 10px;"
    );
    console.log(
      "%cThe Deadcord BD plugin has been loaded. Make sure the Deadcord engine is running, otherwise, the plugin will not work.",
      "color: #fff; font-size: 24px; background: #222433; padding: 10px;"
    );
    console.log(
      "%cWe are not responsible for how you use this software! Use at your own risk!",
      "color: red; font-size: 16px; background: black; padding:10px;"
    );

    inject_ui();

    function inject_ui() {
      container.insertAdjacentHTML("afterbegin", main_html);

      document
        .getElementById("ping-all-tokens")
        .addEventListener("click", ping_tokens, false);
      document
        .getElementById("join-tokens")
        .addEventListener("click", join_tokens, false);
      document
        .getElementById("leave-tokens")
        .addEventListener("click", leave_tokens, false);
      document
        .getElementById("nick-tokens")
        .addEventListener("click", nick_tokens, false);
      document
        .getElementById("disguise-tokens")
        .addEventListener("click", disguise_tokens, false);
      document
        .getElementById("react-tokens")
        .addEventListener("click", react_tokens, false);
      document
        .getElementById("speak-tokens")
        .addEventListener("click", speak_tokens, false);
      document
        .getElementById("send-friend-requests")
        .addEventListener("click", send_friend_requests, false);
      document
        .getElementById("start-spam")
        .addEventListener("click", start_spam, false);
      document
        .getElementById("start-typing-spam")
        .addEventListener("click", start_typing_spam, false);
      document
        .getElementById("stop-all")
        .addEventListener("click", stop_all, false);
      document
        .getElementById("check-for-updates")
        .addEventListener("click", check_for_updates, false);
    }

    document.onkeyup = function (e) {
      if (e.ctrlKey && e.keyCode == 190) {
        var deadcord_wrapper = document.getElementById("deadcord-wrapper");
        if (
          typeof deadcord_wrapper != "undefined" &&
          deadcord_wrapper != null
        ) {
          deadcord_wrapper.remove();
        } else {
          inject_ui();
        }
      }
    };

    function ping_tokens() {
      get_data("ping-tokens");
    }

    function join_tokens() {
      var server_invite = get_text_value("guild-invite");

      if (server_invite !== false) {
        post_data("join-guild", {
          invite: server_invite,
        });
      }
    }

    function leave_tokens() {
      post_data("leave-guild", {
        server_id: get_url()[4],
      });
    }

    function nick_tokens() {
      var nickname = get_text_value("nickname");

      if (nickname !== false) {
        post_data(`nickname`, {
          server_id: get_url()[4],
          nickname: nickname,
        });
      }
    }

    function disguise_tokens() {
      post_data(`disguise`, {
        server_id: get_url()[4],
      });
    }

    function speak_tokens() {
      var speak_message = get_text_value("speak-message");

      if (speak_message !== false) {
        post_data(`speak`, {
          server_id: get_url()[4],
          message: speak_message,
        });
      }
    }

    function send_friend_requests() {
      var friend_user_id = get_text_value("friend-user-id");

      if (friend_user_id !== false) {
        post_data(`friend`, {
          user_id: friend_user_id,
        });
      }
    }

    function react_tokens() {
      var react_channel = get_text_value("react-channel-id");
      var react_message = get_text_value("react-message-id");
      var react_emoji = get_text_value("react-emoji");

      if (
        react_emoji !== false &&
        react_channel !== false &&
        react_message !== false
      ) {
        post_data(`react`, {
          emoji: react_emoji,
          channel_id: react_channel,
          message_id: react_message,
        });
      }
    }

    function start_spam() {
      var spam_content = get_text_value("messages");

      if (spam_content !== false) {
        post_data(`start-spam`, {
          server_id: get_url()[4],
          channel_id: get_url()[5],
          messages: spam_content,
          mode: parseInt(document.getElementById("spam_modes").value),
          tts: document.getElementById("tts-text").checked,
        });
      }
    }

    function start_typing_spam() {
      post_data(`start-typing-spam`, {
        channel_id: get_url()[5],
      });
    }

    function stop_all() {
      get_data("stop-all");
    }

    async function post_data(endpoint, data = {}) {
      try {
        fetch(`${config["ACCESS_URL"]}/deadcord/${endpoint}`, {
          method: "POST",
          cache: "no-cache",
          body: new URLSearchParams(data),
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
          .then((response) => response.json())
          .then((json) => {
            BdApi.showToast(json["message"]);
          });
      } catch (err) {
        error(
          `An error occured while sending a POST request to the Deadcord Engine: ${err}`
        );
      }
    }

    async function get_data(endpoint) {
      try {
        const response = await fetch(
          `${config["ACCESS_URL"]}/deadcord/${endpoint}`
        )
          .then((response) => response.json())
          .then((json) => {
            BdApi.showToast(json["message"]);
          });
      } catch (err) {
        error(
          `An error occurred while sending a GET request to the Deadcord Engine: ${err}`
        );
      }
    }

    function get_url() {
      return window.location.href.split("/");
    }

    function get_text_value(input_id) {
      var field = document.getElementById(input_id).value;
      if (field == null || field == "") {
        BdApi.showToast("You need to give the required input.", {
          type: "error",
          timeout: "5500",
        });
        return false;
      } else {
        return field;
      }
    }

    function check_for_updates() {
      require("request").get(
        "https://raw.githubusercontent.com/GalaxzyDev/Deadcord-Client/main/version.txt",
        async (error, response, body) => {
          if (parseFloat(body) > parseFloat(client_version)) {
            BdApi.showConfirmationModal(
              "Client Update Available!",
              [
                `An update for the Deadcord plugin is available. Updates are important and required to keep your Deadcord working.`,
              ],
              {
                confirmText: "Download",
                cancelText: "Cancel",
                onConfirm: () => {
                  require("request").get(
                    "https://raw.githubusercontent.com/GalaxzyDev/Deadcord-Client/main/Deadcord.plugin.js",
                    async (error, response, body) => {
                      if (error)
                        return require("electron").shell.openExternal(
                          "https://raw.githubusercontent.com/GalaxzyDev/Deadcord-Client/main/Deadcord.plugin.js"
                        );
                      await new Promise((r) =>
                        require("fs").writeFile(
                          require("path").join(
                            BdApi.Plugins.folder,
                            "Deadcord.plugin.js"
                          ),
                          body,
                          r
                        )
                      );
                    }
                  );
                  BdApi.alert("Update Complete!", "Your Deadcord client should have updated to the latest version. If there are any issues, let us know.")
                },
              }
            );
          } else {
            BdApi.alert(
              "Up to Date!",
              "Your Deadcord client is up to date. If you are looking for a update, wait a few minutes and try again."
            );
          }
        }
      );
    }
  }

  stop() {
    var deadcord_wrapper = document.getElementById("deadcord-wrapper");
    if (typeof deadcord_wrapper != "undefined" && deadcord_wrapper != null) {
      deadcord_wrapper.remove();
    }
  }
}
