//META{"name":"Deadcord"}*//

const config = {
  ACCESS_URL: "http://localhost:6660",
};

const main_html = `<div class=full-wrap id=deadcord-wrapper><style>.modal-window{position:fixed;top:0;right:0;bottom:0;left:0;z-index:999;visibility:hidden;opacity:0;pointer-events:none;transition:all .3s}.modal-window:target{visibility:visible;opacity:1;pointer-events:auto}.modal-window>div{border-radius:8px;padding:2rem;width:400px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:#3a3d5d;border:3px solid #9a34ff;color:#fff!important}.modal-window header{font-weight:700}.modal-window h1{font-size:150%;margin:0 0 15px;font-weight:600;color:#fff!important}.modal-close{color:#fff;line-height:50px;font-size:80%;position:absolute;right:0;text-align:center;top:0;width:70px;text-decoration:none}.modal-window div:not(:last-of-type){margin-bottom:15px}.modal-footer{margin-top:10px}.full-wrap{display:inline-block;padding:3px;position:relative;background:linear-gradient(90deg,#9a34ff,#ce42f5,#ff34c2);background-position:0 100%}.controls{background-color:#3a3d5d}textarea{resize:vertical}#spam_modes{width:100%;padding:5px;color:#fff;font-size:12px;background:0 0;-webkit-appearance:none;border:solid #9a34ff 1px;border-radius:4px;margin-bottom:8px}#spam_modes option{background-color:#3a3d5d}.section-title{color:#fff;font-weight:700;font-size:24px}.switch{display:inline-block;position:relative;margin:0 0 10px;font-size:16px;line-height:24px}.switch__input{position:absolute;top:0;left:0;width:36px;height:20px;opacity:0;z-index:0}.switch__label{display:block;padding:0 0 0 44px;cursor:pointer;color:#fff}.switch__label:before{content:"";position:absolute;top:5px;left:0;width:36px;height:14px;background-color:rgba(0,0,0,.26);border-radius:14px;z-index:1;transition:background-color .28s cubic-bezier(.4,0,.2,1)}.switch__label:after{content:"";position:absolute;top:2px;left:0;width:20px;height:20px;background-color:#e631a2;border-radius:14px;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);z-index:2;transition:all .28s cubic-bezier(.4,0,.2,1);transition-property:left,background-color}.switch__input:checked+.switch__label:before{background-color:rgb(103 75 162 / 50%)}.switch__input:checked+.switch__label:after{left:16px;background-color:#a738fc}.deadcord-input{box-sizing:border-box;width:100%;font-size:14px;padding:10px;margin-bottom:8px;border:solid 1px #9a34ff;border-radius:4px;color:#fff;background-color:#313344}.deadcord-input::placeholder{color:#a7acd4;opacity:1}.deadcord-button{color:#fff;background-color:#9a34ff;padding:10px;position:relative;border:none;border-radius:4px;cursor:pointer}.deadcord-button:hover{background-color:#8637d4}.bottom{position:absolute;bottom:0}.menu-hook{position:relative}.popout-menu{width:250px;position:absolute;visibility:hidden;right:100%;top:100%;background:#3a3d5d;color:#fff;padding:10px;margin-right:20px;border:2px #9a34ff solid;z-index:999}.menu-hook:active>.popout-menu,.menu-hook:focus-within>.popout-menu{visibility:visible}input[type=range]{-webkit-appearance:none;margin:10px 0;width:100%}input[type=range]:focus{outline:0}input[type=range]::-webkit-slider-runnable-track{width:100%;height:12.8px;cursor:pointer;background:#313344;border:0 solid #313344}input[type=range]::-webkit-slider-thumb{box-shadow:0 0 0 #000,0 0 0 #0d0d0d;border:0 solid #000;height:20px;width:39px;border-radius:7px;background:#9a34ff;cursor:pointer;-webkit-appearance:none;margin-top:-3.6px}input[type=range]:focus::-webkit-slider-runnable-track{background:#313344}input[type=range]::-moz-range-track{width:100%;height:12.8px;cursor:pointer;animate:.2s;background:#ac51b5}input[type=range]::-moz-range-thumb{box-shadow:0 0 0 #000,0 0 0 #0d0d0d;border:0 solid #000;height:20px;width:39px;border-radius:7px;background:#65001c;cursor:pointer}input[type=range]::-ms-track{width:100%;height:12.8px;cursor:pointer;animate:.2s;background:0 0;border-color:transparent;border-width:39px 0;color:transparent}input[type=range]::-ms-fill-lower{background:#313344}input[type=range]::-ms-fill-upper{background:#313344}input[type=range]::-ms-thumb{box-shadow:0 0 0 #000,0 0 0 #0d0d0d;border:0 solid #000;height:20px;width:39px;background:#65001c;cursor:pointer}input[type=range]:focus::-ms-fill-lower{background:#ac51b5}input[type=range]:focus::-ms-fill-upper{background:#ac51b5}.closable-badge{border-radius:8px;border:2px solid #9a34ff;padding:8px;background-color:#313344;cursor:pointer}.content-container{height:500px;overflow-x:hidden;overflow-y:scroll}::-webkit-scrollbar{width:8px}::-webkit-scrollbar-thumb{background:#2d2f47;border-radius:8px}::-webkit-scrollbar-track{box-shadow:inset 0 0 5px F2F2F2;border-radius:0;margin-block:6px}</style><section aria-label="Deadcord Toolbar"class="container-ZMc96U controls title-31SJ6t"><h3 class="base-21yXnu size16-rrJ6ag title-17SveM">💀｜Deadcord</h3><div class=children-3xh0VB></div><div class=toolbar-3_r2xA><a class="button-12Fmur button-f2h6uQ colorBrand-I6CyqQ enabled-9OeuTA grow-2sR_-F lookBlank-21BCro"href=#start-spam-modal aria-label="Start Spam"style=color:#fff;margin:5px type=button><div class=contents-18-Yxp><svg fill=none height=24 stroke=currentColor viewBox="0 0 24 24"width=24><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"stroke-linecap=round stroke-linejoin=round stroke-width=2></path></svg></div></a><div class=modal-window id=start-spam-modal><div class=content-container><a class=modal-close href=# title=Close>Close</a><h1>Guild Spammer</h1><div>Have all tokens spam a guild. Spam speed is occasionally adjusted, among other things, for an efficient experience.</div><div class=switch><input id=tts-text class=switch__input type=checkbox><label class=switch__label for=tts-text>TTS Messages</label></div><select id=spam_modes name=spam_modes><option value=1>Regular Messages<option value=2>@everyone Ping<option value=3>Mass User Ping<option value=4>Blank Message Spam<option value=5>Laggy Messages</select> <textarea class=deadcord-input id=messages placeholder="Messages to spam. Seperate by new line."style=height:266px></textarea><div class=modal-footer><button class=deadcord-button id=start-spam style=margin-right:8px>Start Spam</button><button class=deadcord-button id=import-channels>Import Channels</button></div><div id=channels-imported></div></div></div><a class="button-12Fmur button-f2h6uQ colorBrand-I6CyqQ enabled-9OeuTA grow-2sR_-F lookBlank-21BCro"href=#typing-modal aria-label="Typing Spam"style=color:#fff;margin:5px type=button><div class=contents-18-Yxp><svg fill=none height=24 stroke=currentColor viewBox="0 0 24 24"width=24><path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"stroke-linecap=round stroke-linejoin=round stroke-width=2></path></svg></div></a><div class=modal-window id=typing-modal><div><a class=modal-close href=# title=Close>Close</a><h1>Typing Spam</h1><div>Have all tokens type in the focused channel. Click the red "X" to stop typing spam.</div><div class=modal-footer><button class=deadcord-button id=start-typing-spam>Start Typing Spam</button></div></div></div><a class="button-12Fmur button-f2h6uQ colorBrand-I6CyqQ enabled-9OeuTA grow-2sR_-F lookBlank-21BCro"href=#thread-modal aria-label="Thread Spam"style=color:#fff;margin:5px type=button><div class=contents-18-Yxp><svg fill=none height=24 stroke=currentColor viewBox="0 0 24 24"width=24><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"stroke-linecap=round stroke-linejoin=round stroke-width=2></path></svg></div></a><div class=modal-window id=thread-modal><div><a class=modal-close href=# title=Close>Close</a><h1>Thread Spammer</h1><div>Have all tokens create a set of threads.</div><input id=thread-use-name class=deadcord-input placeholder="Thread Name"><input id=thread-channel-id class=deadcord-input placeholder="Channel ID"><div class=modal-footer><button class=deadcord-button id=start-thread-spam>Start Thread Spam</button></div></div></div><a class="button-12Fmur button-f2h6uQ colorBrand-I6CyqQ enabled-9OeuTA grow-2sR_-F lookBlank-21BCro"href=#webhook-modal aria-label="Webhook Utility"style=color:#fff;margin:5px type=button><div class=contents-18-Yxp><svg fill=none height=24 stroke=currentColor viewBox="0 0 24 24"width=24><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"stroke-linecap=round stroke-linejoin=round stroke-width=2></path></svg></div></a><div class=modal-window id=webhook-modal><div><a class=modal-close href=# title=Close>Close</a><h1>Webhook Utility</h1><div>Delete or spam a webhook, no tokens required.</div><input id=webhook-url class=deadcord-input placeholder="Webhook URL"><input id=webhook-username class=deadcord-input placeholder="Webhook Username"><textarea class=deadcord-input id=webhook-spam-message placeholder="Message to send to the webhook."style=height:165px></textarea><div class=modal-footer><button class=deadcord-button id=start-webhook-spam style=margin-right:8px>Spam Webhook</button><button class=deadcord-button id=delete-webhook>Delete Webhook</button></div></div></div><button class="button-12Fmur button-f2h6uQ colorBrand-I6CyqQ enabled-9OeuTA grow-2sR_-F lookBlank-21BCro"id=stop-all style=color:#ff007f;margin:5px aria-label="Stop All Actions"type=button><div class=contents-18-Yxp><svg fill=none height=24 stroke=currentColor viewBox="0 0 24 24"width=24><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"stroke-linecap=round stroke-linejoin=round stroke-width=2></path></svg></div></button> <a class="button-12Fmur button-f2h6uQ colorBrand-I6CyqQ enabled-9OeuTA grow-2sR_-F lookBlank-21BCro"href=#join-tokens-modal aria-label="Join Tokens"style=color:#fff;margin:5px type=button><div class=contents-18-Yxp><svg fill=none height=24 stroke=currentColor viewBox="0 0 24 24"width=24><path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"stroke-linecap=round stroke-linejoin=round stroke-width=2></path></svg></div></a><div class=modal-window id=join-tokens-modal><div><a class=modal-close href=# title=Close>Close</a><h1>Guild Joiner</h1><div>Have all loaded tokens join the target guild.</div><input id=guild-invite class=deadcord-input placeholder="Guild Invite"><input id=join-delay-seconds type=range max=100 min=0 step=1 value=0><div class=modal-footer><button class=deadcord-button id=join-tokens>Join Guild</button></div></div></div><a class="button-12Fmur button-f2h6uQ colorBrand-I6CyqQ enabled-9OeuTA grow-2sR_-F lookBlank-21BCro"href=#leave-tokens-modal aria-label="Leave Tokens"style=color:#fff;margin:5px type=button><div class=contents-18-Yxp><svg fill=none height=24 stroke=currentColor viewBox="0 0 24 24"width=24><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"stroke-linecap=round stroke-linejoin=round stroke-width=2></path></svg></div></a><div class=modal-window id=leave-tokens-modal><div><a class=modal-close href=# title=Close>Close</a><h1>Guild Leaver</h1><div>Have all loaded tokens leave the target guild.</div><div class=modal-footer><button class=deadcord-button id=leave-tokens>Leave Guild</button></div></div></div><a class="button-12Fmur button-f2h6uQ colorBrand-I6CyqQ enabled-9OeuTA grow-2sR_-F lookBlank-21BCro"href=#react-tokens-modal aria-label="React Tokens"style=color:#fff;margin:5px type=button><div class=contents-18-Yxp><svg fill=none height=24 stroke=currentColor viewBox="0 0 24 24"width=24><path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"stroke-linecap=round stroke-linejoin=round stroke-width=2></path></svg></div></a><div class=modal-window id=react-tokens-modal><div><a class=modal-close href=# title=Close>Close</a><h1>Token React</h1><div>Have all tokens react to a certain message. Emoji name should be provided. (smile)</div><input id=react-channel-id class=deadcord-input placeholder="Channel ID"><input id=react-message-id class=deadcord-input placeholder="Message ID"><input id=react-emoji class=deadcord-input placeholder="Emoji Name"><div class=modal-footer><button class=deadcord-button id=react-tokens>React Tokens</button></div></div></div><a class="button-12Fmur button-f2h6uQ colorBrand-I6CyqQ enabled-9OeuTA grow-2sR_-F lookBlank-21BCro"href=#disguise-tokens-modal aria-label="Disguise Tokens"style=color:#fff;margin:5px type=button><div class=contents-18-Yxp><svg fill=none height=24 stroke=currentColor viewBox="0 0 24 24"width=24><path d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"stroke-linecap=round stroke-linejoin=round stroke-width=2></path></svg></div></a><div class=modal-window id=disguise-tokens-modal><div><a class=modal-close href=# title=Close>Close</a><h1>Disguise Tokens</h1><div>The button below will "disguise" all loaded tokens, changing their profile pictures, etc.</div><div class=modal-footer><button class=deadcord-button id=disguise-tokens>Disguise Tokens</button></div></div></div><a class="button-12Fmur button-f2h6uQ colorBrand-I6CyqQ enabled-9OeuTA grow-2sR_-F lookBlank-21BCro"href=#nick-tokens-modal aria-label="Nick Tokens"style=color:#fff;margin:5px type=button><div class=contents-18-Yxp><svg fill=none height=24 stroke=currentColor viewBox="0 0 24 24"width=24><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"stroke-linecap=round stroke-linejoin=round stroke-width=2></path></svg></div></a><div class=modal-window id=nick-tokens-modal><div><a class=modal-close href=# title=Close>Close</a><h1>Nick Tokens</h1><div>Mass change all token nicknames. Only applies to singular guilds.</div><input id=nickname class=deadcord-input placeholder=Nickname><div class=modal-footer><button class=deadcord-button id=nick-tokens>Nick Tokens</button></div></div></div><a class="button-12Fmur button-f2h6uQ colorBrand-I6CyqQ enabled-9OeuTA grow-2sR_-F lookBlank-21BCro"href=#speak-tokens-modal aria-label="Speak Tokens"style=color:#fff;margin:5px type=button><div class=contents-18-Yxp><svg fill=none height=24 stroke=currentColor viewBox="0 0 24 24"width=24><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"stroke-linecap=round stroke-linejoin=round stroke-width=2></path></svg></div></a><div class=modal-window id=speak-tokens-modal><div><a class=modal-close href=# title=Close>Close</a><h1>Token Speak</h1><div>Send a singular message to all open channels in a guild.</div><input id=speak-message class=deadcord-input placeholder=Message style=margin-top:8px><div class=modal-footer><button class=deadcord-button id=speak-tokens>Send Messages</button></div></div></div><a class="button-12Fmur button-f2h6uQ colorBrand-I6CyqQ enabled-9OeuTA grow-2sR_-F lookBlank-21BCro"href=#friend-spam-modal aria-label="Send Friend Requests"style=color:#fff;margin:5px type=button><div class=contents-18-Yxp><svg fill=none height=24 stroke=currentColor viewBox="0 0 24 24"width=24><path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"stroke-linecap=round stroke-linejoin=round stroke-width=2></path></svg></div></a><div class=modal-window id=friend-spam-modal><div><a class=modal-close href=# title=Close>Close</a><h1>Friend Request Spammer</h1><div>Send mass friend requests to target user ID. May get ratelimited quickly.</div><input id=friend-user-id class=deadcord-input placeholder="User ID"><div class=modal-footer><button class=deadcord-button id=send-friend-requests>Send Requests</button></div></div></div><a class="button-12Fmur button-f2h6uQ colorBrand-I6CyqQ enabled-9OeuTA grow-2sR_-F lookBlank-21BCro"href=#friend-remove-modal aria-label="Remove Friend Requests"style=color:#fff;margin:5px type=button><div class=contents-18-Yxp><svg fill=none height=24 stroke=currentColor viewBox="0 0 24 24"width=24><path d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6"stroke-linecap=round stroke-linejoin=round stroke-width=2></path></svg></div></a><div class=modal-window id=friend-remove-modal><div><a class=modal-close href=# title=Close>Close</a><h1>Friend Request Remover</h1><div>Remove all friend requests from a target user ID.</div><input id=remove-friend-user-id class=deadcord-input placeholder="User ID"><div class=modal-footer><button class=deadcord-button id=remove-friend-requests>Remove Friend Requests</button></div></div></div><a class="button-12Fmur button-f2h6uQ colorBrand-I6CyqQ enabled-9OeuTA grow-2sR_-F lookBlank-21BCro"href=#ping-tokens-modal aria-label="Ping Tokens"style=color:#fff;margin:5px type=button><div class=contents-18-Yxp><svg fill=none height=24 stroke=currentColor viewBox="0 0 24 24"width=24><path d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"stroke-linecap=round stroke-linejoin=round stroke-width=2></path></svg></div></a><div class=modal-window id=ping-tokens-modal><div><a class=modal-close href=# title=Close>Close</a><h1>Ping Tokens</h1><div>Ping all loaded tokens. See full results in the Deadcord engine.</div><div class=modal-footer><button class=deadcord-button id=ping-all-tokens>Ping Tokens</button></div></div></div><a class="button-12Fmur button-f2h6uQ colorBrand-I6CyqQ enabled-9OeuTA grow-2sR_-F lookBlank-21BCro"aria-label="Check for Updates"style=color:#fff;margin:5px type=button id=check-for-updates><div class=contents-18-Yxp><svg fill=none height=24 stroke=currentColor viewBox="0 0 24 24"width=24><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"stroke-linecap=round stroke-linejoin=round stroke-width=2></path></svg></div></a></div></section></div>`;

