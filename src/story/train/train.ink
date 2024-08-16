
LIST location = SLEEPING_CAR, ENGINE, DINING_CAR, CORRIDOR, NO_WHERE 

-> train
=== train ===
<h1><i>The Wild Rose Train</i></h1>
Your 3-month long expedition to the city of Watertown has finally paid off - your research has led to a new medicinal herb that is bound to lead to academic and financial success. All you need to do is travel back to Riverside, to deliver the news to your PhD advisor. With your discovery tucked safely in your briefcase, you take a late night journey on the Wild Rose Train. After a well-deserved night of rest, you wake up to find your briefcase, along with your groundbreaking discoveries, missing! 
-> sleeping_car

= sleeping_car 
~ location = SLEEPING_CAR
<b><i>Sleeping Car</i></b>
Your sleeping car. You've ransacked it {sleeping_car > 1: {sleeping_car} times} looking for your briefcase, but it isn't here.
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
    "Hm," Jim responds, "I haven't had any reports of items found. Maybe one of the other passengers got off with it by mistake?"
-> conductor1
* (passengers){briefcase}[Ask about the other passengers]"Who else was on the train today?" you ask.
    "Let's see, it was a quiet journey, and there were only four others besides you - <b>Sir Ethan Owen</b>, <b>Ms. Madeleine Baker</b>, <b>Mr. George Herbert</b>, and <b>Dr. Ava Finch</b>. Not surprised you didn't meet them, they each had their own room in cars 1-4. But they have all already gotten off; it's just you and us staff here now."
    -> conductor1
* {passengers} [Ask about stations]-> stations 
* {passengers} [Ask about staff] -> staff 
+ [Move to another part of the train] -> exits(->engine) 
=staff 
"Who all is on board right now, besides us?" you ask. 
"Ahh well there are two crew members here, apart from myself: May Gardner, our dedicated chef, whom you can likely locate in the dining car, and Katrina Clements, our service attendant, who is likely to be about the corridor. Might not be a bad idea to ask Katrina about your briefcase." he tells you.  
-> conductor1 

=stations 
"Can you tell me what stations the other passengers boarded and departed at?" you ask. 

"Oh yes, of course." Jim begins shuffling through a series of documents. After several minutes of this he furrows his brow and returns his attention to you. "This is quite mysterious indeed. It appears your briefcase wasn't the only thing that went missing last night - the ticket information has disappeared as well." 

Dread fills your stomach. Two things going missing in one night. It is starting to seem as if someone doesn't want to be found. Your missing briefcase doesn't seem like a mistake at all! 

"Here is what I can tell you, " Jim continues. "I know everyone was on board by Watertown; that is when you got on, correct?" You nod. "And everyone else has already departed. Which means that the passengers each got off at either <b>Greencester</b>, <b>Seastead</b>, <b>Hogfield</b>, or <b>Forest Hills</b>. I remember we had exactly one passenger depart at each of those stations, but I am afraid I cannot tell you who departed where." 
-> conductor1 


= conductor2
(Talking to the conductor, Jim Gallagher)
"Let me know if there is anything I else can do to assist in retrieving this item." 

+ [Tell me about Sir Ethan Owen] -> 1_2 
+ [Tell me about Ms. Madeleine Baker] -> 1_3 
+ [Tell me about  Mr. George Herbert] -> 1_4 
+ [Tell me about Dr. Ava Finch] -> 1_5 
+ [Did anything go wrong with the train last night?] -> 1_6 
+ [Move to another part of the train] -> exits(->engine)   


= 1_2 
"Sir Ethan Owen? Not sure there is much to be said about him. He is third in line for his father's inheritance. He uses plenty of his father's money, I know that. Requested the premium service at every possible turn, not that I would consider our dear old Wild Rose a premium vessel by any means. Only so much we can do to accommodate the fellow. Talkative though, unless you mention either of his brothers that is."

He doesn't like talking about his brothers. Could there be a rivalry there? If he is trying to impress his father, showing him your discovery would certainly accomplish that! 
-> conductor2

