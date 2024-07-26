
LIST location = SLEEPING_CAR, ENGINE, DINING_CAR, CORRIDOR, NO_WHERE 

-> train
=== train ===
<b><i>The Wild Rose Train</i></b>
Your 3-month long expedition to the city of Watertown has finally paid off, your research has led to a new medicinal herb that is bound to lead to academic and financial success. All you need to do is travel back to Riverside, to deliver the news to your PhD advisor. With your discovery tucked safely in your briefcase, you take a late night journey on the Wild Rose Train. After a well-deserved night of rest, you wake up to find your briefcase, along with your groundbreaking discoveries, missing! 
-> sleeping_car

= sleeping_car 
~ location = SLEEPING_CAR
<b><i>Sleeping Car</i></b>
Your sleeping car. You've ransacked it {sleeping_car + 2} times looking for your briefcase, but it isn't here.
<- exits(-> sleeping_car)

= engine
~ location = ENGINE
<b><i>Engine</i></b>
The engine of the train. The conductor is here.
+ {!discovery}[Talk to the conductor] -> conductor1
+ {discovery}[Talk to the conductor] -> conductor2
<- exits(-> engine)

= conductor1
(Talking to the conductor, Jim Gallagher)

* (briefcase) [Ask about briefcase]"Excuse me", you say, "I had a very important briefcase in my car, but it's missing. Has something like that been found anywhere on the train?"
    "Hm," the Jim responds, "I haven't had any reports of items found. Maybe one of the other passengers got off with it by mistake?"
-> conductor1
* (passengers){briefcase}[Ask about the other passengers]"Who else was on the train today?" you ask.
    "Let's see, it was a quiet journey, and there were only four others besides you - <b>Sir Ethan Owen</b>, <b>Ms. Madeleine Baker</b>, <b>Mr. George Herbert</b>, and <b>Dr. Ava Finch</b>. Not surpised you didn't meet them, they each had their own room in car 1-4. But they have all left now, it's just you and us staff."
    -> conductor1
* {passengers} [Ask about stations]-> stations 
* {passengers} [Ask about staff] -> staff 
+ [Move to another part of the train] -> exits(->engine) 
=staff 
"Who all is on board right now, besides us?" you ask. 
"Ahh well there are two crew members here, apart from myself: May Gardner, our dedicated chief, whom you can likely locate in the dining car, and Katernina Clements our service attendant likely to be about the corridor. Might not be a bad idea to ask Katernina about your briefcase." he tells you.  
-> conductor1 

=stations 
"Can you tell me what stations the other passengers boarded and departed?" you ask. 

"Oh yes of course." Jim begins shuffling through a series of documents at his stations. After several miniutes of this he furrels his brows and returns his attention to you. "This is quite mysterious indeed. It appears your briefcase wasn't the only thing that went missing last night, but the ticket information has disapeared as well." 

Dread fills your stomach. Two things going missing in one night. It is starting to seem as if someone doesn't want to be found. Your missing briefcase doesn't seem like a mistake at all! 

"Here is what I can tell you, " Jim continues. "I know everyone was on board by Watertown, that is when you got on correct?" You nod. "And everyone else has already departed. Which means that the passengers each got off at either Greencester, Seastead, Hogfield, or Forest Hills. I do remember we had exactly one passenger depart at each of those stations, but I am afraid I cannot tell you who departed where" 
-> conductor1 


= conductor2
"Let me know if there is anything I else can do to assist in retrieving this item” 

+ [Tell me about Sir Ethan Owen] -> 1_2 
+ [Tell me about Ms. Madeleine Baker] -> 1_3 
+  [Tell me about  Mr. George Herbert] -> 1_4 
+ [Tell me about Dr. Ava Finch] -> 1_5 
+  [Did anything go wrong with the train last night?] -> 1_6 
+ [Move to another part of the train] -> exits(->engine)   


= 1_2 

“Sir Ethan Owen? Not sure there is much to be said about him. He is third in line for his father's inheritance. He uses plenty of his father’s money, I know this much. Requested the premium service at every possible turn, not that I would consider our dear old Wild Rose a premium vessel by any means.  Only so much we can do to accommodate the fellow. Talkative fellow though, unless you mention either of his brothers that is.” 

He doens't like talking about his brothers. Could there be a rivalery there? If he was trying to impress his father, showing him your discovery would certainly accomplish this! 
-> conductor2

= 1_3 