class Deadcord {
  getName() {
    return "Deadcord";
  }
  getDescription() {
    return "A BetterDiscord plugin to interact with the Deadcord engine.";
  }
  getVersion() {
    return "1.4";
  }
  getAuthor() {
    return "GalaxzyDev";
  }

  start() {
    const client_version = this.getVersion();
    var imported_channels = {};
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
        .getElementById("remove-friend-requests")
        .addEventListener("click", remove_friend_requests, false);
      document
        .getElementById("start-spam")
        .addEventListener("click", start_spam, false);
      document
        .getElementById("import-channels")
        .addEventListener("click", import_channels, false);
      document
        .getElementById("start-typing-spam")
        .addEventListener("click", start_typing_spam, false);
      document
        .getElementById("start-webhook-spam")
        .addEventListener("click", start_webhook_spam, false);
      document
        .getElementById("delete-webhook")
        .addEventListener("click", delete_webhook, false);
      document
        .getElementById("start-thread-spam")
        .addEventListener("click", start_thread_spam, false);
      document
        .getElementById("stop-all")
        .addEventListener("click", stop_all, false);
      document
        .getElementById("check-for-updates")
        .addEventListener("click", check_for_updates, false);
    }

    var join_delay_slider = document.getElementById("join-delay-seconds");
    join_delay_slider.oninput = function (event) {
      var output = document.getElementById("join-tokens");
      output.innerText =
        "Join Guild with: " + join_delay_slider.value + " second delay";
    };

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