= 1_3 
"Ms. Madeleine Baker? She is a interesting character isn't she? When she handed me her ticket I couldn't help but notice the intense floral scent to her. I asked her what perfume she wore, but she denied wearing any."
-> conductor2 

=1_4 
"Mr. George Herbert? That old banker? He is traveling here on business. Was quite agitated when I interacted with him. Apparently, he was not expecting to ride our dear old Wild Rose last evening.  I find her a joy to ride in, but apparently he desired more ... luxury ... accommodations." 
-> conductor2 

= 1_5 
"Dr. Ava Finch? I do believe she is a professor at Raven Wood University. Seemed like a very intelligent women. But you probably would know more then me." 

Hmmm, Raven Wood, you have definitely have heard of this university before. In fact they are your direct rival! Could she have taken your briefcase to prevent you from publishing your findings first? 
-> conductor2

= 1_6
{"Ahh well you know that the Wild Rose is an old train, so is bound to have some issues. While last night's journey was mostly smooth sailing, I do recall we had some issues with the car doors." | "Any other questions about the car doors?"}

+ [Which cars had issues?] -> 1_7 
+ [I didn't hear any car doors opening last night] -> 1_8
+ [Do you think they were tampered with?] -> 1_9 
+ [Ok, thank you for your time] -> conductor2

= 1_7
"Working nights isn't easy for an old fellow like me, so unfortunately I can't recall which cars exactly had issues. Two cars back to back though. We first had issues at <b>Forest Hills</b>, and then the very next car down had an issue when we stopped at <b>Seastead</b>." 

-> 1_6  

= 1_8  

"Oh, you wouldn't have. You see, on these night rides we like to keep everything as quiet as possible. Therefore we only open the doors at cars where there are passengers departing at that station. Since you all were getting off at different stations, we only had to open one door at each station." 

-> 1_6  

= 1_9 

"Tampered? Well, that is an interesting idea certainly. This train does have a lot of issues due to her age, but I guess I do not recall having problems with the doors specifically. We are not a very well-staffed train, so it's certainly possible that someone could have messed with one of the systems without our knowing. However, I have not seen any signs of something specifically being off. If you do find evidence of tampering, you let me know ok?" 

-> 1_6 



= dining_car
~ location = DINING_CAR
<b><i>Dining Car</i></b>
In the dining car, still smells like bacon. The chef May Gardner is here. 
+ {discovery} [Talk to May Gardner] -> 2_1 
+ [Move to another part of the train] -> exits(->dining_car) 



= 2_1 

{"Honestly not surprised one of these passengers was a thief, there was something off about all of them you could tell. Not sure how much help I can be; I spent the morning in the dining car. But I will tell you what I do know." | "Any other questions?"} 

+ [Tell me about Sir Ethan Owen] -> 2_2 
+ [Tell me about Ms. Madeleine Baker] -> 2_3 
+ [Tell me about  Mr. George Herbert] -> 2_4 
+ [Tell me about Dr. Ava Finch] -> 2_5 
+ [What was served for breakfast this morning?] -> 2_6 
+ [Move to another part of the train] -> exits(->dining_car) 
 

= 2_2 

"Sir Ethan Owen? Can't say much about him I am afraid. Like you he was asleep all through breakfast this morning. Or maybe he left at one of the early stations, I cannot say. Heard from Katrina that he was a prick though." 

-> 2_1  

= 2_3 

"{<b>Madeleine Baker</b>? She was up bright and early this morning. Wanted to make sure she got the first cup of coffee.|Do you have other questions about Madeleine?}" 

+ [Did you notice anything strange about her?] -> 2_7  
+ [What was she doing during breakfast?] -> 2_8  
+ [Thank you for your time] -> 2_1 

= 2_7 
"Oh yes, she was a very strange lady I will tell you. Her dress must have had at least 5 colors and 3 patterns. Really a sight to see, especially so early in the morning. Despite her elaborate get up she was hardly a well put together woman. Didn't even wash her hands - I could see the dirt under her fingernails even from across the car! Can't imagine how someone eats with hands like that." 
-> 2_3 

= 2_8 
{"She was clearly lost in thought over something, kept staring out the window of the train. Oh, and sketching in that notebook of hers. Some kind of flower."| "Do you have other questions about the sketch?"}

+ [Can you describe the flower?] -> 2_9  
+ [Did she tell you anything about the sketch?] -> 2_10 
+ [Did you see what she was looking at?] -> 2_11  
+ [About Madeleine...] -> 2_3 


= 2_9 
"It was a mysterious-looking thing with strange spindly petals. I am not much of a botanist myself, but I have never seen anything of the sort before." 

Her description doesn't describe your plant at all. You can't recall a plant that matches this description exactly. 
-> 2_8 

= 2_10 
"I did ask what kind of plant that was, and she told me it doesn't exist ... yet. Apparently she had this vision of a flower that would be a cross of a Lily only found in <b>Forest Hills</b> with one of her personal breeds. Went on this train to find it. Personally, I think nature has provided us with more than enough flowers without all this fiddling." 

-> 2_9 

= 2_11 
"Couldn't tell you. The train was going so fast, not sure she could be seeing anything at all." 
-> 2_8 


= 2_4 
"Mr George Herbert? Not much of a talker that man is. Asked me to Irish his coffee this morning, if you know what I mean." 
-> 2_1 

= 2_5 
"Dr. Finch? I am surprised you don't know of her already. Hearing her speak it sounds like she is the top researcher in her field." 

"What area of research is she in?" you ask. You always are curious to hear about other people's research. 

"Oh I wouldn't know. She kept talking in codes. Something about pistils and xylems, whatever that could mean." May responds. 

Luckily you know what she was talking about. Pistils and xylems are both parts of plants. So it's likely she is working in your same field, or at least an adjacent one. But she certainly wouldn't be a top researcher like she said. Everyone knows that the top botany research is done at Riverside University! And you know for sure that she is not a professor there. 
-> 2_1 

= 2_6 
"Well as you may know the Wild Rose is known for its dining. We had a wide array of options for our guests: pancakes, muffins, bacon, and french toast. Oh and of course, our specialty lemon strawberry crepes!" 

A growl from your stomach reminds you that you slept through breakfast this morning. 

+ [Any chance that there is some leftover?] -> 2_12 
+ [Thank you for your time] -> 2_1 


= 2_12 
"Well you should know it's against policy to serve breakfast outside of official hours ... but with the morning you had I can maybe make an exception." 
-> 2_1 


= corridor
~ location = CORRIDOR
<b><i>Corridor</i></b>
{!The corridor that connects the sleeping cars to the dining car. The service attendant is here.}

* (briefcase2) [Ask about briefcase] "Hello miss, I am missing a very important item. Could you help me find it?" you ask. 

    "Oh, well, that is quite unfortunate isn't it?" the service attendant responds. "I am Katrina, I will help you in anyway I can. Can I ask what you are looking for?"
    
    "A briefcase; it contains very important research, so I need it back as soon as possible."
    
    "I understand, I would be distraught if I lost luggage. And the most important thing I carry is my pen and notebook! If you will allow me, I will search the rooms to see if it is still on board. If you haven't already, why don't you talk with our conductor as well, he should be in the engine." she tells you. She briskly exits the corridor, her large set of keys clicking behind her. 
    
    -> corridor 

*  {briefcase2} {briefcase} [Wait for Katrina to return] -> discovery 
+ {discovery} [Talk to Katrina] -> 3_1 
+ {discovery} [Search the corridor] -> search   
+ [Move to another part of the train] -> exits(->corridor)

= discovery
 ~ location = CORRIDOR
Anxiously you stand in the corridor hoping that Katrina locates your briefcase quickly. After several agonizing minutes, you see a distraught Katrina return. 

"Oh you must believe me, I searched everywhere! But nothing ... nada ... zilch. Somehow your briefcase must have got off the train sometime last night." 

And you know exactly how. Your briefcase was safely on your desk when you went to sleep last night. The only way the briefcase is no longer on the train, is if one of the other passengers came into your room and took it! You must find out which passenger took it and where they got off before it's too late!

Unfortunately, you don't know where each passenger got off or even what car they stayed in last night. If you can figure out what station each passenger deboarded and and what car they stayed in, you will be one step closer to your briefcase. You should talk more with the staff and see if you can gather any more clues from them! 

-> corridor

= search 
Search the corridor. 

+(left)[left] The left side of the corridor has a small end table with a bowl full of mints. You take {left == 1: one}{left > 1: another} from the bowl for good measure. 
-> search 

+ (mailbox) [right] The right side of the corridor contains a small mailbox where passengers can drop off letters they would like to be sent out. Katrina seems to be distracted by cleaning right now; you could probably take a peak inside. 
-> search 
+ {mailbox} [search the mailbox] -> letter 

+ [up] The lights on this train seem quite old. They keep flickering, which certainly isn't helping your bad mood. 
-> search 

+ [I am done searching] -> corridor 


= letter 
Carefully peaking inside the mailbox, you can see one letter left by Mr. George Herbert. 

+ [Read Letter] 
"Dear Ms. Penelope Steward, 
	It appears that I will be stuck in transit for an additional night than expected. The train you had booked for me was canceled last night due to a disturbance on the track. The next train out wasn't until the next day with only economy cars remaining. You well know how hard travel is on me, and even more so in these conditions. While I cannot technically place blame on you for these circumstances, I do hope you take responsibility. I expect my estate to be well taken care of upon my return. Additionally, I feel as if Mr James Fester would be justified in feeling slighted by the delay in our meeting. Please arrange for the finest bottle of whiskey to be sent to his estate in <b>Hogfield</b>. I would arrange it myself but am much too weary. 
	Sincerely, <b>George Herbert</b>" 
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

{"Oh that man is infuriating! He made a complaint to me early this morning about the noise from another car. I had to inform him that this is in fact a public train, and he would have to deal with some noise from the other passenger. I don't really believe he had heard much at all anyway." | Other questions about Ethan?}

+ [Did he say where the noise was coming from?] -> 3_8 
+ [Why don't you believe him?] -> 3_7 
+ [Thank you for your time] -> 3_1 


= 3_7 
"I was irritated about his attitude, so I made a point to stand outside his car to see if I could hear anything. Could not make out a peep, even when that passenger departed at <b>Greencester</b>. Why someone with his fortune and particularisms wouldn't book a more private accommodation than ours, I do not understand." 
-> 3_2 

= 3_8 
"He said the noise was coming from <b>two cars down</b> from him. Seems a little odd if you ask me." 

-> 3_2 

= 3_3 
"Ms. Baker? She seems like a nice lady, if a little odd. You might get along with her actually. She has a little flower shop, which sells all kinds of unique breeds. Apparently she is quite well known for her varieties. She even gave me a flower as a sample, how nice is that?" 
-> 3_1 

= 3_4 
"Mr. Herbert? He owns that bank doesn't he? What was it called ... oh, Goldleaf Financial. Between you and me, I can't stand men like that. Greedy to their core! My friend had great trouble with that bank." 

Bankers do tend to be greedy, but could he be greedy enough to steal success from others? 
-> 3_1 

= 3_5 
"Dr. Finch? She seems a like a nice enough lady. Didn't talk to her much though - she seemed preoccupied with something." 
-> 3_1 

= 3_6 
"I searched the train as best as I could for now, and couldn't see anything. We will do a deep clean of the train after you depart. If there is anything else to be found it will be found then, so I will call you if we come up with anything" 

Your stop at Riverside is still a ways away. You should get all the information you can before then. From your conversations with the staff members, you should be able to piece together who departed at what stations and what car they each stayed in. 

If you think you have completed this information, click the "I solved it!" button on the right side of the page. Otherwise you should keep investigating. 
-> 3_1 

Move to a new part of the train 
= exits(-> go_back_to)
+ {location != SLEEPING_CAR}[Sleeping Car] -> sleeping_car
+ {location != ENGINE}[Engine] -> engine
+ {location != DINING_CAR}[Dining Car] -> dining_car
+ {location != CORRIDOR}[Corridor] -> corridor
-> go_back_to



=== FINAL ===  
<h1><i>The Mystery Concludes!</i></h1>
After a long, tiring morning, you finally arrive back home in Riverside. You look over the notes you collected on the train again. There must be something here that can help you solve this mystery. You are a researcher after all, you should be able to figure this out! 

Just as you are thinking this you hear the phone ring. 

* [Answer the phone] 

"Hello, can you hear me?" 

It's Katrina! 

"I just did a thorough cleaning of all the cars. I unfortunately did not find your briefcase, but I did notice a pen in Car 2. I didn't think much of it at first, but then I saw that it was from Riverside University. That is your university right? You almost certainly left it in your briefcase, and it must have fallen out when whoever stole it was rifling through your research."

That's it! Whoever was in Car 2 must have been the one to take your briefcase. Luckily now you know who that is and what station they got off at. Looking at your notes, it seems Ethan Owen was sleeping in Car 2 and got off at Seastead. It's time for a confrontation! 

-> seastead


= seastead 

{!The train to Seastead is a relatively short one, compared to the wild night you had before. Luckily for you, the Owen residence is easily identifiable. You approach the door. }

*(doorbell) [Ring the doorbell] 

As you ring the door bell, a curt voice answers through the intercom, "Owen Residence, to what business do you have?"

"I am here to see Ethan Owen, we have important business regarding the Wild Rose train," you tell the stranger behind the door. Hopefully, they let you in. You didn't think of a backup plan here. After a couple of minutes you hear a muffled argument in the residence, but the intercom turns back on. 

"Ethan Owen will see you now," it tell you. You hear a click as the door unlocks.

-> seastead

* {doorbell} [Open the door] -> confrontation

= confrontation

You enter the house into the living room, to see a very prim and calm Ethan sitting with a cup of tea in his hand. 

"Hello, I believe I recognize you from the train last night. To what do I owe the pleasure of your visit?" he asks you. 

+ ["What do you know about plant research?"] 
You know the best approach is to get him talking about related subjects, and see if he lets anything slip. Clearly if he has taken your research, he must be somewhat interested in the topic, right? 

"Well since you are asking, I have gotten into the study of plants somewhat recently," he tells you. "Particularly, I have become interested in plants for their medicinal properties. For example, the Echinacea plant I have here." He picks up a small plant on the coffee table. You can tell immediately that this is not Echinacea but, in fact, Basil. Clearly Ethan doesn't know anything about plants like he claims he does.  

-> confession
+ ["Did you accidentally take the wrong luggage home?"]

You know the best approach is to not accuse him of anything, and see if he would just return your research without a fuss. 

When you ask him about the luggage, you see a look of panic briefly cross his face before he controls it. 

"I am afraid you have the wrong person. I assure you anything I took off the train was mine." he tells you in a voice as calm as ever. Clearly he is not willing to open up about taking your briefcase without some pressure.  

-> confession
+["You took my briefcase!"]

You know that the best approach is to confront him directly. 

"You know why I am here," you tell him. "You stole my briefcase last night!" 

"I know of no such thing" he tells you calmly sipping from his tea. Clearly the direct approach isn't going to work.  

->confession



= confession 
Your first attempt at getting a confession didn't work. You are going to have pull out all the stops if you want to get your research back. 

"I know that you stole my briefcase last night. There is indisputable proof on the train. I am just here to give you a chance to return it, before I involve the police!" you tell him. You aren't sure that a pen would hold up in court, but he doesn't need to know that. 

"Fine. I was the one to take your briefcase," he tells you. "People don't realize how hard it is to be the 3rd child in a family like mine. I won't inherit the Owen title, like my oldest brother, and I certainly am not the genius that Henry is. Father keeps telling me to 'do something with my life.' Which isn't fair at all, I have done plenty with my life. I play pool with the governor's son! But alas, father says I need to do something worthy of our house, and a discovery such as yours would surely outshine Henry. But you have me found out, so here it is. We can put this whole thing behind us, yes?" 

THE END
->END