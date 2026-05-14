// First full attempt in Strudel on April 10th 2026
// Track & script done by Kweku Emuze

setcpm(130/4)

//DRUM LOOP
// $KICK: s("[bd bd bd bd]").bank("yamaharm50").gain(0.15).scope()
$NEW_KICK: s("[bd:1 bd:1 [bd:1 - - bd:1] [- bd:1]]").bank("yamaharm50").gain(0.55).punchcard()
$HH: s("- - - hh - - - <hh hh hh hh*2>").bank("rolandsystem100").gain(0.2).punchcard()
$TOMS: s("- - - ht - - - <mt mt mt lt*2>").bank("RolandTR909").gain(0.1).punchcard()
$HIT: s("sd*0.125").bank("sds5").delay(0.3).gain(0.5).punchcard()


$TEST_ARP: n("[0 2 3 5 - 3 2 0]*2").scale("d:minor").s("sin").gain(0.25).trans(-12).pan(-0.45)._pianoroll()
$TEST_LOW_ARP: n("[0 2 3 <5 5 5 <- 6>> - 3 2 0]*2").scale("d:minor").s("sin").gain(0.25)._pianoroll()

// SYNTH
$MELODY: n("<0 3 5 <-2 6>>").scale("d:minor").s("supersaw").gain(0.2).trans(-12).pan(-0.75).detune(rand)
$BASS_MELODY: n("<0 3 5 <-2 6>>").scale("d:minor").s("supersaw").gain(0.15).trans(-24).pan(0.2)


//FX
$FX: n("0 -2 3 0").s("gm_bird_tweet").gain(0.15).pan(0.8).trans(-12)
$FX2: n("<- - - -5*2>").s("gm_bird_tweet").scale("d:minor").gain(0.25).pan(-0.5).trans(-12)
$FX3: n("<- - - 1*2>").s("gm_bird_tweet").gain(0.25).pan(0.5).trans(-12)





