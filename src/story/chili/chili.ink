-> intro
= intro 
<h1><i>The Great Chili Competition</i></h1>
It’s that time of year once again: the annual Maryport Chili tournament. The town is aflutter with the possibilities of what the contestants have to bring this year. As the oldest child of the Nielson household, you have decided it is time to learn the family secrets for the perfect chili. Luckily, your Aunt Susan has taken you on as her apprentice.  She has already cooked up a plan of which ingredients you need to get, from which stores (sourcing is as important as the recipe!), and in what order to add them to the chili. 

Unfortunately, it is the day of the competition, and Aunt Susan is nowhere to be found! She went to visit your grandmother upstate and has not returned. Her old pickup must have broken down again. 
+ [Call Aunt Susan] -> call 

= call 
You attempt to call Aunt Susan.

<i> You have reach the voice mail of Susan Nielson... please leave your message at the tone<i> 

{Straight to voicemail! You know the cell reception upstate is shaky at best, so you aren't completely surprised. However, the hours until the competition are dwindling down. If you are going to compete you need to get started right away. You know you need to get <b>black beans</b>, <b>tomatoes</b>, <b>jalapenos</b>, and <b>chili powder</b>, and each must be bought at a different store and added in the right order. Unfortunately, you can't remember where to get each ingredient or what order to put them in. Maybe you can look around the house and be able to figure it out.| Straight to voicemail again. You have already called {call} times, it's probably time to move on.} 

+ [Seach the house] -> house 


= house 
Searching the house. 
+ [Living Room] -> living_room 
+ [Kitchen] -> kitchen 
+ [Garage] -> garage 
+ [Office] -> office 
+ [Call Aunt Susan] -> call 


= living_room
You enter the living room. Your mom is sitting on the couch, working on knitting a scarf. 

+ [Ask your mom about the chili] -> mom 
+ [Search somewhere else in the house] -> house 


= mom 
{Your mom looks up from her scarf with a confused look at first. "Oh, well, you know I never got into this chili business, honey. But I do remember that Susan was quite stressed when she was talking to me. It was something about the <b>Jalapenos</b> I know," she tells you|You are talking to your mom.}

+(jal)[Ask her about the Jalapenos] 
"You know your aunt, she can be quite specific about these things. She was thinking about getting them at that co-op, but then she went on about how they don't open early enough so she wouldn't be able to add them first. I suggested she just get them at a different store and she scoffed at me. Scoffed!" she tells you. 

You know she must be talking about <b>Greenfield Co-op </b>. 
-> mom
+ {jal} [Ask her what Aunt Susan decided for the Jalapenos] 

"Did she decide to get the Jalapenos from the co-op?" you ask your mom. 

"She said it wasn't so simple. She wanted to both put the Jalapenos in first and get them from the co-op. She said she had to seriously think about whether the order or the sourcing was more important. Not sure where she landed on the issue." 

-> mom
+ [Return to the living room] -> living_room


= kitchen
{The kitchen, which should be filled with hectic cooking and the smell of chili, is eerily empty right now.|In the kitchen. } 
+ (cabinets)[Search the cabinets] 

You look through the cabinets for any ingredients you might need.  Unfortunately, you remember that Aunt Susan wanted to buy all the ingredients today to make sure they are fresh. You take a{cabinets > 1:nother} chocolate chip cookie as a condolence. 
-> kitchen 

+ [Check the sink] 

A pile of dirty dishes fill the sink. All of them are from the mac and cheese you had last night for dinner. You would take the time to wash them, but there are more urgent matters for you to address. 

-> kitchen 

+ [Examine the counter] -> book 

+ [Search somewhere else in the house] -> house 


= book 
{! The counter is mostly empty except for a cookbook that was left there.} 
* (cookbook) [Examine cookbook] 
The book is "The Big Book of Peppers", which describes, in depth, the best methods for preparing various peppers. It is open to a page about <b>Jalapenos</b>. There is a sticky note on the page. 

-> book 

+ {cookbook} [Read the page]
The page reads: 
"The spiciness of chili peppers, such as Jalapenos, comes from the chemical capsaicin.  Cooking Jalapenos can either increase or decrease the concentration of capsaicin, depending on the method. Boiling jalapenos can result in a mild decrease in capsaicin concentration, while grilling increases the concentration."  

-> book 

+ {cookbook} [Read the sticky note] 

The sticky note reads: 

"Grill Jalapenos <b>before</b> adding [illegible]. Add <b>chili powder</b> next." 

You can tell the note was written by Aunt Susan. 

-> book 


+ [Return to the kitchen] -> kitchen



= garage
You are in the garage with your Uncle Richard. 

+ (uncle) [Ask Uncle Richard about the chili]
"Do you know anything about the chili?" you ask. 

"Ha, you know your aunt wouldn't let me anywhere near the chili. You're lucky she agreed to let you help kiddo. Oh, but I was supposed to be the one in charge of driving. She needed to 'keep her mind on the prize' or something like that. She had a route all planned out so that she would stop at the stores in the order she added the ingredients. Something about making sure they were extra fresh," he tells you. 

-> garage 

+ {uncle} [Ask about the store order]
"Do you remember what order you were supposed to drive to the stores?" you ask. 
"She made me repeat the plan back to her several times, but unfortunately, my mind can only keep track of so much. She promised to write it down for me when she got back from upstate, but look where that got us! Oh, I do recall <b>Bayside Market</b> being the <b>second</b> stop," he responds. 

-> garage 

+[Search the rest of the house] -> house 

= office 
{You enter Aunt Susan's home office, where she does her work when she works from home. It is very disorganized, much like Susan herself. | In Aunt Susan's home office.}

+[Search Book Shelf] 

Your Aunt has many books on her shelf; the vast majority look very new and crisp. You aren't sure if she has read a single one of them. You do note several well-worn cozy mystery books you want to ask her about later though. 
-> office 

+ (password) [Search Desk Drawer]

Her desk drawer is filled with many pieces of paper, many clearly torn off from a larger page. They are filled with random names and numbers, and it's unclear if there is anything of use to you. Right before you decide to give up, you notice one piece of paper that reads: 

"Laptop password: 12/03/1980" 

You make a mental note to tell your aunt to change her password to something other than her birthday. 

-> office 

+ (desk) [Search Desk Top] 

Her desk is filled with many stacks of papers, clearly related to her job. As fascinating as corporate insurance is, you decide to leave this to her. You notice her laptop on the desk also{not password:, but unfortunately you can't get in without the password}. 


-> office 

+ {desk} {password} [Unlock Laptop]-> laptop 


+[Search somewhere else in the house] -> house


= laptop 
{You use the password from the drawer to unlock the laptop. |  On Aunt Susan's laptop}

+ [Search Files] 

You quickly discover that Aunt Susan's disorganization of her physical desktop extends to her digital one. All 100+ files on her computer are stored on the main screen, without a folder in sight! You attempt to look through these files, but after reading "untitled.txt" through "untitled (20).txt" you decide that this attempt is futile. 

-> laptop 
{You use the password from the drawer to unlock the laptop. | You are on Aunt Susan's laptop.}
+ [Search Emails] 
Looking through the emails seems a bit extreme, but desperate times! You're sure she would understand. The most recent email was sent last night. 

"Dear Ms. Nielson, 
	We are glad you have made our local farm a part of the chili tradition! I can assure you that our <b>black beans</b> are top quality and cooked fresh every morning. We can assure you that your 30oz of cooked black beans will be ready whenever you arrive tomorrow. May the best chili win! 

Brittney, 
<b>O'Reilly's Farm</b>" 

-> laptop 

+ [Search Browser History] 
{You open the setting on her internet browser to look at her search history. Just before you hit the history button you stop yourself. Looking at search history is definitely going too far. You surely wouldn't want someone looking at your search history! | Your curiosity gets starts to get the better of you, and you are tempted to look at her history again. You restrain yourself once more though. | The curiosity gets to be too much and you simply must read her search history. You click the history tab and find ... nothing. She must have cleared her history recently! I guess she knows more about computers that you gave her credit for. | Even after some minor hacking you cannot recover any of her search history. }
-> laptop  

+ [Return to the office] -> office 

=== FINAL === 

The hours are ticking down until the tournament begins, so there is no time to waste. You get into your uncle's car (it occurs to you that your aunt should have taken this car, which is far more reliable than hers) and start gathering your ingredients. First, a quick trip to Herb & Harvest to pick up the freshest Jalapenos they have. After slicing them in cubes, you begin grilling them, before heading out to Bayside Market. Luckily their tomatoes are as fresh and juicy as your aunt intended. The vegetables cook well with the chili powder you then pick up from Greenfield Market. And as a final touch, you stir in locally sourced black beans from O'Reilly's farm. 

+ [Wait for the chili to cook] -> cook 

= cook 
You wait a long 60 minutes for the flavors of the chili to fully come together, but you can tell by the smell that fills your kitchen that all this effort was worth it. The chili is finally done and ready to compete. 

+ [Go to the competition] -> comp 

= comp 
You arrive in Maryport Square at 5:00 PM sharp with piping hot chili stored safely in the back seat. The competition is fierce, but you notice several people coming back to your stand for seconds. You definitely have upheld the Nielson legacy, despite the stress of the day! At 7:00 PM the results are announced. Your family has taken home the trophy for the 4th year in a row! 

On the car ride home, you get a phone call. It's Aunt Susan, finally. 

+ [Answer the phone] -> last_call 

= last_call
"Hello dear, so sorry I couldn't make it today!" she tells you though the phone.  "You wouldn't believe the day I had. Listen, you remembered to add the cayenne right?" 

THE END 

-> END 