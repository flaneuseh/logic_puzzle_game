
LIST location = SLEEPING_CAR, ENGINE, DINING_CAR, CORRIDOR

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
+ [Talk to the conductor] -> conductor
<- exits(-> engine)

= conductor
(Talking to the conductor, Jim Gallagher)
* (briefcase) [Ask about briefcase]"Excuse me", you say, "I had a very important briefcase in my car, but it's missing. Has something like that been found anywhere on the train?"
    "Hm," the conductor responds, "I haven't had any reports of items found. Maybe one of the other passengers got off with it by mistake?"
-> conductor
* (passengers){briefcase}[Ask about the other passengers]"Who else was on the train today?" you ask.
    "Let's see, it was a quiet journey, and there were only four others besides you - <b>Sir Ethan Owen</b>, <b>Ms. Madeleine Baker</b>, <b>Mr. George Herbert</b>, and <b>Dr. Ava Finch</b>."
-> conductor
+ [Back to Engine] -> engine

= dining_car
~ location = DINING_CAR
<b><i>Dining Car</i></b>
The dining car. The chef is here.
<- exits(-> dining_car)

= corridor
~ location = CORRIDOR
<b><i>Corridor</i></b>
The corridor of the sleeping cars. The service attendant is here.
<- exits(-> corridor)

= exits(-> go_back_to)
+ {location != SLEEPING_CAR}[Sleeping Car] -> sleeping_car
+ {location != ENGINE}[Engine] -> engine
+ {location != DINING_CAR}[Dining Car] -> dining_car
+ {location != CORRIDOR}[Corridor] -> corridor
-> go_back_to

->END