
LIST location = SLEEPING_CAR, ENGINE, DINING_CAR, CORRIDOR

-> train
=== train ===
<b><i>Lady Rose's Chrysanthemum Ball</i></b>
The most anticipated event of the season is always your aunt Rose(Lady Rose Ellington to everyone else)’s Chrysanthemum Ball, and this year is no exception. You’ve spent weeks assembling the perfect outfit, practicing your social dances, and memorizing details about the illustrious attendees calculated to make the best impression. 

-> outside

= outside
<b>Outside the Manor</b>

* [Knock on door]You knock on the door to the manor.
An imposing butler wearing a uniform so starched you suspect it would stand up without him answers the door. 
"Good evening miss. I'm afraid there has been an unfortunate incident, and the ball has been cancelled. Lady Rose gives her deepest regrets that we were not able to contact you in time to save your journey." The butler starts to close the door again at the finale of this clearly rehearsed speech.
"Wait!" You put your body in the way of the closing door, and he looks at you like you've just grown a second head. 
"What kind of an incident? Has someone fallen ill? Lady Rose is my aunt, and I want to be able to help if I can." The butler is clearly torn between his orders to turn guests away and the uncertainty about whether you qualify as a "guest". 
"Come for now," he says, letting you in. "I'll confer with Lady Rose. Please wait here a moment." 
-
* [Foyer]
-> foyer

= foyer
<b>Manor Foyer</b>
The foyer to the manor. From the butler's post by the front door, you can see a narrow slice of the parlour in which all you can make out is the maid, standing next to a tray of drinks and doing her level best to fade into the wallpaper.
{foyer == 1: 
For what seems an interminable time, you stand awkwardly in the foyer, watching the maid fidget. You strain to hear anything, but you can only catch a low murmur without moving into full view of the parlour. Then the butler returns.
"Thank you for waiting...Lady Rose will see you now."
}
+ {foyer != 1} Talk to the butler. -> butler
+ [Ballroom] -> ballroom

= butler
(Talking to the butler)
+ Ask about what happened
-> butler
+ [Back] -> foyer

= ballroom
<b>Ballroom</b>
Aunt Rose's ballroom, decked out in splendor for the Chrysanthemum Ball. In one corner a young woman sits awkwardly at the piano, while in another Aunt Rose reclines dramatically on a divan, telling her woes to the maid standing awkwardly by the drinks tray and looking as though she would prefer to be swallowed up by the floor.
{ballroom == 1:
    When you enter, Aunt Rose turns her tearstained face towards you. 
    "My <i>dear</i>! Finally someone I can trust to help me!" she cries, putting out her hand. You go over to her and take it, wondering what on earth could have happened.
}

+ [Talk to Aunt Rose] -> rose
+ {ballroom != 1} [Talk to the pianist] -> pianist
+ {ballroom != 1} [Talk to the maid] -> maid
+ {ballroom != 1} [Foyer] -> foyer
+ {rose.where}[Examine bust] -> bust


= rose
(Talking to Aunt Rose)

* (what)[Ask about what happened]
"What happened, Aunt Rose?" you ask. 
"It's the <i>most awful</i> thing!" she cries, "My precious necklace has been stolen! You have to find it!" 
-> rose
+ (when)[Ask when the necklace was noticed missing]
"When did you notice the necklace was missing?" you ask. 
"It was when I went to sit out for a dance!" Aunt Rose exclaims, "We decided to do a few informal dances before officially starting the ball, you see, and we were an uneven number, so someone was obliged to sit out for each dance. Naturally as the hostess I volunteered to be first to sit out (she bats her eyelashes), but everyone <i>insisted</i> I should be the last to do so. And when I came off the floor the necklace was missing!"
-> rose
+ (where)[Ask where the necklace was last seen]
"Where was the necklace?" you ask, "could it have fallen off while you were wearing it?"
"Good heavens, of course not!" Aunt Rose cries, "I could never be so careless with my prized possession. No, the gemstones are <i>so heavy</i> and I decided I would wait to don it until officially starting the ball - which now I suppose won't happen after all. The necklace was of course on my mother's bust, over there, as it <i>always</i> is before the ball."
-> rose
+ (who){when}[Ask about the other guests]
"Who else was here?" you ask. 
"Who else? Well, 4 guests had shown up when the dancing started. <b>Lady Eleanor</b>, obviously, my <i>dear</i> sister, her companion <b>Clementine</b>, who I'm sure you must remember, <b>Lord George</b>, of course, and that dashing new young man, <b>Mr. Parker</b>. Then of course there was Mr. Jones, the butler, Alice at the piano, and Sarah by the drinks. Why, do you suspect one of my guests of taking my necklace?" Her eyes widen in almost comical disbelief. 
-> rose

+ [Back] -> ballroom

= pianist
* Ask about what happened 
-> pianist
+ [Back] -> ballroom

= maid
* Ask about what happened 
-> maid
+ [Back] -> ballroom


->END