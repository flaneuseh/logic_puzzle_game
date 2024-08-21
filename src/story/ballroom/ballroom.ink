-> ball

VAR stocks = false
VAR dress = false
VAR repair = false
VAR left_position = false
VAR from = -> ball

VAR clue_1 = false
VAR clue_2 = false
VAR clue_3 = false
VAR clue_4_1 = false
VAR clue_4_2 = false

VAR puzzle_solved = false // set when external directs to the solved or FINAL knot.
VAR soln_suspect = "" // set by external
VAR soln_dance = ""   // set by external
VAR soln_time = ""    // set by external

=== function all_clues() === 
~ return clue_1 and clue_2 and clue_3 and clue_4()

=== function clue_4() === 
~ return clue_4_1 and clue_4_2

=== function any_clue() ===
~ return clue_1 or clue_2 or clue_3 or clue_4_1 or clue_4_2

=== function realtime() === 
{soln_time:
    - 1: 
        ~ return "7:05"
    - 2: 
        ~ return "7:15"
    - 3: 
        ~ return "7:25"
    - 4: 
        ~ return "7:35" 
    - else:
        ~ return ""
}

=== function numbered(int) ===
{ int:
    - 1:
        ~ return "first"
    - 2:
        ~ return "second"
    - 3:
        ~ return "third"
    - 4:
        ~ return "fourth"
    - else:
        ~ return ""
}

=== FINAL === // sent here by external
~ puzzle_solved = true
After taking all the witness statements, you notice that the hands of the clock on the mantelpiece have not moved. When you examine it more closely, you realize that the glass on the clock face is also slightly cracked, suggesting it was knocked over recently. The clock is also right next to the bust where the necklace was resting, so you realize it is likely that it was knocked over by the culprit. The maid and Lady Rose confirm that the clock was working at the time the dancing started, confirming your suspicions. The time on the broken clock is stuck at 7:35, during the fourth dance - the Quickstep.

~ soln_suspect = "Eleanor"
You know from the information you have already collected, that the culprit must be Lady Eleanor.

+ [Accuse Lady Eleanor] You accuse Lady Eleanor. ->accuse


=== solved === // sent here by external
~ puzzle_solved = true
Eureka! You've figured out the order of the dances and who sat out which. With this information, all you need to know is what time the necklace was stolen. You should check the bust { ball.bust: again }for clues to the time.
+ [Bust] -> ball.bust


=== accuse ===
{soln_suspect:
    - "Eleanor": 
        "You cannot honestly believe that I would steal? From my own dear sister?" she yells back indignantly. "Ok, fine. But it isn't really stealing so much as taking my due as the eldest sister. I'm certain our mother meant for me to have it really, or she would have if my sister had not schemed for it to be given to her 'as a wedding present'. But really, Rose has had it these past twenty years, and it's well past time I had a turn, don't you think?"
    - "Baker": 
        "Steal Lady Rose's necklace for Lady Eleanor? Hah! One of the few joys I have is seeing Lady Eleanor's envy over that necklace. She has everything a person could possibly want, and she behaves as though the world owes her more and more! Whereas I am utterly dependent on others for the most basic necessities. That necklace will secure me a comfortable life away from her and the rest of this self satisfied group [gasps from the rest of the party]. Fine, I admit it! While the maid's attention was on my ripped dress, I saw the opportunity for a better life and I took it! Can you really blame me?"
    - "George": 
        "Me?" Lord George swells in outrage, "What use could I, a titled lord, have for such a frippery?" he demands.
        "Perhaps to buoy up your failing stocks?" you suggest.
        "My failing stocks?" He deflates rapidly.
        "...Ahem, well, perhaps the thing was ill advised. I just saw it sitting there and thought that I could pay for months of repairs with the gold and rubies alone, to say nothing of the diamonds...  [addressing Lady Rose] I daresay I'm sorry, old thing. It was just a sudden fancy. I'm sure I would have returned it soon enough."
    - "Parker": 
        "I realize I am new to town, so you must find me a convenient scapegoat for this theft, but I assure you I had nothing to do with this. In any case, what use could I have for such a feminine bauble? To sell? My esteemed family of ... Wervershire keep me well provided for."
        "Wervershire?" you repeat, "I'm fairly certain there is no such county."
        "Wervershire isn't a real place? ... Fine. I took the necklace. I couldn't resist such an easy target! Sitting in plain view for anyone to grab! I only regret that I didn't have a fake made ahead of time. Then I could've gotten away with it before anyone noticed it missing."
    - else:
        Something has gone horribly wrong in your code!
}   
THE END
-> END


