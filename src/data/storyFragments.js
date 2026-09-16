// Story fragments, keyed by outcome id, then by question index, then by
// selected option index (0-3). Each fragment is written in a voice inspired
// by that character's personality in his original fiction, so the same quiz
// answer reads differently depending on which husband you end up with.
// {H} is replaced with the husband's name at render time.
export const storyFragments = {
  four: [
    [
      "You were mid-story at a bonfire, gesturing too much, when you caught {H} watching the tree line instead of you — old habit, always checking the exits.",
      "Third round in at a rooftop bar, laughing too loud, when {H} appeared at your side without a drink, scanning the room like he still hadn't decided if it was safe.",
      "You almost didn't go out that night. Three chapters deep in the good chair, {H} showed up instead of texting, like he trusted actions more than words.",
      "You'd talked your way backstage with zero business being there, and {H} was already leaning against a wall in the shadows, unbothered by anyone who might ask him to leave.",
    ],
    [
      "{H} didn't say it easily — admitting you made things matter more clearly cost him something, which is exactly why you believed it.",
      "{H} wasn't the type to call anyone the most fun person in the room, but he stayed near you all night like the description fit anyway.",
      "{H} noticed the one detail no one else had. Of course he did — noticing things was how he'd survived this long.",
      "{H} didn't say the room shifted. He just went quiet when you walked in, which from him was the loudest reaction there was.",
    ],
    [
      "You told him he had to beat you at pool first. He won without a word, then set your next drink down like the outcome had never been in question.",
      "You let him buy the first round on one condition: you'd choose the second. He agreed with a short nod, like negotiating wasn't necessary with you.",
      "You asked for something true before you'd take a drink from him. He gave you exactly one thing, and it clearly wasn't easy for him to say.",
      "He'd already ordered your drink before you sat down, and said almost nothing else. You got the sense he'd decided everything else could wait.",
    ],
    [
      "Somewhere between the farmers market and doing nothing well together, {H} let his guard down enough to just sit still, which for him was rare.",
      "A road trip with no destination turned into several, and {H} never once asked when you were heading back — like the not-knowing didn't scare him with you.",
      "You told {H} about the ending of a book that let you down. He listened all the way through before saying anything, and what he said actually fixed it.",
      "Front row, somewhere loud, {H} stood just behind you the whole time, watching the crowd more than the stage, like the habit never really switched off.",
    ],
    [
      "It feels inevitable now — like {H} decided a long time ago and just waited, patiently, for you to catch up to what he already knew.",
      "It still feels like getting away with something, mostly because {H} still checks the room out of habit, like the good part might get taken away.",
      "It feels steady, the way {H} is steady underneath everything — no performance, just someone who chose to stay and meant it.",
      "It doesn't feel cinematic so much as earned — like {H} fought for this, quietly, the way he fights for everything that matters.",
    ],
  ],
  "rafe-cameron": [
    [
      "You were mid-story at a bonfire, gesturing too much, when {H} showed up already three drinks in, insisting the party wasn't really starting until he got there.",
      "Third round in at a rooftop bar, laughing too loud, when {H} tried to start a toast to something that made no sense and somehow got the whole bar to cheer anyway.",
      "You almost didn't go out that night. Three chapters deep in the good chair, {H} texted that he was ‘five minutes away’ from somewhere you'd never mentioned going.",
      "You'd talked your way backstage with zero business being there, and {H} was already arguing with security about a wristband that clearly wasn't his.",
    ],
    [
      "{H} said you made everything matter more, then tried to prove it by buying something wildly expensive and unnecessary.",
      "{H} called you the most fun person in the room and then got competitive about it, badly, all night.",
      "{H} noticed the one small thing no one else had, then couldn't stop bringing it up like it was a personal victory.",
      "{H} announced, loudly, that the whole room changed when you walked in. Subtlety was never really his thing.",
    ],
    [
      "You told him he had to beat you at pool first. He lost, blamed the table, and bought the whole bar a round to cover it up.",
      "You let him buy the first round on one condition: you'd choose the second. He upgraded it anyway, because restraint was never really his strong suit.",
      "You asked for something true before you'd take a drink from him. He told you three things, at least one of them reckless and probably true.",
      "He'd already ordered your drink before you sat down, along with two other things nobody asked for.",
    ],
    [
      "The farmers market turned into {H} trying to buy an entire stall's inventory ‘for the vibe,’ and somehow it worked out fine.",
      "A road trip with no destination turned into several, mostly because {H} kept ‘knowing someone’ in towns you'd never planned on stopping in.",
      "You told {H} about the ending of a book that let you down. He suggested burning it, dramatically, and nearly actually did.",
      "Front row, somewhere loud, {H} got you both backstage somehow, because apparently he knew someone there too.",
    ],
    [
      "It feels inevitable now, mostly because {H} has never once accepted ‘no’ as a real answer to anything he wants.",
      "It still feels like getting away with something, because with {H}, a fair amount of it technically is.",
      "It feels steadier than either of you expected, which surprised no one more than {H} himself.",
      "Honestly, it feels like the credits should roll — {H} would insist on it, probably somewhere with a view and zero permits.",
    ],
  ],
  "finnick-odair": [
    [
      "You were mid-story at a bonfire, gesturing too much, when {H} cut in with a one-liner so smooth it took you a second to realize he'd just flirted with you.",
      "Third round in at a rooftop bar, laughing too loud, when {H} sent over a drink you didn't order with a note that just said ‘you looked like you needed rescuing.’",
      "You almost didn't go out that night. Three chapters deep in the good chair, {H} showed up at your door with a terrible excuse and an even better smile.",
      "You'd talked your way backstage with zero business being there, and {H} was already holding court with the whole crew, charm on full display, like the room belonged to him.",
    ],
    [
      "{H} told you that you made everything matter more, and for once skipped the joke that usually followed a compliment like that.",
      "{H} called you the most fun person in the room, then spent the rest of the night trying to keep up, and mostly succeeding.",
      "{H} noticed the one small thing no one else ever had — because underneath the charm, he'd actually been paying attention the whole time.",
      "{H} told you the room changed when you walked in, then flashed a grin like he hadn't meant to say something so honest.",
    ],
    [
      "You told him he had to beat you at pool first. He lost on purpose so badly it was almost insulting, and you both knew exactly what he was doing.",
      "You let him buy the first round on one condition: you'd choose the second. He spent the whole time guessing what you'd pick, out loud, and wrong, on purpose.",
      "You asked for something true before you'd take a drink from him. He gave you three things, and the last one surprised even him.",
      "He'd already ordered your drink before you sat down, and looked entirely too pleased with his own timing.",
    ],
    [
      "The farmers market turned into a full bit — {H} narrating every vendor like a nature documentary until you couldn't breathe from laughing.",
      "A road trip with no destination turned into several, mostly because {H} refused to use the map ‘on principle.’",
      "You told {H} about the ending of a book that let you down, and he rewrote it into something ridiculous just to see you laugh.",
      "Front row, somewhere loud, {H} grabbed your hand and yelled the wrong lyrics on purpose, just to watch your reaction.",
    ],
    [
      "It feels inevitable now, like the two of you were always going to end up here, just after a few detours and one bad joke too many.",
      "It still feels like getting away with something, mostly because {H} still seems a little stunned it worked out, and says so, often.",
      "It feels steady underneath all the charm — {H}'s way of saying something serious without ever quite putting it plainly.",
      "Honestly, it feels like the credits should roll, and {H} would absolutely try to land one more line before they did.",
    ],
  ],
  "eduardo-saverin": [
    [
      "You were mid-story at a bonfire, gesturing too much, when {H} quietly handed you a jacket without making a thing of it, still listening to every word.",
      "Third round in at a rooftop bar, laughing too loud, when {H} was the one keeping track of the tab, the time, and whether you'd actually eaten dinner.",
      "You almost didn't go out that night. Three chapters deep in the good chair, {H} was the only one who texted ‘no pressure, just wanted to check in.’",
      "You'd talked your way backstage with zero business being there, and {H} looked mildly concerned about the liability of it all before deciding it was worth the risk.",
    ],
    [
      "{H} said, plainly, that you made things matter more — no joke to hide behind, just the truth and a slightly nervous smile.",
      "{H} called you the most fun person in the room, then quietly admitted he liked the quiet moments with you even more.",
      "{H} noticed the one small thing no one else ever had, because he'd actually been paying attention instead of just waiting for his turn to talk.",
      "{H} told you the room changed when you walked in, and said it like something he'd been sitting on for a while, not a line.",
    ],
    [
      "You told him he had to beat you at pool first. He actually tried, missed badly, and admitted it without making excuses.",
      "You let him buy the first round on one condition: you'd choose the second. He asked what you actually liked instead of assuming.",
      "You asked for something true before you'd take a drink from him. He thought about it, then told you something real instead of something impressive.",
      "He'd already ordered your drink before you sat down, and looked a little embarrassed when you noticed.",
    ],
    [
      "Somewhere between the farmers market and doing nothing well together, {H} finally put his phone away without being asked.",
      "A road trip with no destination turned into several, and {H} said it was the first time in years he hadn't been working toward something.",
      "You told {H} about the ending of a book that let you down, and he took it more seriously than you expected, helping you write a better one.",
      "Front row, somewhere loud, {H} kept looking over at you more than the stage, like he'd been waiting for a night that wasn't about the next deal.",
    ],
    [
      "It feels inevitable now — like {H} had quietly hoped for this longer than he ever let on, and never made you guess.",
      "It still feels a little like getting away with something, mostly because {H} still seems surprised it actually worked out this time.",
      "It feels steady, more than anything — like being fully known by someone who showed up and stayed, for real, this time.",
      "It doesn't need to be cinematic. {H} always said the steady, unglamorous version was the one actually worth having.",
    ],
  ],
  aragorn: [
    [
      "You were mid-story at a bonfire, gesturing too much, when you noticed {H} had quietly taken the seat with the best view of the whole camp, like it was instinct.",
      "Third round in at a rooftop bar, laughing too loud, when {H} showed up looking like he'd rather be anywhere quieter, and stayed anyway because you were there.",
      "You almost didn't go out that night. Three chapters deep in the good chair, {H} was the reason you finally did — no pressure, just steady company waiting outside.",
      "You'd talked your way backstage with zero business being there, and {H} was already there, looking like he belonged somewhere far older and stranger than a backstage hallway.",
    ],
    [
      "{H} didn't say much, but when he finally did, it was that you made things matter more — and it looked like it cost him something to admit.",
      "{H} called you the most fun person in the room, which, from someone who rarely smiled, felt like the loudest compliment he had.",
      "{H} noticed the one small thing no one else had. He didn't make a show of it — he just remembered it, unprompted, much later.",
      "{H} admitted, reluctantly, that the room had changed when you walked in. He looked almost annoyed that it was true.",
    ],
    [
      "You told him he had to beat you at pool first. He won, said little about it, and bought your drink like it had never really been a contest.",
      "You let him buy the first round on one condition: you'd choose the second. He didn't argue. He's rarely argued with you since.",
      "You asked for something true before you'd take a drink from him. He gave you something true, and looked like he hadn't planned on saying it.",
      "He'd already ordered your drink before you sat down. You should have found that presumptuous. You didn't.",
    ],
    [
      "Somewhere between the farmers market and doing nothing well together, {H} finally looked like someone with nowhere else he had to be.",
      "A road trip with no destination turned into several. {H} never brought up turning back — he rarely does, once he's committed to something.",
      "You told {H} about the ending of a book that let you down. He didn't say much, but he remembered the detail and brought it up again, weeks later.",
      "Front row, somewhere loud, {H} held your hand without looking away from the stage — the most he'd said all night without saying anything.",
    ],
    [
      "It feels inevitable now, mostly — like the two of you were always going to end up exactly here, just later than either of you expected.",
      "It still feels a little like getting away with something. {H} still seems half-surprised he let himself have this.",
      "It feels steady, more than anything — the kind of steady it took {H} a long time, and a lot of history, to trust again.",
      "Honestly, it feels like the credits should roll. {H} would never say that out loud, but he wouldn't stop it either.",
    ],
  ],
};
