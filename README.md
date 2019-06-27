HypeBot Open-Source project version 1.0.0
-----------------------------------------
27/06/2019
-----------------------------------------

GENERAL USAGE NOTES:
- HypeBot Open-Source project is under MIT license. Any attempt removing authors name and/or contact links will result serious punishments.

- HypeBot project is Open-Source and most of the code expect mention above is editable. [Here: allowed to edit. Editing code mentioned above will result breaking of MIT license]

- Not knowing MIT license and/or not reading this file doesn't mean that you don't need to obey it.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Bot setup
---------------------------------------------
CAUTION: HypeBot Open-Source project is NOT responsible for bot corruption because of not reading this setup tutorial. Before starting digging in the code, God please read the whole file. 
-----------
---------------------------
Greetings. If you are reading this, it might mean that you are from future, bot is fully operational and:
- We won Discord Hack Week
  
  OR

- You are friend of mine which wanted to see how this damn thing works

  OR


- You are just regular nerd wondering around the web which accidently found this project.

Either way, we are happy that you are reading this stuff anyways. A lot of people just ignore those and - suprise - the thing they download is corrupted. In that chapter you will learn how to configure bot correctly to your needs. So Let's a go!

--------------
How do I turn this thing on in first place ?!
-----

That is quite easy! to make this thing working, follow steps below.


- Go to discord developer portal,

- Click "applications",

- Click "New application",

- Name your application and click "Create".

Now you can see your application control panel. But we want bot, not application, right? Well, true. However in that panel you can give bot name, your icon etc. Give it a try!

- After you are done naming and creating icon for your bot, go to "bot" catalog,
- Click "Create new bot".
- Go to OAuth2 catalog
- Look at the "scopes" section. You can find "bot" scope in it. Click it.
- Nextly look below scopes section. You probably will find "Bot permissions" box in there [if you did everything correctly]. Select administrator permission and copy bot link.
- Open link in your browser and add bot to your server.

Now, now. This is time where fun happens.

- To procced further, if you want to run this bot using this method, you have to download npm library manager. To do so download program called node.js.
- After installing node.js, run it and write following command: npm install discord.js . Doing so will result discord.js library installation. You still need help with discord.js? Visit their official website: https://discord.js.org/#/ .
- Now, after you have done it, create folder on your desktop and call it how you want. It isn't important.
- When you create folder, go into it and create following files: auth.json , bot.js , config.json , misc.js and package.json .
- When you create all of the files, copy all content from files of HypeBot and paste it into correct files.

NOTE: IN PACKAGE.JSON FILE PASTE ONLY THIS:
{
  "name": "HypeBot",
  "version": "1.0.0",
  "description": "Bot na Discord Hack week",
  "main": "bot.js",
  "license": "Copyright 2019 IIN ENTERTAINMENT. Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.",
  "license_file": "LICENSE"
}


Now, this is tricky.

- When you paste files, go to auth.js . This is part when you need to go back to discord developer portal. In bot catalog, please copy token and paste it in place called YOUR_TOKEN_HERE in auth.js file. [WARNING: paste token in ""]
- Go to bot.js file and try to find following "consts":

  _const Your_Server_Id = "";_
  
  _const ADMIN_ROLE_ID = [""];_
  
  _const prefix = "-";_
  
  _const name = "HypeBot";_

explonation
---------

- To make bot work correctly, in _const Your_Server_Id ="";_ you have to copy and paste server ID that bot is in. To do so you have to have Discord Developer mode on. To do so go to settings => Look => Developer mode.
- In _const ADMIN_ROLE_ID = [""];_ you must copy your administrator role ID. Simply by going to server settings => roles. Then right click on role that you want to copy ID, and simply enoguh click copy ID. Then copy your admin ID role to the ADMIN_ROLE_ID const! If you want multipule admin roles try const ADMIN_ROLE_ID = ["one_admin_role_id","second_admin_role_id","..."] etc. Simple enough.
- In _const prefix = "-";_ you can replace _"-"_ with your own prefix like _"^"_ etc. [NOTE: prefix is sign before command. When we write prefix as "^" we do not write command like "^"help, but ^help]
- In _const name = "HypeBot";_ you just write nickname for your bot. Simple enough.

final
----

And.... that is it. You propally configured HypeBot Open-source project 1.0.0! To make it run go into node.js console, go into your catalog on desktop with bot using CD command, and write following:
- node bot.js 

Thank you for reading that configuration guide! You may now test bot and - if you are brave enough - edit code. Have fun!