=== ball ===
<h1><i>Lady Rose's Chrysanthemum Ball</i></h1>
The most anticipated event of the season is always your cousin Lady Rose’s Chrysanthemum Ball, and this year is no exception. You’ve spent weeks assembling the perfect outfit, practicing your social dances, and memorizing details about the illustrious attendees calculated to make the best impression. 
~ from = -> ball
-> outside

= outside
<b>Outside the Manor</b>
~ from = -> outside
* [Knock on door]You knock on the door to the manor.
An imposing butler wearing a uniform so starched you suspect it would stand up without him answers the door. 
"Good evening miss. Lady Rose has been anxiously awaiting your arrival."
<i>Anxiously awaiting me?</i> "Whatever for?" you ask as you follow him into the foyer, "I hope everything is all right?"
-
* [Foyer]
-> foyer

= foyer
<b>Manor Foyer</b>
The foyer to the manor. From the butler's post by the front door, you can see a narrow slice of the parlour in which all you can make out is the maid, standing next to a tray of drinks and doing her level best to fade into the wallpaper.
{foyer == 1: 
"Everyone is perfectly well, miss, but there has been an unfortunate...<i>incident</i> that Lady Rose will explain herself. Please follow me." The butler shows you into the ballroom.
}
~ from = -> foyer
+ {foyer != 1} [Talk to Mr. Jones (the butler).] -> butler
+ [Ballroom] -> ballroom

= butler
(Talking to Mr. Jones, the butler)
{from != -> butler: 
Mr. Jones looks imperiously down his nose at you in that way all butlers have of making you feel no taller than an insect.
}
~ from = -> butler
+ (what)[Ask about what happened{what: (again)}]
"What do you remember about this evening?" you ask him. He stares down at you haughtily for a long moment before responding.
"I never left my post here, so I couldn't see what occurred in the parlour, except that Sarah stood right there," he indicates the spot where Sarah stands next to the drinks, "except for a short period when I'm not sure where she went."
~ left_position = true
+ (heard){what}[Ask about what he heard{heard: (again)}]
"Could you hear anything of note?" you ask him hopefully. He seems to grow even taller and more imposing.
"It is <i>not</i> the business of a butler to listen at doorways," he thunders.
+ [Back to Foyer] -> foyer
-
-> butler 

= ballroom
<b>Ballroom</b>
Lady Rose's ballroom, decked out in splendor for the Chrysanthemum Ball. In one corner a young woman sits at the piano, while in another Lady Rose reclines dramatically on a divan, telling her woes to the maid standing awkwardly by the drinks tray and looking as though she would prefer to be swallowed up by the floor. On the other side of the room, four people are sitting around the fireplace.
{ballroom == 1:
    When you enter, Lady Rose turns her tearstained face towards you. 
    "My <i>dear</i>! Finally someone I can trust to help me!" she cries, putting out her hand. You go over to her and take it, wondering what on earth could have happened.
}
~ from = -> ballroom
+ [Talk to Lady Rose] -> rose
+ {rose.who} [Talk to Alice (the pianist)] -> pianist
+ {rose.who} [Talk to Sarah (the maid)] -> maid
+ {ballroom != 1} [Foyer] -> foyer
+ {rose.who} [Guests (at the Fireplace)] -> fireplace
+ {rose.where} [Bust] -> bust
+ {rose.what} [Reflect on your progress] -> reflect

= reflect
(Reflecting on your progress)
{ 
    - puzzle_solved:
    You've figured out the order of the dances and who sat out which. 
    { 
    - clock: You've also determined that the neckace was stolen during the {numbered(soln_time)} dance. With that, you should have enough information to accuse someone.
    - else: Now you just need to figure out what <i>time</i> the necklace was stolen. You should check the bust again for clues.
    }
    - all_clues():
    At this point, you think you've learned all you're going to from conversation. You need to sit down with your notes and mull this over. When you think you've figured out the order of the dances and who sat out which dance, click the "I solved it!" button on the right side of the page.
    - any_clue(): 
    You've learned some crucial information, but you still don't think you have enough to solve the mystery. When you think you've figured out the order of the dances and who sat out which dance, click the "I solved it!" button on the right side of the page.
    - else:
    You aren't sure you've learned <i>anything</i> useful yet. You should talk to everyone some more. When you think you've figured out the order of the dances and who sat out which dance, click the "I solved it!" button on the right side of the page.
}