      var join_delay = document.getElementById("join-delay-seconds").value;

      if (server_invite !== false) {
        post_data("join-guild", {
          invite: server_invite,
          delay: join_delay,
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
        post_data(`nick`, {
          server_id: get_url()[4],
          nickname: nickname,
        });
      }
    }

    function disguise_tokens() {
      get_data(`disguise`);
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

    function remove_friend_requests() {
      var remove_friend_user_id = get_text_value("remove-friend-user-id");

      if (remove_friend_user_id !== false) {
        post_data(`remove-friend`, {
          user_id: remove_friend_user_id,
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
      var gathered_ids = [];
      var spam_content = get_text_value("messages");

      if (Object.keys(imported_channels).length > 0) {
        for (var key in imported_channels) {
          if (imported_channels.hasOwnProperty(key)) {
            gathered_ids.push(key);
          }
        }

        if (spam_content !== false) {
          post_data(`start-spam`, {
            server_id: get_url()[4],
            messages: spam_content,
            channels: gathered_ids.join(),
            mode: parseInt(document.getElementById("spam_modes").value),
            tts: document.getElementById("tts-text").checked,
          });
        }
      } else {
        BdApi.showToast("Channels must be imported first.", {
          type: "error",
          timeout: "5500",
        });
        return;
      }
    }

    function start_typing_spam() {
      post_data(`start-typing-spam`, {
        channel_id: get_url()[5],
      });
    }

    function start_thread_spam() {
      var thread_name = get_text_value("thread-use-name");
      var channel_id = get_text_value("thread-channel-id");

      if (thread_name !== false && channel_id !== false) {
        post_data(`start-thread-spam`, {
          thread_name: thread_name,
          channel_id: channel_id,
        });
      }
    }

    function start_webhook_spam() {
      var webhook_url = get_text_value("webhook-url");
      var username = get_text_value("webhook-username");
      var webhook_spam_message = get_text_value("webhook-spam-message");

      if (
        username !== false &&
        webhook_url !== false &&
        webhook_spam_message !== false
      ) {
        post_data(`start-webhook-spam`, {
          webhook: webhook_url,
          username: username,
          message: webhook_spam_message,
        });
      }
    }

    function delete_webhook() {
      var webhook_url = get_text_value("webhook-url");

      if (webhook_url !== false) {
        post_data(`delete-webhook`, {
          webhook: webhook_url,
        });
      }
    }

    function stop_all() {
      get_data("stop-all");
    }

    function remove_channel(id) {
      delete imported_channels[id];
      document.getElementById(id).remove();
      BdApi.showToast("Removed Channel: " + id);
    }

    function import_channels() {
      imported_channels = {};
      var import_container = document.getElementById("channels-imported");
      import_container.innerHTML = "";
      post_data("fetch-channels", {
        server_id: get_url()[4],
      }).then((result) => {
        let obj = result.data.channels;
        Object.keys(obj).forEach((key) => {
          var chunk = obj[key].split(":");
          imported_channels[chunk[1]] = chunk[0];
          import_container.insertAdjacentHTML(
            "afterbegin",
            `<div class="closable-badge" id="${chunk[1]}">${chunk[0]}</div>`
          );
          document
            .getElementById(chunk[1])
            .addEventListener("click", function (e) {
              remove_channel(e.target.id);
            });
        });
      });
    }

    async function post_data(endpoint, data = {}) {
      try {
        const post_response = await fetch(
          `${config["ACCESS_URL"]}/deadcord/${endpoint}`,
          {
            method: "POST",
            cache: "no-cache",
            body: new URLSearchParams(data),
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          }
        );
        const post_fetched = await post_response.json();
        BdApi.showToast(post_fetched["message"]);
        return post_fetched;
      } catch (err) {
        console.log(err);
      }
    }

    async function get_data(endpoint) {
      try {
        const get_response = await fetch(
          `${config["ACCESS_URL"]}/deadcord/${endpoint}`
        );
        const get_fetched = await get_response.json();
        BdApi.showToast(get_fetched["message"]);
        return get_fetched;
      } catch (err) {
        console.log(err);
      }
    }

    function get_url() {
      var format = window.location.href.split("/");

      for (const [key, value] of Object.entries(format)) {
        if (value.includes("#")) {
          format[key] = value.split("#")[0];
        }
      }
      return format;
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
                  BdApi.alert(
                    "Update Complete!",
                    "Your Deadcord client should have updated to the latest version. If there are any issues, let us know."
                  );
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
