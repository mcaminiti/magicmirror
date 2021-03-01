/* Magic Mirror Config
 *
 * http://www.github.com/mcaminiti/magicmirror
 * 
 */

var config = {
  address: "0.0.0.0", // Address to listen on, can be:
  // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
  // - another specific IPv4/6 to listen on a specific interface
  // - "0.0.0.0" to listen on any interface
  // Default, when address config is left out, is "localhost"
  port: 8080,
  ipWhitelist: [], // Set [] to allow all IP addresses
  // or add a specific IPv4 of 192.168.1.5 :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
  // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

  language: "en",
  timeFormat: 12,
  units: "imperial",

  modules: [
    {
      module: "alert",
    },
    {
      module: "updatenotification",
      position: "top_bar"
    },
    {
      module: "clock",
      position: "top_left",
      config: {
              displaySeconds: false,
              showSunTimes: true,
              lat: "REDACTED",
              lon: "-REDACTED"
      }
    },
    {
    	module: 'MMM-homeassistant-sensors',
    	position: 'top_left',
    	config: {
    		host: "REDACTED",
    		port: "443",
    		https: true,
    		token: "REDACTED",
    		updateInterval: "180000",
    		rowClass: "big",
                title: "Family",
    		values: [
    			{
    				sensor: "person.USER1",
    				name: "%v%",
    				displayvalue: false,
				replace: [{
						"not_home": "away",
					}
				]
    			},
    			{
    				sensor: "person.USER2",
    				name: "%v%",
    				displayvalue: false,
				replace: [{
						"not_home": "away",
					}
				]
    			},
    			{
    				sensor: "person.USER3",
    				name: "%v%",
    				displayvalue: false,
				replace: [{
						"not_home": "away",
					}
				]
    			},
    			{
    				sensor: "person.USER4",
    				name: "%v%",
    				displayvalue: false,
				replace: [{
						"not_home": "away",
					}
				]
    			},
    		]
    	}
    },
    {
      module: 'MMM-Todoist',
      position: 'top_left',	// This can be any of the regions. Best results in left or right regions.
      header: 'House Tasks', // This is optional
      config: { // See 'Configuration options' for more information.
        hideWhenEmpty: false,
        accessToken: 'REDACTED',
        maximumEntries: 10,
        updateInterval: 5*60*1000, 
        displayAvatar: true,
        showProject: false,
        displayTasksWithinDays: 0,  
        maxTitleLength: 40,
        wrapEvents: true,
        fade: false,      
        // projects and/or labels is mandatory:
        projects: [ REDACTED ], 
        }
    },
    {
    	module: 'MMM-CalendarExt2',
    	config: {
        scenes:[
    			{
    				name: "DEFAULT",
    				views: ["Upcoming","Calendar View"],
    			}
    		],
    		views:[
    			{
    				name: "Upcoming",
    				mode: "daily",
            title: "All Calendar Events",
            position: "top_left",
    				maxItems: 10,
    				maxDays: 1,
            fromNow: 0,
            slotCount: 1,
    				locale: "en",
            timeFormat:"h:mm a",
    				hideOverflow: false,
    				filterPassedEvent: true,
    				calendars: ["USER1","USER2","USER3","USER4","Family","Dance"],
    			},
    			{
    				name: "Calendar View",
    				title: "Calandar View",
    				mode: "daily",
				slotSubTitleFormat: "MMM Do",
    				type: "row",
    				position: "bottom_bar",
            			fromNow: 1,
    				slotCount: 4,
    				locale: "en",
            			timeFormat:"h:mm a",
    				hideOverflow: false,
    				filterPassedEvent: true,
    				calendars: ["USER1","USER2","USER3","USER4","Family","Dance"],
    			},
    		],
    		calendars: [
    			{
    				name: "USER1",
    				url: "webcal://REDACTED.icloud.com/published/2/REDACTED",
            className: "USER1",
    			},
    			{
    				name: "USER2",
    				url: "webcal://REDACTED.icloud.com/published/2/REDACTED",
            className: "USER2",
    			},
    			{
    				name: "USER3",
    				url: "webcal://REDACTED.icloud.com/published/2/REDACTED",
            className: "USER3",
            //icon: "openmoji-purple-circle",
    			},
    			{
    				name: "USER4",
    				url: "webcal://REDACTED.icloud.com/published/2/REDACTED",
            className: "USER4",
    			},
    			{
    				name: "Family",
    				url: "webcal://REDACTED.icloud.com/published/2/REDACTED",
            className: "family",
    			},
    			{
    				name: "Dance",
    				url: "webcal://REDACTED.icloud.com/published/2/REDACTED",
            className: "dance",
    			},
    		],
    	},
    },

    {
      module: "currentweather",
      position: "top_right",
      config: {
        //location: "REDACTED",
        locationID: "REDACTED",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
        appid: "REDACTED",
        showHumidity: false,
        showSun: false
      }
    },
    {
      module: "weatherforecast",
      position: "top_right",
      header: "Weather Forecast",
      config: {
        locationID: "REDACTED",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
        appid: "REDACTED",
        colored: true,
        fade: false,
      }
    },
    {
      module: "MMM-Pollen",
      position: "top_right",
      header: "Pollen Forecast",
      config: {
          updateInterval: 3 * 60 * 60 * 1000, // every 3 hours
          zip_code: "REDACTED"
      }
    },
    {
        module: 'MMM-homeassistant-sensors',
        position: 'top_right',
        config: {
                host: "REDACTED",
                port: "443",
                https: true,
                token: "REDACTED",
                updateInterval: "180000",
                rowClass: "big",
                title: "Home Assistant",
                values: [
                        {
                                sensor: "input_boolean.fish_fed_today",
                                name: "Biocube Fish Fed",
                                displayvalue: true,
                                replace: [{
                                                "on": "yes",
                                                "off": "no",
                                        }
                                ]
                        },
                ]
        }
    },
    {
      module: "MMM-MyScoreboard",
      position: "top_right",
      classes: "default everyone",
      header: "Sports Scoreboard",
      config: {
        showLeagueSeparators: true,
        colored: true,
        viewStyle: "mediumLogos",
        sports: [
          {
            league: "NHL",
            teams: ["REDACTED"]
          },
          {
            league: "NBA",
            teams: ["REDACTED"]
          },
          {
            league: "MLB",
            teams: ["REDACTED"]
          }
        ]

      }
    },
    {
      module: "MMM-Wallpaper",
      position: "fullscreen_below",
      config: { // See "Configuration options" for more information.
        source: "bing",
        filter: "grayscale(30%) brightness(30%)",
        slideInterval: 300 * 1000 // Change slides every minute
      }
    },
    {
        module: 'MMM-Remote-Control',
        // uncomment the following line to show the URL of the remote control on the mirror
        // position: 'bottom_left',
        // you can hide this module afterwards from the remote control itself
        config: {
            customCommand: {},  // Optional, See "Using Custom Commands" below
            showModuleApiMenu: true, // Optional, Enable the Module Controls menu
            secureEndpoints: true, // Optional, See API/README.md
            // uncomment any of the lines below if you're gonna use it
            // customMenu: "custom_menu.json", // Optional, See "Custom Menu Items" below
            // apiKey: "", // Optional, See API/README.md for details
            // classes: {} // Optional, See "Custom Classes" below
        }
    },
  ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