+ [Back to Ballroom] -> ballroom

= rose
(Talking to Lady Rose)

~ from = -> rose
* (what)[Ask about what happened]
"What happened, Lady Rose?" you ask. 
"It's the <i>most awful</i> thing!" she cries, "My precious necklace has been stolen! You have to find it!" 
-> rose
+ (when){what}[Ask when the necklace was noticed missing{when: (again)}]
"When did you notice the necklace was missing?" you ask. 
"It was when I went to sit out for a dance!" Lady Rose exclaims, "At 7:00, we decided to do a few informal dances before officially starting the ball, you see, and we were an uneven number, so someone was obliged to sit out for each dance - that's about 10 minutes. Naturally as the hostess I volunteered to be first to sit out (she bats her eyelashes), but everyone <i>insisted</i> I should be the last to do so. And when I came off the floor for what would've been the fifth dance, the necklace was missing!"
+ (where){what}[Ask where the necklace was last seen{where: (again)}]
"Where was the necklace?" you ask, "could it have fallen off while you were wearing it?"
"Good heavens, of course not!" Lady Rose cries, "I could never be so careless with my prized possession. No, the gemstones are <i>so heavy</i> and I decided I would wait to don it until officially starting the ball - which now I suppose won't happen after all. The necklace was of course on my mother's bust, over there, as it <i>always</i> is before the ball."
+ (order){when}[Ask about the dance order{order: (again)}]
"Which dance did everyone sit out for?" you ask. 
"Well, I certainly wasn't tracking who sat out when. As to which dances were played, well, you would have to ask Alice about that. It is the duty of the pianist, after all, to arrange the dances in a satisfactory manner."
+ (who){when}[Ask about the other guests{who: (again)}]
"Who else was here?" you ask. 
"Who else? Well, 4 guests had shown up when the dancing started. <b>Lady Eleanor</b>, obviously, my <i>dear</i> sister, her companion <b>Miss Baker</b>, who I'm sure you must remember, that stuffy old fool <b>Lord George</b>, of course, and that dashing new young man, <b>Mr. Parker</b>. They are all sitting over there by the fireplace. Then of course there was Mr. Jones, the butler, Alice at the piano, and Sarah by the drinks. Why, do you suspect one of my guests of taking my necklace?" Her eyes widen in almost comical disbelief. 
-> other_guests
+ {who}[Back to Ballroom] -> ballroom
- 
-> rose

= other_guests
~ from = -> other_guests
(Asking About the Other Guests)
+ (about_eleanor)[Ask about <b>Lady Eleanor</b>{about_eleanor: (again)}]
"What do you think of Lady Eleanor?" you ask.
"Ugh, as you well know my haughty sister has been after my necklace for simply ages, ever since dear Mother gave it to me as a wedding present. And really, she may be the older sister, but I did marry first, while she is still single. What would she even do with such a necklace with no children to leave it to?" You refrain from pointing out that Lady Rose herself has no children.
+ (about_baker)[Ask about <b>Miss Baker</b>{about_baker: (again)}]
"What do you think of Miss Baker?" you ask.
"Miss Baker is a nice enough young woman I suppose, though she is of a rather mousy disposition. Earlier there was a small mishap with her dress and I thought she might have fainted from embarrassment." 
~ dress = true
+ (about_george)[Ask about <b>Lord George</b>{about_george: (again)}]
"What do you think of Lord George?" you ask.
"Oh, well, Lord George is a dear really, though a terrible bore at dinner time conversation. When you get him on the subject of his stocks, there is no stopping him, as I'm sure you remember." 
~ stocks = true
+ (about_parker)[Ask about <b>Mr. Parker</b>{about_parker: (again)}]
"What do you think of Mr. Parker?" you ask.
"Mr. Parker? Oh, he is such a polite and dashing young man! When we danced the <b>Quickstep</b> I felt quite ten years younger! It did put me rather out of breath of course.
~ clue_4_1 = true
+ [Back to Talking to Lady Rose] -> rose
-
-> other_guests


= pianist
(Talking to the pianist, Alice)

