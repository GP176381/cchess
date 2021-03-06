#!/usr/bin/env node

module.exports = 
{
    "address":'0.0.0.0',
    "rootroute":['qr', 'chat', 'listlog', 'loadlog', 'save', 'load', 'exit', 'apk', 'remove'],
    "indexfile":"index.html",
    "chatlog" : "/playlog",
    "states":[
                ["prepare", 12],                    //  0
                ["filereq", 2, 3, 4, 5],            //  1
                ["filedone", 6],                    //  2
                ["redirect", -1],                   //  3
                ["notfound", 6],                    //  4
                ["fileerr", 6],                     //  5
                ["done", -1],                       //  6
                ["user", 6],                        //  7
                ['message', 6],                     //  8
                ['fileaccess', 1],                  //  9 
                ['qr', 6],                          // 10
                ['chat', 4, 6],                     // 11
                ["urlparse", 4, 9, 10, 11, 13, 14,
                    15, 16, 17, 18, 19],        	// 12 
                ['listlog', 6],                     // 13
                ['loadlog', 6],			    		// 14
                ['save', 6],			    		// 15
                ['load', 6],                        // 16
                ['exit', -1],                       // 17
                ['apk', 9], 						// 18
                ['remove', 6]						// 19
        ]

}