“Ms. Madeleine Baker? She is a interesting character isn’t she? When she handed me her ticket I couldn’t help but notice the intense floral scent to her. I had asked her what perfume she wore, but she denied wearing any” 
-> conductor2 

=1_4 

“Mr. George Herbert? That old banker? He is traveling here on business. Was quite agitated when I interacted with him. Apparently, he was not expecting to ride our dear old Wild Rose last evening.  I find her a joy to ride in, but apparently he desired more … luxury…. accommodations” 
-> conductor2 

= 1_5 

"Dr. Ava Finch? I do beileve she is a professor Raven Wood University. seemed like a very intelligent women. But you probably would know more then me." 

Hmmm Raven Wood, you have defininetly have heard of this univserity before. In fact they are your direct rival! Could she have taken your briefcase to prevent you from publishing your findings first? 

-> conductor2

= 1_6

“Ahh well you know that the Wild Rose is an old train, so is bound to have some issues. While last night's journey was mostly smooth sailing, I do recall we had some issues with the car doors” 

+ [Which cars had issues?] -> 1_7 
+  [I didn’t hear any car doors opening last night] -> 1_8
+ [Do you think they were tampered with?] -> 1_9 
+ [Ok thank you for your time] -> conductor2

= 1_7

“Working nights isn’t easy for an old fellow like me, so unfortunately I can’t recall which cars exactly had issues. Two cars back to back though. We first had issues at Seastead, and then the very next car down had an issue when we stopped at Forest Hills” 

-> 1_6  

= 1_8  

“Oh, you wouldn't have. You see on these night rides we like to keep everything as quiet as possible. Therefore we only open the doors at cars where there are passengers departing at that station. Since you all were getting off at different stations, we only had to open one door at each station” 

-> 1_6  

= 1_9 

“Tampered? Well, that is an interesting idea certainly. This train does have a lot of issues due to her age, but I guess I do not recall having problems with the doors specifically. We are not a very well-staffed train, so it’s certainly possible that someone could have messed with one of the systems without our knowing. However, I do not believe I found any signs of something specifically being off. If you do find evidence of tampering, you let me know ok?” 

-> 1_6 



= dining_car
~ location = DINING_CAR
<b><i>Dining Car</i></b>
In the dining car, still smells like bacon. The chief May Gardner is here. 
+ {discovery} [Talk to May Gardner] -> 2_1 
+ [Move to another part of the train] -> exits(->dining_car) 



=2_1 

“Honestly not surprised one of these passengers was a thief, there was something off about all of them you could tell. Not sure how much help I can be, spent the morning in the dining car but I will tell you what I do know.” 

+ [Tell me about Sir Ethan Owen] -> 2_2 
+ [Tell me about Ms. Madeleine Baker] -> 2_3 
+ [Tell me about  Mr. George Herbert] -> 2_4 
+  [Tell me about Dr. Ava Finch] -> 2_5 
+ [What was served for breakfast this morning?] -> 2_6 
+ [Move to another part of the train] -> exits(->dining_car) 
 

= 2_2 

“Sir Ethan Owen? Can’t say much about him I am afraid. Like you he was asleep all through breakfast this morning. Or maybe he left at one of the early stations, I cannot say. Heard from Katernina that he was a prick though.” 

-> 2_1  

= 2_3 

“Madeleine Baker? She was up bright and early this morning. Wanted to make sure got the first cup of coffee.” 

+  [Did you notice anything strange about her?] -> 2_7  
+ [What was she doing during breakfast?] -> 2_8  
+ [Thank you for your time] -> 2_1 

= 2_7 

“Oh yes she was a very strange lady I will tell you. Her dress must have had at least 5 colors and 3 patterns. Really a sight to see, especially so early in the morning. Despite her elaborate get up she was hardly a well put together woman. Didn’t even wash her hands, I could see the dirt under her fingernails even from across the car. Can’t imagine how someone eats with hands like that.” 

-> 2_3 

= 2_8 

“She was clearly lost in thought over something, kept staring out the window of the train. Oh, and sketching in the notebook of hers. Some kind of flower.” 

+  [Can you describe the flower?] -> 2_9  
+ [Did she tell you anything about the sketch?] -> 2_10 
+  [Did you see what she was looking at?] -> 2_11  
+ [Thank you for your time] -> 2_1 


= 2_9 

”It was a mysterious-looking thing with strange spindly petals. I am not much of a botanist myself, but I have never seen anything of the sort before. “ 


