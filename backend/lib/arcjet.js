import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/node";

import "dotenv/config";

// init arcjet

export const aj = arcjet({
    key: process.env.ARCJET_KEY,
    characteristics: ["ip.source"],
    rules: [
        // shield protects your app from common attack such as SQL injections, XSS, CSRF attacks
        shield({mode:"LIVE"}),
        detectBot({
            mode:"LIVE",
            // blocks all bots except search engines
            allow:[
                "CATEGORY:SEARCH_ENGINE"
                // see the full list at arcjet bot list
            ]
        }),

        // rate limiting
        tokenBucket({
            mode: "LIVE",
            refillRate: 5,
            interval: 10,
            capacity: 10,
        }),
    ],
});

