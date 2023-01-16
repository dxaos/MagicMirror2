/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
        address: "localhost",   // Address to listen on, can be:
                                                        // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
                                                        // - another specific IPv4/6 to listen on a specific interface
                                                        // - "0.0.0.0", "::" to listen on any interface
                                                        // Default, when address config is left out or empty, is "localhost"
        port: 8080,
        basePath: "/",  // The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
                                        // you must set the sub path here. basePath must end with a /
        ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],  // Set [] to allow all IP addresses
                                                                                                                        // or add a specific IPv4 of 192.168.1.5 :
                                                                                                                        // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
                                                                                                                        // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
                                                                                                                        // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

        useHttps: false,                // Support HTTPS or not, default "false" will use HTTP
        httpsPrivateKey: "",    // HTTPS private key path, only require when useHttps is true
        httpsCertificate: "",   // HTTPS Certificate path, only require when useHttps is true

        language: "ru",
        locale: "ru-RU",
        logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
        timeFormat: 24,
        units: "metric",
        // serverOnly:  true/false/"local" ,
        // local for armv6l processors, default
        //   starts serveronly and then starts chrome browser
        // false, default for all NON-armv6l devices
        // true, force serveronly mode, because you want to.. no UI on this device

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
                        position: "top_left"
                },
                {
                        module: "calendar",
                        header: "Праздники",
                        position: "top_left",
                        config: {
                                calendars: [
                                        {
                                                symbol: "calendar-check",
                                                url: "http://www.calend.ru/ical/ical-russtate.ics"
                                        },
                                        {
                                                symbol: "calendar-check",
                                                url: "http://www.calend.ru/ical/ical-wholeworld.ics"
                                        }
                                ]
                        }
                },
                {
                        module: "MMM-OpenmapWeather",
                        position: "top_right",  // This can be any of the regions. Best results in left or right regions.
                        header: "Погода сейчас", //Location is the default value if header is empty or not defined.
                        config: {
                                // See 'Configuration options' for more information.
                                location: "_Ваш_город_, _RU_", 
                                locationID: "_ID_Вашего_города_", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
                                appid: "_API_который_Вы_сгенерировали_",  //openweathermap.org API key
                                colorIcon: true
                        }
                },
                {
                        module: "weather",
                        position: "top_right",
                        header: "Ближайший прогноз",
                        config: {
                                weatherProvider: "openweathermap",
                                type: "forecast",
                                location: "_Ваш_город_, _RU_",
                                locationID: "_ID_Вашего_города_", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
                                apiKey: "_API_который_Вы_сгенерировали_"
                        }
                },
                {
                        module: "newsfeed",
                        position: "bottom_bar",
                        config: {
                                feeds: [
                                        {
                                                title: "Lenta.ru",
                                                url: "https://lenta.ru/rss/news"
                                        },
                                        {
                                                title: "Vesti.Ru",
                                                url: "https://www.vesti.ru/vesti.rss"
                                        }
                                ],
                                showPublishDate: false,
                                showSourceTitle: false,
                                broadcastNewsFeeds: true,
                                broadcastNewsUpdates: true,
                                showDescription: true,
                                updateInterval: 20000
                        }
                },
        ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