{from != -> pianist: 
Alice seems fully absorbed in looking through some music on the piano. You have to clear your throat a few times to get her attention, and when she does turn toward you, she still has a faraway look in her eyes.
}
~ from = -> pianist
* (what)[Ask about what happened]
"What do you remember about the evening?" you ask her. 
"What do I remember..." she muses. "Well ... I was playing ... I had just finished a piece ... and there was an interruption ... a terrible screaming about something or other ... then my music was snatched away!" <i>That</i> she finds clearly distressing, after mentioning "terrible screaming" with no more than mild annoyance.
+ (music){what}[Ask about the music{music: (again)}]
"Do you remember what dances you played?" you ask.
"What dances?" She seems to consider that, running her hands up and down the piano keys lovingly, "I know we played ... a <b>Tango</b>, a <b>Quickstep</b> ... a <b>Waltz</b> ... and a <b>Foxtrot</b> ... I couldn't tell you the order of the pieces ... when I play I lose myself in the music ... and have no sense of time passing ... or the dance changing ... But I <i>can</i> tell you that when I started a new dance, I placed its music on top of the sheet for the previous. I was just finishing the fourth dance when Lady Rose snatched its score from the top," she looks up at you, suddenly intense, "she was screaming that she couldn't bear to hear music anymore as her necklace was missing. I saw that the melody underneath was a <b>Tango</b> before Lady Rose swept it along with the rest of the music to the floor, putting everything hopelessly out of order!" Alice finishes, clearly affronted. 
~ clue_2 = true
+ [Back to Ballroom] 
-> ballroom 
-
-> pianist

= maid
(Talking to the maid, Sarah)
{from != -> maid: 
Sarah jumps when you come up to her, almost knocking over the tray of drinks.
}
~ from = -> maid
* (what)[Ask about what happened]
"What do you remember about the evening?" you ask her. She swallows nervously. 
"W-well, I was standing here in case anyone would need a drink, and the ladies and gentlemen were dancing. I didn't leave this spot except for one dance."
~ left_position = true
+ (position){what and left_position and not repair}[Ask about when she left her position{position: (again)}]
"What happened when you left your position?" you ask.
"Oh - that was when Miss Baker had torn her dress, and I went with her to repair it. But we were only away for part of one dance."
~ dress = true
~ repair = true
+ (about_repair){what and repair}[Ask about the dress repair{about_repair: (again)}]
"What happened with Miss Baker's dress?" you ask.
Oh - that was when I left my position. She had torn her dress, and I went with her to repair it. But we were only away for part of one dance."
+ [Back to Ballroom] -> ballroom
-
-> maid

