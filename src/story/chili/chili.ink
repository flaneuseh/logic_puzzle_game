-> intro
= intro 
It’s that time of year once again: the annual Maryport Chili tournament. The town is aflutter with the possibilities of what the contestants have to bring this year. As the oldest child of the Nielson household, you have decided it is time to learn the family secrets for the perfect chili. Luckily, your Aunt Susan has taken you on as her apprentice.  She has already cooked up a plan of which ingredients you need to get, from which stores (sourcing is as important as the recipe!), and in what order to add them to the chili. 

Unfortunately, it is the day of the competition, and Aunt Susan is nowhere to be found. She went to visit your grandmother upstate and has not returned. Her old pickup must have broken down again. 
+ [Call Aunt Susan] -> call 

= call 
You attempt to call Aunt Susan.

<i> You have reach the voice mail of Susan Nielson... please leave your message at the tone<i> 


{Straight to voicemail! You know cell reception in upstate is shakey at best, so you aren't completely surprised. However, the hours until the competition are dwinding down. If you are going to compete you need to get started right away. You know you need to get black beans, tomatoes, jalapenos, and chili powder, and each must be bought at a different store and added in the right order.  Unfortunately, you can't remember where to get which ingredients and what order to put them in.  Maybe you can look around the house and be able to figure it out. | Straight to voicemail again. You have already called {call} times, it's maybe time to move on. } 

+ [Explore the house] -> house 


= house 
Exploring the house. 
+ [Living Room] -> living_room 
+ [Kitchen] -> kitchen 
+ [Garage] -> garage 
+ [Office] -> office 
+ [Call Aunt Susan] -> call 


= living_room

You enter the living room. Your mom is sitting on the couch, working on knitting a scarf. 

+ [Ask your mom about chili] -> mom 

+[Explore the house] -> house 


= mom 
{Your mom looks up from her scarf with a confused look at first. "Oh, well, you know I never got into this chili business, honey. But I do remember that Susan was quite stressed when she was talking to me. It was something about the Jalapenos I know," she tells you| You are talking to your mom. }

+(jal)[Ask her about Jalepenos] 
"You know your aunt, she can be quite specific about these things. She was thinking about getting them at that co-op but then she went on about how they don’t open early enough so she wouldn’t be able to add them first. I suggested she just get them at a different store and she scoffed at me. Scoffed!" she tells you. You know she must be talking about Greenfield Co-op. 
-> mom
+ {jal} [Ask her what Aunt Susan decided] 

"Did she decide to get the Jalepenos from Greenfield?" you ask your mom. 

"She said it wasn't so simple. She both wanted to put the Jalepenos in first or get them from Greenfield. She said she had to seriously think about whether the order or the sourcing was more important. Not sure where she landed on the issue.” 

-> mom
+ [Return to living room] -> living_room


= kitchen
{The kitchen, which should be filled with hetic cooking and the smell of chili, is eerily empty right now. |In the kitchen. } 
+ [Look through the cabnet] 

You look through the cabnets for any ingredients you might be looking for.  Unfortunately, you rememeber that Aunt Susan wanted to buy all the ingredients today to make sure they are fresh. You take a chocolate chip cookie as a condolance. 

-> kitchen 

+ [Look at the sink] 

A pile of dirty dishes fill the sink. All of them from the mac and cheese you had last night for dinner. You would take the time to wash them, but there are more urgent matters for you to address. 

-> kitchen 

+ [Examine the counter] -> book 

+[Explore the house] -> house 


= book 
{! The counter is mostly empty except for a cookbook that was left there} 
* (cookbook) [Examine cookbook] 
You recongize the book as "The Big Book of Peppers" that describes, in depth, the best methods for preparing various peppers. It is open to a page about Jalepenos. There is a sticky note on the page. 

-> book 

+ {cookbook} [Read page]
The page reads: 
“The spiciness of chili peppers, such as Jalapenos, comes from the chemical capsaicin.  Cooking Jalapenos can either increase or decrease the concentration of capsaicin, depending on the method. Boiling jalapenos can result in a mild decrease in capsaicin concentration, while grilling increases the concentration. “  

-> book 

+ {cookbook} [Read sticky note] 

The sticky notes reads: 

“Grill Jalapenos before adding [illegible]. Add chili powder next.” 

You can tell the note was written by your Aunt. 

-> book 


+[Return to kitchen] -> kitchen



= garage

You are in the garage with your uncle Richard. 

+ (uncle) [Ask uncle Richard about chili]
"Do you know anything about the chili?" you ask. 

"“Ha, you know your aunt wouldn’t let me anywhere near the chili. You’re lucky she agreed to let you help kiddo. Oh, but I was supposed to be the one in charge of driving. She needed to ‘keep her mind on the prize’ or something like that.  She had a route all planned out so that she would stop at the stores in the order she added the ingredients. Something about making sure they were extra fresh," he tells you. 

-> garage 

+ {uncle} [Ask about store order]

"Do you rememeber what order you were supposed to drive to the stores?" you ask. 

"She made me repeat the plan back to her several times, but unfortunately, my mind can only keep track of so much. She had promised to write it down for me when she got back, but look where that got us! Oh, I do recall Bayside Market being the second stop,” he responds. 

-> garage 

+[Explore the house] -> house 

= office 
{You enter Aunt Susan's home office, where she does her work when she works from home. It is very disorganized, much like Susan herself.  | In Aunt Susan's home office.}

+[Search Book Self] 

Your Aunt has many books on her self, the vast majority look very new and crisp. You aren't sure if she has read a single one of them. You note several cozy mystery books you want to ask her about later though. 

-> office 

+ (password) [Search Desk Drawer]

Her desk drawer is filled with many pieces of paper, many clearly torn off from a larger page. They are filled with random names and numbers, and it's unclear if there is anything of use to you here. Right before you decide to give up, you notice one piece of paper that reads: 

"Laptop password: 12/03/1980" 

You make a mental note to tell your aunt to change her password to something other then her birthday. 

-> office 

+ (desk) [Search Desk Top] 

Her desk is filled with many stacks of papers, clearly related to her job. As fascinating as corperate insurance is, you decide to leave this to her. You notice her laptop on the desk also, but unfortunately you can't get in without the password. 


-> office 

+ {desk} {password} [Unlock Laptop]-> laptop 




+[Explore the house] -> house


= laptop 
{You use the password from the drawer to unlock her laptop. |  On Aunt Susan's laptop}

+ [Search Files] 

You quickly discover that her disorganization extends to digital desktop along with her physical one. All 100+ files on her computer are stored on her desktop, without a folder in sight! You attempt to look through these files, but after reading "untitled.txt" through "untitled (20).txt" you decide that this attempt is futile. 

-> laptop 
{You use the password from the drawer to unlock the password.| You are in Aunt Susan's laptop.}
+ [Search Emails] 
Looking through the emails seems a bit far, but desperate times! You are sure she would understand. The most recent email was sent last night. 

“Dear Ms. Nielson, 
	We are glad you have made our local farm a part of the chili tradition! I can assure you that our black beans are top quality and cooked fresh every morning. We have put aside your order of 30 oz of cooked black beans to be picked up tomorrow. May the best chili win! 

Brittney, 
O’Reilly’s Farm” 

-> laptop 


+ [Search Browser History] 
{You open the setting on her internet browswer to look at her search history. Just before you hit the history button you stop yourself. Looking at search history is definetly going too far. You surely wouldn't want someone looking at your search history! | Your curosity gets starts to get the better of you, and you are tempted to look at her hsitory again. You hold restaint once more though. | The curosity gets to be too much and you seemply must read her history. You click the history tab and find..... nothing. She must have cleared her history recently! I guess she knows more about computers that you gave her credit for. | Even after some minor hacking you cannot recover any of her search history. }


-> laptop  


+ [Return to office] -> office 

    -> END
    
    
    
