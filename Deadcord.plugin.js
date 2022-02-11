//META{"name":"Deadcord"}*//

// TEST COMMENT

const config = {
  "ACCESS_URL": "http://localhost:6660",
}

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
    const client_version = this.getVersion()
    var container = document.querySelector("div[class='base-2jDfDU']");
    console.log('%cDeadcord v'+this.getVersion(), 'color: #9a34ff; font-size: 60px; font-weight: bold; background: #222433; padding: 10px;');
    console.log('%cThe Deadcord BD plugin has been loaded. Make sure the Deadcord engine is running, otherwise, the plugin will not work.', 'color: #fff; font-size: 24px; background: #222433; padding: 10px;');
    console.log('%cWe are not responsible for how you use this software! Use at your own risk!', 'color: red; font-size: 16px; background: black; padding:10px;');

    inject_ui()

    function inject_ui(){
       get_html(
            "https://raw.githubusercontent.com/GalaxzyDev/Deadcord-Backend/main/beta.html"
          ).then((main_html) => {
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
          });
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
          inject_ui()
        }
      }
    };

    check_for_updates();

    async function get_html(url) {
      let response = await fetch(url);
      let data = await response.text();
      return data;
    }

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
      post_data('leave-guild', {
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

      if (speak_message !== false){
        post_data(`speak`, {
          server_id: get_url()[4],
          message: speak_message
        });
      }
    }

    function send_friend_requests() {
      var friend_user_id = get_text_value("friend-user-id");

      if (friend_user_id !== false){
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
          headers: {"Content-Type": "application/x-www-form-urlencoded"},
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
        const response = await fetch(`${config["ACCESS_URL"]}/deadcord/${endpoint}`)
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

    function check_for_updates(){
      require("request").get("https://raw.githubusercontent.com/GalaxzyDev/Deadcord-Client/main/version.txt", async (error, response, body) => {
        if (parseInt(body) > parseInt(client_version)){
          BdApi.showConfirmationModal(
		        "Client Update Available!",
		        [`An update for the Deadcord plugin is available. Updates are important and required to keep your Deadcord working.`], {
		        confirmText: "Download",
		        cancelText: "Cancel",
		        onConfirm: () => {
			        require("request").get("https://raw.githubusercontent.com/GalaxzyDev/Deadcord-Client/main/Deadcord.plugin.js", async (error, response, body) => {
			        if (error) return require("electron").shell.openExternal("https://raw.githubusercontent.com/GalaxzyDev/Deadcord-Client/main/Deadcord.plugin.js");
				        await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "Deadcord.plugin.js"), body, r));
			        });
		        }
	        }
        )
       } else {
         BdApi.alert("Up to Date!", "Your Deadcord client is up to date. If you are looking for a update, wait a few minutes and try again.")
       }
      }
    )};
  }

  stop() {
    var deadcord_wrapper = document.getElementById("deadcord-wrapper");
    if (typeof deadcord_wrapper != "undefined" && deadcord_wrapper != null) {
      deadcord_wrapper.remove();
    }
  }


}