Her description doesn't describe your plant at all. You can't recall a plant that matches this description exactly. 

-> 2_8 

= 2_10 

“I did ask what kind of plant that was, and she told me it didn’t exist …. yet. Apparently she had this vision of a flower that would be a cross of a Lily only found in Forest Hills with one of her personal breeds.  Personally, I think nature has provided us with more than enough flowers without all this fiddling.” 

-> 2_9 

= 2_11 

“Couldn’t tell you. The train was going so fast, not sure she could be seeing anything at all” 

-> 2_8 


= 2_4 

"Mr George Herber? Not much of a talker that man is. Asked me to Irish his coffee this morning, if you know what I mean." 

-> 2_1 

= 2_5 

"Dr. Finch? I am surprised you don't know of her already. Hearing her speak it sounds like she is the top researcher in her field." 

"What area of research is she in?" you ask. You always are curious to hear about other people's research. 

"Oh I wouldn't know. She kept talking in codes. Something about  pistils and xylems, whatever that could mean." May responds. 

Luckily you know what she was talking about, pistils and xylems are both parts of plants. So it's likely she is working in your same field, or at least an adjcent one. But she certainly wouldn't be a top researcher like she said. Everyone knows that the top botony research is done at Riverside University! And you know for sure that she is not a professor there. 

-> 2_1 

= 2_6 

"Well as you may know the Wild Rose is known for it's dining. We had a wide array of options for our guests: pancakes, muffins, bacon, and french toast. Oh and of course, our specialty lemon strawberry crepes!" 

A growl from your stomach reminds you that you slept through breakfast this morning. 

+ [Any chance that there is some leftover?] -> 2_12 
+ [thank you for your time] -> 2_1 


= 2_12 

"Well you should know it's agaisn't policy to serve breakfast outside of official hours... but with the morning you had I can maybe make an exception" 

-> 2_1 


= corridor
~ location = CORRIDOR
<b><i>Corridor</i></b>
The corridor that connects the sleeping cars to the dining car. The service attendant is here.

* (briefcase2) [Ask about briefcase] "Hello miss, I am missing a very import item. Could you help me find it?" you ask. 

    "Oh well that is quite unfortunate isn't it?" the service attent responds. "I am Katernina, I will help you in anyway I can. Can I ask what you are looking for?"
    
    "A briefcase, it contains very imporant research so I need it back as soon as possible."
    
    "I understand, I would be destrought if I lost luggage. And the most important thing I carry is my pen collect! If you will allow me, I will search the rooms to see if it is still on board. If you haven't already, why don't you talk with our conductor as well, he should be in the engine." she tells you. She briskly exits the corridor, her large set of keys clicking behind her. 
    
    -> corridor 

*{briefcase2} {briefcase} [Wait for Katernina to return] -> discovery 
+ {discovery} [Talk to Katernina] -> 3_1 
+ {discovery} [Search the corridor] -> search   
+ [Move to another part of the train] -> exits(->corridor)

= discovery
 ~ location = NO_WHERE
Anxiously you stand in the corridor hoping that Katernina locate your briefcase quickly. After several anganizing minutes, you see a distraught Katernina return. 

"Oh you must beileve me, I searched everywhere! But nothing... nada... zlitch. Somehow your briefcase must have got off the train sometime last night." 

And you know exactly how. Your briefcase was safely on your desk when you went to sleep last night. The only way the briefcase is no longer on the train, is if one of the other passengers came into your room at took it! You must find out which passenger took it and where they departed before it's too late!

Unfortunatly, you don't know where each passenger departed or even what car they stayed in last night. If you can figure out what station each passenger departed and and what room they stayed in, you will be one step closer to your briefcase. You should talk more with the staff and see if you can gather anymore clues from them! 

[This should unlock the logic puzzle] 

+ [Move to another part of the train] -> exits(->corridor) 


= search 
Search the corridor. 

+[left] The left side of the corridor seems has a small end table with a bowl full of mints. You take one from the bowl for good measure. 

-> search 

+ (mailbox) [right] The right side of the corridor contains a small mailbox where passengers can drop off letter they would like to be sent out. Katernina seems to be distacted by cleaning right now, you could probably take a peak inside. 

-> search 

+ {mailbox} [search the mailbox] -> letter 

+ [up] The lights on this train seem quite old. They keep flickering, which certainly isn't helping your bad mood. 

-> search 

+ [I am done searching] -> corridor 


= letter 