= bust
(The bust of Lady Rose and Lady Eleanor's mother)
Lady Charlotte, preserved in immortal middle age by granite as hard as her indominitable will, glares imperiously down at you. You imagine her expression is reproachful, as though blaming you for the loss of the necklace that formerly graced her neck.
~ from = -> bust
* (clues){solved}[Look for clues]
Looking at the bust again, you notice the small clock sitting next to it and realize that you have not heard it ticking.
+ (clock){clues}[Check clock{clock: (again)}]
Examining the small clock, you realize that its screen has been damaged, and the time is frozen at {realtime()} - in the middle of the {numbered(soln_time)} dance - the {soln_dance}!
+ [Back to Ballroom] -> ballroom
- 
-> bust

= fireplace
<b>Ballroom (Fireplace)</b>
The four guests sit awkwardly around the marble fireplace, looking as if they would rather be anywhere else.
~ from = -> fireplace
+ [Talk to Lady Eleanor] -> eleanor
+ [Talk to Miss. Baker] -> baker
+ [Talk to Lord George] -> george
+ [Talk to Mr. Parker] -> parker
+ [Back to Ballroom] -> ballroom

= eleanor
{ from != -> eleanor:
Lady Eleanor regards you haughtily. "I don't know why you feel the need to question <i>me</i>," she sniffs, "I couldn't possibly have anything to do with such an ignoble crime as the theft of my <i>dear</i> sister's necklace."
}
(Talking to Lady Eleanor)
~ from = -> eleanor
* (what)[Ask about what happened]
"What can you tell me about what happened?" you ask.
"What happened? Well, we had decided to do some dancing as the four of us were here already, and just as the fourth dance was ending, my sister started screaming her head off about her necklace being stolen! It was a most indecorous display, especially as by all rights, that necklace <i>should</i> be mine, as the eldest daughter. I don't see what Rose being married first has to do with anything."
+ (about_baker){what}[Ask about Miss Baker{about_baker: (again)}]
"What do you think of Miss Baker?" you ask. At that, Lady Eleanor's eyes flash indignantly.
"I simply don't see why I should have been obliged to sit out for a dance, when isn't the function of one's companion to preserve them from such indignities? Terribly presumptuous of the girl to swan boldly onto the dance floor like a person of consequence, when she wouldn't have a scrap to her name without my generous patronage. And what uncultured dancing! It's not surprising at all that she stepped on her own dress during her ungracious attempt at a waltz, and what an unbecoming shade of red she became! If I had so embarrassed myself in front of my betters, I would not have had the nerve to show myself again. Unfortunately, she returned as soon as she had gotten Lady Rose's maid to repair her wardrobe, only missing the next dance - disregarding the inconvenience to the rest of the party of not having a maid to attend to our needs, I might add." 
~ dress = true
~ repair = true
~ clue_1 = true
+ (about_parker){what}[Ask about Mr. Parker{about_parker: (again)}]
"What do you think of Mr. Parker?" you ask.
“Mr. Parker? That young man knows how to pay respect to his betters. A little too well, I think sometimes." Lady Eleanor lowers her voice before continuing in a conspiratorial tone. "Why, Rose was positively swooning for him earlier, and I simply don't think it's appropriate for a woman of her age to be dancing the tango with a man quite twenty years her junior.” 
~ clue_4_2 = true
+ (about_george){what}[Ask about Lord George{about_george: (again)}]
"What do you think of Lord George?" you ask. She rolls her eyes.
"Lord George is a puffed up old bore, as you well know. At the last gathering I attended with him, I was forced to listen to him ramble about stocks for over half an hour before I was able to turn him over to Miss Baker. He's been more quiet than usual tonight, though." 
~ stocks = true
* {clock}[Accuse]
"<i>You</i> stole the necklace for yourself!" you accuse Lady Eleanor.
{
- soln_time == 4: -> accuse
- else:
"Me? I've never been so insulted in my life!" Her affront seems so genuine that you second guess yourself. Could Lady Eleanor really have been the thief?"
}
+ [Back to Fireplace] -> fireplace
- 
-> eleanor

= baker
{from != -> baker: 
Miss Baker pales at your approach. "Of course, I'd be happy to help in any way I can," she mumbles.
}
(Talking to Miss. Baker)
~ from = -> baker
* (what)[Ask about what happened]
"What can you tell me about what happened?" you ask. She swallows nervously. 
"I can't tell you anything - we were dancing, and then Lady Rose started crying that her necklace was missing. I don't know how that could have happened. I wasn't paying any attention to it when I was dancing, and when I wasn't dancing, I was more focused on my dress." 
~ dress = true
+ (about_eleanor){what}[Ask about Lady Eleanor{about_eleanor: (again)}]
"What do you think about Lady Eleanor?" you ask. She pales.
"I'm grateful to her, of course. She may not always be the most, ah, friendly, but she provides for me adequately." 
+ (about_parker){what}[Ask about Mr. Parker{about_parker: (again)}]
"What do you think about Mr. Parker?" you ask. She blushes and looks down.
"Mr. Parker? I think he must be from a grand family. He's so gentlemanly. I would dance with him all night if I could," she says dreamily.
+ (about_george){what}[Ask about Lord George{about_george: (again)}]
"What do you think about Lord George?" you ask.
"Um, Lord George is a true gentleman, of course. He's always so <i>generously</i> trying to teach me about stocks. 
~ stocks = true
+ (about_dress){what and dress}[Ask about her dress{about_dress: (again)}]
"What happened to your dress?" you ask. She flushes scarlet. 
"I don't know <i>what</i> happened. One minute I was dancing, and the next I was sprawled on the floor, and my dress was ripped. It was the <i>most humiliating</i> experience <i>of my life</i>. Luckily Sarah was able to fix it in no time, and I was only gone for half the next dance."
~ repair = true
* {clock}[Accuse]
"<i>You</i> stole the necklace for Lady Eleanor!" you accuse Miss Baker.
{
- soln_time == 3: -> accuse
- else:
"Me? I <i>swear</i> I had nothing to do with it!" Her affront seems so genuine that you second guess yourself. Could Miss Baker really have been the thief?"
}
+ [Back to Fireplace] -> fireplace
- 
-> baker


= george
{from != -> george: 
Lord George puffs up with excitement. "Jolly good, you're going to get to the bottom of this mystery, are you? Ask me anything you like, my memory is like a steel trap and still sharp as ever!"
}
(Talking to Lord George)
~ from = -> george
* (what)[Ask about what happened]
"What can you tell me about what happened?" you ask.
"Well, we were having some dancing before the ball was to start - jolly strange idea in my opinion. I'm not as spry as I used to be, you know, and I'd prefer to save my energy for the main event. That was all stopped though, when at the end of the fourth dance, Lady Rose started having the vapours over some necklace or other that's missing. I daresay she only misplaced it, and it'll turn up soon enough on its own without all this hullabaloo.  
+ (about_baker){what}[Ask about Miss Baker{about_baker: (again)}]
"What do you think about Miss Baker?" you ask.
"Charming young woman. Bit mousy. Needs more gumption in my opinion. Lets Lady Eleanor walk all over her with that high and mighty attitude."
+ (about_eleanor){what}[Ask about Lady Eleanor{about_eleanor: (again)}]
"What do you think about Lady Eleanor?" you ask.
"Believe it or not, she was a stunner in her youth. Still is, if you can ignore that pinched expression she wears. Makes her companion's life miserable, though."
+ (about_parker){what}[Ask about Mr. Parker{about_parker: (again)}]
"What do you think about Mr. Parker?" you ask.
"Smarmy young fellow. He supposedly comes from some old family in the countryside, but I don't know anyone who has met a single one of his connections. He just appeared in town recently acting as if he owned the place. I don't know how he's taken in Lady Rose, who generally I consider to be a sensible woman."
+ (about_stocks){what and stocks}[Ask about his stocks{about_stocks: (again)}]
"How are your stocks doing?" you ask. He looks around wildly.
"Oh, erm, they're doing as well as ever! But I'm sure you don't want to hear about something so dull. And they certainly have nothing to do with this mystery."
* {clock}[Accuse]
"<i>You</i> stole the necklace!" you accuse Lord George.
{
- soln_time == 2: -> accuse
- else:
"Me? I've never been so insulted in my life!" His affront seems so genuine that you second guess yourself. Could Lord George really have been the thief?"
}
+ [Back to Fireplace] -> fireplace
- 
-> george


= parker
{from != -> parker: 
Mr. Parker barely reacts to your approach. "Sure," he drawls, "I'll answer whatever you want. But I doubt it'll be of any use."
}
(Talking to Mr. Parker)
~ from = -> parker
* (what)[Ask about what happened]
"What can you tell me about what happened?" you ask.
"<i>Ob-vi-ous-ly</i>, Lady Rose's precious necklace has been misplaced, and now the party is over. Not that it was much of a party to begin with, with only three stuffed old birds and one skittish little mouse for company, but at least the music was good."
+ (about_baker){what}[Ask about Miss Baker{about_baker: (again)}]
"What do you think about Miss Baker?" you ask.
"A skittish little mouse. Though I did admire her spirit in ignoring Lady Eleanor's waspish looks when Lady Eleanor was asked to sit out for a dance. I'm sure she'll pay for that later."
+ (about_eleanor){what}[Ask about Lady Eleanor{about_eleanor: (again)}]
"What do you think about Lady Eleanor?" you ask.
"Unpleasant woman. Acts like she's the Queen of England. Expects everyone to bow to her every whim, especially her companion."
+ (about_george){what}[Ask about Lord George{about_george: (again)}]
"What do you think about Lord George?" you ask.
"Insufferably boring old fool. I remember that when he heard a <b>Quickstep</b> was planned, he decided to sit out the dance before to prepare himself ... after all, he isn't a young fellow anymore, you know. <i>I</i> don't need any preparation to dance the Quickstep; I could dance for hours without sitting, though I did of course sit out one dance to be polite. I had a private laugh when Lady Rose requested that the Quickstep be delayed by a dance. I say, when Lord George realized that there was a dance between his break and the Quickstep, he was quite irate. The old chap needn't have worried though, as Lady Rose is none too spry either, and the Quickstep was played almost sedately in my opinion. Hardly deserving of the name."
~ clue_3 = true
* {clock}[Accuse]
"<i>You</i> stole the necklace!" you accuse Mr. Parker.
{
- soln_time == 1: -> accuse
- else:
"Me? I realize it's easy to accuse someone new to town, but I assure you, I had nothing to do with this theft!" His affront seems so genuine that you second guess yourself. Could Mr. Parker really have been the thief?"
}
+ [Back to Fireplace] -> fireplace
- 
-> parker

THE END
->END