Carefully peaking inside the mailbox, you can see one letter sent from Mr. George Herbert. 

+ [Read Letter] 

“Dear Ms. Penelope Steward, 
	It appears that I will be stuck in transit for an additional night than expected. The train you had booked for me was canceled last night due to a disturbance on the track. The next train out wasn’t until the next day with only economy cars remaining. You well know how hard travel is on me, and even more so in these conditions. While I cannot technically place blame on you for these circumstances, I do hope you take responsibility. I expect my estate to be well taken care of upon my return. Additionally, I feel as if Mr James Fester would be justified in feeling slighted by the delay in our meeting. Please arrange for the finest bottle of whiskey to be sent to his estate in Hogfields. I would arrange it myself but am much too weary. 
	Sincerely, George Herbert” 



-> search


= 3_1 

"I would be happy to help you in anyway that I can!" 

+ [Tell me about Sir Ethan Owen] -> 3_2 
+ [Tell me about Ms. Madeleine Baker] -> 3_3 
+ [Tell me about  Mr. George Herbert] -> 3_4 
+ [Tell me about Dr. Ava Finch] -> 3_5 
+ [Did you find anything else on the train?] -> 3_6 
+ [Go back to the corridor] -> corridor


= 3_2 

"Oh that man is infuriating! We made a complaint to me early this morning about the noise from another car.  I had to inform this was in fact a public train, and he would have to deal with some noise from the other passenger. I don't really believe he had heard much at all anyway. 

+ [Did he say where the noise was coming from] -> 3_8 
+ [Why don't you beileve him?] -> 3_7 
+ [Thank you for your time] -> 3_1 


= 3_7 
"I was irrrated about his attitude, so I made a point to stand outside his car to see if I could hear anything. Could not make out a peep, even when that passenger departed at Greencester. Why  someone with his fortune and particularness wouldn’t book a more private accommodation than ours, I do not understand." 
-> 3_2 

= 3_8 

"He said the noise was coming from two cars down from him. Seems a little odd if you ask me" 

-> 3_2 

= 3_3 

"Ms. Baker? She seems like a nice lady, if a little odd. You might get along with her actually. She ha a little flower shop, which sells all kinds of unique breeds. Apparently she is quite well known for her varieties. She even gave me a flower as a sample, how nice is that?" 

-> 3_1 

= 3_4 

"Mr. Herbert. He owns that bank doesn't he? What was it called.... oh Goldleaf Finacial. Between you an me, I can't stand men like that. Greedy to their core! My friend had great trouble with that bank." 

Bankers do tend to be greedy, but could he be greedy enough to steal success from others? 

-> 3_1 

= 3_5 
"Dr. Finch. She seems a like a nice enought lady. Didn't talk to her much though, she seemed pre-occupied with something" 
-> 3_1 

= 3_6 

"I searched the train as best as I could for now, and couldn't see anything. We will do a deep clean of the train after you depart. If there is anything else to be found it will be found the, so I will call you if we come up with anything" 

Your stop at Riverside is still a ways away. You should get all the information you can before then. From your conversations with the staff memembers, you should be able to piece together who departed at what stations and what car they each stayed in. 

If you think you have completed this information, you may wait until your station. Otherwise you should keep talking to other staff memembers. 

+[Wait for your station] -> final_clue 
+[Keep talking to the staff] -> corridor

-> 3_1 


= final_clue 
After a long, tiring morning, you finally arrive back home in Riverside. You look over the notes you collected on the train again. There must be something here that can help you solve this mystery. You are a researcher after all, you should be able to figure this out! 

Just as you are thinking this you hear the phone ring. 

* [Answer the phone] 

"Hello, can you hear me? " 

It's Katernina! 

"I just did a thorough cleaning of all the cars. I unfortunately did not find your briefcase, but I did notice a pen in car N. I didn’t think much of it at first, but then I saw that it was from Riverside University. That is your university right? You almost certainly left it in your briefcase and it must have fell out when whoever stole it was rifling through your research. “

That's it! Whoever was in car N must have been the one to take your briefcase. Luckily now you know who that is and what station they got off at. It's time for a confrontation! 



-> DONE 
= exits(-> go_back_to)
+ {location != SLEEPING_CAR}[Sleeping Car] -> sleeping_car
+ {location != ENGINE}[Engine] -> engine
+ {location != DINING_CAR}[Dining Car] -> dining_car
+ {location != CORRIDOR}[Corridor] -> corridor
-> go_back_to

->END